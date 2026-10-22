# Correção do erro 404 nas rotas de autenticação

## Diagnóstico

Os logs `GET /api/auth/session 404` e `POST /api/auth/login 404` indicam que o Next.js não encontrou as rotas na cópia do projeto que está executando. O erro de navegador `Unexpected token '<'` acontece depois: o cliente tenta interpretar como JSON uma página HTML de erro. Não é, por si só, uma falha de senha ou do PostgreSQL.

## Como validar

1. Pare o servidor com `Ctrl+C`.
2. Na pasta do projeto, confira se existem `app/api/auth/login/route.js` e `app/api/auth/session/route.js`.
3. A partir da raiz que contém `package.json`, execute `npm run dev`. O script `predev` verifica se as quatro rotas de autenticação estão presentes.
4. Se os arquivos existem mas os endpoints ainda retornam 404, pare o servidor e remova somente o cache: `Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue`. Em seguida rode `npm run dev` outra vez.
5. Abra `http://localhost:3000/api/auth/session`. Sem uma sessão válida, a resposta esperada é JSON com status HTTP 401 e conteúdo semelhante a `{"authenticated":false,"user":null}` — não uma página 404.
6. Se a rota responder corretamente, rode `npm run doctor` para verificar a conexão com PostgreSQL. Um problema de banco aparecerá como resposta JSON 503/500 e deverá ser investigado separadamente.

> Não apague nem compartilhe `.env.local`; ele contém credenciais locais e não é necessário para corrigir a descoberta das rotas.
