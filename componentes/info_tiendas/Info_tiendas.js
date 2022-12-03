import Modal from "../modal/Modal";
import { useModal } from "../modal/useModal";
import Mapa_tienda from "../../componentes/mapa_tienda/Mapa_tienda";
import infoTienda from "./info_tiendas.module.css";

export default function Info_tiendas({ dataIdWp, placeid }) {
  const [isOpen, openModal, closeModal] = useModal(false);
  const horarios = placeid?.result.opening_hours?.weekday_text;
  const listaHorarios = horarios.map((number, i) => (
    <li key={i} className={`dia_${i++}`}>
      {number}
    </li>
  ));

  const resenas = placeid.result.rating;
  if (resenas > 4.7) {
    var img_valoracion = 69;
  } else if (resenas < 4.8 && resenas < 4.3) {
    var img_valoracion = 62;
  } else if (resenas < 4.4 && resenas < 3.7) {
    var img_valoracion = 55;
  } else if (resenas < 3.8 && resenas < 3.3) {
    var img_valoracion = 48;
  } else if (resenas < 3.4 && resenas < 2.7) {
    var img_valoracion = 41;
  } else if (resenas < 2.8 && resenas < 2.3) {
    var img_valoracion = 34;
  } else if (resenas < 2.4 && resenas < 1.7) {
    var img_valoracion = 27;
  } else if (resenas < 1.8 && resenas < 1.3) {
    var img_valoracion = 20;
  } else if (resenas < 1.4 && resenas < 0.7) {
    var img_valoracion = 13;
  }

  return (
    <>
      <section className={infoTienda.contenedor_info_tienda}>
        <div className={infoTienda.contenedor_info_mapa}>
          <div className={infoTienda.contenedor_cabecera_tienda}>
            <div className={infoTienda.cabecera_tienda}>
              <div className={infoTienda.cabecera_titulo}>
                {placeid.result.name}
              </div>
              <div className={infoTienda.cabecera_estrellas}>
                <span className={infoTienda.logo_google}>
                  <img src="../../Recurso 1.png" />
                </span>
                {placeid.result.rating}
                <span className={infoTienda.img_stars}>
                  <span
                    style={{ width: img_valoracion }}
                    className={infoTienda.imgValoracion}
                  ></span>
                </span>
                <span className={infoTienda.numero_reviews}>
                  {placeid.result.user_ratings_total} reseñas de Google
                </span>
              </div>
              <div className={infoTienda.boton_review}>
                <a href={dataIdWp.acf.url_dejanos_opinion} target="_blank">
                  Déjanos tu opinión
                </a>
              </div>
            </div>
            <div className={infoTienda.contenedor_tienda}>
              <div className="">
                <div className={infoTienda.contenido_tienda}>
                  <div className={infoTienda.bloque_izq}>
                    <div className={infoTienda.contenedor_izq}>
                      <p className={infoTienda.direccion}>
                        <strong>Dirección: </strong>
                        <span>{placeid.result.formatted_address}</span>
                      </p>
                      <p className={infoTienda.provincia}>
                        <strong>Provincia: </strong>
                        <span>
                          {placeid.result.address_components[3].long_name}
                        </span>
                      </p>
                      <p className={infoTienda.telefono_tienda}>
                        <strong>Teléfono: </strong>
                        <a
                          href={`tel:${placeid.result.formatted_phone_number}`}
                          title={`Teléfono de Quickgold ${dataIdWp.acf.ciudad}`}
                        >
                          {placeid.result.formatted_phone_number}
                        </a>
                      </p>
                      <div className={infoTienda.contenedor_botones_tienda}>
                        <p className={infoTienda.llamar}>
                          <a
                            href={`tel:${dataIdWp?.acf?.telefono}`}
                            title={`Teléfono de Quickgold ${dataIdWp.acf.ciudad}`}
                          >
                            LLAMADA
                          </a>
                        </p>
                        <p className={infoTienda.whatsapp_tienda}>
                          <a
                            href={`https://wa.me/${dataIdWp?.acf?.telefono_mobil}`}
                            title={`Whatsapp de Quickgold ${dataIdWp.acf.ciudad}`}
                            target="_blank"
                          >
                            WHATSAPP
                          </a>
                        </p>
                        <div onClick={openModal}>
                          <div
                            title={`Localización de Quickgold ${dataIdWp.acf.ciudad}`}
                            className={infoTienda.mapa_tienda}
                          >
                            MAPA
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={infoTienda.bloque_der}>
                    <p className={infoTienda.lista_horario}>
                      <strong>Horario Habitual: </strong>
                    </p>
                    <ul
                      className={infoTienda.horario_tienda}
                      id="lista-horario"
                    >
                      {listaHorarios}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal isOpen={isOpen} closeModal={closeModal}>
          <Mapa_tienda dataIdWp={dataIdWp} />
        </Modal>
      </section>
    </>
  );
}
