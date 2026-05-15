import { useState } from "react";
import styled from '@emotion/styled';
import Button from './Button';
import { MdCameraAlt, MdCalendarToday, MdAccessTime, MdLocationOn, MdPeople } from 'react-icons/md';
import GalleryIcon from '../assets/gallery.svg?react';

const FormContainer = styled.div`
  background: #f0f4ff;
  min-height: 100vh;
  padding: 40px 20px;
`;

const Section = styled.div`
  background: white;
  margin-bottom: 16px;
  padding: 28px 60px 28px 32px;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
  color: #222;
  font-size: 15px;
`;

const Header = styled.div`
  padding: 24px 32px;
  font-size: 24px;
  font-weight: 600;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.div`
  padding: 32px;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  font-size: 16px;
  background: #f8f9fc;

  &:focus {
    outline: none;
    border-color: #4a6bff;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 14px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  background: #f8f9fc;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #4a6bff;
  }
`;

const PhotoSection = styled.div`
  display: flex;
  gap: 12px;
  margin: 16px 0 32px;
`;

const PhotoButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  background: white;
  font-size: 15px;
  transition: background 0.2s ease;

  &:focus-visible {
    background: #99A2AD;
    color: white;
    outline: none;
    border-color: #a6bff;
  }

  ${props => props.$isActive && 'background: #99A2AD; color: white'}
`;

const CameraButton = styled(PhotoButton)``;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 10px;
  margin-bottom: 32px;
`;

const CategoryChip = styled.button`
  padding: 11px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 30px;
  background: white;
  font-size: 15px;
  cursor: pointer;

  &.active {
    background: #4a6bff;
    color: white;
    border-color: #4a6bff;
  }
`;

const DateSection = styled.div`
  margin-bottom: 24px;
`;

const TimeSection = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 32px;
`;

export default function CreateEventForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    categories: [],
    type: "public"
  });

  const [activeButton, setActiveButton] = useState(null);

  const categories = [
    "Спорт", "Искусство", "Путешествие", "IT", "Компьютерные игры",
    "Технологии", "Еда", "Настольные игры", "Наука", "Музыка",
    "Саморазвитие", "ЗОЖ", "Образование", "Кино", "Шопинг", "Ресторан"
  ];

  const toggleCategory = (cat) => {
    setFormData(prev => ({
      ...prev,
      categories: prev.categories.includes(cat)
        ? prev.categories.filter(c => c !== cat)
        : [...prev.categories, cat]
    }));
  };

  return (
    
    <FormContainer>
        <Content>
            <Section>
                <Label>Название события *</Label>
                <Input type="text" placeholder="Поход в кино"/>
            </Section>

            <Section>
                <Label>Описание *</Label>
                <TextArea placeholder="Расскажи, чего ожидать..."/>
            </Section>

            <Section>
                <Label>Добавить фото</Label>
                <PhotoSection>
                    <PhotoButton
                      type="button"
                      $isActive={activeButton=== 'gallery'}
                      onClick={() => setActiveButton('gallery')}
                    >
                        <GalleryIcon style={{ width: 22, height: 22 }} />
                        Из галереи
                    </PhotoButton>
                    <CameraButton
                      type="button"
                      $isActive={activeButton === 'camera'}
                      onClick={() => setActiveButton('camera')}
                    >
                        <MdCameraAlt size={24} />
                        Сделать фото
                    </CameraButton>
                </PhotoSection>
            </Section>

            <Section>
                <Label>Тип события *</Label>
                <CategoryGrid>
                    {categories.map(cat => (
                        <CategoryChip
                            key={cat}
                            onClick={() => toggleCategory(cat)}
                            className={formData.categories.includes(cat) ? "active" : ""}
                        >
                            {cat}
                            </CategoryChip>
                    ))}
                </CategoryGrid>
            </Section>

            <Section style={{ padding: "28px 32px" }}>
                <Label>Дата и время *</Label>
                <DateSection style={{paddingRight: "35px"}}>
                    <Input type="date" style={{ marginBottom: "12px" }} />
                </DateSection>

                <TimeSection>
                    <Input type="time" />
                    <div style={{ display: 'flex', alignItems: 'center', color: '#999' }}>→</div>
                    <Input type="time" />
                </TimeSection>
            </Section>

            <Section>
              <Label>Место *</Label>
              <div style={{ position: "relative", marginBottom: "32px" }}>
                <MdLocationOn size={22} style={{position: "absolute", left: "12px", transform: "translateY(60%)", pointerEvents: "none", color: "#99A2AD"}}/>
                <Input 
                  type="text" 
                  placeholder="Полный адрес или ссылка" 
                  style={{ marginBottom: "32px", paddingLeft: "40px" }}
                />
              </div>
            </Section>

            <Section style={{display: "flex", flexDirection: "column"}}>
                <Label>Формат события</Label>
                <div style={{ display: "flex", gap: "12px", marginBottom: "24px", justifyContent: "center" }}>
                    <Button style={{ width: "100%", display: "flex" }}>Закрытое</Button>
                    <Button primary>Публичное</Button>
                </div>

                <Button style={{ width: "100%", marginBottom: "12px", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                    <MdPeople size={20} />
                    Добавить участников
                </Button>
            </Section>

            <Section>
                <Button primary style={{ width: "100%", padding: "16px", fontSize: "17px" }}>
                    Отправить повод
                </Button>
            </Section>
        </Content>
    </FormContainer>
  );
}