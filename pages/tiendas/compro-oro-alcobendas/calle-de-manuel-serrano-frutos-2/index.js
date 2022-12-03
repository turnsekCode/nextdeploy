import Head from "next/head";
import React from "react";
import Script from "next/script";
import Contenedor from "../../../../componentes/contenedor/Contenedor";
import Empenos from "../../../../componentes/empeños/Empenos";
import Info_tiendas from "../../../../componentes/info_tiendas/Info_tiendas";
import Invertir from "../../../../componentes/invertir/Invertir";
import Resenas from "../../../../componentes/reseñas/Resenas";
import Precio_divisa from "../../../../componentes/precio_divisa/Precio_divisa";
import Precio_oro from "../../../../componentes/precio_oro/Precio_oro";

export default function AlcobendasTienda({ data, dataIdWp, placeid }) {
  return (
    <>
      <Head>
        <title>{dataIdWp.acf.meta_titulo}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content={dataIdWp.acf.meta_descripcion} />
        <link
          rel="icon"
          href="../../../../apple-icon-180x180-1.ico"
          sizes="32x32"
        />
      </Head>
      <Contenedor>
        <Info_tiendas dataIdWp={dataIdWp} placeid={placeid} />
        <Precio_oro data={data} />
        <Precio_divisa dataDivisa={data} />
        <Empenos />
        <Invertir />
        <Resenas />
      </Contenedor>
    </>
  );
}
/*const ciudad = "elche";
export async function getStaticProps() {
  const res = await fetch(
    `https://quickgold.es/archivos-cache/Fixing${ciudad}.txt`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: true, // In seconds
  };
}*/
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
const nombreTienda = "alcobendas";
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

  const placeId = await fetch(
    `https://quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-${nombreTienda}.txt`
  );
  const placeid = await placeId.json();
  // Pass data to the page via props
  return { props: { data, dataIdWp, placeid }, revalidate: 1 };
}

/*const idWp = "5510";
export async function getStaticProps() {
  const res = await fetch(`https://quickgold.es/wp-json/wp/v2/pages/${idWp}`);
  const dataWp = await res.json();
  console.log(dataWp);
  return {
    props: {
      dataWp,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: true, // In seconds
  };
}*/

// This gets called on every request
