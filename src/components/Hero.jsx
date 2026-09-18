
import { Link } from "react-router-dom";
import "../css/hero.css";

function Hero() {
  return (
    <section id="hero">
      <div className="hero-contenido">
        <h1>Feline Style</h1>

        <p>
          Moda y accesorios para gatos con estilo, comodidad y mucho amor.
        </p>

        <Link to="/productos" className="boton">
          Ver productos
        </Link>
      </div>
    </section>
  );
}

export default Hero;

