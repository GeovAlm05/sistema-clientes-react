import { useEffect, useState } from "react";
import Titulo from "./components/Titulo";
import Produto from "./components/Produto";
import Cliente from "./components/Cliente";
import FormularioCliente from "./components/FormularioCliente";

const API_URL = "http://localhost:3000";

function App() {
  const [produtos] = useState([
    { id: 1, nome: "Notebook", categoria: "Informática", preco: 3500 },
    { id: 2, nome: "Smartphone", categoria: "Eletrônicos", preco: 2200 },
    { id: 3, nome: "Fone Bluetooth", categoria: "Acessórios", preco: 250 }
  ]);

  const [clientes, setClientes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [mensagem, setMensagem] = useState("");

  const buscarClientes = async () => {
    try {
      setCarregando(true);
      const resposta = await fetch(`${API_URL}/clientes`);

      if (!resposta.ok) {
        throw new Error("Erro ao buscar clientes.");
      }

      const dados = await resposta.json();
      setClientes(dados);
      setMensagem("");
    } catch (error) {
      console.error(error);
      setMensagem("Não foi possível conectar ao servidor.");
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    buscarClientes();
  }, []);

  const adicionarCliente = async (cliente) => {
    try {
      const resposta = await fetch(`${API_URL}/clientes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(cliente)
      });

      const dados = await resposta.json();

      if (!resposta.ok) {
        throw new Error(dados.mensagem || "Erro ao cadastrar cliente.");
      }

      setClientes((listaAtual) => [...listaAtual, dados]);
      setMensagem("Cliente cadastrado com sucesso!");

      setTimeout(() => setMensagem(""), 3000);
      return true;
    } catch (error) {
      console.error(error);
      setMensagem(error.message || "Erro ao cadastrar cliente.");
      return false;
    }
  };

  return (
    <div className="pagina">
      <Titulo />

      <main className="conteudo">
        <section className="secao">
          <div className="secao-titulo">
            <div>
              <span className="tag">NOSSA LOJA</span>
              <h2>Produtos disponíveis</h2>
            </div>
          </div>

          <div className="produtos-lista">
            {produtos.map((produto) => (
              <Produto
                key={produto.id}
                nome={produto.nome}
                categoria={produto.categoria}
                preco={produto.preco}
              />
            ))}
          </div>
        </section>

        <section className="clientes-area">
          <div className="clientes-lista">
            <div className="secao-titulo">
              <div>
                <span className="tag">CLIENTES</span>
                <h2>Clientes cadastrados</h2>
              </div>
              <span className="contador">{clientes.length} cliente(s)</span>
            </div>

            {mensagem && <div className="mensagem">{mensagem}</div>}

            {carregando ? (
              <p className="estado">Carregando clientes...</p>
            ) : clientes.length === 0 ? (
              <p className="estado">Nenhum cliente cadastrado.</p>
            ) : (
              <div className="lista-clientes">
                {clientes.map((cliente) => (
                  <Cliente
                    key={cliente.id}
                    nome={cliente.nome}
                    email={cliente.email}
                    telefone={cliente.telefone}
                  />
                ))}
              </div>
            )}
          </div>

          <FormularioCliente adicionarCliente={adicionarCliente} />
        </section>
      </main>

      <footer>
        <p>Sistema Clientes — Geovanna e Etony</p>
      </footer>
    </div>
  );
}

export default App;