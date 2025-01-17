FROM node:20 AS base

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

# Gera artefatos do Prisma antes de buildar o projeto
RUN npx prisma generate
RUN npm run build
RUN npm prune --prod

# Ambiente final para execução
FROM node:20-alpine3.19 AS deploy

WORKDIR /usr/src/app

RUN npm install -g npm prisma

COPY --from=base /usr/src/app/dist ./dist
COPY --from=base /usr/src/app/node_modules ./node_modules
COPY --from=base /usr/src/app/package.json ./package.json
COPY --from=base /usr/src/app/prisma ./prisma

ENV DATABASE_URL="postgresql://postgres:docker@postgresql:5432/fulog?schema=public"

ENV JWT_SECRET='3123123'

RUN npx prisma generate

EXPOSE 8080

CMD ["npm", "run", "start:prod"]
