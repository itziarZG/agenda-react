import { useState, useEffect, useContext } from "react";
import Head from "next/head";

import { getEventsFromDate } from "utils/api";
import { getTodayDate, groupByDate, sortObject } from "utils/tools";
import EmptyEvents from "components/EmptyEvents.js";
import Events from "components/Events.js";
import Loading from "components/Loading.js";
import userContext from "context/userContext";

const LOADING_STATES = {
  empty: "empty",
  loading: "loading",
};

const ListEvents = () => {
  const { user, setUser } = useContext(userContext);

  const [events, setEvents] = useState([]);
  const [status, setStatus] = useState(LOADING_STATES.loading);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const today = getTodayDate();
    getEventsFromDate(today).then((resp) => {
      if (resp.status === 200) {
        const { data } = resp;
        const grouped = groupByDate(data);
        const sorted = sortObject(grouped);
        setEvents(sorted);

        const newStatus = data.length <= 0 ? "empty" : "loaded";
        setStatus(newStatus);
      } else {
        setErrorMessage("Ha habido algún error. Vuelve a cargar la página. ");
      }
    });
  }, []);

  function renderEvents() {
    const dates = Object.keys(events);
    return dates.map((date) => {
      return (
        <div key={date} className="event_list_1">
          <Events events={events} date={date} userId={user.userId} />
        </div>
      );
    });
  }

  if (status === LOADING_STATES.loading) {
    return <Loading />;
  }

  if (status === LOADING_STATES.empty) {
    return <EmptyEvents />;
  }

  return (
    <>
      <Head>
        <title>Agenda Peques Eivissa</title>
        <meta property="og:title" content="Agenda actividades Infantiles Ibiza" key="title" />
        <meta
          property="og:description"
          name="description"
          content="Agenda de actividades infantiles de Ibiza"
          key="description"
        />
      </Head>
      <div className="eventsTime">
        <div className="event_list_2">
          <div className="img-globe-box2"></div>
        </div>
        {errorMessage !== "" ? (
          <p style={{ color: "red" }}>{errorMessage}</p>
        ) : (
          <></>
        )}
        <div className="events">{renderEvents()}</div>
      </div>
    </>
  );
};

export default ListEvents;
