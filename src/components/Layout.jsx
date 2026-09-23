import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsApp from "./WhatsApp";

function Layout() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
      <WhatsApp />
      <img src="/feline-style-react/assets/img/gato-bailando.gif" alt="Gatito bailando" className="gato-bailando" />
    </>
  );
}

export default Layout;
