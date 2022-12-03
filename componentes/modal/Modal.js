import modal from "./modal.module.css";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
export default function Modal({ children, isOpen, closeModal }) {
  return (
    <div className={`${modal.contenedor_modal} ${isOpen && modal.is_open}`}>
      <div className={`${modal.ventana_modal} ${isOpen && modal.is_open}`}>
        <div className={modal.boton_cerrar} onClick={closeModal}>
          <CancelRoundedIcon />
        </div>
        {children}
      </div>
    </div>
  );
}
