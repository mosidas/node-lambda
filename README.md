# node lambda practice

## setup

```bash

npm i -g serverless
serverless create --template aws-nodejs
npm i -D typescript @types/node
npm i -D @tsconfig/recommended
npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
npm i -D serverless-plugin-typescript
npm i -D serverless-offline
```

## dev

```bash
serverless offline start
Running "serverless" from node_modules
Compiling with Typescript...
Using local tsconfig.json - tsconfig.json
Typescript compiled.
Watching typescript files...

Starting Offline at stage dev (ap-northeast-1)

Offline [http for lambda] listening on http://localhost:3002
Function names exposed for local invocation by aws-sdk:
           * hello: simple-dev-hello

   ┌─────────────────────────────────────────────────────────────────────────┐
   │                                                                         │
   │   GET | http://localhost:3000/dev/hello                                 │
   │   POST | http://localhost:3000/2015-03-31/functions/hello/invocations   │
   │                                                                         │
   └─────────────────────────────────────────────────────────────────────────┘

Server ready: http://localhost:3000 🚀
```

## deploy

```bash
serverless deploy
```

## ref

https://www.serverless.com/framework/docs-providers-aws-cli-reference-create
https://minerva.mamansoft.net/Notes/TSConfig+bases
https://zenn.dev/kimromi/articles/b7cf98005f3193
https://qiita.com/ssmsaito2/items/a7d4b468ba54f248ff6f
