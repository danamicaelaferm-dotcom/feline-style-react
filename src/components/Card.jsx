function Card({ imagen, titulo, descripcion }) {
  return (
    <article className="card">
      <img src={imagen} alt={titulo} />

      <h3>{titulo}</h3>

      <p>{descripcion}</p>

      <button>Ver producto</button>
    </article>
  );
}

export default Card;
