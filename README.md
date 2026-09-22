# sistema-clientes-react
Projeto desenvolvido por **Geovanna e Etony** para a atividade de Desenvolvimento de Sistemas.

## Objetivo

Criar uma aplicação React para apresentar produtos e permitir o cadastro de clientes. Os produtos são mantidos no State do React e os clientes são persistidos em um banco MySQL por meio de uma API em Node.js e Express.

## Tecnologias

- React
- Vite
- JavaScript
- JSX
- CSS
- Node.js
- Express
- MySQL
- Fetch API
- Git/GitHub
- Postman

## Estrutura

```text
sistema-clientes-react/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Titulo.jsx
│   │   │   ├── Produto.jsx
│   │   │   ├── Cliente.jsx
│   │   │   └── FormularioCliente.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── .env
│   └── .gitignore
├── database/
│   └── banco.sql
└── README.md
```

## Banco de Dados

Banco: `sistema_clientes`

Tabela: `clientes`

| Campo | Tipo | Descrição |
|---|---|---|
| id | INT | Chave primária e AUTO_INCREMENT |
| nome | VARCHAR(100) | Nome do cliente |
| email | VARCHAR(150) | E-mail |
| telefone | VARCHAR(20) | Telefone |

## Configuração do Banco

Abra o MySQL Workbench e execute:

```text
database/banco.sql
```

Se o MySQL tiver senha, altere `backend/.env`:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=sistema_clientes
DB_PORT=3306
PORT=3000
```

## Executando o Back-End

No terminal:

```bash
cd backend
npm install
npm run dev
```

Servidor:

```text
http://localhost:3000
```

## Executando o Front-End

Em outro terminal:

```bash
cd frontend
npm install
npm run dev
```

Abra no navegador o endereço mostrado pelo Vite, normalmente:

```text
http://localhost:5173
```

## API

### GET /clientes

```http
GET http://localhost:3000/clientes
```

### POST /clientes

```http
POST http://localhost:3000/clientes
Content-Type: application/json
```

Body:

```json
{
  "nome": "João Silva",
  "email": "joao@email.com",
  "telefone": "(71) 99999-4444"
}
```

## Funcionalidades

- Catálogo com três produtos;
- Produtos apresentados com `map()`;
- Componente `Titulo`;
- Componente `Produto`;
- Componente `Cliente`;
- Componente `FormularioCliente`;
- Props;
- State;
- Eventos;
- Validação dos campos;
- `fetch()`;
- GET `/clientes`;
- POST `/clientes`;
- Persistência no MySQL;
- Atualização da lista sem recarregar a página;
- CSS personalizado.

## Fluxo

```text
USUÁRIO
  ↓
REACT / JSX
  ↓
COMPONENTES
  ↓
STATE
  ↓
fetch()
  ↓
API
  ↓
BACK-END
  ↓
BANCO DE DADOS
```

## Testes

No Postman:

```text
GET http://localhost:3000/clientes
```

e:

```text
POST http://localhost:3000/clientes
```

## Integrantes

- Geovanna
- Etony

## GitHub

Repositório sugerido:

```text
sistema-clientes-react
```

