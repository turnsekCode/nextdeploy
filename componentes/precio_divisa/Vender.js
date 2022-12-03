import { useState, useRef } from "react";
import precioDivisa from "./precio_divisa.module.css";

const Vender = ({ dataDivisa }) => {
  const dataCompras = dataDivisa.result.Tarifas.Divisas_Compra;
  const dataReverse = [...dataCompras].reverse();
  const [valorMoneda, setValorMoneda] = useState(""); //este es el valor que viene de las opciones del select
  const [valorCodigo, setValorCodigo] = useState(""); // este es el valor del data-codigo que viene del select
  const [tipoCambio, setTipoCambio] = useState(false); // este es el valor que hace que se pinte el div azul donde aparecen las divisas al seleccionar el select una moneda
  const valorInput = valorMoneda / 1000; //aqui se formatea el valor que viene de la api por el select
  const valorCampo1 = 1 / valorInput;
  const refInput1 = useRef();
  const refInput2 = useRef();
  const refSelect = useRef();
  const refHabitual = useRef();
  const [addClase, setAddClase] = useState(null);
  const captureSelect = (e) => {
    setTipoCambio(true);
    setValorMoneda(e.target.value); //funcion que coge el valor del select
    setValorCodigo(e.target[e.target.selectedIndex].innerText);
  };

  const cambioValor = (monedaPais, i) => {
    refSelect.current.value = monedaPais.Productos[0].Precio;
    setAddClase(i);
    captureSelect({
      target: {
        key: monedaPais.Productos[0].Id,
        label: monedaPais.Productos[0].Nombre,
        value: monedaPais.Productos[0].Precio,
        selectedIndex: i + 1,
        [i + 1]: {
          innerText: monedaPais.Productos[0].Acronimo,
        },
      },
    });
  };
  const filtro = dataReverse.filter((currency) => {
    return (
      currency.Name === "GBP" ||
      currency.Name === "USD" ||
      currency.Name === "CHF" ||
      currency.Name === "BRL" ||
      currency.Name === "CZK" ||
      currency.Name === "CLP"
    );
  });

  const calcularCambio = (event) => {
    const { id, value: valor } = event.target;
    let cambio = 0;

    if (id === "input-izquierdo") {
      // si cambia el input izquierdo, calcula el derecho
      cambio = valor * valorCampo1;
      refInput2.current.value = cambio.toFixed(4);
    } else {
      // si cambia el input derecho, calcula el izquierdo
      cambio = valor / valorCampo1;
      refInput1.current.value = cambio.toFixed(4);
    }
  };

  return (
    <>
      <div className={precioDivisa.card_header}>
        <h4>
          WE BUY Obtén <strong>euros</strong> por tus divisa extranjera
        </h4>
      </div>
      <div className={precioDivisa.card_body}>
        <form className={precioDivisa.conversorcompra}>
          <div className={precioDivisa.selecciona_cambio}>
            <select
              ref={refSelect}
              className={precioDivisa.lista_moneda}
              value={valorMoneda}
              onChange={(e) => {
                captureSelect(e);
              }}
            >
              <option id="46">SELECCIONAR DIVISA</option>
              {dataReverse.map((post) => (
                <option
                  id={post.Productos[0].Id}
                  key={post.Productos[0].Id}
                  label={`${post.Productos[0]?.Acronimo} - ${post.Productos[0].Nombre}`}
                  value={post.Productos[0].Precio}
                >
                  {post.Productos[0].Acronimo}
                </option>
              ))}
            </select>
          </div>
          <div className={precioDivisa.contenedor_cambio}>
            <div
              className={`${precioDivisa.precio_cambio} ${precioDivisa.comprar}`}
            >
              {tipoCambio ? (
                <span className={precioDivisa.cambio_venta}>
                  <span className={precioDivisa.unidad}>1</span>
                  <span className={precioDivisa.codigo_moneda}>
                    {valorCodigo}{" "}
                  </span>
                  <span className={precioDivisa.igual}>=</span>
                  <span className={precioDivisa.valor_cambioeur}>
                    {valorInput.toFixed(5)}
                    <strong> €</strong>
                  </span>
                </span>
              ) : (
                <span className={precioDivisa.cambio_venta}>
                  <strong>Selecciona divisa</strong> para ver el tipo de cambio
                </span>
              )}
              {tipoCambio ? (
                <span className={precioDivisa.cambio_compra}>
                  <span className={precioDivisa.unidad}>1</span>
                  <span className={precioDivisa.codigo_moneda}>EUR</span>
                  <span className={precioDivisa.igual}>=</span>
                  <span className={precioDivisa.valor_cambioeur}>
                    {valorCampo1.toFixed(5)}
                    <strong> {valorCodigo}</strong>
                  </span>
                </span>
              ) : (
                ""
              )}
            </div>
            <div className={precioDivisa.operacion_cambio}>
              <div
                className={`${precioDivisa.grupo_monedas} ${precioDivisa.campoB}`}
              >
                {tipoCambio ? (
                  <>
                    <label>{valorCodigo}</label>
                    <input
                      id="input-derecho"
                      type="text"
                      className={precioDivisa.inputA}
                      pattern="[0-9]*"
                      placeholder="Cantidad"
                      inputMode="numeric"
                      ref={refInput2}
                      onChange={calcularCambio}
                    />
                  </>
                ) : (
                  <>
                    <label>___</label>
                    <input
                      type="text"
                      className={precioDivisa.inputA}
                      placeholder="Cantidad"
                      disabled
                    />
                  </>
                )}
              </div>
              <div
                className={`${precioDivisa.grupo_monedas} ${precioDivisa.campoA}`}
              >
                {tipoCambio ? (
                  <>
                    <label>EUR</label>
                    <input
                      ref={refInput1}
                      id="input-izquierdo"
                      type="text"
                      className={precioDivisa.inputA}
                      pattern="[0-9]*"
                      placeholder="cantidad"
                      inputMode="numeric"
                      onChange={calcularCambio}
                    ></input>
                  </>
                ) : (
                  <>
                    <label>___</label>
                    <input
                      type="text"
                      className={precioDivisa.inputA}
                      placeholder="Cantidad"
                      disabled
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </form>
        <div className={precioDivisa.cambios_habituales}>
          {filtro.map((post, i) => (
            <span
              ref={refHabitual}
              key={post.Productos[0].Id}
              className={`${precioDivisa.moneda_habitual} ${
                addClase == i ? precioDivisa.moneda_habitual_selected : ""
              } `}
              title="Vender Libras Esterlinas"
              data-value=""
              onClick={() => cambioValor(post, i)}
            >
              {post.Productos[0].Nombre} a Euro
            </span>
          ))}
        </div>
      </div>
    </>
  );
};
export default Vender;
