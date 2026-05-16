import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { MdHome, MdAddCircleOutline, MdEventNote, MdForum } from 'react-icons/md';
import { FaBell } from 'react-icons/fa';
import CreateEventForm from '/CreateEvent';
import Layout from '../components/Layot';

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

const navigate = useNavigate();

const CreateEventPage = () => {
  return (
    <Layout>
      <Main>

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
    </Layout>
  );
};

export default CreateEventPage;