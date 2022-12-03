import React, { useState, useEffect } from "react";
import navBarStickyOrdenador from "./navbar.module.css";
import NavbarSticky from "../navbar/NavbarSticky";
import Link from "next/link";

export default function NavbarStickyOrdenador() {
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 170
        ? setStickyClass(navBarStickyOrdenador.sticky_nav)
        : setStickyClass("");
    }
  };

  return (
    <>
      <div className={`${navBarStickyOrdenador.navbar} ${stickyClass}`}>
        <div className={navBarStickyOrdenador.logo_sticky}>
          <Link href="/">
            <a>
              <img
                src="https://quickgold.es/wp-content/uploads/2019/08/logo.png"
                alt="quickgold"
              />
            </a>
          </Link>
        </div>
        <ul className={navBarStickyOrdenador.menu_principal}>
          <li>
            <Link href="/">
              <a>INICIO</a>
            </Link>
          </li>
          <li className={navBarStickyOrdenador.menuTienda}>
            <Link href="/tiendas/">
              <a>TIENDA</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>SOBRE QUICKGOLD</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>SERVICIOS</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>CONTACTO</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>BLOG</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
