import { useState } from "react";
import styled from '@emotion/styled';
import Button from './Button';

const FormContainer = styled.div`
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #1a1a1a;
`;

const Label = styled.label`
  display: block;
  margin: 16px 0 6px;
  font-weight: 500;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #0066ff;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  min-height: 100px;
  font-size: 16px;
  resize: vertical;
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
`;

export default function CreateEventForm() {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    date: "",
    time: "",
    maxParticipants: "",
    type: "public", // public или private
    description: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Новая встреча:", formData);
    alert("Встреча создана! (пока только в консоли)");
    // Здесь позже будет отправка на бэкенд
  };

  return (
    <FormContainer>
      <Title>Создать новую встречу</Title>
      
      <form onSubmit={handleSubmit}>
        <Label>Название встречи</Label>
        <Input 
          type="text" 
          name="title" 
          value={formData.title} 
          onChange={handleChange}
          required 
        />

        <Label>Место встречи</Label>
        <Input 
          type="text" 
          name="location" 
          value={formData.location} 
          onChange={handleChange}
          placeholder="Например: Парк Горького или у Димы дома"
          required 
        />

        <div style={{ display: "flex", gap: "16px" }}>
          <div style={{ flex: 1 }}>
            <Label>Дата</Label>
            <Input 
              type="date" 
              name="date" 
              value={formData.date} 
              onChange={handleChange}
              required 
            />
          </div>
          <div style={{ flex: 1 }}>
            <Label>Время</Label>
            <Input 
              type="time" 
              name="time" 
              value={formData.time} 
              onChange={handleChange}
              required 
            />
          </div>
        </div>

        <Label>Тип встречи</Label>
        <Select name="type" value={formData.type} onChange={handleChange}>
          <option value="public">Публичное мероприятие</option>
          <option value="private">Приватное (для друзей)</option>
        </Select>

        <Label>Максимальное количество участников</Label>
        <Input 
          type="number" 
          name="maxParticipants" 
          value={formData.maxParticipants} 
          onChange={handleChange}
          placeholder="Неограничено"
        />

        <Label>Описание / детали</Label>
        <TextArea 
          name="description" 
          value={formData.description} 
          onChange={handleChange}
          placeholder="Что планируем делать, что взять с собой и т.д."
        />

        <Button primary style={{ marginTop: "20px", width: "100%" }}>
          Создать встречу
        </Button>
      </form>
    </FormContainer>
  );
}