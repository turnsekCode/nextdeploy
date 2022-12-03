import topBar from "./topbar.module.css";
export default function Topbar() {
  return (
    <>
      <div className={topBar.contenedor_fondo_topbar}>
        <div className={topBar.contenedor_topbar}>
          <div className={topBar.contenedor_topbar_izquierdo}>
            <a href="/">
              ¿Quieres abrir tu propio <strong>quickgold</strong>
            </a>
            <a href="/">Trabaja con nosotros</a>
            <a href="/">Preguntas frecuentes</a>
          </div>
          <div className={topBar.contenedor_topbar_derecho}>
            <a href="/">Área Clientes</a>
          </div>
        </div>
      </div>
    </>
  );
}
