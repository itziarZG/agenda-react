import React, { useState } from "react";
import { useRouter, Link } from "next/router";
import { createEvent } from "utils/api";
import IconReset from "components/icons/IconReset.js";
import Head from "next/head";

const CreateEvents = ({ userId }) => {
  let location = useLocation();
  const errorMessageField = useField({ type: "text", name: "errorMessage" });
  const eventImgField = useField({ type: "text", name: "eventImg" });
  const eventNameField = useField({ type: "text", name: "eventName" });
  const eventLinkField = useField({ type: "text", name: "eventLink" });
  const eventAgeField = useField({ type: number, name: "eventAge" });
  const eventCityField = useField({ type: "text", name: "eventCity" });
  const eventInformationField = useField({
    type: "text",
    name: "eventInformation",
  });
  const eventHourField = useField({ type: "number", name: "eventHour" });
  const eventDateField = useField({ type: "date", name: "eventDate" });
  let history = useRouter();

  const handleFormEvent = (ev) => {
    ev.preventDefault();
    const eventData = {
      title: eventNameField,
      image: eventImgField,
      date: eventDateField,
      url: eventLinkField,
      age: eventAgeField,
      city: eventCityField,
      info: eventInformationField,
      hour: eventHourField,
      user_id: userId,
    };
    console.log({ eventData });
    createEvent(eventData)
      .then((resp) => {
        console.log({ resp });
        if (resp.error) {
          setErrorMessage(resp.error.message);
          setTimeout(() => setErrorMessage(""), 3000);
        } else if (resp.status === 201) {
          history.push("/events");
        }
      })
      .catch((error) => console.log(error));

    history.push("/events/" + data[0].id);
  };

  // const [errorMessage, setErrorMessage] = useState("");
  // const [eventImg
  // const [eventDate, setEventDate] = useState(new Date());
  // const [eventLink, setEventLink] = useState("");
  // const [eventName, setEventName] = useState("");
  // const [eventAge, setEventAge] = useState("");
  // const [eventCity, setEventCity] = useState("");
  // const [eventInformation, setEventInformation] = useState("");

  // const [eventHour, setEventHour] = useState("");

  // function handleEventImg(ev) {
  //   setEventImg(ev.target.value);
  // }

  // function handleEventDate(ev) {
  //   setEventDate(ev.target.value);
  // }

  // function handleEventLink(ev) {
  //   setEventLink(ev.target.value);
  // }

  // function handleEventName(ev) {
  //   setEventName(ev.target.value);
  // }

  // function handleEventAge(ev) {
  //   setEventAge(ev.target.value);
  // }

  // function handleEventCity(ev) {
  //   setEventCity(ev.target.value);
  // }

  // function handleEventInformation(ev) {
  //   setEventInformation(ev.target.value);
  // }

  // function handleEventHour(ev) {
  //   setEventHour(ev.target.value);
  // }

  const isSubmitDisabled = !eventName || !eventHour || !eventDate;

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
              type="date"
              id="start"
              name="trip-start"
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
              type="text"
              id="hour"
              placeholder="Ej: 17:00"
              {...eventHourField}
              required
            ></input>
            <label className="event_form_label" htmlFor="text">
              Link del evento
            </label>
            <input
              type="text"
              id="name"
              className="event_form_input"
              placeholder="https://margamartinez.com/"
              {...eventLinkField}
            />
            <label htmlFor="name" className="event_form_label">
              Nombre del Evento
            </label>
            <input
              type="text"
              id="name"
              className="event_form_input"
              {...eventNameField}
              required
            />
            <label htmlFor="name" className="event_form_label">
              Edad recomendada
            </label>
            <input
              type="text"
              id="name"
              className="event_form_input"
              {...eventAgeField}
            />
            <label htmlFor="name" className="event_form_label">
              Población
            </label>
            <input
              type="text"
              id="name"
              className="event_form_input"
              onChange={handleEventCity}
              value={eventCity}
            />
            <label htmlFor="textarea" className="event_form_label">
              Información adicional:
            </label>
            <textarea
              className="event_form_input"
              id="textarea"
              name="textarea"
              {...eventInformationField}
            ></textarea>
            {errorMessage !== "" ? (
              <p style={{ color: "red" }}>{errorMessage}</p>
            ) : (
              <></>
            )}
            <input
              type="submit"
              value={location?.state?.ev?.id ? "Editar evento" : "Crear evento"}
              className="event_btn"
              disabled={isSubmitDisabled}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateEvents;
