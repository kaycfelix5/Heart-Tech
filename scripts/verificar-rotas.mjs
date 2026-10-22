import { existsSync } from "node:fs";
import { resolve } from "node:path";

const requiredRoutes = [
  "app/api/auth/login/route.js",
  "app/api/auth/session/route.js",
  "app/api/auth/register/route.js",
  "app/api/auth/logout/route.js",
];

const missing = requiredRoutes.filter((file) => !existsSync(resolve(process.cwd(), file)));

console.log("\n=== HEART-TECH | VERIFICAÇÃO DAS ROTAS DE AUTENTICAÇÃO ===\n");
console.log(`Pasta de execução: ${process.cwd()}`);

if (missing.length > 0) {
  console.error("\n✗ Não encontrei estas rotas obrigatórias:");
  for (const file of missing) console.error(`  - ${file}`);
  console.error("\nExtraia/abra a versão correta do projeto e execute npm run dev na raiz que contém package.json e app/.\n");
  process.exit(1);
}

console.log("✓ Rotas de login, sessão, cadastro e logout encontradas.\n");
