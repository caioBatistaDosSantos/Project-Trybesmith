# Boas vindas ao projeto Trybesmith!

Esta é minha primeira API utilizando Typescript!

Esta API é um sistema de gerenciamento de itens em que é possível criar e visualizar produtos, usuários e pedidos.

Utiliza um banco MySQL para a gestão de dados e Joi para validação dos dados recebidos. Além disso, a API é RESTful.

- Este projeto foi individual.

---

# Como rodar localmente...

- Para rodar este projeto localmente você vai precisar ter instalado o Docker, GitHub, Node e um gerenciador de banco de dados, e basta seguir o passo a passo abaixo.
1. Clone o repositório com o comando:
  - `git clone git@github.com:caioBatistaDosSantos/Project-Trybesmith.git`;
    - Entre na pasta do repositório:
      - `cd Project-Trybesmith`
2. Instale as dependencia com o comando:
  - `npm install`
3. Suba o container Docker com o comando:
  - `docker-compose up -d`
4. Concte-se a um gerenciador de banco de dados com os seguintes dados:
  - host='localhost',
  - user='root',
  - port='3306',
  - password='password',
  (Essa conexão será nescessária para criar o banco de dados)
5. Entre no terminal do container Docker com o comando:
  - `docker exec -it trybesmith bash`
6. Suba o banco de dados com o comando:
  - `npm run restore` (este comando deve ser realizado dentro do terminal do container)
7. Por fim inicie a aplicação com o comando:
  - `npm start` (este comando deve ser realizado dentro do terminal do container)

---

# ROTAS DO PROJETO

## 1 - Endpoint GET /products

- O endpoint retorna um array com todos os produtos cadastrados. Devendo retornar o `status 200`, com os dados no corpo.

## 2 - Endpoint POST /products

- O endpoint adiciona um novo produto ao banco de dados;

- O corpo da requisição deverá ter o seguinte formato:

  ```json
  {
    "name": "Espada longa",
    "amount": "30 peças de ouro"
  }
  ```

- O campo `name` deverá ter no mínimo 2 caracteres. Ele é obrigatório.
- O campo `amount` deverá ter no mínimo 2 caracteres. Ele é obrigatório.


- Caso esteja tudo certo, retorna o `status 201`  e o produto cadastrado.

## 3 - Endpoint POST /users

- O endpoint adiciona um novo usuário ao banco de dados;

- O corpo da requisição deverá ter o seguinte formato:

  ```json
  {
    "username": "string",
    "classe": "string",
    "level": 1,
    "password": "string"
  }
  ```

- O campo `username` deverá ter no mínimo 2 caracteres. Ele é obrigatório.
- O campo `classe` deverá ter no mínimo 2 caracteres. Ele é obrigatório.
- O campo `level` deverá ser um número inteiro maior que 0. Ele é obrigatório.
- O campo `password` deverá ter no mínimo 8 caracteres. Ele é obrigatório.


- Caso esteja tudo certo, retorna o `status 201`  e o usuário cadastrado.

## 4 - Endpoint GET /orders

- O endpoint retorna um array com todas os pedidos cadastrados com os ids dos produtos. Devendo retornar o `status 200`, com os dados no corpo.

---

# Feedback são bem-vindos!!

- Se Possivel, deixe seu feedback ou seu code-review! Muito Obrigado! :)🤝🛠

- Linkedin: https://www.linkedin.com/in/caio-batista-dos-santos/
- Gmail: drcaiosan@gmail.com