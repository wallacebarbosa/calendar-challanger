// ModalContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define o tipo do estado de cada modal
interface ModalDetails {
  isModalOpen: boolean;
  modalPosition: { x: number; y: number };
  data: Object;
}

// Define o tipo do contexto para múltiplos modais
interface ModalState {
  modals: { [id: string]: ModalDetails };  // Dicionário de modais com ID como chave
  addModal: (id: string) => void;
  openModal: (id: string, position?: { x: number; y: number }, data?: Object) => void;
  closeModal: (id: string) => void;
  setModalPosition: (id: string, position: { x: number; y: number }) => void;
  setIsModalOpen: (id: string, isModalOpen: boolean) => void;
}

// Cria o contexto
const ModalContext = createContext<ModalState | undefined>(undefined);

// Cria o provider para múltiplos modais
export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modals, setModals] = useState<{ [id: string]: ModalDetails }>({});

  const addModal = (id: string) => {
    setModals((prevModals) => ({
      ...prevModals,
      [id]: { isModalOpen: false, modalPosition: { x: 0, y: 0 } , data: {} },
    }));
  };
  // Abre um modal com base no ID
  const openModal = (id: string, position = { x: 0, y: 0 }, data = {}) => {
    setModals((prevModals) => ({
      ...prevModals,
      [id]: { isModalOpen: true, modalPosition: position, data },
    }));
  };

  const setIsModalOpen = (id: string, isModalOpen: boolean) => {
    setModals((prevModals) => ({
      ...prevModals,
      [id]: { ...prevModals[id], isModalOpen },
    }));
  };

  // Fecha um modal com base no ID
  const closeModal = (id: string) => {
    setModals((prevModals) => ({
      ...prevModals,
      [id]: { ...prevModals[id], isModalOpen: false },
    }));
  };

  // Define a posição de um modal específico
  const setModalPosition = (id: string, position: { x: number; y: number }) => {
    setModals((prevModals) => ({
      ...prevModals,
      [id]: { ...prevModals[id], modalPosition: position },
    }));
  };

  return (
    <ModalContext.Provider value={{ modals,addModal, setIsModalOpen, openModal, closeModal, setModalPosition }}>
      {children}
    </ModalContext.Provider>
  );
};

// Hook para usar o contexto de múltiplos modais
export const useModalState = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModalState must be used within a ModalProvider');
  }
  return context;
};
