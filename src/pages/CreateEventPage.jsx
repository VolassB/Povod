import styled from '@emotion/styled';
import { MdHome, MdAddCircleOutline, MdEventNote, MdForum } from 'react-icons/md';
import { FaBell } from 'react-icons/fa';
import CreateEventForm from '/CreateEvent';

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

const FormContainer = styled.div`
  flex: 1;
  max-width: 780px;
`;

const PageTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 24px;
  color: #222;
`;

const RightPanel = styled.div`
  width: 220px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const RightButton = styled.button`
  padding: 14px 20px;
  border-radius: 12px;
  font-weight: 500;
  border: none;
  background: ${props => props.active ? '#4a6bff' : '#f1f3f5'};
  color: ${props => props.active ? 'white' : '#333'};
  cursor: pointer;
`;

const CreateEventPage = () => {
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
          <NavItem active><MdAddCircleOutline size={24} /> Создать повод</NavItem>
          <NavItem><MdEventNote size={24} /> Мои поводы</NavItem>
          <NavItem><MdForum size={24} /> Обсуждения</NavItem>
        </Sidebar>

        {/* Form Area */}
        <FormContainer>
          <PageTitle>Создать повод (точный)</PageTitle>
          <CreateEventForm />
        </FormContainer>

        {/* Right Panel */}
        <RightPanel>
          <RightButton active>Точный повод</RightButton>
          <RightButton>Идея</RightButton>
        </RightPanel>
      </Main>
    </Container>
  );
};

export default CreateEventPage;