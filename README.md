# API de Cadastro de Alunos

## API GraphQL
Além da API REST, este projeto expõe os serviços de Aluno, Curso e Autenticação via GraphQL usando ApolloServer e Express.

### Como executar a API GraphQL
1. Acesse a pasta `graphql`:
  ```bash
  cd graphql
  ```
2. Instale as dependências (se ainda não instalou no projeto raiz):
  ```bash
  npm install
  ```
3. Para rodar o servidor GraphQL:
  ```bash
  node server.js
  ```
4. Para rodar apenas o app (para testes):
  ```bash
  node app.js
  ```

### Autenticação nas Mutations
Obtenha o JWT via login REST e envie no header `Authorization: Bearer <token>` nas Mutations protegidas.

### Documentação GraphQL
O endpoint GraphQL estará disponível em `/graphql` (porta 4000 por padrão).
Consulte o playground do ApolloServer para explorar o schema.


## Descrição
API REST para cadastro de alunos e cursos, com autenticação JWT e controle de permissões por roles (coordenador e diretor). Utiliza banco de dados em memória e documentação via Swagger.

## Instalação

1. Clone o repositório ou baixe os arquivos.
2. Instale as dependências:
   ```bash
   npm install
   ```

## Executando a API

```bash
node server.js
```

A API estará disponível em `http://localhost:3000`.


## Documentação Swagger
Acesse a documentação interativa REST em:
```
http://localhost:3000/api-docs
```
E a documentação GraphQL em:
```
http://localhost:4000/graphql
```

## Usuários de Teste
- **Coordenador:**
  - usuário: `coordenador`
  - senha: `1234`
- **Diretor:**
  - usuário: `diretor`
  - senha: `1234`

## Endpoints Principais

- `POST /login` — Autenticação e obtenção do token JWT
- `GET /alunos` — Listar alunos (autenticado)
- `POST /alunos` — Cadastrar aluno (coordenador/diretor)
- `DELETE /alunos/:id` — Exclusão lógica de aluno (diretor)
- `GET /cursos` — Listar cursos (autenticado)
- `POST /cursos` — Cadastrar curso (coordenador/diretor)

## Regras de Negócio
- Login e senha obrigatórios para autenticação
- Todos os campos de cadastro são obrigatórios
- Não pode cadastrar curso com mesmo nome e horário
- Exclusão lógica de aluno exige id existente

## Testes
Para rodar os testes (após implementar):
```bash
npm test
```

## Estrutura de Pastas
- `model/` — Modelos de dados
- `repository/` — Repositórios em memória
- `service/` — Regras de negócio e validações
- `controller/` — Lógica das rotas
- `middleware/` — Autenticação e autorização
- `app.js` — Configuração do Express
- `server.js` — Inicialização do servidor
- `swagger.json` — Documentação da API
