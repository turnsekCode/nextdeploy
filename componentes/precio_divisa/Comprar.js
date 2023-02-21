import { useState, useRef } from "react";
import precioDivisa from "./precio_divisa.module.css";

const Comprar = ({ dataDivisa, data }) => {
  const dataCompras = dataDivisa.result.Tarifas.Divisas_Venta;
  const dataReverse = [...dataCompras].reverse();
  const [valorMoneda, setValorMoneda] = useState("0"); //este es el valor que viene de las opciones del select
  const [valorCodigo, setValorCodigo] = useState(""); // este es el valor del data-codigo que viene del select
  const [tipoCambio, setTipoCambio] = useState(false); // este es el valor que hace que se pinte el div azul donde aparecen las divisas al seleccionar el select una moneda
  const valorInput = valorMoneda / 1000; //aqui se formatea el valor que viene de la api por el select
  const valorCampo1 = 1 / valorInput;
  const refInput1 = useRef();
  const refInput2 = useRef();
  const refSelect = useRef();
  const refHabitual = useRef();
  const refOption = useRef();
  const [addClase, setAddClase] = useState(null);
  const [addClase2, setAddClase2] = useState(null);
  console.log(dataDivisa, "data");
  const captureSelect = (e) => {
    setTipoCambio(true);
    setValorMoneda(e.target.value); //funcion que coge el valor del select
    setValorCodigo(e.target[e.target.selectedIndex].innerText);
    setAddClase2(e.target[e.target.selectedIndex].id);
    //setValorCodigo(e.target[e.target.selectedIndex].innerText);
  };
  //console.log("posicion2", addClase2);
  //console.log("posicion", addClase);
  const cambioValor = (monedaPais, i) => {
    refSelect.current.value = monedaPais.Productos[0].Precio;
    //const addClases = (refHabitual.current.id = monedaPais.Productos[0]?.Id);
    setAddClase(i);
    captureSelect({
      target: {
        key: monedaPais.Productos[0]?.Id,
        //label: monedaPais.Productos[0]?.Nombre,
        value: monedaPais.Productos[0]?.Precio,
        selectedIndex: i + 1,
        [i + 1]: {
          innerText: monedaPais.Productos[0]?.Acronimo,
          id: i,
        },
      },
    });
  };
  const filtro = dataReverse.filter((currency) => {
    return (
      currency.Name === "GBP" ||
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
          WE SELL Obtén <strong>divisa extranjera</strong> por tus euros.
        </h4>
      </div>
      <div className={precioDivisa.card_body}>
        <form className={precioDivisa.conversorcompra}>
          <div className={precioDivisa.selecciona_cambio}>
            <select
              ref={refSelect}
              className={precioDivisa.lista_moneda}
              onChange={(e) => {
                captureSelect(e);
              }}
            >
              <option ref={refOption} id="01" value="0.0">
                SELECCIONAR DIVISA
              </option>
              {dataReverse.map((post, i) => (
                <option
                  id={i}
                  key={post.Productos[0].Nombre}
                  label={`${post.Productos[0]?.Acronimo} - ${post.Productos[0].Nombre}`}
                  value={post.Productos[0]?.Precio}
                >
                  {post.Productos[0]?.Acronimo}
                </option>
              ))}
            </select>
          </div>
          <div className={precioDivisa.contenedor_cambio}>
            <div
              className={`${precioDivisa.precio_cambio} ${precioDivisa.comprar}`}
            >
              {tipoCambio ? (
                <span className={precioDivisa.cambio_compra}>
                  <span className={precioDivisa.unidad}>1</span>
                  <span className={precioDivisa.codigo_moneda}>EUR</span>
                  <span className={precioDivisa.igual}>=</span>
                  <span className={precioDivisa.valor_cambioeur}>
                    {valorCampo1.toFixed(5)}
                    <strong>{valorCodigo}</strong>
                  </span>
                </span>
              ) : (
                ""
              )}
              {tipoCambio ? (
                <span className={precioDivisa.cambio_venta}>
                  <span className={precioDivisa.unidad}>1</span>
                  <span className={precioDivisa.codigo_moneda}>
                    {valorCodigo}{" "}
                  </span>
                  <span className={precioDivisa.igual}>=</span>
                  <span className={precioDivisa.valor_cambioeur}>
                    {valorInput.toFixed(5)}
                    <strong>€</strong>
                  </span>
                </span>
              ) : (
                <span className={precioDivisa.cambio_venta}>
                  <strong>Selecciona divisa</strong> para ver el tipo de cambio
                </span>
              )}
            </div>
            <div className={precioDivisa.operacion_cambio}>
              <div
                className={`${precioDivisa.grupo_monedas} ${precioDivisa.campoA}`}
              >
                {tipoCambio ? (
                  <>
                    <label>EUR</label>
                    <input
                      id="input-izquierdo"
                      ref={refInput1}
                      type="text"
                      className={precioDivisa.inputA}
                      pattern="[0-9]*"
                      placeholder="Cantidad"
                      inputMode="numeric"
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
                className={`${precioDivisa.grupo_monedas} ${precioDivisa.campoB}`}
              >
                {tipoCambio ? (
                  <>
                    <label>{valorCodigo}</label>
                    <input
                      id="input-derecho"
                      ref={refInput2}
                      type="text"
                      className={precioDivisa.inputA}
                      pattern="[0-9]*"
                      placeholder="Cantidad"
                      inputMode="numeric"
                      defaultValue=""
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
            </div>
          </div>
        </form>
        <div className={precioDivisa.cambios_habituales}>
          {filtro.map((post, i) => (
            <span
              ref={refHabitual}
              key={post.Productos[0].Id}
              id={post.Productos[0].Id}
              className={`${precioDivisa.moneda_habitual} ${
                addClase && addClase2 == i
                  ? precioDivisa.moneda_habitual_selected
                  : ""
              } `}
              title={`Vender ${post.Productos[0].Nombre}`}
              onClick={() => cambioValor(post, i)}
            >
              Euro a {post.Productos[0].Nombre}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};
export default Comprar;
