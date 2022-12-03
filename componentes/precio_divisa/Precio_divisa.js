import precioDivisa from "./precio_divisa.module.css";
import { useState } from "react";
import { useModal } from "../modal/useModal";
import Modal from "../modal/Modal";
import Boton1 from "../botones/Boton1";
import Boton2 from "../botones/Boton2";
import Boton3 from "../botones/Boton3";
import Vender from "./Vender";
import Comprar from "./Comprar";

export default function Precio_divisa({ dataDivisa }) {
  const [isOpen1, openModal1, closeModal1] = useModal(false);
  const [isOpen2, openModal2, closeModal2] = useModal(false);
  const [isOpen3, openModal3, closeModal3] = useModal(false);
  const [data, setData] = useState(true);
  const data2 = () => setData(false);
  const data1 = () => setData(true);

  return (
    <>
      <section className={precioDivisa.contenedor_precio_divisa}>
        <div className={precioDivisa.bloque_divisa}>
          <div className={precioDivisa.menu_divisa}>
            <span
              className={`${precioDivisa.select_compra} ${
                data && precioDivisa.activo
              }  `}
              onClick={() => {
                data1();
              }}
            >
              QUIERO VENDER DIVISA
            </span>
            <span
              className={`${precioDivisa.select_venta} ${
                !data && precioDivisa.activo
              }  `}
              onClick={data2}
            >
              QUIERO COMPRAR DIVISA
            </span>
          </div>
          <div className={precioDivisa.precio_divisas}>
            <div className={precioDivisa.precio_divisas_dolar}>
              <div className={precioDivisa.contenedor_der_divisa}>
                <img src="../../USD.png" alt="imagen dolar" />
              </div>
              <div className={precioDivisa.contenedor_izq_divisa}>
                <div className={precioDivisa.codigo}>USD</div>
                <div className={precioDivisa.nombre}>Dólar USA</div>
                <div className={precioDivisa.precio_dolar}>
                  0.9164<span className={precioDivisa.simbolo}>€</span>
                </div>
              </div>
            </div>
            <div className={precioDivisa.precio_divisas_libra}>
              <div className={precioDivisa.contenedor_der_divisa}>
                <img src="../../GBP.png" alt="imagen libra" />
              </div>
              <div className={precioDivisa.contenedor_izq_divisa}>
                <div className={precioDivisa.codigo}>GBP</div>
                <div className={precioDivisa.nombre}>Libra Esterlina</div>
                <div className={precioDivisa.precio_libra}>
                  1.1256<span className={precioDivisa.simbolo}>€</span>
                </div>
              </div>
            </div>
          </div>
          <div className={precioDivisa.boton_llamar_divisa}>
            <a href="tel:912 29 68 55" title="Teléfono de Quickgold Alcobendas">
              Llama al
              <b className={precioDivisa.telefono_oro}> 912 29 68 55</b>
            </a>
          </div>
        </div>
        <div className={precioDivisa.contenedor_botones}>
          <Boton1 openModal1={openModal1} contenido="MÁS PRECIOS" />
          <Boton2 openModal2={openModal2} contenido="CONVERSOR" />
          <Boton3 openModal3={openModal3} contenido="INFO" />
        </div>
      </section>
      <Modal isOpen={isOpen1} closeModal={closeModal1}>
        <div className={precioDivisa.contenedor_modal}>
          modal mas precios abierto
        </div>
      </Modal>
      <Modal isOpen={isOpen2} closeModal={closeModal2}>
        <div className={precioDivisa.contenedor_modal}>
          <div className={precioDivisa.contenedor}>
            <div className={precioDivisa.menu_divisa}>
              <span
                className={`${precioDivisa.select_compra} ${
                  data && precioDivisa.activo
                }  `}
                onClick={() => {
                  data1();
                }}
              >
                QUIERO VENDER DIVISA
              </span>
              <span
                className={`${precioDivisa.select_venta} ${
                  !data && precioDivisa.activo
                }  `}
                onClick={data2}
              >
                QUIERO COMPRAR DIVISA
              </span>
            </div>
            {data ? (
              <Vender dataDivisa={dataDivisa} />
            ) : (
              <Comprar dataDivisa={dataDivisa} data={data} />
            )}
            <div className={precioDivisa.boton_llamar_divisa}>
              <a
                href="tel:912 29 68 55"
                title="Teléfono de Quickgold Alcobendas"
              >
                Llama al
                <b className={precioDivisa.telefono_oro}> 912 29 68 55</b>
              </a>
            </div>
          </div>
        </div>
      </Modal>
      <Modal isOpen={isOpen3} closeModal={closeModal3}>
        <div className={precioDivisa.contenedor_modal}>modal info abierto</div>
      </Modal>
    </>
  );
}
