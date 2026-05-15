import styled from '@emotion/styled';
import { MdHome, MdAddCircleOutline, MdEventNote, MdForum } from 'react-icons/md';
import { FaBell } from 'react-icons/fa';
import EventCard from '../components/EventCard';

const Container = styled.div`
  min-height: 100vh;
  background: #f4f6f9;
`;

const Header = styled.header`
  background: white;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid #e0e0e0;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #4a6bff;
`;

const Search = styled.input`
  flex: 1;
  max-width: 500px;
  padding: 12px 20px;
  border: 1px solid #ddd;
  border-radius: 12px;
  font-size: 16px;
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
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
  max-width: 1400px;
  margin: 0 auto;
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
  color: ${props => props.active ? '#4a6bff' : '#333'};
  background: ${props => props.active ? '#eef2ff' : 'transparent'};

  &:hover {
    background: #f0f4ff;
  }
`;

const Feed = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Filters = styled.div`
  width: 260px;
  background: white;
  padding: 20px;
  border-radius: 16px;
  height: fit-content;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
`;

const FilterTitle = styled.div`
  font-weight: 600;
  margin: 16px 0 8px 0;
  color: #444;
`;

const FilterSelect = styled.div`
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background: white;
  margin-bottom: 8px;
`;

const Home = () => {
  const events = [
    {
      id: 1,
      title: "Пляжный волейбол",
      image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1",
      date: "22.06.26",
      time: "18:00",
      location: "Крестовский о-в",
      buttonText: "Присоединиться"
    },
    {
      id: 2,
      title: "Киновечер с друзьями",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
      date: "25.06.26",
      time: "20:00",
      location: "Новая Голландия",
      buttonText: "Присоединиться"
    }
  ];

  return (
    <Container>
      {/* Header */}
      <Header>
        <Logo>🔷 Повод</Logo>
        
        <Search placeholder="Поиск" />

        <RightSide>
          <BellIcon>
            <FaBell size={24} />
          </BellIcon>
          <Avatar src="https://i.pravatar.cc/40" alt="avatar" />
        </RightSide>
      </Header>

      <Main>
        {/* Sidebar */}
        <Sidebar>
          <NavItem active>
            <MdHome size={26} /> Главная
          </NavItem>
          <NavItem>
            <MdAddCircleOutline size={26} /> Создать повод
          </NavItem>
          <NavItem>
            <MdEventNote size={26} /> Мои поводы
          </NavItem>
          <NavItem>
            <MdForum size={26} /> Обсуждения
          </NavItem>
        </Sidebar>

        {/* Feed */}
        <Feed>
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </Feed>

        {/* Filters Sidebar (как на скриншоте) */}
        <Filters>
          <FilterTitle>Интересы</FilterTitle>
          <FilterSelect>Все</FilterSelect>
          
          <FilterTitle>Дата</FilterTitle>
          <FilterSelect>Любая</FilterSelect>
          
          <FilterTitle>Время</FilterTitle>
          <FilterSelect>Любое</FilterSelect>
          
          <FilterTitle>Место</FilterTitle>
          <FilterSelect>Любое</FilterSelect>
        </Filters>
      </Main>
    </Container>
  );
};

export default Home;