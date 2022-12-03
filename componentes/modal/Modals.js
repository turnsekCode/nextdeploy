import Modal from "./Modal";
import { useModal } from "../modal/useModal";
import Mapa_tienda from "../../componentes/mapa_tienda/Mapa_tienda";
export default function Modals() {
  const [isOpen, openModal, closeModal] = useModal(false);
  console.log(isOpen);
  return (
    <>
      <Modal isOpen={isOpen}>
        <Mapa_tienda />
      </Modal>
    </>
  );
}
