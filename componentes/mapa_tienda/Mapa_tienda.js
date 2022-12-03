import mapaTienda from "./mapa_tienda.module.css";
export default function Mapa_tienda({ dataIdWp }) {
  return (
    <>
      <div className={mapaTienda.mapa_tienda_popup}>
        <iframe loading="lazy" src={dataIdWp.acf.url_mapa_popup}></iframe>
      </div>
    </>
  );
}
