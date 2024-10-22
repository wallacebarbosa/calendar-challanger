import React, { useEffect, useState } from "react";
import Day from "./Day";
import CalendarUtils from "../utils/CalendarUtils";
import { useCalendarState } from "../../../providers/CalendarProvider/CalendarStateContext";
import { getReminders } from '../../../services/reminderService';
import { Reminder } from "../../../types/Reminder";

// type CalendarDaysProps = {
//   currentDay: number;
//   currentMonth: number;
//   currentYear: number;
// };

const CalendarDays = () => {
  const { currentDay, month, year } = useCalendarState(); // Obtém o dia, mês e ano do estado global
  const [reminders, setReminders] = useState<Reminder[]>([]); // Estado para armazenar os lembretes

  useEffect(() => {
    const loadReminders = async () => {
      const data = await getReminders();
      setReminders(data);
    };

    loadReminders();
  }, [setReminders]);

  const daysInMonth = CalendarUtils.getDaysInMonth(month, year);
  const firstDayOfMonth = CalendarUtils.getFirstDayOfMonth(month, year);
  const daysInPreviousMonth = CalendarUtils.getDaysInPreviousMonth(month, year);

  const renderDays = () => {
    const days = [];



    // Dias do mês anterior
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      days.push(
        <Day key={`prev-${i}`} day={daysInPreviousMonth - i} isPrevMonth />
      );
    }

    // Dias do mês atual
    for (let i = 1; i <= daysInMonth; i++) {

      const dayReminders = reminders.filter(reminder => {
        const reminderDate = new Date(reminder.date);
        return reminderDate.getDate() === i-1 &&  // Ajuste para o dia do lembrete
               reminderDate.getMonth() === month && 
               reminderDate.getFullYear() === year;
      });

      days.push(
        <Day
          key={`current-${i}`}
          day={i}
          isCurrent={i === currentDay && month === new Date().getMonth()}
          reminders={dayReminders}
        />
      );
    }

    // Adiciona os primeiros dias do próximo mês, se necessário
    const totalDaysRendered = firstDayOfMonth + daysInMonth;
    const remainingDays = 7 - (totalDaysRendered % 7);

    if (remainingDays < 7) {
      for (let i = 1; i <= remainingDays; i++) {
        days.push(<Day key={`next-${i}`} day={i} isNextMonth />);
      }
    }

    return days;
  };

  return <div className="days">{renderDays()}</div>;
};

export default CalendarDays;