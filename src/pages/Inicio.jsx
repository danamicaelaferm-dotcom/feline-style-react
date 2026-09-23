
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Card from "../components/Card";

function Inicio() {
  return (
    <>
      <Hero />

      <section className="productos-destacados">
        <h2>Productos destacados</h2>

        <div className="cards">
          <Card
            imagen="/feline-style-react/assets/img/gato2buso.jpg"
            titulo="Buzo cómodo"
            descripcion="Buzos suaves y cómodos para que tu gato esté abrigado y con estilo."
          />

          <Card
            imagen="/feline-style-react/assets/img/gato3elegante.jpg"
            titulo="Ropa elegante"
            descripcion="Diseños especiales para que tu gato luzca elegante en cualquier ocasión."
          />
        </div>

        <Link to="/productos" className="boton">
          Ver todos los productos
        </Link>
      </section>

      <section className="inicio-contacto">
        <h2>¿Tenés alguna consulta?</h2>

        <p>
          Estamos para ayudarte. Escribinos y te asesoramos sobre nuestros
          productos, talles y envíos.
        </p>

        <Link to="/contacto" className="boton">
          Contactanos
        </Link>
      </section>
    </>
  );
}

export default Inicio;

