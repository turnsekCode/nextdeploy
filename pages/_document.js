import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          src="https://kit.fontawesome.com/70f83f7a82.js"
          crossorigin="anonymous"
          strategy="lazyOnload"
        ></Script>
      </body>
    </Html>
  );
}
