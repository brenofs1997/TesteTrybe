# TesteTrybe

<br>

# Sobre o projeto
Um sistema que permite que usuários sejam criados e possam realizar transações financeiras.


# Tecnologias utilizadas
- Typescript
- React
- Fastify
- Prisma
- PostgresSQL
- Docker

# Inicialização
## Server
entre na pasta `server` presente no diretório raiz, e rode o comando para instalar as dependências:
```bash
npm i
```
Crie o arquivo na raiz com o nome .env siga o exemplo:
```bash 
DATABASE_URL="postgresql://postgres:SENHA DO POSTGRES @localhost:PORTA/DATABASE"
SECRET_JWT ="SUA SECRET"
```
Agora para criar o banco de dados, rode o comando:
```bash 
npx prisma migrate dev
```
Para criar o container no Docker, rode o comando:
```bash
docker run --name postgres -p 5432:5432 -e POSTGRES_PASSWORD={senha do postgres} -d  postgres
```
Por fim para iniciar o servidor, rode o comando:
```bash
npm run dev
```

## Web
Para rodar o projeto web, entre na pasta `web` presente no diretório raiz, e rode o comando para instalar as dependências:
```bash
npm i
```
Agora para iniciar o projeto, rode o comando:
```bash
npm run dev
```
> Atenção: não esqueça de iniciar o servidor antes de iniciar o projeto web
