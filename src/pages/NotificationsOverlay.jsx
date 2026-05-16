import React, { useState } from 'react';
import styled from '@emotion/styled';
import { MdOutlineCalendarToday, MdOutlineAccessTime, MdLocationOn, MdPeopleOutline, MdLink, MdPersonAdd, MdDeleteOutline } from 'react-icons/md';
import Layout from '../components/Layot';

// Стили уникального контента страницы
const ContentCard = styled.div`
  flex: 1;
  max-width: 640px;
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  padding-bottom: 32px;
`;

const EventImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;

const EventBody = styled.div`
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const EventTitle = styled.h2`
  margin: 0;
  font-size: 28px;
  font-weight: 700;
  color: #111827;
`;

const EventDescription = styled.p`
  margin: 0;
  font-size: 15px;
  color: #6b7280;
  line-height: 1.5;
`;

const MetaGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 8px;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #374151;
  font-weight: 500;
  
  svg {
    color: #4a6bff;
  }
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 32px;
  margin-top: 16px;
`;

const BlueButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 14px;
  background: #4a6bff;
  color: white;
  border: none;
  border-radius: 14px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;
  text-align: center;
  &:hover {
    background: #3b52d9;
  }
`;

const GrayButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 14px;
  background: #9ca3af;
  color: white;
  border: none;
  border-radius: 14px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background: #8b939f;
  }
`;

const DeleteButton = styled.button`
  background: transparent;
  border: none;
  color: #ef4444;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 48px;
  align-self: center;
  &:hover {
    text-decoration: underline;
  }
`;

const RightSidebar = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const ChatButton = styled.button`
  width: 100%;
  padding: 14px;
  background: #4a6bff;
  color: white;
  border: none;
  border-radius: 14px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(74, 107, 255, 0.15);
  &:hover {
    background: #3b52d9;
  }
`;

const ReminderCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ReminderLabel = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #374151;
`;

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + span {
    background-color: #4a6bff;
  }
  &:checked + span:before {
    transform: translateX(24px);
  }
`;

const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #d1d5db;
  transition: .2s;
  border-radius: 24px;
  &:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: .2s;
    border-radius: 50%;
  }
`;

const ToastNotification = styled.div`
  background: white;
  border-radius: 20px;
  padding: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  display: flex;
  gap: 12px;
  width: 100%;
  box-sizing: border-box;
  margin-top: auto;
  border: 1px solid #e5e7eb;
`;

const ToastImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 14px;
  object-fit: cover;
`;

const ToastContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ToastText = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: #111827;
  line-height: 1.3;
  
  strong {
    font-weight: 700;
  }
`;

const ToastSubtext = styled.div`
  font-size: 12px;
  color: #4b5563;
  font-weight: 600;
  margin-bottom: 2px;
`;

const ToastMetaGrid = styled.div`
  display: flex;
  gap: 10px;
  font-size: 11px;
  color: #9ca3af;
  margin-bottom: 8px;
`;

const ToastMetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

const ToastActions = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const AcceptButton = styled.button`
  flex: 1;
  background: #4a6bff;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 8px 12px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    background: #3b52d9;
  }
`;

const DeclineButton = styled.button`
  background: #e5e7eb;
  color: #4b5563;
  border: none;
  border-radius: 10px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: #d1d5db;
    color: #111827;
  }
`;

const NotificationsOverlay = () => {
  const [reminder, setReminder] = useState(true);
  const [showToast, setShowToast] = useState(true);

  return (
    <Layout>
      {/* Основная карточка повода */}
      <ContentCard>
        <EventImage src="https://unsplash.com" alt="Настольные игры" />
        
        <EventBody>
          <EventTitle>Настольные игры</EventTitle>
          <EventDescription>
            Мафия с незнакомцами. Ведущий есть, не хватает 4 игроков
          </EventDescription>
          
          <MetaGrid>
            <MetaItem>
              <MdOutlineCalendarToday size={18} />
              <span>16/06/26</span>
            </MetaItem>
            <MetaItem>
              <MdOutlineAccessTime size={18} />
              <span>16:00</span>
            </MetaItem>
            <MetaItem>
              <MdLocationOn size={18} />
              <span>Эрудит</span>
            </MetaItem>
            <MetaItem>
              <MdPeopleOutline size={18} />
              <span>3 из 6 мест заняты</span>
            </MetaItem>
          </MetaGrid>
        </EventBody>

        <ActionButtonsContainer>
          <BlueButton href="#" target="_blank">
            <MdLink size={20} /> Ссылка на место
          </BlueButton>
          <GrayButton type="button">
            <MdPersonAdd size={20} /> Добавить участника +
          </GrayButton>
        </ActionButtonsContainer>

        <DeleteButton type="button">Удалить повод</DeleteButton>
      </ContentCard>

      {/* Правый сайдбар управления и уведомлений */}
      <RightSidebar>
        <ChatButton type="button">Обсуждение повода</ChatButton>
        
        <ReminderCard>
          <ReminderLabel>Напоминание за 24 часа</ReminderLabel>
          <ToggleSwitch>
            <ToggleInput 
              type="checkbox" 
              checked={reminder} 
              onChange={() => setReminder(!reminder)} 
            />
            <ToggleSlider />
          </ToggleSwitch>
        </ReminderCard>

        {showToast && (
          <ToastNotification>
            <ToastImage src="https://unsplash.com" alt="Пляжный волейбол" />
            <ToastContent>
              <ToastText><strong>Анна К.</strong> приглашает Вас</ToastText>
              <ToastSubtext>На пляжный волейбол</ToastSubtext>
              
              <ToastMetaGrid>
                <ToastMetaItem><MdOutlineCalendarToday size={12} /> 16/06/26</ToastMetaItem>
                <ToastMetaItem><MdOutlineAccessTime size={12} /> 15:00</ToastMetaItem>
                <ToastMetaItem><MdLocationOn size={12} /> ЗЕНИТ</ToastMetaItem>
              </ToastMetaGrid>

              <ToastActions>
                <DeclineButton type="button" onClick={() => setShowToast(false)}>
                  <MdDeleteOutline size={16} />
                </DeclineButton>
                <AcceptButton type="button" onClick={() => setShowToast(false)}>
                  Принять приглашение
                </AcceptButton>
              </ToastActions>
            </ToastContent>
          </ToastNotification>
        )}
      </RightSidebar>
    </Layout>
  );
};

export default NotificationsOverlay;
