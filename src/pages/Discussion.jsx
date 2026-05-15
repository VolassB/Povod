import React, { useState } from 'react';
import styled from '@emotion/styled';
import { MdHome, MdAddCircleOutline, MdEventNote, MdForum, MdPerson, MdPushPin } from 'react-icons/md';
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
  color: ${props => props.active ? '#4a6bff' : '#374151'};
  background: ${props => props.active ? '#eef2ff' : 'transparent'};
  &:hover {
    background: #f3f4f6;
  }
`;

const ChatFeed = styled.div`
  flex: 1;
  max-width: 600px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ChatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  border-bottom: 1px solid #f3f4f6;
  cursor: pointer;
  transition: background 0.15s;
  &:hover {
    background: #f9fafb;
  }
`;

const AvatarCircle = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #f3f4f6;
  color: #9ca3af;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChatInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ChatTitle = styled.h4`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #111827;
`;

const ChatMessagePreview = styled.p`
  margin: 0;
  font-size: 14px;
  color: #6b7280;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 380px;
  
  span {
    color: #9ca3af;
  }
`;

const ChatMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
`;

const PinIcon = styled(MdPushPin)`
  color: #abc1ff;
  transform: rotate(45deg);
`;

const Badge = styled.div`
  background: #4a6bff;
  color: white;
  font-size: 12px;
  font-weight: 600;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FiltersSidebar = styled.div`
  width: 240px;
  background: white;
  padding: 16px;
  border-radius: 20px;
  height: fit-content;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FilterButton = styled.button`
  width: 100%;
  padding: 12px 16px;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  transition: all 0.15s;
  background: ${props => props.active ? '#4a6bff' : '#f3f4f6'};
  color: ${props => props.active ? 'white' : '#6b7280'};
  &:hover {
    background: ${props => props.active ? '#3b52d9' : '#e5e7eb'};
  }
`;

// Компонент страницы
const Discussions = () => {
  const [activeFilter, setActiveFilter] = useState('Все');

  const chats = [
    {
      id: 1,
      title: 'Премьера "Человек-паук: Новый день"',
      author: 'Костя',
      text: 'Давайте подумаем про...',
      time: '5м',
      pinned: true,
      unread: 0
    },
    {
      id: 2,
      title: 'Кофе на Восстания',
      author: 'Маша',
      text: 'Встреча через 30 минут...',
      time: '14м',
      pinned: false,
      unread: 3
    },
    {
      id: 3,
      title: 'Настольные игры',
      author: 'Петя',
      text: 'Спасибо за компанию...',
      time: '22ч',
      pinned: false,
      unread: 0
    }
  ];

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
          <NavItem><MdEventNote size={24} /> Мои поводы</NavItem>
          <NavItem active><MdForum size={24} /> Обсуждения</NavItem>
        </Sidebar>

        {/* Discussions Chats Feed */}
        <ChatFeed>
          {chats.map(chat => (
            <ChatItem key={chat.id}>
              <AvatarCircle>
                <MdPerson size={28} />
              </AvatarCircle>
              <ChatInfo>
                <ChatTitle>{chat.title}</ChatTitle>
                <ChatMessagePreview>
                  {chat.author}: <span>{chat.text}</span> • {chat.time}
                </ChatMessagePreview>
              </ChatInfo>
              <ChatMeta>
                {chat.pinned && <PinIcon size={20} />}
                {chat.unread > 0 && <Badge>{chat.unread}</Badge>}
              </ChatMeta>
            </ChatItem>
          ))}
        </ChatFeed>

        {/* Categories Sidebar */}
        <FiltersSidebar>
          <FilterButton active={activeFilter === 'Все'} onClick={() => setActiveFilter('Все')}>
            Все
          </FilterButton>
          <FilterButton active={activeFilter === 'Непрочитанные'} onClick={() => setActiveFilter('Непрочитанные')}>
            Непрочитанные
          </FilterButton>
          <FilterButton active={activeFilter === 'Архив'} onClick={() => setActiveFilter('Архив')}>
            Архив
          </FilterButton>
        </FiltersSidebar>
      </Main>
    </Container>
  );
};

export default Discussions;
