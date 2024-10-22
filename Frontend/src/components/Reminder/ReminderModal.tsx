// ReminderModal.tsx
import React from "react";
import "./reminder.css";

interface ReminderModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ReminderModal = ({ isOpen, onClose, children }: ReminderModalProps) => {
  const classname = isOpen ? "reminder" : "reminder hidden";

  return (
    <div className={classname}>
      <button className="close-button" onClick={onClose}>
        ✖
      </button>
      {children}
    </div>
  );
};

export default ReminderModal;
