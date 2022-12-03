import empenoEjemplo from "./empenoEjemplo.module.css";

export default function EmpenosEjemplo() {
  return (
    <>
      <div className={empenoEjemplo.ejemplo_new}>
        <h4>Pongamos un ejemplo</h4>
        <p>
          Para un empeño con interés al <strong>8% mensual</strong> y
          <strong> 0% de interés</strong> primer mes (
          <i>va asociada a un pequeño gasto de gestión del 3%</i>):
        </p>
        <p>
          Si tu empeño tiene un <strong></strong>valor de 100€,
          <strong> recibes 97€</strong>.
        </p>
        <p>
          Para recuperar tus piezas <strong>pasado el primer mes</strong> y
          finalizar el contrato deberás abonar <strong>100€</strong>.
        </p>
      </div>
      <div className={empenoEjemplo.boton_llamar_empenos}>
        <a href="tel:912 29 68 55" title="Teléfono de Quickgold Alcobendas">
          LLAMA YA PULSANDO AQUI
          <b className={empenoEjemplo.telefono_oro}> 912 29 68 55</b>
        </a>
      </div>
    </>
  );
}
