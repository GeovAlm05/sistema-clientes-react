import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let conexao;

try {
  conexao = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT) || 3306
  });

  console.log("Conectado ao banco de dados.");
} catch (error) {
  console.error("Erro ao conectar ao MySQL:", error.message);
  process.exit(1);
}

app.get("/", (req, res) => {
  res.json({
    mensagem: "API do Sistema de Clientes funcionando!"
  });
});

app.get("/clientes", async (req, res) => {
  try {
    const [clientes] = await conexao.execute(
      "SELECT id, nome, email, telefone FROM clientes ORDER BY id ASC"
    );

    res.json(clientes);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensagem: "Erro ao buscar clientes."
    });
  }
});

app.post("/clientes", async (req, res) => {
  try {
    const { nome, email, telefone } = req.body;

    if (!nome?.trim() || !email?.trim() || !telefone?.trim()) {
      return res.status(400).json({
        mensagem: "Nome, e-mail e telefone são obrigatórios."
      });
    }

    const [resultado] = await conexao.execute(
      `INSERT INTO clientes (nome, email, telefone)
       VALUES (?, ?, ?)`,
      [nome.trim(), email.trim(), telefone.trim()]
    );

    const [cliente] = await conexao.execute(
      `SELECT id, nome, email, telefone
       FROM clientes
       WHERE id = ?`,
      [resultado.insertId]
    );

    res.status(201).json(cliente[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensagem: "Erro ao cadastrar cliente."
    });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});