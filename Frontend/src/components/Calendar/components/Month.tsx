import React from "react";
import "../styles/month.css";
import CalendarUtils from "../utils/CalendarUtils";
import { useCalendarState } from "../../../providers/CalendarProvider/CalendarStateContext";


const Month = () => {

    const { month, year, setMonth, setYear } = useCalendarState(); 



    // Funções de navegação entre meses
    const handleNextMonth = () => {
        const { newMonth, newYear } = CalendarUtils.getNewMonth(month, year, "next");
        setMonth(newMonth);
        setYear(newYear);
    
    };

    const handlePrevMonth = () => {
        const { newMonth, newYear } = CalendarUtils.getNewMonth(month, year, "prev");
        setMonth(newMonth);
        setYear(newYear);
    };



  return (
    <div className="month">
      <i className="prev" onClick={handlePrevMonth}>❮</i>
      <div className="date">
        <h1>{CalendarUtils.getMonthName(month)}</h1>
        <p>{year}</p>
      </div>
      <i className="next" onClick={handleNextMonth}>❯</i>
    </div>
  );
};

export default Month;
