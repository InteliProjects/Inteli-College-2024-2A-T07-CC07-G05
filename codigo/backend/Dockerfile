# Usar a imagem oficial do Node.js baseada em Alpine
FROM node:18-alpine

# Configurar o diretório de trabalho
WORKDIR /app

# Instalar dependências de sistema necessárias para o Prisma
RUN apk add --no-cache openssl

# Copiar os arquivos de dependência npm
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar o arquivo de esquema Prisma para o diretório prisma
COPY src/domain/prisma/schema.prisma prisma/

# Copiar o restante dos arquivos da aplicação para o diretório de trabalho
COPY . .

# Gerar o cliente Prisma
RUN npx prisma generate

# Expor a porta 3000 para o servidor
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
