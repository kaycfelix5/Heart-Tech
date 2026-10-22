import { NextResponse } from "next/server";
import { getDb, saveDb } from "@/app/lib/server-db";
import pool from "@/app/lib/db";
import { requireSession } from "@/app/lib/auth";

export async function GET(request) {
  const auth = requireSession(request);
  if (!auth.ok) return auth.response;

  const isAdmin = auth.session.role === "administrador";
  let users = [];
  let logs = [];

  if (isAdmin) {
    try {
      const pgUsers = await pool.query(`
        SELECT
          id,
          name,
          email,
          phone,
          birth_date AS "birthDate",
          role,
          profissao,
          created_at AS "createdAt"
        FROM users
        ORDER BY id ASC
      `);

      users = pgUsers.rows || [];
    } catch (err) {
      console.warn("Aviso ao buscar usuários do PostgreSQL no /api/db:", err.message);
    }

    try {
      const pgLogs = await pool.query(`
        SELECT
          id,
          time,
          type,
          user_name AS "user",
          action,
          level,
          criado_em AS "criadoEm"
        FROM logs
        ORDER BY id DESC
        LIMIT 50
      `);

      logs = pgLogs.rows || [];
    } catch (err) {
      console.warn("Aviso ao buscar logs do PostgreSQL no /api/db:", err.message);
    }
  }

  return NextResponse.json({
    users: isAdmin ? users : [],
    // Dados de pacientes/assistidos não são lidos do JSON legado.
    // O vínculo e a disponibilidade vêm do PostgreSQL em /api/vinculos.
    portadores: [],
    disponiveis: [],
    logs: isAdmin ? logs : [],
  });
}

export async function POST(request) {
  const auth = requireSession(request);
  if (!auth.ok) return auth.response;

  try {
    const body = await request.json();
    const db = getDb();
    const isAdmin = auth.session.role === "administrador";

    if ((Array.isArray(body.portadores) || Array.isArray(body.disponiveis)) && !isAdmin) {
      return NextResponse.json(
        { success: false, error: "Somente o administrador pode sincronizar cadastros globais." },
        { status: 403 }
      );
    }

    if (Array.isArray(body.portadores)) {
      let sincronizados = 0;

      for (const portador of body.portadores) {
        const nome = String(portador?.nome || "").trim();
        if (!nome) continue;

        let userId = portador?.userId || null;

        if (!userId) {
          const userResult = await pool.query(
            `
            SELECT id
            FROM users
            WHERE LOWER(name) = LOWER($1)
              AND role = 'portador'
            LIMIT 1
            `,
            [nome]
          );

          userId = userResult.rows[0]?.id || null;
        }

        if (!userId) continue;

        await pool.query(
          `
          INSERT INTO portadores (
            user_id, device_id, nome, idade, condicao, humor,
            humor_emoji, local, distancia_metros, pin_x, pin_y,
            geofence_max, bateria
          )
          VALUES (
            $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13
          )
          ON CONFLICT (user_id) DO UPDATE SET
            device_id = COALESCE(EXCLUDED.device_id, portadores.device_id),
            nome = EXCLUDED.nome,
            idade = EXCLUDED.idade,
            condicao = EXCLUDED.condicao,
            humor = EXCLUDED.humor,
            humor_emoji = EXCLUDED.humor_emoji,
            local = EXCLUDED.local,
            distancia_metros = EXCLUDED.distancia_metros,
            pin_x = EXCLUDED.pin_x,
            pin_y = EXCLUDED.pin_y,
            geofence_max = EXCLUDED.geofence_max,
            bateria = EXCLUDED.bateria
          `,
          [
            userId,
            portador?.deviceId || null,
            nome,
            portador?.idade || null,
            portador?.condicao || null,
            portador?.humor || null,
            portador?.humorEmoji || null,
            portador?.local || "A definir",
            Number(portador?.distanciaMetros) || 0,
            Number(portador?.pinX) || 50,
            Number(portador?.pinY) || 50,
            Number(portador?.geofenceMax) || 150,
            Number(portador?.bateria) || 100,
          ]
        );

        sincronizados++;
      }

      db.portadores = Array.isArray(db.portadores) ? db.portadores : [];

      return NextResponse.json({
        success: true,
        count: sincronizados,
        message: "Portadores sincronizados no PostgreSQL.",
      });
    }
    if (body.newLog) {
      const logEntry = {
        id: Date.now(),
        time: new Date().toLocaleTimeString("pt-BR"),
        ...body.newLog,
      };
      db.logs.unshift(logEntry);
      if (db.logs.length > 50) db.logs = db.logs.slice(0, 50);

      try {
        await pool.query(
          `
          INSERT INTO logs (time, type, user_name, action, level)
          VALUES ($1, $2, $3, $4, $5)
          `,
          [
            logEntry.time,
            logEntry.type || "INFO",
            logEntry.user || "Sistema",
            logEntry.action || "",
            logEntry.level || "info",
          ]
        );
      } catch (logErr) {
        console.warn("Não foi possível persistir log no PostgreSQL:", logErr.message);
      }
    }

    saveDb(db);
    return NextResponse.json({ success: true, count: db.portadores.length });
  } catch (err) {
    return NextResponse.json(
      { error: "Erro ao atualizar dados: " + err.message },
      { status: 500 }
    );
  }
}
