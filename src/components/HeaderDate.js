import React from 'react';

const MONTHS = [
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

const WEEKDAYS = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sabado',
];

const HeaderDate = ({ date }) => {
  let dateObject = new Date(date);
  let month = MONTHS[dateObject.getMonth()];
  let weekday = WEEKDAYS[dateObject.getDay()];
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
