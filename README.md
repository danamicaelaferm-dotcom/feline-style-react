# 🐱 Feline Style

Feline Style es un sitio web desarrollado en React como parte del Trabajo Práctico Final de Programación Web.

El proyecto presenta una propuesta de tienda de ropa y accesorios para gatos, con diferentes secciones para conocer los productos, visualizar una galería y realizar consultas mediante un formulario de contacto.

## Tecnologías utilizadas

* React
* Vite
* JavaScript
* React Router
* HTML
* CSS

## Estructura del proyecto

```text
feline-style-react/
├── public/
│   └── assets/
│       └── img/
│
├── src/
│   ├── components/
│   │   ├── Card.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Gallery.jsx
│   │   ├── Hero.jsx
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   └── WhatsApp.jsx
│   │
│   ├── pages/
│   │   ├── Inicio.jsx
│   │   ├── Productos.jsx
│   │   ├── Galeria.jsx
│   │   └── Contacto.jsx
│   │
│   ├── css/
│   │   ├── general.css
│   │   ├── hero.css
│   │   ├── productos.css
│   │   └── galeria.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── README.md
```

## Navegación

El proyecto utiliza React Router para navegar entre las diferentes páginas:

* Inicio
* Productos
* Galería
* Contacto

## Componentes

El proyecto utiliza componentes reutilizables para organizar la interfaz:

* **Navbar:** menú de navegación.
* **Layout:** estructura general del sitio.
* **Hero:** presentación principal de Feline Style.
* **Card:** tarjetas de productos reutilizables mediante props.
* **Gallery:** galería de imágenes generada dinámicamente.
* **Contact:** formulario de contacto controlado mediante `useState`.
* **Footer:** pie de página.
* **WhatsApp:** acceso directo al contacto por WhatsApp.

## Formulario de contacto

El formulario utiliza `useState` para controlar sus campos.

También incluye:

* Manejo de eventos `onChange`.
* Manejo del evento `onSubmit`.
* `event.preventDefault()`.
* Visualización de los datos enviados mediante `console.log`.
* Botón para limpiar los campos del formulario.

## Instalación

Para instalar las dependencias del proyecto:

```bash
npm install
```

## Ejecución

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Luego ingresar en el navegador a la dirección indicada por Vite, normalmente:

```text
http://localhost:5173/
```

## Autor

Trabajo Práctico
