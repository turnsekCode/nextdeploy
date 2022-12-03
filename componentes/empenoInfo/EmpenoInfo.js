import empenoInfo from "./empenoInfo.module.css";

export default function EmpenosInfo() {
  return (
    <>
      <div className={empenoInfo.bloqueTitulo}>
        <h2 className={empenoInfo.titulo_servicio}>
          <strong>Empeño</strong> de joyas
        </h2>
      </div>
      <div className={empenoInfo.empeno_der}>
        <div className={empenoInfo.caracteristica}>
          <div className={empenoInfo.caracteristica_empeno}>
            <span className={empenoInfo.porcentaje}>8%</span>
            <span className={empenoInfo.texto}>
              <strong>Interés</strong> Mensual
            </span>
          </div>
          <div className={empenoInfo.caracteristica_empeno}>
            <span className={empenoInfo.porcentaje}>100%</span>
            <span className={empenoInfo.texto}>Tasación</span>
          </div>
          <div className={empenoInfo.caracteristica_empeno}>
            <span className={empenoInfo.porcentaje}>0%</span>
            <span className={empenoInfo.texto}>Primer mes</span>
          </div>
        </div>
        <div className={empenoInfo.info_empenos}>
          <p>
            En<strong> Quickgold</strong> llevamos
            <strong> más de 10 años de experiencia </strong>
            ofreciendo el servicio de préstamos sobre joyas. Nuestra experiencia
            permite que nuestro servicio sea muy fácil para ti y rápido de
            realizar. Nuestro servicio está
            <strong> enfocado a que recuperes tus joyas</strong>, por esta
            razón, nuestra promoción permanante del primer mes sin interés,{" "}
            <strong>
              permite que recuperes tus joyas sin pagar ningún interés
            </strong>
            .
          </p>
        </div>
      </div>
      <div className={empenoInfo.boton_llamar_empenos}>
        <a href="tel:912 29 68 55" title="Teléfono de Quickgold Alcobendas">
          LLAMA YA PULSANDO AQUI
          <b className={empenoInfo.telefono_oro}> 912 29 68 55</b>
        </a>
      </div>
    </>
  );
}
