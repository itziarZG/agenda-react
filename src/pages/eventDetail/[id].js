import { useState, useEffect } from "react";
import Link from "next/link";
import {useRouter} from 'next/router'
import IconCalendar from "components/icons/IconCalendar.js";
import IconClock from "components/icons/IconClock.js";
import IconLocation from "components/icons/IconLocation.js";
import IconLink from "components/icons/IconLink.js";
import IconZoomIn from "components/icons/IconZoomIn.js";
import IconTarget from "components/icons/IconTarget.js";
import IconReset from "components/icons/IconReset.js";
import { formatDate } from "utils/tools";

import { getEventDetails } from "utils/api";

const InfoDetailEvent = () => {
  const { id } = useRouter().query
  const [event, setEvent] = useState({});

  useEffect(() => {
    if (typeof id === "undefined") {
      return;
    }

    getEventDetails(id).then(({ data }) => setEvent(data[0]));
  }, [id]);

  const age = event.age ? event.age : "- -";
  const city = event.city ? event.city : "- -";
  //const address = event.address ? event.address : "- - ";
  const information = event.info ? event.info : "- -";
  const url = event.url ? event.url : "- -";
  const hour = event.hour || "- -";
  // const hour = event.hour ? event.hour.slice(0, -3) : "- -";
  const date = formatDate(event.date);
  // const date = date1 ? date1 : "- -";

  return (
    <div className="info_detail_container">
      <Link
        href="/"
      >
        <a style={{ textDecoration: "none" }} className="info_detail_reset">
        <IconReset />
        </a>
      </Link>

      <div className="info_detail">
        <img
          className="info_detail_image"
          src={event.image}
          alt="Poster del evento"
          title="Poster del evento"
        />
        <div className="info_detail_text">
          <div className="info_detail_date">
            <h1 className="info_detail_title">{event.title}</h1>
            <div className="info_detail_items_date">
              <IconCalendar className="icon_calendar" />
              <p className="icon-text">{date}</p>
            </div>
            <div className="info_detail_items_date">
              <IconClock className="icon_clock" />
              <p className="icon-text">{hour} horas</p>
            </div>
          </div>

          <div className="info_detail_items">
            <IconLocation className="icon_items" />
            <p className="icon_info">{city}</p>
          </div>

          <div className="info_detail_items">
            <IconTarget className="icon_items" />
            <p className="icon_info">{age} años</p>
          </div>

          <div className="info_detail_items">
            <IconZoomIn className="icon_items" />
            <p className="icon_info">{information}</p>
          </div>

          <div className="info_detail_items">
            <IconLink className="icon_items" />
            <a href={url} className="icon_info">
              {url}
            </a>
          </div>
          <div className="info_cat_img"></div>
        </div>
      </div>
    </div>
  );
};

export default InfoDetailEvent;
