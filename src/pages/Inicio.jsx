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
            imagen="/assets/img/gato2buso.jpg"
            titulo="Buzo cómodo"
            descripcion="Buzos suaves y cómodos para que tu gato esté abrigado y con estilo."
          />

          <Card
            imagen="/assets/img/gato3elegante.jpg"
            titulo="Ropa elegante"
            descripcion="Diseños especiales para que tu gato luzca elegante en cualquier ocasión."
          />
        </div>

        <a href="/productos" className="boton">
          Ver todos los productos
        </a>
      </section>

      <section className="inicio-contacto">
        <h2>¿Tenés alguna consulta?</h2>

        <p>
          Estamos para ayudarte. Escribinos y te asesoramos sobre nuestros
          productos, talles y envíos.
        </p>

        <a href="/contacto" className="boton">
          Contactanos
        </a>
      </section>
    </>
  );
}

export default Inicio;
