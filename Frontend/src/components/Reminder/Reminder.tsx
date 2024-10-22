// Reminder.tsx
import React from "react";
import ReminderModal from "./ReminderModal";
import ReminderForm from "./ReminderForm";
import { useCalendarState } from "../../providers/CalendarProvider/CalendarStateContext";
import { useModalState } from "../../providers/ModalProvider/ModalContext";
import { IModal } from '../../types/IModal';
import { Reminder as IReminder} from "../../types/Reminder";

const Reminder = ({ id }:IModal) => {
  const { modals, closeModal, setIsModalOpen } = useModalState();
  const { clickedDay } = useCalendarState();



  const modal = modals[id]; // Pega o modal com base no ID
  
  if (!modal || !modal.isModalOpen) return null;



  const handleSuccess = () => {
    setIsModalOpen(id, false) // Fecha o modal após adicionar o lembrete
    window.location.reload(); 
  };

  return (
    <ReminderModal isOpen={true} onClose={() => closeModal(id)}>
      <ReminderForm clickedDay={clickedDay} onSuccess={handleSuccess} initialData={modal.data as IReminder || null} />
    </ReminderModal>
  );
};

export default Reminder;
