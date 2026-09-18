function Gallery() {
  const productos = [
    {
      imagen: "gato4.jpg",
      nombre: "Abrigo rojo",
      precio: "$18.000",
      oferta: true
    },
    {
      imagen: "gato5.jpg",
      nombre: "Gorro navideño",
      precio: "$9.500"
    },
    {
      imagen: "gato6.jpg",
      nombre: "Arnés para paseo",
      precio: "$15.000"
    },
    {
      imagen: "gato7.jpg",
      nombre: "Mochila transportadora",
      precio: "$35.000"
    },
    {
      imagen: "gato8.jpg",
      nombre: "Corbata elegante",
      precio: "$8.000"
    },
    {
      imagen: "gato9.jpg",
      nombre: "Pelota para gatos",
      precio: "$6.500"
    },
    {
      imagen: "gato10.jpg",
      nombre: "Rascador",
      precio: "$28.000"
    },
    {
      imagen: "gato11.jpg",
      nombre: "Disfraz melena",
      precio: "$12.000"
    },
    {
      imagen: "gato12.jpg",
      nombre: "Bebedero",
      precio: "$22.000"
    }
  ];

  return (
    <section className="galeria">
      {productos.map((producto, index) => (
        <div className="galeria-item" key={index}>

          {producto.oferta && (
            <span className="oferta">20% OFF</span>
          )}

          <img
            src={`/assets/img/${producto.imagen}`}
            alt={producto.nombre}
          />

          <div className="galeria-info">
            <h3>{producto.nombre}</h3>
            <p>{producto.precio}</p>
          </div>

        </div>
      ))}
    </section>
  );
}

export default Gallery;
