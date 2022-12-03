import precioOro from "./precio_oro.module.css";
import React, { useState, useEffect } from "react";

const CalculadoraOro = ({ data }) => {
  //const precio18 = DataCompra.find(p => p.Name === "18k");
  //const precio18k = precio18?.Productos[0]?.Precio / 1000;

  const datos = data.result.Tarifas.Oro;
  const [inputUsuario, setInputUsuario] = useState("__.__");
  const precio18k = datos[2]?.Productos[0]?.Precio / 1000;
  const precio14k = datos[10]?.Productos[0]?.Precio / 1000;
  const precio24k = datos[12]?.Productos[0]?.Precio / 1000;
  useEffect(() => setInputUsuario("__.__"), []);
  return (
    <>
      <div className={precioOro.contenedorOro}>
        <div className={precioOro.bloque_titulo}>
          <h2 className={precioOro.titulo_servicio}>Precio del oro</h2>
        </div>
        <div className={precioOro.contenedor_calculadora}>
          <div className={precioOro.bloque_titulos}>
            <h3>PROMOCIÓN ONLINE</h3>
            <h4>TODOS NUESTROS PRECIOS DE COMPRA DE ORO</h4>
          </div>
          <div className={precioOro.bloque_precios}>
            <div className={precioOro.precios_izq}>
              <div className={precioOro.precio_destacado}>
                <span className={precioOro.titulo_destacado}>
                  Precio Oro 18K
                </span>
                <div className={precioOro.contenedor_precio_normal}>
                  <div className={precioOro.precio_normal}>
                    <span className={precioOro.precioNew18K}>
                      {precio18k.toFixed(2)}
                    </span>
                    <span className={precioOro.simbolos}>€/g</span>
                  </div>
                  <div className={precioOro.texto_paramas_destacado}>
                    Más de <span>100</span>g
                  </div>
                </div>
              </div>
            </div>
            <div className={precioOro.precios_der}>
              <div className={precioOro.todos_precios}>
                <div className={precioOro.texto_paramas}>
                  Más de <span>100</span>g
                </div>
                <table className={precioOro.tabla_precios}>
                  <tbody>
                    <tr>
                      <td className={precioOro.precio24}>
                        <span className={precioOro.simbolo_precio}>24K</span>
                        <div className={precioOro.precio_normal}>
                          <span className={precioOro.precio_tabla_24k}>
                            {precio24k.toFixed(2)}
                          </span>
                          <span className={precioOro.simbolos_euro_gramos}>
                            €/g
                          </span>
                        </div>
                      </td>
                      <td className={precioOro.precio18}>
                        <span className={precioOro.simbolo_precio}>18K</span>
                        <div className={precioOro.precio_normal}>
                          <span className={precioOro.precio_tabla_18k}>
                            {precio18k.toFixed(2)}
                          </span>
                          <span className={precioOro.simbolos_euro_gramos}>
                            €/g
                          </span>
                        </div>
                      </td>
                      <td className={precioOro.precio14}>
                        <span className={precioOro.simbolo_precio}>14K</span>
                        <div className={precioOro.precio_normal}>
                          <span className={precioOro.precio_tabla_14k}>
                            {precio14k.toFixed(2)}
                          </span>
                          <span className={precioOro.simbolos_euro_gramos}>
                            €/g
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className={precioOro.calculadora_precio}>
                <div className={precioOro.calculadora_izq}>
                  <h5>
                    Tengo joyas de 18K que pesan un total de
                    <input
                      type="number"
                      className={precioOro.peso_joyas}
                      size="3"
                      autoComplete="off"
                      min="0"
                      onChange={(event) => setInputUsuario(event.target.value)}
                    />
                    g
                  </h5>
                  <h4>
                    ¿Cuánto te vamos a dar por tus joyas?
                    <i
                      className={`fa-solid fa-angles-right ${precioOro.icono_flecha}`}
                    ></i>
                  </h4>
                  <div className={precioOro.calculadora_der}>
                    <div className={precioOro.precio_total}>
                      {inputUsuario < 100
                        ? inputUsuario * precio18k.toFixed(2)
                        : inputUsuario * 35.46 || inputUsuario}
                      €
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CalculadoraOro;
