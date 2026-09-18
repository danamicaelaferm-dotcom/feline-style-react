import { useEffect, useState } from "react";

function Carrusel() {
  const imagenes = [
    "/assets/img/gato4.jpg",
    "/assets/img/gato5.jpg",
    "/assets/img/gato8.jpg",
  ];

  const [imagenActual, setImagenActual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setImagenActual((actual) => (actual + 1) % imagenes.length);
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

  const anterior = () => {
    setImagenActual(
      (actual) => (actual - 1 + imagenes.length) % imagenes.length
    );
  };

  const siguiente = () => {
    setImagenActual((actual) => (actual + 1) % imagenes.length);
  };

  return (
    <div className="carrusel">

      <h2>Conocé nuestros estilos 🐾</h2>

      <div className="carrusel-imagen">
        <img
          src={imagenes[imagenActual]}
          alt="Moda para gatos"
        />
      </div>

      <div className="carrusel-controles">

        <span
          className="flecha-carrusel"
          onClick={anterior}
        >
          ❮
        </span>

        <span className="contador-carrusel">
          {imagenActual + 1} / {imagenes.length}
        </span>

        <span
          className="flecha-carrusel"
          onClick={siguiente}
        >
          ❯
        </span>

      </div>

    </div>
  );
}

export default Carrusel;
