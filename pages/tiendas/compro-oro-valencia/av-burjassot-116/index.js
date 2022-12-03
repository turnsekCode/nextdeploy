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

export default function AvBurjassot({ data, dataIdWp, placeid }) {
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
      {/*<Script id="livechat">
        {`window.__lc = window.__lc || {};
    window.__lc.license = 12672798;
    ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))`}
      </Script>
      <noscript>
        <a
          href="https://www.livechatinc.com/chat-with/12672798/"
          rel="nofollow"
        >
          Chat with us
        </a>
        , powered by{" "}
        <a
          href="https://www.livechatinc.com/?welcome"
          rel="noopener nofollow noreferrer"
          target="_blank"
        >
          LiveChat
        </a>
      </noscript>*/}
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
const nombreTienda = "avburjassot";
const ciudad = "valencia";
const idWp = "13837";
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
