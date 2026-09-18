import "../css/galeria.css";
import Gallery from "../components/Gallery";

function Galeria() {
  return (
    <>
      <section className="galeria-titulo">
        <h1>Galería</h1>
        <p>Conocé algunos de nuestros productos y accesorios.</p>
      </section>

      <Gallery />
    </>
  );
}

export default Galeria;
