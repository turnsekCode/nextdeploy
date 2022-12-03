import React, { useState, useEffect } from "react";
import { debounce } from "../../utilities/helpers";
import navBarSticky from "./navbar.module.css";
import NavbarStickyOrdenador from "./NavBarStickyOrdenador";

const NavbarSticky = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 80) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 50);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const navbarStyles = {
    position: "fixed",
    width: "100%",
    textAlign: "center",
    transition: "top 0.3s",
  };

  return (
    <>
      <div style={{ ...navbarStyles, top: visible ? "0" : "-27px" }}>
        <div className={navBarSticky.breadcrumbs}>
          Quickgold - Tiendas - Alcobendas - Quickgold Alcobendas
        </div>
        <NavbarStickyOrdenador />
      </div>
    </>
  );
};

export default NavbarSticky;
