import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

// Стили страницы регистрации
const AuthContainer = styled.div`
  min-height: 100vh;
  background: #f4f6f9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: system-ui, -apple-system, sans-serif;
  padding: 20px;
  box-sizing: border-box;
`;

const AuthCard = styled.div`
  background: white;
  width: 100%;
  max-width: 440px;
  padding: 40px;
  border-radius: 24px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const LogoBlock = styled.div`
  font-size: 32px;
  font-weight: 800;
  color: #4a6bff;
  text-align: center;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  text-align: center;
  color: #6b7280;
  font-size: 15px;
  margin: 0 0 32px 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
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
  background: #f9fafb;
  &:focus {
    outline: none;
    border-color: #4a6bff;
    background: white;
    box-shadow: 0 0 0 4px #eef2ff;
  }
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
  margin-top: 12px;
  box-shadow: 0 4px 14px rgba(74, 107, 255, 0.2);
  transition: background 0.15s;
  &:hover {
    background: #3b52d9;
  }
`;

// Компонент страницы регистрации
const Register = () => {
  // Переменная объявлена строго один раз
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <AuthContainer>
      <AuthCard>
        <LogoBlock>🔷 Повод</LogoBlock>
        <Subtitle>Создайте аккаунт, чтобы находить компании</Subtitle>
        
        <Form onSubmit={handleRegister}>
          <FormGroup>
            <Label>Имя и фамилия</Label>
            <Input type="text" placeholder="Игнатьева Василиса" required />
          </FormGroup>

          <FormGroup>
            <Label>Город</Label>
            <Input type="text" placeholder="Санкт-Петербург" required />
          </FormGroup>

          <FormGroup>
            <Label>Электронная почта</Label>
            <Input type="email" placeholder="example@mail.com" required />
          </FormGroup>

          <FormGroup>
            <Label>Пароль</Label>
            <Input type="password" placeholder="••••••••" required />
          </FormGroup>

          <SubmitButton type="submit">Зарегистрироваться</SubmitButton>
        </Form>
      </AuthCard>
    </AuthContainer>
  );
};

export default Register;
