import navbarMobile from "./navBarMobil.module.css";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "next/link";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function Menu({ MenuAbierto1, setMenuAbierto }) {
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };
  const abrirMenu = () => {
    setSubMenuOpen(false);
  };
  const CerrarMenu = () => {
    setSubMenuOpen(true);
  };
  return (
    <>
      <div
        className={`${navbarMobile.contenedorMenu} ${
          MenuAbierto1 ? navbarMobile.contenedorMenuActivo : ""
        }`}
      >
        {" "}
        <div className={navbarMobile.imgbackgroundMenu}></div>
        <div className={navbarMobile.botonCerrarMenu} onClick={cerrarMenu}>
          <CloseIcon />
        </div>
        <div
          className={`${navbarMobile.contenedorMenuItems} ${
            MenuAbierto1 ? navbarMobile.contenedorMenuItemsActivo : ""
          }`}
        >
          <ul>
            <li onClick={cerrarMenu}>
              <Link href="/">
                <a>INICIO</a>
              </Link>
            </li>
            <li className={navbarMobile.menuTienda}>
              <Link href="/tiendas/">
                <a onClick={cerrarMenu}>TIENDA</a>
              </Link>
              {subMenuOpen ? (
                <KeyboardArrowUpIcon onClick={abrirMenu} />
              ) : (
                <KeyboardArrowDownIcon onClick={CerrarMenu} />
              )}
              <div className={navbarMobile.subMenuDropdown}>
                <ul
                  className={`${
                    subMenuOpen ? navbarMobile.subMenuDropdownOpen : ""
                  }`}
                >
                  <li>
                    <Link href="/tiendas/compro-oro-alcobendas/calle-de-manuel-serrano-frutos-2">
                      <a
                        onClick={() => {
                          cerrarMenu(), abrirMenu();
                        }}
                      >
                        ALCOBENDAS
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/tiendas/compro-oro-valencia/av-burjassot-116">
                      <a
                        onClick={() => {
                          cerrarMenu(), abrirMenu();
                        }}
                      >
                        VALENCIA
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a>SERVICIOS</a>
            </li>
            <li>
              <a>CONTACTO</a>
            </li>
            <li>
              <a>BLOG</a>
            </li>
            <li className={navbarMobile.subMenuLi1}>
              <a>ABRIR UNA TIENDA QUICKGOLD</a>
            </li>
            <li className={navbarMobile.subMenuLi}>
              <a>TRABAJA CON NOSOTROS</a>
            </li>
            <li className={navbarMobile.subMenuLi}>
              <a>PREGUNTAS FRECUENTES</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
