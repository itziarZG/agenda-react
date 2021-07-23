import React, { useState } from "react";
import { useRouter, Link, useLocation } from "next/router";
import { createEvent } from "utils/api";
import IconReset from "components/icons/IconReset.js";
import Head from "next/head";

const CreateEvents = ({ userId }) => {
  let location = useLocation();

  // const [eventImg, setEventImg] = useState(
  //   location?.state?.ev?.image || defaultImage
  // );
  // const [eventDate, setEventDate] = useState(
  //   location?.state?.ev?.date || new Date()
  // );
  // const [eventLink, setEventLink] = useState(location?.state?.ev?.link || '');
  // const [eventName, setEventName] = useState(location?.state?.ev?.name || '');
  // const [eventAge, setEventAge] = useState(location?.state?.ev?.age || '');
  // const [eventCity, setEventCity] = useState(location?.state?.ev?.city || '');
  // const [eventAddress, setEventAddress] = useState(
  //   location?.state?.ev?.address || ''
  // );
  // const [eventInformation, setEventInformation] = useState(
  //   location?.state?.ev?.information || ''
  // );

  // const [eventHour, setEventHour] = useState(
  //   (location?.state?.ev?.hour && location?.state?.ev?.hour.slice(0, -3)) || ''
  // );
  const [errorMessage, setErrorMessage] = useState("");
  const [eventImg, setEventImg] = useState("");
  const [eventDate, setEventDate] = useState(new Date());
  const [eventLink, setEventLink] = useState("");
  const [eventName, setEventName] = useState("");
  const [eventAge, setEventAge] = useState("");
  const [eventCity, setEventCity] = useState("");
  const [eventInformation, setEventInformation] = useState("");

  const [eventHour, setEventHour] = useState("");

  let history = useRouter();

  function handleEventImg(ev) {
    setEventImg(ev.target.value);
  }

  function handleEventDate(ev) {
    setEventDate(ev.target.value);
  }

  function handleEventLink(ev) {
    setEventLink(ev.target.value);
  }

  function handleEventName(ev) {
    setEventName(ev.target.value);
  }

  function handleEventAge(ev) {
    setEventAge(ev.target.value);
  }

  function handleEventCity(ev) {
    setEventCity(ev.target.value);
  }

  function handleEventInformation(ev) {
    setEventInformation(ev.target.value);
  }

  function handleEventHour(ev) {
    setEventHour(ev.target.value);
  }

  const handleFormEvent = (ev) => {
    ev.preventDefault();
    const eventData = {
      title: eventName,
      image: eventImg,
      date: eventDate,
      url: eventLink,
      age: eventAge,
      city: eventCity,
      info: eventInformation,
      hour: eventHour,
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

    //history.push('/events/' + data[0].id);
  };

  const isSubmitDisabled = !eventName || !eventHour || !eventDate;

  return (
    <>
     <Head>
        <title>Agenda Peques - Crear evento</title>
        <meta name="description" content="Crea un evento para compartirla con todas las personas suscritas en la página de Agenda Peques" />
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
              value={eventImg}
              onChange={handleEventImg}
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
              value={eventDate}
              min={Date.now()}
              max="2021-12-31"
              onChange={handleEventDate}
            ></input>
            <label htmlFor="start" className="event_form_label">
              Hora
            </label>
            <input
              className="event_form_input"
              type="text"
              id="name"
              placeholder="Ej: 17:00"
              onChange={handleEventHour}
              value={eventHour}
              required
            ></input>
            <label className="event_form_label" htmlFor="text">
              Link del evento
            </label>
            <input
              type="text"
              id="name"
              value={eventLink}
              className="event_form_input"
              placeholder="https://margamartinez.com/"
              onChange={handleEventLink}
            />
            <label htmlFor="name" className="event_form_label">
              Nombre del Evento
            </label>
            <input
              value={eventName}
              type="text"
              id="name"
              className="event_form_input"
              onChange={handleEventName}
              required
            />
            <label htmlFor="name" className="event_form_label">
              Edad recomendada
            </label>
            <input
              type="text"
              id="name"
              className="event_form_input"
              onChange={handleEventAge}
              value={eventAge}
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
              onChange={handleEventInformation}
              value={eventInformation}
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
