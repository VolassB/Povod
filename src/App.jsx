import styled from '@emotion/styled';
import { useState } from 'react';
import { MdHome, MdAddCircleOutline, MdEventNote, MdForum } from 'react-icons/md';
import { FaBell } from 'react-icons/fa';

const Container = styled.div`
  min-height: 100vh;
  background: #f4f6f9;
`;

const Header = styled.header`
  background: white;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid #eee;
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #4a6bff;
`;

const SearchInput = styled.input`
  flex: 1;
  max-width: 420px;
  padding: 10px 16px;
  border: 1px solid #ddd;
  border-radius: 12px;
`;

const BellIcon = styled.div`
  color: #555;
  cursor: pointer;
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
`;

const Sidebar = styled.div`
  width: 260px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const NavItem = styled.div`
  padding: 14px 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 17px;
  cursor: pointer;
  background: ${props => props.active ? '#eef2ff' : 'transparent'};
  color: ${props => props.active ? '#4a6bff' : '#333'};
`;

const Feed = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const EventCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
`;

const EventTitle = styled.h3`
  margin: 0 0 8px 0;
`;

const EventLocation = styled.p`
  margin: 4px 0;
  color: #555;
`;

const EventTime = styled.p`
  margin: 4px 0;
  color: #555;
`;

const EventType = styled.p`
  margin: 8px 0 16px 0;
  color: #666;
`;

const BlueButton = styled.button`
  background: #4a6bff;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 10px;
  font-weight: 500;
`;

const Filters = styled.div`
  width: 260px;
`;

const FilterBlock = styled.div`
  margin-bottom: 20px;
`;

const FilterLabel = styled.div`
  font-weight: 600;
  margin-bottom: 8px;
`;

const FilterInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background: white;
`;

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const events = [
    {
      id: 1,
      title: "Пляжный волейбол",
      location: "Крестовский о-в",
      date: "22.06.26",
      time: "18:00",
      type: "Приватное для друзей"
    },
    {
      id: 2,
      title: "Киновечер с друзьями",
      location: "Новая Голландия",
      date: "25.06.26",
      time: "20:00",
      type: "Приватное для друзей"
    }
  ];

  return (
    <Container>
      {/* Header */}
      <Header>
        <Logo>🔷 Повод</Logo>
        <SearchInput placeholder="Поиск" />
        <BellIcon><FaBell size={24} /></BellIcon>
        <Avatar src="https://i.pravatar.cc/40" alt="avatar" />
      </Header>

      <Main>
        {/* Sidebar */}
        <Sidebar>
          <NavItem active><MdHome size={24} /> Главная</NavItem>
          <NavItem onClick={() => setCurrentPage('create')}>
            <MdAddCircleOutline size={24} /> Создать повод
          </NavItem>
          <NavItem><MdEventNote size={24} /> Мои поводы</NavItem>
          <NavItem><MdForum size={24} /> Обсуждения</NavItem>
        </Sidebar>

        {/* Feed */}
        <Feed>
          {events.map(event => (
            <EventCard key={event.id}>
              <EventTitle>{event.title}</EventTitle>
              <EventLocation>📍 {event.location}</EventLocation>
              <EventTime>🕒 {event.date} • {event.time}</EventTime>
              <EventType>👥 {event.type}</EventType>
              <BlueButton>Подробнее</BlueButton>
            </EventCard>
          ))}
        </Feed>

        {/* Filters */}
        <Filters>
          <FilterBlock>
            <FilterLabel>Интересы</FilterLabel>
            <FilterInput value="Все" readOnly />
          </FilterBlock>
          <FilterBlock>
            <FilterLabel>Дата</FilterLabel>
            <FilterInput value="Любая" readOnly />
          </FilterBlock>
          <FilterBlock>
            <FilterLabel>Время</FilterLabel>
            <FilterInput value="Любое" readOnly />
          </FilterBlock>
          <FilterBlock>
            <FilterLabel>Место</FilterLabel>
            <FilterInput value="Любое" readOnly />
          </FilterBlock>
        </Filters>
      </Main>
    </Container>
  );
};

export default App;