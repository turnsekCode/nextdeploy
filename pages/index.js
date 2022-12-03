/* eslint-disable no-use-before-define */
import Head from "next/head";
import index from "./index.module.css";
import React from "react";
import { SelectPrecioOro } from "../componentes/SelectPrecioOro/SelectPrecioOro";
import Link from "next/link";

export default function Home({ dataIdWp }) {
  return (
    <>
      <Head>
        <title>
          Compro oro, empeño de joyas y cambio de divisas | quickgold
        </title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta
          name="description"
          content="La franquicia con más de 40 tiendas en España donde puedes vender oro, empeñar joyas o cambiar divisa sin comisiones en un mismo sitio."
        />
        <link
          rel="icon"
          href="../../../../apple-icon-180x180-1.ico"
          sizes="32x32"
        />
      </Head>
      <SelectPrecioOro />
      <div className={index.contenedorIndex}>
        <article className={index.servicios}>
          <header className={index.cabecera_portada}>
            <h1 className={index.titulo_seccion}>
              Especialistas en compra y venta de oro 18
            </h1>
            <p className={index.subtitulo_pagina}>
              En nuestras tiendas{" "}
              <span className={index.nombre_logo}>quickgold</span> puedes:
            </p>
          </header>
        </article>
        <div className={index.contenedor_iframe}>
          <iframe
            src="https://www.google.com/search?q=dolar+cotizacion&igu=1&source=hp&ei=0thjY9nGHtKKur4Pz4ieuAk&iflsig=AJiK0e8AAAAAY2Pm4mguI7sumXHK4Mj2KMRumz8q6yBD&ved=0ahUKEwjZ98fZpJL7AhVShc4BHU-EB5cQ4dUDCAo&uact=5&oq=dolar+cotizacion&gs_lp=Egdnd3Mtd2l6uAED-AEBMg8QABixAxiDARhDGEYYggIyBBAAGEMyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABMICBBAjGCfCAgsQABiABBixAxiDAcICCRAAGEMYRhiCAsICChAAGLEDGIMBGEPCAgcQABixAxhDwgIIEAAYsQMYgwHCAggQABiABBixA8ICCBAAGIAEGMsBSMkoUABYjCNwAHgAyAEAkAEAmAF5oAG3DaoBBDMuMTM&sclient=gws-wiz"
            name="myIFrame"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
        <section className={index.compro_oro}>
          <div className={index.bloque_izq_serv}>
            <h2>Vender oro</h2>
            <div className={index.texto}>
              En <span className={index.nombre_logo}>quickgold</span>
              encontrarás nuestro principal servicio de{" "}
              <strong>Compro Oro</strong>, con el que tasamos todas las piezas a
              la vista para garantizarte{" "}
              <strong>
                una operación segura y un precio justo para todo el oro que
                quieras vender
              </strong>
              . No importa si están desemparejadas o rotas. <br /> Accede a toda
              la información para vender oro.
            </div>
            <div className={index.enlace_servicio}>
              <Link href="#">
                <a>Conoce todo el proceso</a>
              </Link>
            </div>
          </div>
          <div className={index.bloque_der_serv}>
            <figure className={index.imagen_servicio}>
              <img
                src="https://quickgold.es/wp-content/uploads/2019/05/vender-oro-servicios.jpg"
                alt="Vender oro al mejor precio en Quickgold"
              />
            </figure>
          </div>
        </section>
        <section className={index.compro_oro}>
          <div className={index.bloque_izq_serv}>
            <h2>Empeñar joyas</h2>
            <div className={index.texto}>
              En <span className={index.nombre_logo}>quickgold</span>
              encontrarás nuestro principal servicio de{" "}
              <strong>Compro Oro</strong>, con el que tasamos todas las piezas a
              la vista para garantizarte{" "}
              <strong>
                una operación segura y un precio justo para todo el oro que
                quieras vender
              </strong>
              . No importa si están desemparejadas o rotas. <br /> Accede a toda
              la información para vender oro.
            </div>
            <div className={index.enlace_servicio}>
              <Link href="#">
                <a>Empeña tus joyas fácilmente</a>
              </Link>
            </div>
          </div>
          <div className={index.bloque_der_serv}>
            <figure className={index.imagen_servicio}>
              <img
                src="https://quickgold.es/wp-content/uploads/2019/05/home-empenos.jpg"
                alt="Empeño de joyas"
              />
            </figure>
          </div>
        </section>
        <section className={index.compro_oro}>
          <div className={index.bloque_izq_serv}>
            <h2>Cambiar divisas</h2>
            <div className={index.texto}>
              En <span className={index.nombre_logo}>quickgold</span>
              encontrarás nuestro principal servicio de{" "}
              <strong>Compro Oro</strong>, con el que tasamos todas las piezas a
              la vista para garantizarte{" "}
              <strong>
                una operación segura y un precio justo para todo el oro que
                quieras vender
              </strong>
              . No importa si están desemparejadas o rotas. <br /> Accede a toda
              la información para vender oro.
            </div>
            <div className={index.enlace_servicio}>
              <Link href="#">
                <a>CCalcula tu cambio y fijalo ahora</a>
              </Link>
            </div>
          </div>
          <div className={index.bloque_der_serv}>
            <figure className={index.imagen_servicio}>
              <img
                src="https://quickgold.es/wp-content/uploads/2019/05/servicio-divisa.jpg"
                alt="Cambio de divisas sin comisiones"
              />
            </figure>
          </div>
        </section>
        <h3 className={index.servicios_adicionales}>
          Otros servicios que encontrarás en nuestras tiendas:
        </h3>
        <section className={index.serv_adicional_plata}>
          <figure className={index.imagen_servicio_adic}>
            <img
              src="https://quickgold.es/wp-content/uploads/2019/02/vender-plata.jpg"
              alt="Vender joyas de plata"
            />
          </figure>
          <h2>Compra de plata</h2>
          <div className={index.enlace_servicio_adic}>
            <Link href="#">
              <a>Saber más</a>
            </Link>
          </div>
        </section>
        <section className={index.serv_adicional_oro_inversion}>
          <figure className={index.imagen_servicio_adic}>
            <img
              src="https://quickgold.es/wp-content/uploads/2019/02/vender-plata.jpg"
              alt="Vender joyas de plata"
            />
          </figure>
          <h2>Oro de inversión</h2>
          <div className={index.enlace_servicio_adic}>
            <Link href="#">
              <a>Saber más</a>
            </Link>
          </div>
        </section>
        <section className={index.serv_adicional_diamantes}>
          <figure className={index.imagen_servicio_adic}>
            <img
              src="https://quickgold.es/wp-content/uploads/2019/02/vender-plata.jpg"
              alt="Vender joyas de plata"
            />
          </figure>
          <h2>Compra de diamantes</h2>
          <div className={index.enlace_servicio_adic}>
            <Link href="#">
              <a>Saber más</a>
            </Link>
          </div>
        </section>
        <section className={index.serv_adicional_monte_piedad}>
          <figure className={index.imagen_servicio_adic}>
            <img
              src="https://quickgold.es/wp-content/uploads/2019/02/vender-plata.jpg"
              alt="Vender joyas de plata"
            />
          </figure>
          <h2>Prestamos con oro</h2>
          <div className={index.enlace_servicio_adic}>
            <Link href="#">
              <a>Saber más</a>
            </Link>
          </div>
        </section>
        <div className={index.expansion_contenedor}>
          <section className={index.expansion_info}>
            <header>
              <h2>
                Quiero abrir una <br />
                tienda <span className={index.expansion_logo}>quickgold</span>
              </h2>
            </header>
            <article>
              <p className={index.descripcion_franquicia}>
                En{" "}
                <span className={index.nombre_logo_expansion}>quickgold</span>{" "}
                queremos seguir creciendo contigo, y para ello contamos con las
                mejores condiciones para que puedas emprender. Si siempre has
                querido tener tu propio negocio y compartes nuestros mismos
                valores recibe, a continuación, toda la información.
              </p>
              <div className={index.boton_popup_form}>
                Recibir más información
              </div>
            </article>
          </section>
        </div>
      </div>
    </>
  );
}

/*const idWp = "13837";
export async function getStaticProps() {
  const response = await fetch(
    `https://quickgold.es/wp-json/wp/v2/pages/${idWp}`
  );
  const dataIdWp = await response.json();

  // Pass data to the page via props
  return { props: { dataIdWp }, revalidate: 1 };
}*/
