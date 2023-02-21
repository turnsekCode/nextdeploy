import React from "react";
import Comprar from "./Comprar";
import style from "./calculadora_div_new.module.css";

const ComponenteCalculadora = () => {
  return (
    <div className={style.contenedor}>
      <Comprar />
    </div>
  );
};

export default ComponenteCalculadora;
