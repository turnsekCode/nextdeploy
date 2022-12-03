import boton from "./boton.module.css";

export default function Boton2({ contenido, openModal2 }) {
  return (
    <div className={boton.calculadora_oro} onClick={openModal2}>
      {contenido}
    </div>
  );
}
