import React from "react";
import select from "./selectPrecioOro.module.css";

export const SelectPrecioOro = () => {
  return (
    <>
      <div className={select.contenedor_select}>
        <select
          name="sitio"
          className={select.select}
          onChange={(e) => {
            location = e.target.value;
          }}
        >
          <option value="#">Conocer precio del oro</option>
          <option value="/tiendas/compro-oro-alcobendas/"> Alcobendas </option>
          <option value="/tiendas/compro-oro-valencia/"> Valencia </option>
        </select>
      </div>
    </>
  );
};
