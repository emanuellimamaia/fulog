# Build stage
FROM node:18-alpine3.19 as build
 
WORKDIR /usr/src/app
 
COPY package.json ./
COPY prisma ./prisma/

RUN npm install
RUN npx prisma generate

COPY . .

RUN npm run build
RUN npm cache clean --force

FROM node:18-alpine3.19 

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/package.json ./
COPY --from=build /usr/src/app/tsconfig.json ./
COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/node_modules ./node_modules

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
