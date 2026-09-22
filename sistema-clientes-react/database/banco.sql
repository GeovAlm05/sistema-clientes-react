CREATE DATABASE IF NOT EXISTS sistema_clientes;

USE sistema_clientes;

CREATE TABLE IF NOT EXISTS clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    telefone VARCHAR(20) NOT NULL
);

INSERT INTO clientes (nome, email, telefone)
VALUES
('Ana Souza', 'ana@email.com', '(71) 99999-1111'),
('Carlos Santos', 'carlos@email.com', '(71) 98888-2222'),
('Mariana Oliveira', 'mariana@email.com', '(71) 97777-3333');