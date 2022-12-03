import precioOro from "./precio_oro.module.css";
import React from "react";

const MasPreciosOro = ({ data }) => {
  const datos = data.result.Tarifas.Oro;
  const precio18k = datos[2]?.Productos[0]?.Precio / 1000;
  const precio14k = datos[10]?.Productos[0]?.Precio / 1000;
  const precio24k = datos[12]?.Productos[0]?.Precio / 1000;
  return (
    <>
      <div className={precioOro.contenedorMasPrecioOro}>
        <div className={precioOro.contenedor_mas_precios}>
          <div className={precioOro.bloque_titulos}>
            <h3>PROMOCIÓN ONLINE</h3>
            <h4>TODOS NUESTROS PRECIOS DE COMPRA DE ORO</h4>
          </div>
          <div className={precioOro.texto_paramas_popup}>
            Más de<span className={precioOro.paramas_oro_popup}>100</span>g
          </div>
          <table className={precioOro.precio_metales}>
            <tbody>
              <tr>
                <td className={precioOro.tablasMas24k}>
                  <span className={precioOro.kilates_tabla}>24K</span>
                  <div className={precioOro.precio_normal}>
                    <span className={precioOro.precio_tabla24k}>
                      {" "}
                      {precio24k.toFixed(2)}
                    </span>
                    <span className={precioOro.simbolos_popup}>€/g</span>
                  </div>
                </td>
                <td className={precioOro.tablasMas18k}>
                  <span className={precioOro.kilates_tabla}>24K</span>
                  <div className={precioOro.precio_normal}>
                    <span className={precioOro.precio_tabla18k}>
                      {" "}
                      {precio18k.toFixed(2)}
                    </span>
                    <span className={precioOro.simbolos_popup}>€/g</span>
                  </div>
                </td>
                <td className={precioOro.tablasMas14k}>
                  <span className={precioOro.kilates_tabla}>14K</span>
                  <div className={precioOro.precio_normal}>
                    <span className={precioOro.precio_tabla14k}>
                      {" "}
                      {precio14k.toFixed(2)}
                    </span>
                    <span className={precioOro.simbolos_popup}>€/g</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className={precioOro.texto_paramas_popup}>
            Menos de<span className={precioOro.paramas_oro_popup}>100</span>g
          </div>
          <table className={precioOro.precio_metales}>
            <tbody>
              <tr>
                <td className={precioOro.tablasMas24k}>
                  <span className={precioOro.kilates_tabla}>24K</span>
                  <div className={precioOro.precio_normal}>
                    <span className={precioOro.precio_tabla24k}>
                      {" "}
                      {precio24k.toFixed(2)}
                    </span>
                    <span className={precioOro.simbolos_popup}>€/g</span>
                  </div>
                </td>
                <td className={precioOro.tablasMas18k}>
                  <span className={precioOro.kilates_tabla}>18K</span>
                  <div className={precioOro.precio_normal}>
                    <span className={precioOro.precio_tabla18k}>
                      {" "}
                      {precio18k.toFixed(2)}
                    </span>
                    <span className={precioOro.simbolos_popup}>€/g</span>
                  </div>
                </td>
                <td className={precioOro.tablasMas14k}>
                  <span className={precioOro.kilates_tabla}>14K</span>
                  <div className={precioOro.precio_normal}>
                    <span className={precioOro.precio_tabla14k}>
                      {" "}
                      {precio14k.toFixed(2)}
                    </span>
                    <span className={precioOro.simbolos_popup}>€/g</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className={precioOro.boton_llamar_oro}>
            <a href="tel:912 29 68 55" title="Teléfono de Quickgold Alcobendas">
              Fija este precio llamando al{" "}
              <b className={precioOro.telefono_oro}> 912 29 68 55</b>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default MasPreciosOro;
