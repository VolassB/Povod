import React from 'react';
import styled from '@emotion/styled';
import { useNavigate, useLocation } from 'react-router-dom';
import LogoIcon from '../assets/Logo.svg?react';
import HomeIcon from '../assets/Home.svg?react';
import CreateIcon from '../assets/Create.svg?react';
import CalendaryIcon from '../assets/Calendary.svg?react';
import MessegeIcon from '../assets/Message.svg?react';
import SerchIcon from '../assets/SerchIcon.svg?react';
import PushIcon from '../assets/Push.svg?react';

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

const Logo = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #4a6bff;
  cursor: pointer;
  user-select: none;
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
  color: ${props => props.active ? '#4a6bff' : '#555'};
  cursor: pointer;
  margin-left: auto;
  display: flex;
  align-items: center;
  &:hover {
    color: #4a6bff;
  }
`;

const HeaderAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
  border: ${props => props.active ? '2px solid #4a6bff' : '2px solid transparent'};
`;


const MainContainer = styled.div`
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

const PageContent = styled.div`
  flex: 1;
  display: flex;
  gap: 24px;
  align-items: flex-start;
`;

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const userAvatar = "https://sun9-16.userapi.com/s/v1/ig2/ltp1eL2g0k6EJ3gdnu59A9j_ISrCG0_yuWhH3xH3zrGksZJO4YJbL97gNfD-gPNs_4CSv2IbWTiBvYQW3NNn0TTT.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=zzQ6A3OeUtwPNDb7XJ_ASC-SOvJd9xCoXAsN1_leG7k&cs=1920x0";

  return (
    <Container>
      <Header>
        <Logo style={{display: "flex", paddingLeft: "126px"}} onClick={() => navigate('/home')}><LogoIcon/></Logo>
        <div>
            <SerchIcon size={64} style={{padding: "17px 170px", position: "absolute", zIndex: "1"}}/>
            <SearchInput placeholder=" Поиск" style={{marginLeft: "150px", padding: "15px 300px 15px 40px", position: "relative"}}/>
            <PushIcon size={24} style={{padding: "14px 20px", position: "absolute"}} active={currentPath === '/event-details'} onClick={() => navigate('/event-details')}/>
        </div>
        <HeaderAvatar style={{paddingLeft: "300px"}} active={currentPath === '/profile'} src={userAvatar} alt="avatar" onClick={() => navigate('/profile')} />
      </Header>

      <MainContainer>
        <Sidebar>
          {/* Каждая вкладка теперь строго привязана к своему уникальному URL */}
          <NavItem active={currentPath === '/home'} onClick={() => navigate('/home')}>
            <HomeIcon size={24} /> Главная
          </NavItem>
          <NavItem active={currentPath === '/create'} onClick={() => navigate('/create')}>
            <CreateIcon size={24} /> Создать повод
          </NavItem>
          <NavItem active={currentPath === '/my-events'} onClick={() => navigate('/my-events')}>
            <CalendaryIcon size={24} /> Мои поводы
          </NavItem>
          <NavItem active={currentPath === '/discussions'} onClick={() => navigate('/discussions')}>
            <MessegeIcon size={24} /> Обсуждения
          </NavItem>
        </Sidebar>

        <PageContent>
          {children}
        </PageContent>
      </MainContainer>
    </Container>
  );
};

export default Layout;
