// useModalHandler.ts
import { MouseEvent } from "react";
import { useCalendarState } from "../../../providers/CalendarProvider/CalendarStateContext";
import { useModalState } from "../../../providers/ModalProvider/ModalContext";
import { Reminder } from "../../../types/Reminder";

export const useModalHandler = (day: number) => {
  const { handleSetClickedDay } = useCalendarState();
  const { modals, setIsModalOpen, openModal } = useModalState();

  const handleDayClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const isReminderModalOpen = modals["Reminder"]?.isModalOpen;
    
    if (isReminderModalOpen === undefined) {
      openModal("Reminder");
    }

    handleSetClickedDay(day);
    setIsModalOpen("Reminder", !isReminderModalOpen);
  };

  const handleReminderClick = (reminderId: Reminder, e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const isCardReminderModalOpen = modals["CardReminder"]?.isModalOpen;
    
    if (!isCardReminderModalOpen) {
      openModal("CardReminder", { x: e.clientX, y: e.clientY }, reminderId);
    }

    setIsModalOpen("CardReminder", !isCardReminderModalOpen);
  };

  return {
    handleDayClick,
    handleReminderClick,
  };
};
