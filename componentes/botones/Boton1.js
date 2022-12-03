import boton from "./boton.module.css";

export default function Boton1({ contenido, openModal1 }) {
  return (
    <div className={boton.mas_precios_oro} onClick={openModal1}>
      {contenido}
    </div>
  );
}
