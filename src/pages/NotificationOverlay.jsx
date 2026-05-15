import React, { useState } from 'react';
import styled from '@emotion/styled';
import { MdHome, MdAddCircleOutline, MdEventNote, MdForum, MdOutlineCalendarToday, MdOutlineAccessTime, MdLocationOn, MdPeopleOutline, MdLink, MdUserPlus, MdDeleteOutline } from 'react-icons/md';
import { FaBell } from 'react-icons/fa';

// Стили страницы
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
  color: #4a6bff;
  cursor: pointer;
  margin-left: auto;
  position: relative;
`;

const HeaderAvatar = styled.img`
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
  width: 100%;
  box-sizing: border-box;
  position: relative;
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

// Стили виджета всплывающего уведомления
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

// Компонент страницы
const NotificationsOverlay = () => {
  const [reminder, setReminder] = useState(true);
  const [showToast, setShowToast] = useState(true);

  return (
    <Container>
      {/* Header */}
      <Header>
        <Logo href="https://github.com" target="_blank">🔷 Повод</Logo>
        <SearchInput placeholder="Поиск" />
        <BellIcon><FaBell size={24} /></BellIcon>
        <HeaderAvatar src="https://unsplash.com" alt="avatar" />
      </Header>

      <Main>
        {/* Sidebar */}
        <Sidebar>
          <NavItem><MdHome size={24} /> Главная</NavItem>
          <NavItem><MdAddCircleOutline size={24} /> Создать повод</NavItem>
          <NavItem active><MdEventNote size={24} /> Мои поводы</NavItem>
          <NavItem><MdForum size={24} /> Обсуждения</NavItem>
        </Sidebar>

        {/* Event Card Content */}
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
              <MdUserPlus size={20} /> Добавить участника +
            </GrayButton>
          </ActionButtonsContainer>

          <DeleteButton type="button">Удалить повод</DeleteButton>
        </ContentCard>

        {/* Right Sidebar Options */}
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

          {/* Всплывающее уведомление (Toast) */}
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
      </Main>
    </Container>
  );
};

export default NotificationsOverlay;
