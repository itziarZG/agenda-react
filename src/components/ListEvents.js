import React, { useState, useEffect } from "react";
import { getEventsFromDate } from "../utils/api";
import "./ListEvents.css";
import Loading from "./Loading.js";

import { getTodayDate, groupByDate, sortObject } from "../utils/tools";
import Events from "./Events.js";
import EmptyEvents from "./EmptyEvents.js";

const ListEvents = ({ userId }) => {
  const [events, setEvents] = useState([]);
  const [status, setStatus] = useState("loading");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const today = getTodayDate();
    getEventsFromDate(today).then((resp) => {
      if (resp.status === 200) {
        const { data } = resp;
        const grouped = groupByDate(data);
        const sorted = sortObject(grouped);
        setEvents(sorted);

        if (data.length <= 0) {
          setStatus("empty");
        } else {
          setStatus("loaded");
        }
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
          <Events events={events} date={date} userId={userId} />
        </div>
      );
    });
  }

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "empty") {
    return <EmptyEvents />;
  }

  return (
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
  );
};

export default ListEvents;
