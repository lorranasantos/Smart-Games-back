# Smart Game - Backend

## Aplicação desenvolvida para a loja Smart Game Ltda.

### Linguagens e ferramentas utilizadas

* Linguagem: NodeJS
* Framework: Express
* Banco de dados: MySql
* Express: Framework de construçãp da API
* ORM: Sequelize
* Typeorm: ORM para o banco
* MySQL Workbench 8.0: IDE para o banco de dados

### Pré-requisitos necessários para rodar o projeto

- Instalar dependências com o comando npm install

- Na pasta config, altere os dados do arquivo database.js conforme os dados do seu banco de dados.

- Para criar e popular o seu banco de dados, insira os seguintes comandos:
      - npx sequelize db:create
      - npx sequelize db:migrate
      - npx sequelize db:seed:all

- Para executar a aplicação utilize o comando npm start.
