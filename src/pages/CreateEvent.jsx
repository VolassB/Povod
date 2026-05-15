import styled from '@emotion/styled';
import { MdHome, MdAddCircleOutline, MdEventNote, MdForum } from 'react-icons/md';
import CreateEventForm from '../components/CreateEventForm';

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
  font-size: 24px;
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

const Content = styled.div`
  flex: 1;
  max-width: 780px;
`;

const PageTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 24px;
  color: #222;
`;

const CreateEvent = () => {
  return (
    <Container>
      {/* Header */}
      <Header>
        <Logo>🔷 Повод</Logo>
        <SearchInput placeholder="Поиск" />
        <BellIcon>🛎️</BellIcon>
        <Avatar src="https://i.pravatar.cc/40" alt="User" />
      </Header>

      <Main>
        {/* Sidebar */}
        <Sidebar>
          <NavItem>
            <MdHome size={24} /> Главная
          </NavItem>
          <NavItem active>
            <MdAddCircleOutline size={24} /> Создать повод
          </NavItem>
          <NavItem>
            <MdEventNote size={24} /> Мои поводы
          </NavItem>
          <NavItem>
            <MdForum size={24} /> Обсуждения
          </NavItem>
        </Sidebar>

        {/* Form Content */}
        <Content>
          <PageTitle>Создать повод (точный)</PageTitle>
          <CreateEventForm />
        </Content>
      </Main>
    </Container>
  );
};

export default CreateEvent;