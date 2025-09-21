# API de Cadastro de Alunos

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

Acesse a documentação interativa em:
```
http://localhost:3000/api-docs
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
