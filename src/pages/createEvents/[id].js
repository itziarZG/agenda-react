import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { createEvent, getEventDetails } from "utils/api";
import IconReset from "components/icons/IconReset.js";
import Head from "next/head";
import useField from "hooks/useField.js";
import userContext from "context/userContext";

export default function CreateEvents() {
  const { id } = useRouter().query;
  const history = useRouter();

  const { user } = useContext(userContext)
  const { userId } = user
  const [error, setErrorMessage] = useState("");
  const eventImgField = useField({ type: "text", name: "eventImg" });
  const eventNameField = useField({ type: "text", name: "eventName" });
  const eventLinkField = useField({ type: "text", name: "eventLink" });
  const eventAgeField = useField({ type: "text", name: "eventAge" });
  const eventCityField = useField({ type: "text", name: "eventCity" });
  const eventInformationField = useField({
    type: "text",
    name: "eventInformation",
  });
  const eventHourField = useField({ type: "text", name: "eventHour" });
  const eventDateField = useField({ type: "date", name: "eventDate" });
  const eventUrlField = useField({ type: "text", name: "eventUrl" });
  // const eventFileField = useField({ type: "file", name: "eventFile" });
  const [eventData, setEventData] = useState({
    title: "",
    imageUrl: "",
    date: "",
    url: "",
    age: 0,
    city: "",
    info: "",
    hour: "",
    user_id: userId,
  });

  useEffect(() => {
    if (id !== "new" && id !== undefined) {
      getEventDetails(id).then(({ data }) => {

        setEventData({
          title: data[0].title,
          imageUrl: data[0].image,
          date: data[0].date,
          url: data[0].url,
          age: data[0].age,
          city: data[0].city,
          info: data[0].info,
          hour: data[0].hour,
          user_id: userId,
        });
      });
    } else if (id === "new") {
      setEventData({
        title: "",
        imageUrl: "",
        date: "",
        url: "",
        age: 0,
        city: "",
        info: "",
        hour: "",
        user_id: userId,
      });
    }
  }, [id]);

  const handleFormEvent = (ev) => {
    ev.preventDefault();
    const data = {
      title: eventNameField.value,
      imageUrl: eventImgField.value,
      date: eventDateField.value,
      url: eventLinkField.value,
      age: eventAgeField.value,
      city: eventCityField.value,
      info: eventInformationField.value,
      hour: eventHourField.value,
      user_id: userId,
    }
    setEventData(data);

    createEvent(data)
      .then((resp) => {

        if (resp.error) {
          setErrorMessage(resp.error.message);
          setTimeout(() => setErrorMessage(""), 3000);
        } else if (resp.status === 201) {
          history.push("/");
        }
      })
      .catch((error) => setErrorMessage(error.message));
  };
  const updateEvent = () => {

    // setEventData({
    //   title:eventData.title,
    //   image:eventData.image,
    //   date:eventData.date,
    //   url:eventData.url,
    //   age:eventData.age,
    //   city:eventData.city,
    //   info:eventData.info,
    //   hour:eventData.hour,
    //   user_id: userId,
    // });
  };
  const isSubmitDisabled =
    !eventNameField.value || !eventHourField.value || !eventDateField.value;

  return (
    <>
      <Head>
        <title>Agenda Peques - Crear evento</title>
        <meta
          property="og:title"
          content="Agenda Peques - Crear evento"
          key="title"
        />
        <meta
          property="og:description"
          name="description"
          content="Crea un evento para compartirla con todas las personas suscritas en la página de Agenda Peques"
          key="description"
        />
      </Head>
      <Link href="/">
        <a style={{ textDecoration: "none" }}>
          <IconReset className="reset-Info-createEvent" />
        </a>
      </Link>
      <div className="create-event-box">
        <div className="box-create-event-img">
          <div className="create-event-img"></div>
        </div>
        <div className="form_event">
          <h2 className="create_event_title">Crear Evento</h2>
          <form className="event_form" onSubmit={handleFormEvent}>
            <label htmlFor="name" className="event_form_label">
              Nombre del Evento*
            </label>
            <input
              id="name"
              className="event_form_input"
              {...eventNameField}
              required
            />
            <label className="event_form_label" htmlFor="link">
              Link del evento
            </label>
            <input
              id="link"
              className="event_form_input"
              placeholder="http://agendapequeseivissa.tk"
              {...eventLinkField}
            />
            <label className="event_form_label" htmlFor="text">
              Imagen del evento
            </label>
            <input
              id="url"
              className="event_form_input"
              placeholder="url de la imagen"
              {...eventUrlField}
            />
            {/* <input
              id="file"
              className="event_form_input event_form_input_file"
              placeholder="subir una imagen"
              {...eventFileField}
            /> */}
            <label htmlFor="start" className="event_form_label">
              Fecha*
            </label>
            <input
              className="event_form_input event_form_input_number"
              id="start"
              name="start"
              placeholder={Date.now()}
              min={Date.now()}
              required
              {...eventDateField}
            ></input>
            <label htmlFor="start" className="event_form_label">
              Hora*
            </label>
            <input
              className="event_form_input event_form_input_number"
              id="hour"
              placeholder="Ej: 17:00"
              {...eventHourField}
              required
            ></input>


            <label htmlFor="age" className="event_form_label">
              Edad recomendada
            </label>
            <input
              id="age"
              className="event_form_input_number event_form_input"
              {...eventAgeField}
            />
            <label htmlFor="city" className="event_form_label">
              Población
            </label>
            <input id="city" className="event_form_input" {...eventCityField} />
            <label htmlFor="textarea" className="event_form_label">
              Información adicional:
            </label>
            <textarea
              className="event_form_input"
              rows="4"
              id="textarea"
              name="textarea"
              {...eventInformationField}
            ></textarea>
            {error !== "" ? <p style={{ color: "red" }}>{error}</p> : <></>}
            <button
              type="submit"
              value="Crear evento"
              className="event_btn"
              disabled={isSubmitDisabled}
            >Crear Evento </button>
          </form>
        </div>
      </div>
    </>
  );
}
