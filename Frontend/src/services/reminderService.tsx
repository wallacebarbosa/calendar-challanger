import axios from "axios";
import { Reminder } from "../types/Reminder";

const API_URL = "http://localhost:3001/reminders"; // URL da API

// Função para obter todos os lembretes
export const getReminders = async (): Promise<Reminder[]> => {
  const response = await axios.get<Reminder[]>(API_URL);
  return response.data;
};

// Função para adicionar um novo lembrete
export const createReminder = async (reminder: Reminder): Promise<Reminder> => {
  const reminderJson = {
    title: reminder.title,
    date: reminder.date,
    time: reminder.time,
    description: reminder.description,
    color: reminder.color,
  };
  const response = await axios.post<Reminder>(API_URL, reminderJson);
  return response.data;
};

// Função para editar um lembrete existente
export const updateReminder = async (
  updatedReminder: Reminder
): Promise<Reminder | null> => {
  const response = await axios.put<Reminder>(
    `${API_URL}/${updatedReminder._id}`,
    updatedReminder
  );
  return response.data;
};

// Função para excluir um lembrete
export const deleteReminder = async (_id: string): Promise<boolean> => {
  await axios.delete(`${API_URL}/${_id}`);
  return true; // Retornar true após excluir
};
