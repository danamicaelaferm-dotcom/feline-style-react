import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav>
        <Link to="/" className="logo">
          🐱 Feline Style
        </Link>

        <div className="nav-links">
          <Link to="/">Inicio</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/galeria">Galería</Link>
          <Link to="/contacto">Contacto</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
