function Contact() {
  return (
    <section className="contacto">
      <div className="contacto-contenido">

        <div className="contacto-info">
          <h2>¡Hablemos!</h2>

          <p>
            ¿Tenés alguna consulta sobre nuestros productos?
            Completá el formulario y nos pondremos en contacto con vos.
          </p>

          <div className="contacto-dato">
            <i className="fa-solid fa-envelope"></i>
            <span>feline.style@gmail.com</span>
          </div>

          <div className="contacto-dato">
            <i className="fa-brands fa-whatsapp"></i>
            <span>WhatsApp: 11 6526-4929</span>
          </div>

          <div className="contacto-dato">
            <i className="fa-solid fa-location-dot"></i>
            <span>Buenos Aires, Argentina</span>
          </div>
        </div>

        <form className="formulario">

          <div className="campo">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Ingresá tu nombre"
            />
          </div>

          <div className="campo">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ingresá tu correo"
            />
          </div>

          <div className="campo">
            <label htmlFor="motivo">Motivo de la consulta</label>

            <select id="motivo" name="motivo">
              <option value="">Seleccioná una opción</option>
              <option value="productos">Consulta sobre productos</option>
              <option value="talles">Consulta sobre talles</option>
              <option value="envios">Envíos</option>
              <option value="precios">Precios</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div className="campo">
            <label htmlFor="mensaje">Mensaje</label>

            <textarea
              id="mensaje"
              name="mensaje"
              rows="5"
              placeholder="Escribinos tu consulta..."
            ></textarea>
          </div>

          <button type="submit" className="boton-contacto">
            Enviar consulta
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;