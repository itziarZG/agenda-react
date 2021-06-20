import React from 'react';
import './HeaderDate.css';
const HeaderDate = ({ date }) => {
  let months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  let weekdays = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
  ];
  let dateObject = new Date(date);
  let month = months[dateObject.getMonth()];
  let weekday = weekdays[dateObject.getDay()];
  let day = dateObject.getDate();

  return (
    <div className="header_date">
      <h1 className="header_date_title">
        {weekday} | <span className="header_date_day">{day}</span> de {month}
      </h1>
    </div>
  );
};

export default HeaderDate;
