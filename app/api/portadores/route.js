import { NextResponse } from "next/server";
import pool from "@/app/lib/db";
import { requireSession } from "@/app/lib/auth";
import { canAccessPortador } from "@/app/lib/portador-access";

/* ================================================================ */
/* GET — LISTAR PORTADORES                                          */
/* ================================================================ */

export async function GET(request) {
  const auth = requireSession(request);
  if (!auth.ok) return auth.response;

  try {
    const role = auth.session.role;
    const userId = auth.session.id;
    let visibilityFilter = "";
    let values = [];

    if (role === "acompanhante") {
      visibilityFilter = "WHERE v.acompanhante_id = $1";
      values = [userId];
    } else if (role === "portador") {
      visibilityFilter = "WHERE p.user_id = $1";
      values = [userId];
    } else if (role !== "administrador") {
      return NextResponse.json(
        { success: false, error: "Perfil sem permissão para consultar portadores." },
        { status: 403 }
      );
    }

    const portadoresResult = await pool.query(`
      SELECT
        p.id,
        p.user_id AS "userId",
        p.device_id AS "deviceId",
        p.nome,
        p.idade,
        p.condicao,
        p.humor,
        p.humor_emoji AS "humorEmoji",
        p.local,
        p.distancia_metros AS "distanciaMetros",
        p.pin_x AS "pinX",
        p.pin_y AS "pinY",
        p.geofence_max AS "geofenceMax",
        p.bateria,
        v.acompanhante_id AS "acompanhanteId",
        a.name AS "acompanhanteNome",
        a.profissao AS "acompanhanteProfissao",
        (v.portador_id IS NULL) AS disponivel,
        (
          SELECT l.latitude
          FROM localizacoes l
          WHERE l.portador_id = p.id
          ORDER BY l.registrada_em DESC
          LIMIT 1
        ) AS latitude,
        (
          SELECT l.precisao_metros
          FROM localizacoes l
          WHERE l.portador_id = p.id
          ORDER BY l.registrada_em DESC
          LIMIT 1
        ) AS "precisao",
        (
          SELECT l.longitude
          FROM localizacoes l
          WHERE l.portador_id = p.id
          ORDER BY l.registrada_em DESC
          LIMIT 1
        ) AS longitude
      FROM portadores p
      LEFT JOIN vinculos v ON v.portador_id = p.id
      LEFT JOIN users a ON a.id = v.acompanhante_id
      ${visibilityFilter}
      ORDER BY p.id ASC
    `, values);

    const portadores = [];
    for (const p of portadoresResult.rows) {
      const [rotinasResult, metasResult, mensagensResult] = await Promise.all([
        pool.query(
          `SELECT id, hora, titulo, concluida FROM rotinas WHERE portador_id = $1 ORDER BY hora ASC, id ASC`,
          [p.id]
        ),
        pool.query(
          `SELECT id, titulo, progresso FROM metas WHERE portador_id = $1 ORDER BY id ASC`,
          [p.id]
        ),
        pool.query(
          `SELECT id, texto, hora, criado_em AS "criadoEm" FROM mensagens WHERE portador_id = $1 ORDER BY criado_em ASC`,
          [p.id]
        ),
      ]);

      portadores.push({
        ...p,
        rotinas: rotinasResult.rows,
        metas: metasResult.rows,
        mensagens: mensagensResult.rows,
      });
    }

    return NextResponse.json({ success: true, portadores });
  } catch (error) {
    console.error("ERRO AO BUSCAR PORTADORES:", error);
    return NextResponse.json(
      { success: false, error: "Não foi possível carregar os portadores." },
      { status: 500 }
    );
  }
}

/* ================================================================ */
/* PUT — ATUALIZAR PORTADOR                                        */
/* ================================================================ */

export async function PUT(request) {
  const auth = requireSession(request);
  if (!auth.ok) return auth.response;

  try {
    const body = await request.json();

    const portadorId = body.portadorId;

    if (!portadorId) {
      return NextResponse.json(
        {
          success: false,
          error: "O portador é obrigatório.",
        },
        { status: 400 }
      );
    }

    if (!(await canAccessPortador(auth.session, portadorId))) {
      return NextResponse.json(
        { success: false, error: "Você só pode alterar dados de portadores vinculados à sua conta." },
        { status: 403 }
      );
    }

    /*
     * Atualização de humor
     */
    if (
      body.humor !== undefined ||
      body.humorEmoji !== undefined
    ) {
      const humor = String(body.humor || "").trim();
      const humorEmoji = String(
        body.humorEmoji || ""
      ).trim();

      if (!humor || !humorEmoji) {
        return NextResponse.json(
          {
            success: false,
            error:
              "Humor e emoji são obrigatórios.",
          },
          { status: 400 }
        );
      }

      const result = await pool.query(
        `
        UPDATE portadores
        SET
          humor = $1,
          humor_emoji = $2
        WHERE id = $3
        RETURNING
          id,
          user_id AS "userId",
          device_id AS "deviceId",
          nome,
          idade,
          condicao,
          humor,
          humor_emoji AS "humorEmoji",
          local,
          distancia_metros AS "distanciaMetros",
          pin_x AS "pinX",
          pin_y AS "pinY",
          geofence_max AS "geofenceMax",
          bateria
        `,
        [
          humor,
          humorEmoji,
          portadorId,
        ]
      );

      if (result.rows.length === 0) {
        return NextResponse.json(
          {
            success: false,
            error: "Portador não encontrado.",
          },
          { status: 404 }
        );
      }

      return NextResponse.json({
        success: true,
        portador: result.rows[0],
      });
    }

    /*
     * Atualização/definição do dispositivo
     */
    if (body.deviceId !== undefined) {
      const deviceId = String(body.deviceId || "").trim();

      if (deviceId.length < 3 || deviceId.length > 64) {
        return NextResponse.json(
          {
            success: false,
            error: "device_id inválido.",
          },
          { status: 400 }
        );
      }

      const duplicate = await pool.query(
        `SELECT id FROM portadores WHERE device_id = $1 AND id <> $2 LIMIT 1`,
        [deviceId, portadorId]
      );

      if (duplicate.rows.length > 0) {
        return NextResponse.json(
          {
            success: false,
            error: "Este dispositivo já está vinculado a outro portador.",
          },
          { status: 409 }
        );
      }

      const result = await pool.query(
        `
        UPDATE portadores
        SET device_id = $1
        WHERE id = $2
        RETURNING
          id,
          user_id AS "userId",
          device_id AS "deviceId",
          nome,
          idade,
          condicao,
          humor,
          humor_emoji AS "humorEmoji",
          local,
          distancia_metros AS "distanciaMetros",
          pin_x AS "pinX",
          pin_y AS "pinY",
          geofence_max AS "geofenceMax",
          bateria
        `,
        [deviceId, portadorId]
      );

      if (result.rows.length === 0) {
        return NextResponse.json(
          { success: false, error: "Portador não encontrado." },
          { status: 404 }
        );
      }

      return NextResponse.json({ success: true, portador: result.rows[0] });
    }

    /*
     * Atualização da Cerca Virtual
     */
    if (body.geofenceMax !== undefined) {
      const geofenceMax = Number(
        body.geofenceMax
      );

      if (
        !Number.isFinite(geofenceMax) ||
        geofenceMax < 30 ||
        geofenceMax > 500
      ) {
        return NextResponse.json(
          {
            success: false,
            error:
              "A cerca deve estar entre 30 e 500 metros.",
          },
          { status: 400 }
        );
      }

      const result = await pool.query(
        `
        UPDATE portadores
        SET geofence_max = $1
        WHERE id = $2
        RETURNING
          id,
          user_id AS "userId",
          device_id AS "deviceId",
          nome,
          idade,
          condicao,
          humor,
          humor_emoji AS "humorEmoji",
          local,
          distancia_metros AS "distanciaMetros",
          pin_x AS "pinX",
          pin_y AS "pinY",
          geofence_max AS "geofenceMax",
          bateria
        `,
        [
          geofenceMax,
          portadorId,
        ]
      );

      if (result.rows.length === 0) {
        return NextResponse.json(
          {
            success: false,
            error: "Portador não encontrado.",
          },
          { status: 404 }
        );
      }

      return NextResponse.json({
        success: true,
        portador: result.rows[0],
      });
    }

    return NextResponse.json(
      {
        success: false,
        error:
          "Nenhum campo válido foi enviado para atualização.",
      },
      { status: 400 }
    );
  } catch (error) {
    console.error(
      "ERRO AO ATUALIZAR PORTADOR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          "Não foi possível atualizar o portador.",
      },
      { status: 500 }
    );
  }
}