function Produto({ nome, categoria, preco }) {
  return (
    <div className="produto-card">
      <div className="produto-icone">🛍️</div>
      <div className="produto-info">
        <span className="categoria">{categoria}</span>
        <h3>{nome}</h3>
        <p className="preco">
          R$ {Number(preco).toFixed(2).replace(".", ",")}
        </p>
      </div>
    </div>
  );
}

export default Produto;