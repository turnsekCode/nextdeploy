import Head from "next/head";
import React from "react";
import Script from "next/script";
import Contenedor from "../../componentes/contenedor/Contenedor";
import Comprar from "../../componentes/calculadora_nueva/Comprar";

export default function Calculadora({ data, dataIdWp }) {
  return (
    <>
      <Head>
        <title>titulo</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="descripcion" />
        <link
          rel="icon"
          href="../../../../apple-icon-180x180-1.ico"
          sizes="32x32"
        />
      </Head>
      <Contenedor>
        <Comprar data={data} />
      </Contenedor>
    </>
  );
}
/*const ciudad = "barcelona";
const idWp = "5510";
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://quickgold.es/archivos-cache/Fixing${ciudad}.txt`
  );
  const data = await res.json();

  const response = await fetch(
    `https://quickgold.es/wp-json/wp/v2/pages/${idWp}`
  );
  const dataIdWp = await response.json();

  // Pass data to the page via props
  return { props: { data, dataIdWp } };
}*/
const ciudad = "alcobendas";
const idWp = "13848";
export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://quickgold.es/archivos-cache/Fixing${ciudad}.txt`
  );
  const data = await res.json();

  const response = await fetch(
    `https://quickgold.es/wp-json/wp/v2/pages/${idWp}`
  );
  const dataIdWp = await response.json();

  // Pass data to the page via props
  return { props: { data, dataIdWp }, revalidate: 1 };
}

// This gets called on every request
