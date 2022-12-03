import navbar from "./navbar.module.css";
export default function Navbar() {
  return (
    <>
      <header className={navbar.header_container}>
        <div className={navbar.contenedor_logo_llamar}>
          <div className={navbar.contenedor_lateral_cabecera}>
            <div className={navbar.contenedor_logo}>
              <img src="../../logo.png" alt="logo quickgold" />
            </div>
          </div>
          <div className={navbar.contenedor_llamar_cabecera}>
            <img src="../../phone-w.png" alt="" />
            <a
              title="Teléfono de Quickgold Nombre de tienda"
              href="tel:912 29 68 55"
            >
              Llámanos gratuitamente al
              <br />
              <b className={navbar.telefono}>912 29 68 55</b>
            </a>
          </div>
        </div>
        <nav className={navbar.contenedor_nav}>
          <ul className={navbar.contenedor_lista}>
            <a href="/tiendas/compro-oro-tienda/url-de-tienda">
              <li>INICIO</li>
            </a>
            <a href="/tiendas/compro-oro-tienda/url-de-tienda">
              <li>SERVICIOS</li>
            </a>
            <a href="/tiendas/compro-oro-tienda/url-de-tienda">
              <li>TIENDAS</li>
            </a>
            <a href="/tiendas/compro-oro-tienda/url-de-tienda">
              <li>SOBRE QUICKGOLD</li>
            </a>
            <a href="/tiendas/compro-oro-tienda/url-de-tienda">
              <li>CONTACTO</li>
            </a>
            <a href="/tiendas/compro-oro-tienda/url-de-tienda">
              <li>BLOG</li>
            </a>
          </ul>
        </nav>
      </header>
    </>
  );
}
