import "../css/productos.css";
import Card from "../components/Card";

function Productos() {
  const productos = [
    {
      imagen: "/feline-style-react/assets/img/gato2buso.jpg",
      titulo: "Buzos para gatos",
      descripcion:
        "Buzos cómodos y abrigados para que tu gato esté siempre con estilo."
    },
    {
      imagen: "/feline-style-react/assets/img/gato3elegante.jpg",
      titulo: "Ropa elegante",
      descripcion:
        "Diseños especiales para ocasiones en las que tu gato quiere lucirse."
    },
    {
      imagen: "/feline-style-react/assets/img/gato6.jpg",
      titulo: "Arneses",
      descripcion:
        "Arneses cómodos y seguros para acompañar a tu gato en sus paseos."
    },
    {
      imagen: "/feline-style-react/assets/img/gato7.jpg",
      titulo: "Mochilas transportadoras",
      descripcion:
        "Mochilas prácticas y cómodas para transportar a tu gato con seguridad."
    }
  ];

  return (
    <section className="productos">
      <h1>Productos</h1>

      <p>
        Descubrí nuestra selección de ropa y accesorios pensados especialmente
        para gatos.
      </p>

      <div className="productos-contenedor">
        {productos.map((producto, index) => (
          <Card
            key={index}
            imagen={producto.imagen}
            titulo={producto.titulo}
            descripcion={producto.descripcion}
          />
        ))}
      </div>
    </section>
  );
}

export default Productos;
