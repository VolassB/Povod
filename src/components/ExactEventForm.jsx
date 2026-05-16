import React from 'react';
import styled from '@emotion/styled';
import { MdOutlineCalendarToday, MdOutlineAccessTime } from 'react-icons/md';
import { FiCamera } from 'react-icons/fi';
import GaleryIcon from '../assets/Gallery.svg?react';
import GPSIcon from '../assets/GPS.svg?react';
import CalendaryBIcon from '../assets/CalendaryB.svg?react';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  border: 1px solid #d1d5db;
  border-radius: 14px;
  font-size: 15px;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-color: #4a6bff;
    box-shadow: 0 0 0 4px #eef2ff;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 14px 16px;
  border: 1px solid #d1d5db;
  border-radius: 14px;
  font-size: 15px;
  resize: none;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-color: #4a6bff;
    box-shadow: 0 0 0 4px #eef2ff;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 12px;
`;

const IconButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border: 1px solid #d1d5db;
  border-radius: 12px;
  background: #f9fafb;
  font-size: 13px;
  font-weight: 500;
  color: #4b5563;
  cursor: pointer;
  &:hover {
    background: #f3f4f6;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const IconContainer = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #4a6bff;
  display: flex;
  align-items: center;
`;

const SubmitSection = styled.div`
  padding-top: 16px;
  border-top: 1px solid #f3f4f6;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 16px;
  background: #4a6bff;
  color: white;
  border: none;
  border-radius: 14px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(74, 107, 255, 0.2);
  transition: background 0.15s;
  &:hover {
    background: #3b52d9;
  }
`;

const ExactEventForm = () => {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <FormGroup>
        <Label>Название события *</Label>
        <Input type="text" placeholder="Например: Пляжный волейбол" />
      </FormGroup>

      <FormGroup>
        <Label>Описание *</Label>
        <TextArea rows={3} placeholder="Укажите детали встречи, уровень игроков..." />
      </FormGroup>

      <FormGroup>
        <Label>Добавить фото</Label>
        <ButtonRow>
          <IconButton type="button">
            <GaleryIcon size={16} /> Из галереи
          </IconButton>
          <IconButton type="button">
            <FiCamera size={16} /> Сделать фото
          </IconButton>
        </ButtonRow>
      </FormGroup>

      <FormGroup>
        <Label>Точная дата *</Label>
        <InputWrapper>
          <CalendaryBIcon size={18} style={{position: "absolute", zIndex: "1", paddingLeft: "24px"}}/>
          <Input style={{position: "relative", paddingLeft: "35px"}} type="text" placeholder="ДД.ММ.ГГГГ" />
        </InputWrapper>
      </FormGroup>

      <FormGroup>
        <Label>Точное время *</Label>
        <InputWrapper>
          <Input type="text" placeholder="ЧЧ:ММ" />
          <IconContainer><MdOutlineAccessTime size={18} /></IconContainer>
        </InputWrapper>
      </FormGroup>

      <FormGroup>
        <Label>Точное место встречи *</Label>
        <InputWrapper>
          <GPSIcon size={18} style={{position: "absolute", zIndex: "1", padding: "10px"}}/>
          <Input style={{position: "relative", paddingLeft: "35px"}} type="text" placeholder="Введите адрес или название места" />
        </InputWrapper>
      </FormGroup>

      <SubmitSection>
        <SubmitButton type="submit">Создать повод</SubmitButton>
      </SubmitSection>
    </Form>
  );
};

export default ExactEventForm;
