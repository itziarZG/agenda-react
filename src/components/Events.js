import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import api from "../utils/api";

import HeaderDate from "./HeaderDate.js";
import IconDelete from "./icons/IconDelete.js";

const Events = ({ events, date, userId }) => {
  const history = useRouter();

  async function deleteEvents(id) {
    await api.deleteEvent(id);
    window.location.reload()
  }

  return (
    <div>
      <HeaderDate date={date} />
      {events[date].map((ev) => {
        // const time = ev.hour ? ev.hour.slice(0, -3) + "h" : null;
        return (
          <div className="event" key={ev.id}>
            <div className="event_box_1">
              <img className="event_img" src={ev.imageUrl} alt={ev.name} />
              <h1 className="event_title">{ev.title}</h1>
            </div>
            <div className="event_box_2">
              <div className="event_date">{ev.hour}</div>
              <div className="more_delete_btns">
                {userId === ev.user_id && (
                  <div>
                    {/* <Link href={`createEvents/${ev.id}`}>
                      <a>
                        <IconEdit className="icon_edit" />
                      </a>
                    </Link> */}
                    <span onClick={() => deleteEvents(ev.id)}>
                      <IconDelete className="icon_delete" />
                    </span>
                  </div>
                )}
              </div>
              <Link href={`/eventDetail/${ev.id}`}>
                <a className="more_info">Info</a>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Events;
