import React, { useState } from 'react';
import styled from '@emotion/styled';
import { MdHome, MdAddCircleOutline, MdEventNote, MdForum, MdLocationOn, MdClose } from 'react-icons/md';
import { FaBell } from 'react-icons/fa';
import { FiImage, FiCamera } from 'react-icons/fi';

export default CreateEventIdea;

// Стилизация компонентов
const Container = styled.div`
  min-height: 100vh;
  background: #f4f6f9;
  font-family: system-ui, -apple-system, sans-serif;
`;

const Header = styled.header`
  background: white;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid #e5e7eb;
`;

const Logo = styled.a`
  font-size: 28px;
  font-weight: 700;
  color: #4a6bff;
  text-decoration: none;
`;

const SearchInput = styled.input`
  flex: 1;
  max-width: 420px;
  padding: 12px 20px;
  border: 1px solid #ddd;
  border-radius: 12px;
  font-size: 16px;
  background: #f3f4f6;
  &:focus {
    outline: none;
    background: white;
    border-color: #4a6bff;
  }
`;

const BellIcon = styled.div`
  color: #555;
  cursor: pointer;
  margin-left: auto;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Main = styled.div`
  display: flex;
  gap: 24px;
  padding: 24px;
  max-width: 1280px;
  margin: 0 auto;
`;

const Sidebar = styled.div`
  width: 260px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.div`
  padding: 14px 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 17px;
  font-weight: 500;
  cursor: pointer;
  color: ${props => props.active ? '#4a6bff' : '#374151'};
  background: ${props => props.active ? '#eef2ff' : 'transparent'};
  &:hover {
    background: #f3f4f6;
  }
`;

const Feed = styled.div`
  flex: 1;
  max-width: 680px;
  background: white;
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
  margin: 0 auto;
`;

const ToggleContainer = styled.div`
  display: flex;
  background: #f3f4f6;
  padding: 4px;
  border-radius: 14px;
  max-width: 320px;
  margin: 0 auto 32px auto;
`;

const ToggleButton = styled.button`
  flex: 1;
  padding: 10px 16px;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: ${props => props.active ? '600' : '500'};
  cursor: pointer;
  background: ${props => props.active ? '#4a6bff' : 'transparent'};
  color: ${props => props.active ? 'white' : '#6b7280'};
  transition: all 0.2s;
`;

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

const Row = styled.div`
  display: flex;
  gap: ${props => props.gap || '0px'};
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

const TagsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 4px;
`;

const Tag = styled.button`
  padding: 8px 14px;
  border-radius: 10px;
  border: none;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  background: ${props => props.active ? '#4a6bff' : '#f3f4f6'};
  color: ${props => props.active ? 'white' : '#374151'};
  transition: all 0.15s;
  &:hover {
    background: ${props => props.active ? '#4a6bff' : '#e5e7eb'};
  }
`;

const SectionGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 8px;
  border-top: 1px solid #f3f4f6;
`;

const SectionLabel = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const DynamicInputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const InputWrapper = styled.div`
  flex: 1;
  position: relative;
`;

const LocationIconContainer = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #4a6bff;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const RemoveButton = styled.button`
  background: transparent;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  &:hover {
    color: #ef4444;
  }
`;

const AddOptionButton = styled.button`
  background: transparent;
  border: none;
  color: #4a6bff;
  font-size: 13px;
  font-weight: 600;
  align-self: flex-start;
  cursor: pointer;
  padding: 4px 0;
  &:hover {
    color: #3b52d9;
  }
`;

const FormatSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-top: 16px;
  border-top: 1px solid #f3f4f6;
`;

const FormatToggle = styled.div`
  display: flex;
  background: #f3f4f6;
  padding: 4px;
  border-radius: 12px;
  width: 100%;
  max-width: 240px;
`;

const FormatButton = styled.button`
  flex: 1;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: ${props => props.active ? '600' : '500'};
  cursor: pointer;
  background: ${props => props.active ? 'white' : 'transparent'};
  color: ${props => props.active ? '#1f2937' : '#6b7280'};
  box-shadow: ${props => props.active ? '0 2px 4px rgba(0,0,0,0.04)' : 'none'};
`;

const CenterRow = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 8px;
`;

const DashedButton = styled.button`
  width: 100%;
  max-width: 280px;
  padding: 12px;
  background: #f0f4ff;
  color: #4a6bff;
  border: 1px dashed #abc1ff;
  border-radius: 14px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background: #e5edff;
  }
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


const CreateEventIdea = () => {
  const [dates, setDates] = useState(['', '']);
  const [times, setTimes] = useState(['', '']);
  const [places, setPlaces] = useState(['', '']);
  const [activeInterest, setActiveInterest] = useState('Кино');

  const interests = [
    'Спорт', 'Искусство', 'Путешествия', 'IT', 'Саморазвитие',
    'Компьютерные игры', 'Технологии', 'Еда', 'Образование',
    'Настольные игры', 'Наука', 'Музыка', 'Кино', 'Шопинг',
    'Ресторан', 'Музей', 'Отдых'
  ];

  const addField = (setter) => setter((prev) => [...prev, '']);
  const removeField = (index, setter) => setter((prev) => prev.filter((_, i) => i !== index));
  const updateField = (index, value, setter) => setter((prev) => prev.map((item, i) => i === index ? value : item));

  return (
    <Container>
      {/* Header */}
      <Header>
        <Logo href="https://github.com" target="_blank">🔷 Повод</Logo>
        <SearchInput placeholder="Поиск" />
        <BellIcon><FaBell size={24} /></BellIcon>
        <Avatar src="https://i.pravatar.cc/40" alt="avatar" />
      </Header>

      <Main>
        {/* Sidebar */}
        <Sidebar>
          <NavItem><MdHome size={24} /> Главная</NavItem>
          <NavItem active><MdAddCircleOutline size={24} /> Создать повод</NavItem>
          <NavItem><MdEventNote size={24} /> Мои поводы</NavItem>
          <NavItem><MdForum size={24} /> Обсуждения</NavItem>
        </Sidebar>

        {/* Form Feed */}
        <Feed>
          {/* Toggle Switch */}
          <ToggleContainer>
            <ToggleButton>Точный повод</ToggleButton>
            <ToggleButton active>Идея</ToggleButton>
          </ToggleContainer>

          <Form onSubmit={(e) => e.preventDefault()}>
            {/* Title */}
            <FormGroup>
              <Label>Название события *</Label>
              <Input type="text" defaultValue="Поход в кино" />
            </FormGroup>

            {/* Description */}
            <FormGroup>
              <Label>Описание *</Label>
              <TextArea rows={3} placeholder="Расскажи, чего ожидать..." />
            </FormGroup>

            {/* Photo Upload */}
            <FormGroup>
              <Label>Добавить фото</Label>
              <Row gap="12px">
                <IconButton type="button">
                  <FiImage size={16} /> Из галереи
                </IconButton>
                <IconButton type="button">
                  <FiCamera size={16} /> Сделать фото
                </IconButton>
              </Row>
            </FormGroup>

            {/* Interests Tags */}
            <FormGroup>
              <Label>Интересы *</Label>
              <TagsGrid>
                {interests.map((interest) => (
                  <Tag
                    key={interest}
                    type="button"
                    active={interest === activeInterest}
                    onClick={() => setActiveInterest(interest)}
                  >
                    {interest}
                  </Tag>
                ))}
              </TagsGrid>
            </FormGroup>

            {/* Dates Options */}
            <SectionGroup>
              <SectionLabel>Дата</SectionLabel>
              {dates.map((date, index) => (
                <DynamicInputRow key={index}>
                  <Input
                    type="text"
                    placeholder={`Вариант ${index + 1}`}
                    value={date}
                    onChange={(e) => updateField(index, e.target.value, setDates)}
                  />
                  <RemoveButton type="button" onClick={() => removeField(index, setDates)}>
                    <MdClose size={20} />
                  </RemoveButton>
                </DynamicInputRow>
              ))}
              <AddOptionButton type="button" onClick={() => addField(setDates)}>
                + Добавить вариант
              </AddOptionButton>
            </SectionGroup>

            {/* Times Options */}
            <SectionGroup>
              <SectionLabel>Время</SectionLabel>
              {times.map((time, index) => (
                <DynamicInputRow key={index}>
                  <Input
                    type="text"
                    placeholder={`Вариант ${index + 1}`}
                    value={time}
                    onChange={(e) => updateField(index, e.target.value, setTimes)}
                  />
                  <RemoveButton type="button" onClick={() => removeField(index, setTimes)}>
                    <MdClose size={20} />
                  </RemoveButton>
                </DynamicInputRow>
              ))}
              <AddOptionButton type="button" onClick={() => addField(setTimes)}>
                + Добавить вариант
              </AddOptionButton>
            </SectionGroup>

            {/* Places Options */}
            <SectionGroup>
              <SectionLabel>Место</SectionLabel>
              {places.map((place, index) => (
                <DynamicInputRow key={index}>
                  <InputWrapper>
                    <Input
                      type="text"
                      placeholder={`Вариант ${index + 1}`}
                      value={place}
                      onChange={(e) => updateField(index, e.target.value, setPlaces)}
                    />
                    <LocationIconContainer>
                      <MdLocationOn size={18} />
                    </LocationIconContainer>
                  </InputWrapper>
                  <RemoveButton type="button" onClick={() => removeField(index, setPlaces)}>
                    <MdClose size={20} />
                  </RemoveButton>
                </DynamicInputRow>
              ))}
              <AddOptionButton type="button" onClick={() => addField(setPlaces)}>
                + Добавить вариант
              </AddOptionButton>
            </SectionGroup>

            {/* Event Format */}
            <FormatSection>
              <SectionLabel>Формат события</SectionLabel>
              <FormatToggle>
                <FormatButton type="button" active>Закрытое</FormatButton>
                <FormatButton type="button">Публичное</FormatButton>
              </FormatToggle>
            </FormatSection>

            {/* Add Participant Button */}
            <CenterRow>
              <DashedButton type="button">
                Добавить участника +
              </DashedButton>
            </CenterRow>

            {/* Submit Button */}
            <SubmitSection>
              <SubmitButton type="submit">Отправить идею</SubmitButton>
            </SubmitSection>
          </Form>
        </Feed>
      </Main>
    </Container>
  );
};