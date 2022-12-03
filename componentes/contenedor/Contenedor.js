import contenedor from "./contenedor.module.css";

export default function Contenedor({ children }) {
  return (
    <>
      <div className={contenedor.contenedor}>{children}</div>
    </>
  );
}
