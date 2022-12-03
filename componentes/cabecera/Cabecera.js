import Navbar from "../navbar/Navbar";
import NavbarSticky from "../navbar/NavbarSticky";
import NavbarStickyOrdenador from "../navbar/NavBarStickyOrdenador";
import NavBarMobil from "../navbarmobil/NavbarMobil";
import cabecera from "./cabecera.module.css";

export default function Cabecera() {
  return (
    <header className={cabecera.contenedor_cabecera}>
      <div className={cabecera.breadcrumbs}>
        Quickgold - Tiendas - Alcobendas - Quickgold Alcobendas
      </div>
      <div className={cabecera.logo_cabecera}>
        <img src="../../logo.png" alt="logo quickgold" />
      </div>
      <NavbarSticky />
      <Navbar />
      <NavBarMobil />
    </header>
  );
}
