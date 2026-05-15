import React, { useState } from 'react';
import styled from '@emotion/styled';
import { MdHome, MdAddCircleOutline, MdEventNote, MdForum, MdLocationOn } from 'react-icons/md';
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
  color: #555;
  cursor: pointer;
  margin-left: auto;
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
  color: #374151;
  background: transparent;
  &:hover {
    background: #f3f4f6;
  }
`;

const ProfileCard = styled.div`
  flex: 1;
  max-width: 520px;
  background: white;
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 580px;
`;

const UserInfoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 32px;
`;

const LargeAvatar = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
`;

const UserMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const UserName = styled.h2`
  margin: 0;
  font-size: 26px;
  font-weight: 700;
  color: #111827;
`;

const LocationBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #9ca3af;
  font-size: 14px;
`;

const SectionTitle = styled.h3`
  margin: 0 0 16px 0;
  font-size: 18px;
  font-weight: 700;
  color: #111827;
`;

const TagsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.div`
  padding: 8px 16px;
  background: #2563eb;
  color: white;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
`;

const AddTagButton = styled.button`
  padding: 8px 16px;
  background: transparent;
  border: none;
  color: #9ca3af;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    color: #4a6bff;
  }
`;

const LogoutButton = styled.button`
  background: transparent;
  border: none;
  color: #ef4444;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  margin-top: auto;
  align-self: center;
  &:hover {
    text-decoration: underline;
  }
`;

const SettingsSidebar = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SettingsCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SettingRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SettingLabel = styled.span`
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

// Компонент страницы
const MyProfile = () => {
  const [notifications, setNotifications] = useState(true);
  const [invitations, setInvitations] = useState(true);

  const interests = ['Спорт', 'Искусство', 'Технологии', 'Еда', 'Шопинг', 'Ресторан'];
  const userAvatar = "https://unsplash.com";

  return (
    <Container>
      {/* Header */}
      <Header>
        <Logo href="https://github.com" target="_blank">🔷 Повод</Logo>
        <SearchInput placeholder="Поиск" />
        <BellIcon><FaBell size={24} /></BellIcon>
        <HeaderAvatar src={userAvatar} alt="avatar" />
      </Header>

      <Main>
        {/* Sidebar */}
        <Sidebar>
          <NavItem><MdHome size={24} /> Главная</NavItem>
          <NavItem><MdAddCircleOutline size={24} /> Создать повод</NavItem>
          <NavItem><MdEventNote size={24} /> Мои поводы</NavItem>
          <NavItem><MdForum size={24} /> Обсуждения</NavItem>
        </Sidebar>

        {/* Profile Card */}
        <ProfileCard>
          <UserInfoSection>
            <LargeAvatar src={userAvatar} alt="Игнатьева Василиса" />
            <UserMeta>
              <UserName>Игнатьева Василиса</UserName>
              <LocationBlock>
                <MdLocationOn size={16} />
                <span>Санкт-Петербург</span>
              </LocationBlock>
            </UserMeta>
          </UserInfoSection>

          <SectionTitle>Мои интересы</SectionTitle>
          <TagsGrid>
            {interests.map((interest) => (
              <Tag key={interest}>{interest}</Tag>
            ))}
            <AddTagButton type="button">Добавить +</AddTagButton>
          </TagsGrid>

          <LogoutButton type="button">Выйти</LogoutButton>
        </ProfileCard>

        {/* Settings Sidebar */}
        <SettingsSidebar>
          <SettingsCard>
            <SettingRow>
              <SettingLabel>Уведомления</SettingLabel>
              <ToggleSwitch>
                <ToggleInput 
                  type="checkbox" 
                  checked={notifications} 
                  onChange={() => setNotifications(!notifications)} 
                />
                <ToggleSlider />
              </ToggleSwitch>
            </SettingRow>

            <SettingRow>
              <SettingLabel>Приглашения на повод</SettingLabel>
              <ToggleSwitch>
                <ToggleInput 
                  type="checkbox" 
                  checked={invitations} 
                  onChange={() => setInvitations(!invitations)} 
                />
                <ToggleSlider />
              </ToggleSwitch>
            </SettingRow>
          </SettingsCard>
        </SettingsSidebar>
      </Main>
    </Container>
  );
};

export default MyProfile;
