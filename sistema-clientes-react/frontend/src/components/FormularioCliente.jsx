import { useState } from "react";

function FormularioCliente({ adicionarCliente }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!nome.trim() || !email.trim() || !telefone.trim()) {
      alert("Preencha todos os campos.");
      return;
    }

    const cliente = {
      nome: nome.trim(),
      email: email.trim(),
      telefone: telefone.trim()
    };

    const sucesso = await adicionarCliente(cliente);

    if (sucesso) {
      setNome("");
      setEmail("");
      setTelefone("");
    }
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <h2>Cadastrar cliente</h2>

      <div className="campo">
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          type="text"
          placeholder="Digite o nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
      </div>

      <div className="campo">
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          placeholder="Digite o e-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div className="campo">
        <label htmlFor="telefone">Telefone</label>
        <input
          id="telefone"
          type="tel"
          placeholder="Digite o telefone"
          value={telefone}
          onChange={(event) => setTelefone(event.target.value)}
        />
      </div>

      <button type="submit">Cadastrar cliente</button>
    </form>
  );
}

export default FormularioCliente;