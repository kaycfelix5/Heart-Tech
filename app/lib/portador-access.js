import pool from "@/app/lib/db";

/**
 * Confere no PostgreSQL se a sessão pode consultar/alterar os dados
 * de um portador. A autorização não depende de IDs enviados pelo navegador.
 */
export async function canAccessPortador(session, portadorId) {
  if (!session?.id || !portadorId) return false;
  if (session.role === "administrador") return true;

  if (session.role === "portador") {
    const result = await pool.query(
      `SELECT 1 FROM portadores WHERE id = $1 AND user_id = $2 LIMIT 1`,
      [portadorId, session.id]
    );
    return result.rowCount > 0;
  }

  if (session.role === "acompanhante") {
    const result = await pool.query(
      `SELECT 1 FROM vinculos WHERE portador_id = $1 AND acompanhante_id = $2 LIMIT 1`,
      [portadorId, session.id]
    );
    return result.rowCount > 0;
  }

  return false;
}

/** SQL reutilizável para listar apenas registros dos portadores autorizados. */
export function accessiblePortadorIdsSql(columnName = "portador_id") {
  // columnName é escolhido somente por código interno, nunca por entrada do cliente.
  return `${columnName} IN (
    SELECT p.id
    FROM portadores p
    WHERE p.user_id = $1
    UNION
    SELECT v.portador_id
    FROM vinculos v
    WHERE v.acompanhante_id = $1
  )`;
}
