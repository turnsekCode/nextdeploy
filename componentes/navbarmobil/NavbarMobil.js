import Menu from "./Menu";
import { useState } from "react";
import navbarMobile from "./navBarMobil.module.css";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBarMobil() {
  const [MenuAbierto, setMenuAbierto] = useState(false);
  const abrirMenuMobil = () => {
    setMenuAbierto(true);
  };

  return (
    <>
      <nav className={navbarMobile.navbar}>
        <div className={navbarMobile.abrirMenu} onClick={abrirMenuMobil}>
          <MenuIcon />
        </div>
      </nav>
      <Menu MenuAbierto1={MenuAbierto} setMenuAbierto={setMenuAbierto} />
    </>
  );
}
