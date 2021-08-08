import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { createEvent } from "utils/api";
import IconReset from "components/icons/IconReset.js";
import Head from "next/head";
import useField from "hooks/useField.js";
import useUser from "hooks/useUser.js";

export default function CreateEvents() {
  const { id } = useRouter().query;
  const history = useRouter();
  const { userData } = useUser();
  console.log({ userData });
  const [error, setErrorMessage] = useState("");
  const eventImgField = useField({ type: "text", name: "eventImg" });
  const eventNameField = useField({ type: "text", name: "eventName" });
  const eventLinkField = useField({ type: "text", name: "eventLink" });
  const eventAgeField = useField({ type: "number", name: "eventAge" });
  const eventCityField = useField({ type: "text", name: "eventCity" });
  const eventInformationField = useField({
    type: "text",
    name: "eventInformation",
  });
  const eventHourField = useField({ type: "number", name: "eventHour" });
  const eventDateField = useField({ type: "date", name: "eventDate" });
  const eventUrlField = useField({ type: "text", name: "eventUrl" });

  const handleFormEvent = (ev) => {
    ev.preventDefault();
    const eventData = {
      title: eventNameField.value,
      image: eventImgField.value,
      date: eventDateField.value,
      url: eventLinkField.value,
      age: eventAgeField.value,
      city: eventCityField.value,
      info: eventInformationField.value,
      hour: eventHourField.value,
      user_id: userData.id,
    };
    console.log({ eventData });
    createEvent(eventData)
      .then((resp) => {
        console.log({ resp });
        if (resp.error) {
          setErrorMessage(resp.error.message);
          setTimeout(() => setErrorMessage(""), 3000);
        } else if (resp.status === 201) {
          history.push("/");
        }
      })
      .catch((error) => console.log(error));
  };

  const isSubmitDisabled =
    !eventNameField.value || !eventHourField.value || !eventDateField.value;

  return (
    <>
      <Head>
        <title>Agenda Peques - Crear evento</title>
        <meta
          name="description"
          content="Crea un evento para compartirla con todas las personas suscritas en la página de Agenda Peques"
        />
      </Head>
      <Link href="/" style={{ textDecoration: "none" }}>
        <IconReset className="reset-Info-createEvent" />
      </Link>
      <div className="create-event-box">
        <div className="box-create-event-img">
          <div className="create-event-img"></div>
        </div>
        <div className="form_event">
          <h2 className="create_event_title">Crear Evento</h2>
          <form className="event_form" onSubmit={handleFormEvent}>
            <label className="event_form_label" htmlFor="text">
              Imagen del evento
            </label>
            <input
              type="text"
              id="name"
              className="event_form_input"
              placeholder="url de la imagen"
              {...eventUrlField}
            />
            <label htmlFor="start" className="event_form_label">
              Fecha
            </label>
            <input
              className="event_form_input"
              id="start"
              name="start"
              placeholder={Date.now()}
              min={Date.now()}
              max="2021-12-31"
              {...eventDateField}
            ></input>
            <label htmlFor="start" className="event_form_label">
              Hora
            </label>
            <input
              className="event_form_input"
              id="hour"
              placeholder="Ej: 17:00"
              {...eventHourField}
              required
            ></input>
            <label className="event_form_label" htmlFor="link">
              Link del evento
            </label>
            <input
              id="link"
              className="event_form_input"
              placeholder="http://agendapequeseivissa.tk"
              {...eventLinkField}
            />
            <label htmlFor="name" className="event_form_label">
              Nombre del Evento
            </label>
            <input
              id="name"
              className="event_form_input"
              {...eventNameField}
              required
            />
            <label htmlFor="age" className="event_form_label">
              Edad recomendada
            </label>
            <input id="age" className="event_form_input" {...eventAgeField} />
            <label htmlFor="city" className="event_form_label">
              Población
            </label>
            <input id="city" className="event_form_input" {...eventCityField} />
            <label htmlFor="textarea" className="event_form_label">
              Información adicional:
            </label>
            <textarea
              className="event_form_input"
              id="textarea"
              name="textarea"
              {...eventInformationField}
            ></textarea>
            {error !== "" ? <p style={{ color: "red" }}>{error}</p> : <></>}
            <input
              type="submit"
              value={id ? "Modificat evento" : "Crear evento"}
              className="event_btn"
              disabled={isSubmitDisabled}
            />
          </form>
        </div>
      </div>
    </>
  );
}
