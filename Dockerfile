# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copia arquivos de dependências
COPY package*.json ./

# Instala todas as dependências (incluindo devDependencies)
RUN npm ci

# Copia o restante dos arquivos
COPY . .

# Gera os arquivos do Prisma
RUN npx prisma generate

# Compila o projeto
RUN npm run build

# Production stage
FROM node:20-alpine AS production

WORKDIR /app

# Copia apenas os arquivos necessários do builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/prisma ./prisma

# Instala apenas as dependências de produção
RUN npm ci --only=production

# Gera os arquivos do Prisma novamente para garantir
RUN npx prisma generate

# Define variáveis de ambiente
ENV NODE_ENV=production
ENV PORT=3000

# Expõe a porta
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "start:prod"]
