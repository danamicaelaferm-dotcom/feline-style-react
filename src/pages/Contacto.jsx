import "../css/contacto.css";
import Contact from "../components/Contact";
import Carrusel from "../components/Carrusel";

function Contacto() {
  return (
    <>
      <section className="contacto-titulo">
        <h1>Contacto</h1>
        <p>¿Tenés alguna consulta? Escribinos y te ayudamos.</p>
      </section>

      <Contact />

      <Carrusel />
    </>
  );
}

export default Contacto;