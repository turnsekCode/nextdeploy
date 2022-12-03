import precioOro from "./precio_oro.module.css";
import React, { useState, useEffect } from "react";
import { useModal } from "../modal/useModal";
import Modal from "../modal/Modal";
import Boton1 from "../botones/Boton1";
import Boton2 from "../botones/Boton2";
import Boton3 from "../botones/Boton3";
import CalculadoraOro from "./CalculadoraOro";
import PreciosOro from "./MasPreciosOro";

export default function Precio_oro({ data }) {
  const datos = data.result.Tarifas.Oro;
  const precio18k = datos[2]?.Productos[0]?.Precio / 1000;
  const [isOpen1, openModal1, closeModal1] = useModal(false);
  const [isOpen2, openModal2, closeModal2] = useModal(false);
  const [isOpen3, openModal3, closeModal3] = useModal(false);

  return (
    <>
      <section className={precioOro.contenedor_precio_oro}>
        <div className={precioOro.bloque_der_oro}>
          <div className={precioOro.contenedor_precio_destacado}>
            <span className={precioOro.titulo_destacado}>Precio Oro 18K</span>
          </div>
          <div className={precioOro.precio_normal}>
            <span className={precioOro.precio_destacado}>
              {precio18k.toFixed(2)}
            </span>
            <span className={precioOro.simbolos}>€/g</span>
          </div>
          <div className={precioOro.texto_para_mas}>
            <div>
              Más de <span className={precioOro.para_mas_oro}>100g</span>
            </div>
          </div>
          <div className={precioOro.boton_llamar_oro}>
            <a href="tel:912 29 68 55" title="Teléfono de Quickgold Alcobendas">
              Fija este precio llamando al{" "}
              <b className={precioOro.telefono_oro}> 912 29 68 55</b>
            </a>
          </div>
        </div>
        <div className={precioOro.contenedor_botones}>
          <Boton1 openModal1={openModal1} contenido="MÁS PRECIOS" />
          <Boton2 openModal2={openModal2} contenido="CALCULADORA" />
          <Boton3 openModal3={openModal3} contenido="INFO" />
        </div>
      </section>
      <Modal isOpen={isOpen1} closeModal={closeModal1}>
        <div className={precioOro.contenedor_modal}>
          <PreciosOro data={data} />
        </div>
      </Modal>
      <Modal isOpen={isOpen2} closeModal={closeModal2}>
        <div className={precioOro.contenedor_modal}>
          <CalculadoraOro data={data} />
        </div>
      </Modal>
      <Modal isOpen={isOpen3} closeModal={closeModal3}>
        <div className={precioOro.contenedor_modal}>modal info abierto</div>
      </Modal>
    </>
  );
}
const ciudad = "barcelona";
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://quickgold.es/archivos-cache/Fixing${ciudad}.txt`
  );
  const data1 = await res.json();
  console.log(data1);
  // Pass data to the page via props
  return { props: { data1 } };
}
