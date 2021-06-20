import React from "react";
import "./Events.css";
import { Link, useHistory } from "react-router-dom";
import api from "../utils/api";

import HeaderDate from "./HeaderDate.js";
import IconDelete from "./img/IconDelete.js";
import IconEdit from "./img/IconEdit";

const Events = ({ events, date, userId }) => {
  let history = useHistory();

  async function deleteEvents(id) {
    await api.deleteEvent(id);

    history.go(0);
  }

  return (
    <div>
      <HeaderDate date={date} />
      {events[date].map((ev) => {
        // const time = ev.hour ? ev.hour.slice(0, -3) + "h" : null;
        return (
          <div className="event" key={ev.id}>
            <div className="event_box_1">
              <img className="event_img" src={ev.image} alt={ev.name} />
              <h1 className="event_title">{ev.title}</h1>
            </div>
            <div className="event_box_2">
              <p className="event_date">{ev.hour}</p>
              <div className="more_delete_btns">
                {userId === ev.user_id && (
                  <div>
                    <Link to={{ pathname: "/createEvents", state: { ev } }}>
                      <IconEdit className="icon_edit" />
                    </Link>
                    <span onClick={() => deleteEvents(ev.id)}>
                      <IconDelete className="icon_delete" />
                    </span>
                  </div>
                )}
              </div>
              <Link className="more_info" to={`/eventDetail/${ev.id}`}>
                Info
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Events;
