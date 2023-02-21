import React, { useState } from "react";
import style from "./calculadora_div_new.module.css";

const Comprar = ({ data }) => {
  const dataCompras = data.result.Tarifas.Divisas_Compra;
  const dataReverse = [...dataCompras].reverse();
  const [selectDivisa, setSelectDivisa] = useState(true);
  const [selectOpen, setSelectOpen] = useState(false);
  const precioLibra = dataReverse[0].Productos[0].Precio / 1000;
  const precioDolar = dataReverse[1].Productos[0].Precio / 1000;
  const [valorMoneda, setValorMoneda] = useState("0");
  const [DataAcronimo, setAcronimo] = useState("---");
  const [DataNombre, setDataNombre] = useState("");
  const [valorInput, setValorInput] = useState("0");
  const precioDividido = valorMoneda / 1000;
  const precioDividido2 = 1 / precioDividido;
  const valorFinal = valorInput * precioDividido;
  const captureCodigo = (e) => {
    setAcronimo(e.target.dataset.acronimo);
    setDataNombre(e.target.dataset.nombre);
    setValorMoneda(e.target.dataset.precio);
  };
  const captureHabitual = (e) => {
    setAcronimo(e.target.dataset.acronimo);
    setValorMoneda(e.target.dataset.precio);
    setSelectDivisa(false);
  };
  const seleccion = () => {
    setSelectOpen(true);
  };
  const MonedaSeleccionada = () => {
    setSelectDivisa(false);
  };
  return (
    <div className={style.componente_calculadora}>
      <div className={style.componente_calculadora_flex}>
        <div
          onClick={(e) => {
            captureHabitual(e);
          }}
          data-acronimo={dataReverse[1].Productos[0].Acronimo}
          data-precio={dataReverse[1].Productos[0].Precio}
          className={style.contenedor_moneda}
        >
          <div>
            <img
              onClick={(e) => {
                captureHabitual(e);
              }}
              data-acronimo={dataReverse[1].Productos[0].Acronimo}
              data-precio={dataReverse[1].Productos[0].Precio}
              className={style.contenedor_img_bandera}
              src="../../USD.png"
              alt=""
            />
          </div>
          <div
            onClick={(e) => {
              captureHabitual(e);
            }}
            data-acronimo={dataReverse[1].Productos[0].Acronimo}
            data-precio={dataReverse[1].Productos[0].Precio}
            className={style.contenedor_info}
          >
            <div
              onClick={(e) => {
                captureHabitual(e);
              }}
              data-acronimo={dataReverse[1].Productos[0].Acronimo}
              data-precio={dataReverse[1].Productos[0].Precio}
              className={style.moneda_habitual}
            >
              USD{" "}
              <span
                onClick={(e) => {
                  captureHabitual(e);
                }}
                data-acronimo={dataReverse[1].Productos[0].Acronimo}
                data-precio={dataReverse[1].Productos[0].Precio}
              >
                Dólar USA
              </span>
            </div>
            <div
              onClick={(e) => {
                captureHabitual(e);
              }}
              className={style.precio_moneda}
              data-acronimo={dataReverse[1].Productos[0].Acronimo}
              data-precio={dataReverse[1].Productos[0].Precio}
            >
              {precioDolar.toFixed(4)}€
            </div>
          </div>
        </div>
        <div
          onClick={(e) => {
            captureHabitual(e);
          }}
          data-acronimo={dataReverse[0].Productos[0].Acronimo}
          data-precio={dataReverse[0].Productos[0].Precio}
          className={style.contenedor_moneda}
        >
          <div className={style.contenedor_img_bandera}>
            <img
              onClick={(e) => {
                captureHabitual(e);
              }}
              data-acronimo={dataReverse[0].Productos[0].Acronimo}
              data-precio={dataReverse[0].Productos[0].Precio}
              src="../../GBP.png"
              alt=""
            />
          </div>
          <div
            onClick={(e) => {
              captureHabitual(e);
            }}
            data-acronimo={dataReverse[0].Productos[0].Acronimo}
            data-precio={dataReverse[0].Productos[0].Precio}
            className={style.contenedor_info}
          >
            <div
              onClick={(e) => {
                captureHabitual(e);
              }}
              data-acronimo={dataReverse[0].Productos[0].Acronimo}
              data-precio={dataReverse[0].Productos[0].Precio}
              className={style.moneda_habitual}
            >
              GBP{" "}
              <span
                onClick={(e) => {
                  captureHabitual(e);
                }}
                data-acronimo={dataReverse[0].Productos[0].Acronimo}
                data-precio={dataReverse[0].Productos[0].Precio}
              >
                Libra Esterlina
              </span>
            </div>
            <div
              onClick={(e) => {
                captureHabitual(e);
              }}
              className={style.precio_moneda}
              data-acronimo={dataReverse[0].Productos[0].Acronimo}
              data-precio={dataReverse[0].Productos[0].Precio}
            >
              {precioLibra.toFixed(4)}€
            </div>
          </div>
        </div>
      </div>
      <div className={style.titulo_conversor}>
        <p>
          Conversor <span>de divisa</span>
        </p>
      </div>
      <div className={style.contenedor_conversor}>
        <div className={style.contenedor_input}>
          <div className={style.bloque_der_moneda}>
            <div
              className={style.select}
              onClick={() => {
                seleccion();
              }}
            >
              {DataAcronimo}
            </div>
            <div
              className={`${style.selector_monedas} ${
                selectOpen && style.active
              }  `}
            >
              {dataReverse.map((post) => (
                <div
                  key={post?.Productos[0].Id}
                  data-acronimo={post?.Productos[0].Acronimo}
                  data-nombre={post?.Productos[0].Nombre}
                  data-precio={post?.Productos[0].Precio}
                  className={style.lista_moneda}
                  onClick={(e) => {
                    setSelectOpen(false);
                    captureCodigo(e);
                    MonedaSeleccionada();
                  }}
                >
                  {post.Productos[0].Acronimo} -{" "}
                  <span
                    data-acronimo={post?.Productos[0].Acronimo}
                    data-nombre={post?.Productos[0].Nombre}
                    data-precio={post?.Productos[0].Precio}
                    className={style.lista_moneda}
                    onClick={(e) => {
                      setSelectOpen(false);
                      captureCodigo(e);
                      MonedaSeleccionada();
                    }}
                  >
                    {post.Productos[0].Nombre}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className={style.bloque_izq_moneda}>
            <input
              id="input-derecho"
              //ref={refInput2}
              type="text"
              className=""
              pattern="[0-9]*"
              placeholder="Cantidad"
              inputMode="numeric"
              defaultValue=""
              //onChange={calcularCambio}
              onChange={(event) => setValorInput(event.target.value)}
            />
            {DataAcronimo}
            {selectDivisa ? (
              <p className={style.info_precio}>Seleccione Divisa</p>
            ) : (
              <p className={style.info_precio}>
                1{DataAcronimo} = {precioDividido.toFixed(4)}€
              </p>
            )}
          </div>
        </div>
        <div className={style.contenedor_input}>
          <div className={style.bloque_der_moneda}>
            <p>EUR</p>
          </div>
          <div className={style.bloque_izq_moneda}>
            <input
              id="input-izquierdo"
              type="text"
              //ref={refInput1}
              className={style.input_dolar}
              pattern="[0-9]*"
              placeholder="0.00"
              inputMode="numeric"
              readOnly
              //onChange={calcularCambio}
              value={valorFinal.toFixed(2)}
            />
            EUR
            {selectDivisa ? (
              <p className={style.info_precio}>Seleccione Divisa</p>
            ) : (
              <p className={style.info_precio}>
                1EUR = {precioDividido2.toFixed(4)}
                {DataAcronimo}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className={style.boton_llamar}>
        <a href="tel:456321345">LLAMAR A LA TIENDA</a>
      </div>
    </div>
  );
};

export default Comprar;
