// ReminderForm.tsx
import React, { useState, useEffect } from "react";
import Input from "../input/input";
import Button from "../button/button";
import { createReminder, updateReminder } from "../../services/reminderService"; // Importa os serviços da API
import type { Reminder as reminderType } from "../../types/Reminder";
import { formatTwoDigits } from "../../utils/utils";

interface ReminderFormProps {
  clickedDay: { year: number; currentMont: number; day: number } | null;
  onSuccess: () => void;
  initialData?: reminderType; // Novo prop para dados iniciais (para edição)
}

const ReminderForm = ({ clickedDay, onSuccess, initialData }: ReminderFormProps) => {
  const datevalue = `${clickedDay?.year}-${formatTwoDigits(clickedDay?.currentMont)}-${formatTwoDigits(clickedDay?.day)}`;
console.log(initialData?._id);
  const [title, setTitle] = useState(initialData?.title ?? "");
  const [date, setDate] = useState(initialData?.date ?? datevalue); 
  const [time, setTime] = useState(initialData?.time ?? ""); 
  const [description, setDescription] = useState(initialData?.description ?? "");
  const [color, setColor] = useState(initialData?.color ?? "#000000");

  useEffect(() => {
    if (clickedDay) {
      setDate(datevalue);
    }
  }, [clickedDay, datevalue]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    setDate(e.target.value);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  const handleSubmit = async () => {
    if (!title || !date || !time) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const reminder: reminderType = {
      _id: initialData?._id ?? '', // Usa o ID do lembrete existente ou gera um novo
      title,
      date,
      time,
      description,
      color,
    };
    console.log(reminder);
    try {
      if (initialData?._id !== undefined) {
        await updateReminder(reminder); // Atualiza o lembrete existente
        alert("Lembrete atualizado com sucesso!");
      } else {
        await createReminder(reminder); // Cria um novo lembrete
        alert("Lembrete adicionado com sucesso!");
      }
      onSuccess();
    } catch (error) {
      console.error("Erro ao salvar o lembrete:", error);
    }
  };

  return (
    <div>
      <h2>{initialData?._id !== undefined ? "Editar lembrete" : `Adicionar novo lembrete no dia ${clickedDay?.day}`}</h2>
      <Input type="text" placeholder="Título" value={title} onChange={handleTitleChange} />
      <Input type="date" value={date} onChange={handleDateChange} />
      <Input type="time" value={time} onChange={handleTimeChange} />
      <Input type="text" placeholder="Descrição" value={description} onChange={handleDescriptionChange}  maxLength={30} />
  
      <div style={{ display: "flex", alignItems: "center", placeContent: "center" , marginBottom: "10px" }}>
      <label htmlFor="colorPicker">Escolha a cor:</label>
        <input
          type="color"
          id="colorPicker"
          value={color}
          onChange={handleColorChange}
          style={{             
            width: "30px",
            height: "30px",
            border: "1px solid #ccc",
            backgroundColor: color,
            borderRadius: "5px", }}
        />

      </div>
      <Button onClick={handleSubmit}>{initialData?._id !== undefined ? "Atualizar" : "Adicionar"}</Button>
    </div>
  );
};

export default ReminderForm;
