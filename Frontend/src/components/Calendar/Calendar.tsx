import React from "react";
import Month from "./components/Month";
import Week from "./components/Week";

import "./styles/calendar.css";

import CalendarDays from "./components/CalendarDays";

const Calendar = () => {
  return (

      <div className="calendar">
        <Month />
        <Week />
        <CalendarDays />
      </div>

  );
};

export default Calendar;
