import empeno from "./empenos.module.css";
import { useModal } from "../modal/useModal";
import Modal from "../modal/Modal";
import Boton1 from "../botones/Boton1";
import Boton2 from "../botones/Boton2";
import Boton3 from "../botones/Boton3";
import EmpenosEjemplo from "../empenoEjemplo/EmpenoEjemplo";
import EmpenosInfo from "../empenoInfo/EmpenoInfo";

export default function Empenos() {
  const [isOpen1, openModal1, closeModal1] = useModal(false);
  const [isOpen2, openModal2, closeModal2] = useModal(false);
  const [isOpen3, openModal3, closeModal3] = useModal(false);

  return (
    <>
      <section className={empeno.empenos}>
        <div className={empeno.contenedor_empenos}>
          <div className={empeno.contenedor_img_empenos}>
            <img src="../../empenos.png" alt="Empeños" />
          </div>
          <div className={empeno.boton_llamar_empenos}>
            <a href="tel:912 29 68 55" title="Teléfono de Quickgold Alcobendas">
              LLAMA YA PULSANDO AQUI
              <b className={empeno.telefono_oro}> 912 29 68 55</b>
            </a>
          </div>
        </div>
        <div className={empeno.contenedor_botones}>
          <Boton1 openModal1={openModal1} contenido="EJEMPLO" />
          <Boton2 openModal2={openModal2} contenido="SIMULADOR" />
          <Boton3 openModal3={openModal3} contenido="INFO" />
        </div>
      </section>
      <Modal isOpen={isOpen1} closeModal={closeModal1}>
        <div className={empeno.contenedor_modal}>
          <EmpenosEjemplo />
        </div>
      </Modal>
      <Modal isOpen={isOpen2} closeModal={closeModal2}>
        <div className={empeno.contenedor_modal}>modal simulador abierto</div>
      </Modal>
      <Modal isOpen={isOpen3} closeModal={closeModal3}>
        <div className={empeno.contenedor_modal}>
          <EmpenosInfo />
        </div>
      </Modal>
    </>
  );
}
