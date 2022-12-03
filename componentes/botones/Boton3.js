import boton from "./boton.module.css";

export default function Boton3({ contenido, openModal3 }) {
  return (
    <div className={boton.info_oro} onClick={openModal3}>
      {contenido}
    </div>
  );
}
