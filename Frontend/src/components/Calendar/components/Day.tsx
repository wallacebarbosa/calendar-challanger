// Day.tsx
import React, { MouseEvent, useState } from "react";
import "../styles/day.css";
import { Reminder } from "../../../types/Reminder";
import { DayReminders } from "./DayReminders";
import { useModalHandler } from "../hooks/useModalHandle";


type DayProps = {
  day: number;
  isCurrent?: boolean;
  isPrevMonth?: boolean;
  isNextMonth?: boolean;
  reminders?: Reminder[];
};

const Day = ({ day, isCurrent, isPrevMonth, isNextMonth, reminders }: DayProps) => {
  const className = `day ${isCurrent ? "current" : ""} ${isPrevMonth ? "prev" : ""} ${isNextMonth ? "next" : ""}`;
  const { handleDayClick } = useModalHandler(day);
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setShowMore(prev => !prev);
  };

  

  return (
    <div className={className} onClick={handleDayClick}>
      <p>{day}</p>
      <DayReminders reminders={reminders} showMore={showMore} onShowMore={toggleShowMore} day={day} />
    </div>
  );
};

export default Day;
