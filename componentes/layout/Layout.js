import Cabecera from "../cabecera/Cabecera";
import Footer from "../footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <main className="layout">
        <Cabecera />
        {children}
        <Footer />
      </main>
    </>
  );
}
