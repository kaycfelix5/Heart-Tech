import { NextResponse } from "next/server";
import pool from "@/app/lib/db";
import { requireSession } from "@/app/lib/auth";

/*
 * A disponibilidade é calculada a partir da tabela "vinculos".
 * Não usamos mais a lista antiga de demonstração em data/db.json:
 * um portador cadastrado fica disponível até um acompanhante reivindicá-lo.
 */
export async function GET(request) {
  const auth = requireSession(request);
  if (!auth.ok) return auth.response;

  try {
    const role = auth.session.role;
    const userId = auth.session.id;

    const disponiveisResult = await pool.query(`
      SELECT
        p.id,
        p.user_id AS "userId",
        p.nome,
        p.idade,
        p.condicao,
        p.local AS cidade,
        p.geofence_max AS "geofenceMax"
      FROM portadores p
      INNER JOIN users dono
        ON dono.id = p.user_id
       AND dono.role = 'portador'
      WHERE NOT EXISTS (
        SELECT 1
        FROM vinculos v
        WHERE v.portador_id = p.id
      )
      ORDER BY p.nome ASC, p.id ASC
    `);

    if (role === "acompanhante") {
      const meusVinculos = await pool.query(
        `
        SELECT
          v.id AS "vinculoId",
          v.portador_id AS "portadorId",
          v.criado_em AS "criadoEm",
          p.nome AS "portadorNome"
        FROM vinculos v
        INNER JOIN portadores p ON p.id = v.portador_id
        WHERE v.acompanhante_id = $1
        ORDER BY p.nome ASC
        `,
        [userId]
      );

      return NextResponse.json({
        success: true,
        disponiveis: disponiveisResult.rows,
        vinculos: meusVinculos.rows,
        acompanhante: null,
      });
    }

    if (role === "portador") {
      const acompanhanteResult = await pool.query(
        `
        SELECT
          a.id,
          a.name,
          a.email,
          a.phone,
          a.profissao,
          v.criado_em AS "vinculadoEm"
        FROM portadores p
        INNER JOIN vinculos v ON v.portador_id = p.id
        INNER JOIN users a ON a.id = v.acompanhante_id
        WHERE p.user_id = $1
          AND a.role = 'acompanhante'
        LIMIT 1
        `,
        [userId]
      );

      return NextResponse.json({
        success: true,
        disponiveis: [],
        vinculos: [],
        acompanhante: acompanhanteResult.rows[0] || null,
      });
    }

    if (role === "administrador") {
      const todosVinculos = await pool.query(`
        SELECT
          v.id,
          v.portador_id AS "portadorId",
          p.nome AS "portadorNome",
          v.acompanhante_id AS "acompanhanteId",
          a.name AS "acompanhanteNome",
          a.profissao,
          v.criado_em AS "criadoEm"
        FROM vinculos v
        INNER JOIN portadores p ON p.id = v.portador_id
        INNER JOIN users a ON a.id = v.acompanhante_id
        ORDER BY p.nome ASC
      `);

      return NextResponse.json({
        success: true,
        disponiveis: disponiveisResult.rows,
        vinculos: todosVinculos.rows,
        acompanhante: null,
      });
    }

    return NextResponse.json(
      { success: false, error: "Perfil sem permissão para consultar vínculos." },
      { status: 403 }
    );
  } catch (error) {
    console.error("Erro ao consultar vínculos:", error);
    return NextResponse.json(
      { success: false, error: "Não foi possível carregar os vínculos." },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  const auth = requireSession(request, ["acompanhante"]);
  if (!auth.ok) return auth.response;

  let client;
  try {
    const body = await request.json();
    const portadorId = String(body.portadorId || "").trim();

    if (!portadorId) {
      return NextResponse.json(
        { success: false, error: "Selecione um portador disponível." },
        { status: 400 }
      );
    }

    client = await pool.connect();
    await client.query("BEGIN");

    // O bloqueio da linha do portador impede dois acompanhantes de
    // reivindicarem o mesmo cadastro simultaneamente.
    const portadorResult = await client.query(
      `
      SELECT p.id, p.nome
      FROM portadores p
      INNER JOIN users dono ON dono.id = p.user_id
      WHERE p.id = $1
        AND dono.role = 'portador'
      FOR UPDATE OF p
      `,
      [portadorId]
    );

    if (portadorResult.rowCount === 0) {
      await client.query("ROLLBACK");
      return NextResponse.json(
        { success: false, error: "Portador não encontrado ou cadastro inválido." },
        { status: 404 }
      );
    }

    const jaVinculado = await client.query(
      "SELECT acompanhante_id FROM vinculos WHERE portador_id = $1 LIMIT 1",
      [portadorId]
    );

    if (jaVinculado.rowCount > 0) {
      await client.query("ROLLBACK");
      return NextResponse.json(
        { success: false, error: "Este portador já está acompanhado por outro profissional." },
        { status: 409 }
      );
    }

    const acompanhante = await client.query(
      "SELECT id FROM users WHERE id = $1 AND role = 'acompanhante' LIMIT 1",
      [auth.session.id]
    );

    if (acompanhante.rowCount === 0) {
      await client.query("ROLLBACK");
      return NextResponse.json(
        { success: false, error: "A conta não possui perfil de acompanhante válido." },
        { status: 403 }
      );
    }

    const result = await client.query(
      `
      INSERT INTO vinculos (portador_id, acompanhante_id)
      VALUES ($1, $2)
      RETURNING id, portador_id AS "portadorId", acompanhante_id AS "acompanhanteId", criado_em AS "criadoEm"
      `,
      [portadorId, auth.session.id]
    );

    await client.query("COMMIT");
    return NextResponse.json(
      {
        success: true,
        vinculo: result.rows[0],
        portador: portadorResult.rows[0],
        message: `${portadorResult.rows[0].nome} agora está vinculado ao seu acompanhamento.`,
      },
      { status: 201 }
    );
  } catch (error) {
    if (client) {
      try { await client.query("ROLLBACK"); } catch {}
    }

    if (error?.code === "23505") {
      return NextResponse.json(
        { success: false, error: "Este portador acabou de ser vinculado por outro acompanhante." },
        { status: 409 }
      );
    }

    console.error("Erro ao vincular portador:", error);
    return NextResponse.json(
      { success: false, error: "Não foi possível vincular o portador." },
      { status: 500 }
    );
  } finally {
    if (client) client.release();
  }
}

export async function DELETE(request) {
  const auth = requireSession(request, ["acompanhante"]);
  if (!auth.ok) return auth.response;

  try {
    const body = await request.json();
    const portadorId = String(body.portadorId || "").trim();

    if (!portadorId) {
      return NextResponse.json(
        { success: false, error: "O portador é obrigatório para desfazer o vínculo." },
        { status: 400 }
      );
    }

    const result = await pool.query(
      `
      DELETE FROM vinculos
      WHERE portador_id = $1
        AND acompanhante_id = $2
      RETURNING portador_id AS "portadorId"
      `,
      [portadorId, auth.session.id]
    );

    if (result.rowCount === 0) {
      return NextResponse.json(
        { success: false, error: "Este portador não está vinculado à sua conta." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      portadorId: result.rows[0].portadorId,
      message: "Vínculo removido. O portador voltou para a lista de disponíveis.",
    });
  } catch (error) {
    console.error("Erro ao desvincular portador:", error);
    return NextResponse.json(
      { success: false, error: "Não foi possível remover o vínculo." },
      { status: 500 }
    );
  }
}
