// DayReminders.tsx
import React, { MouseEvent } from "react";
import { Reminder } from "../../../types/Reminder";
import { useModalHandler } from "../hooks/useModalHandle";

type DayRemindersProps = {
  reminders?: Reminder[];
  showMore: boolean;
  onShowMore: (e: MouseEvent<HTMLDivElement>) => void;
  day: number;
};

export const DayReminders = ({ reminders, showMore, onShowMore, day }: DayRemindersProps) => {
  const { handleReminderClick } = useModalHandler(day);

  if (!reminders || reminders.length === 0) return null;

  const renderReminders = (remindersToShow: Reminder[]) => 
    remindersToShow.map(reminder => (
      <div
        className="event"
        key={reminder._id}
        style={{ backgroundColor: reminder.color }}
        onClick={(e) => handleReminderClick(reminder, e)}
      >
        {reminder.title}
      </div>
    ));

  return (
    <>
      {renderReminders(reminders.slice(0, 2))}
      {reminders.length > 2 && (
        <div onClick={onShowMore} className="view-more-button">
          {showMore ? "Mostrar menos" : "Mostra mais"}
        </div>
      )}
      {showMore && (
        <div className="card">
          <div className="reminder-actions">
            <div onClick={onShowMore} className="reminder-btn close-btn" title="Fechar">❌</div>
          </div>
          <div className="reminder-card-header">
            <h2>Mais eventos no dia {day}</h2>
          </div>
          {renderReminders(reminders)}
        </div>
      )}
    </>
  );
};
