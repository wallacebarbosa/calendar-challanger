// EventModal.tsx
import React, { useEffect } from "react";
import "./CardReminder.css";
import { IModal } from "../../types/IModal";
import { useModalState } from "../../providers/ModalProvider/ModalContext";
import { deleteReminder } from "../../services/reminderService";
import { formatDateFromISO } from "../../utils/utils";

interface ReminderCardProps {
  _id?: string;
  title?: string;
  description?: string;
  date?: string;
  time?: string;
}

const CardReminder = ({ id: modalId }: IModal) => {
  const { modals, setIsModalOpen, openModal } = useModalState();
  const modal = modals[modalId];

  useEffect(() => {

    if (modal && modal.isModalOpen) {
      console.log("Modal aberto com dados:", modal.data);
    }
  }, [modal]);

  if (!modal || !modal.isModalOpen) return null;

  const { title, description, date, time, _id } =
    modal.data as ReminderCardProps;

  const onEdit = () => {
    let isModalOpen = modals["Reminder"]?.isModalOpen;
    if (isModalOpen === undefined) {
      openModal("Reminder", { x: 0, y: 0 }, modal.data);
    }

    setIsModalOpen("Reminder", !isModalOpen);
  };

  const onDelete = (id: string | undefined) => {


    if (id !== undefined) {
      deleteReminder(id);
      setIsModalOpen(modalId, false);
      window.location.reload();
    }
  };

  const onClose = () => {
 
    setIsModalOpen(modalId, false);
  };

  return (
    <div className="reminder-card">
      <div className="reminder-card-header">
        <h3>{title}</h3>
      </div>
      <p className="reminder-date-time">
        {formatDateFromISO(date)} as {time}
      </p>
      {description && <p className="reminder-description">{description}</p>}
      <div className="reminder-actions">
        <button
          onClick={onEdit}
          className="reminder-btn edit-btn"
          title="Editar"
        >
          ✏️
        </button>
        <button
          onClick={() => onDelete(_id)}
          className="reminder-btn delete-btn"
          title="Excluir"
        >
          🗑️
        </button>
        <button
          onClick={onClose}
          className="reminder-btn close-btn"
          title="Fechar"
        >
          ❌
        </button>
      </div>
    </div>
  );
};

export default CardReminder;
