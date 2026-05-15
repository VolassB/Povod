import styled from '@emotion/styled';
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
  border-bottom: 1px solid #e5e7eb;
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #4a6bff;
`;

const SearchInput = styled.input`
  flex: 1;
  max-width: 420px;
  padding: 12px 20px;
  border: 1px solid #ddd;
  border-radius: 12px;
  font-size: 16px;
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
  gap: 8px;
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
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const EventCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.07);
  display: flex;
`;

const EventImage = styled.img`
  width: 240px;
  height: 180px;
  object-fit: cover;
`;

const EventInfo = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const EventTitle = styled.h3`
  margin: 0 0 12px 0;
  font-size: 20px;
`;

const EventDetails = styled.p`
  color: #666;
  margin: 0 0 12px 0;
  line-height: 1.5;
`;

const Status = styled.div`
  color: #4a6bff;
  font-weight: 500;
  margin-bottom: 16px;
`;

const BlueButton = styled.button`
  margin-top: auto;
  padding: 12px 24px;
  background: #4a6bff;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  align-self: flex-start;
`;

const FiltersSidebar = styled.div`
  width: 260px;
  background: white;
  padding: 20px;
  border-radius: 16px;
  height: fit-content;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
`;

const FilterTitle = styled.div`
  font-weight: 600;
  margin: 18px 0 8px 0;
  color: #374151;
`;

const FilterSelect = styled.div`
  padding: 12px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  margin-bottom: 12px;
`;

const MyEvents = () => {
  const myEvents = [
    {
      id: 1,
      title: "Настольные игры",
      image: "https://images.unsplash.com/photo-1610894896055-9c2a5e2c8c3e",
      location: "Крестовский о-в",
      date: "18.06.26",
      time: "19:00",
      participants: "4 человека",
      status: "Идёт набор"
    },
    {
      id: 2,
      title: "Кофе на Восстания",
      image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
      location: "Восстания 12",
      date: "20.06.26",
      time: "16:00",
      participants: "6 человек",
      status: "Подтверждено"
    },
    {
      id: 3,
      title: 'Премьера "Человек-паук"',
      image: "https://images.unsplash.com/photo-1635805737707-575885ab0820",
      location: "Кинотеатр Аврора",
      date: "22.06.26",
      time: "21:00",
      participants: "3 человека",
      status: "Ожидается"
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
          <NavItem><MdHome size={24} /> Главная</NavItem>
          <NavItem><MdAddCircleOutline size={24} /> Создать повод</NavItem>
          <NavItem active><MdEventNote size={24} /> Мои поводы</NavItem>
          <NavItem><MdForum size={24} /> Обсуждения</NavItem>
        </Sidebar>

        {/* Events List */}
        <Feed>
          {myEvents.map(event => (
            <EventCard key={event.id}>
              <EventImage src={event.image} alt={event.title} />
              <EventInfo>
                <EventTitle>{event.title}</EventTitle>
                <EventDetails>
                  📍 {event.location}<br />
                  📅 {event.date} • {event.time}<br />
                  👥 {event.participants}
                </EventDetails>
                <Status>{event.status}</Status>
                <BlueButton>Перейти к поводу</BlueButton>
              </EventInfo>
            </EventCard>
          ))}
        </Feed>

        {/* Filters */}
        <FiltersSidebar>
          <FilterTitle>Интересы</FilterTitle>
          <FilterSelect>Все</FilterSelect>

          <FilterTitle>Дата</FilterTitle>
          <FilterSelect>Любая</FilterSelect>

          <FilterTitle>Время</FilterTitle>
          <FilterSelect>Любое</FilterSelect>

          <FilterTitle>Место</FilterTitle>
          <FilterSelect>Любое</FilterSelect>
        </FiltersSidebar>
      </Main>
    </Container>
  );
};

export default MyEvents;