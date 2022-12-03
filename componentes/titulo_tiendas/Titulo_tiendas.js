import tituloTiendas from "./titulo_tienda.module.css";
export default function Titulo_tiendas() {
  return (
    <>
      <div className={tituloTiendas.contenedor_titulo_tienda}>
        <h1>
          <b>Quickgold Nombre de Tienda: </b>
          Compra de oro · Cambio de divisa · Empeño de joyas
        </h1>
      </div>
    </>
  );
}
