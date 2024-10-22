import React, { createContext, useContext, useState, ReactNode } from "react";
import { initializeCalendarState } from "./calendarInitializer";

// Define o tipo do contexto
interface GlobalState {
  month: number;
  year: number;
  currentDay: number;
  clickedDay: { day: number; currentMont: number; year: number } | null;
  handleSetClickedDay: (day: number) => void;
  setMonth: (month: number) => void;
  setYear: (year: number) => void;
}

// Cria o contexto
const GlobalStateContext = createContext<GlobalState | undefined>(undefined);

// Cria o Provider
export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const { currentDay, currentMonth, currentYear } = initializeCalendarState();

  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);
  const [clickedDay, setClickedDay] = useState<{
    day: number;
    currentMont: number;
    year: number;
  } | null>(null);

  const handleSetClickedDay = (day: number) => {
    let currentMont = month + 1;
    setClickedDay({ day, currentMont, year });
  };

  return (
    <GlobalStateContext.Provider
      value={{
        currentDay,
        month,
        year,
        clickedDay,
        setMonth,
        setYear,
        handleSetClickedDay,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

// Hook para usar o contexto
export const useCalendarState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error(
      "useCalendarState must be used within a GlobalStateProvider"
    );
  }
  return context;
};
