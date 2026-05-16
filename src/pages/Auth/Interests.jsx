import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { useState } from 'react';
import Layout from '../../components/Layot';

const Content = styled.div`
  max-width: 680px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 32px;
  color: #222;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-bottom: 40px;
`;

const Tag = styled.div`
  padding: 10px 18px;
  background: ${props => props.active ? '#4a6bff' : '#f1f3f5'};
  color: ${props => props.active ? 'white' : '#333'};
  border-radius: 30px;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.2s;
  user-select: none;

  &:hover {
    background: ${props => props.active ? '#3b5ae0' : '#e5e7eb'};
  }
`;

const InputsRow = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
`;

const InputBlock = styled.div`
  flex: 1;
`;

const Label = styled.div`
  font-weight: 600;
  margin-bottom: 8px;
  color: #444;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  border: 1.5px solid #e0e0e0;
  border-radius: 12px;
  font-size: 16px;
`;

const PeopleRange = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ContinueButton = styled.button`
  width: 100%;
  padding: 16px;
  background: ${props => props.disabled ? '#a0b0ff' : '#4a6bff'};
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 17px;
  font-weight: 600;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: #3650c8;
  }
`;

const Interests = () => {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [location, setLocation] = useState('');
  const [minPeople, setMinPeople] = useState('');
  const [maxPeople, setMaxPeople] = useState('');

  const allInterests = [
    'Спорт', 'Искусство', 'Путешествие', 'IT', 'Компьютерные игры',
    'Технологии', 'Еда', 'Настольные игры', 'Наука', 'Музыка',
    'Саморазвитие', 'Образование', 'Кино', 'Шопинг', 'Ресторан',
    'Музей', 'Отдых'
  ];

  const toggleInterest = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(i => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const navigate = useNavigate();

  return (
    <Layout>
      <Content>
        <Title>Выберите свои интересы</Title>

        <TagsContainer>
          {allInterests.map((interest) => (
            <Tag
              key={interest}
              active={selectedInterests.includes(interest)}
              onClick={() => toggleInterest(interest)}
            >
              {interest}
            </Tag>
          ))}
        </TagsContainer>

        <InputsRow>
          {/* Место */}
          <InputBlock>
            <Label>Место</Label>
            <Input
              type="text"
              placeholder="Город или район"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </InputBlock>

          {/* Количество человек */}
          <InputBlock>
            <Label>Количество человек</Label>
            <PeopleRange>
              <Input
                type="number"
                placeholder="1"
                value={minPeople}
                onChange={(e) => setMinPeople(e.target.value)}
              />
              <span>—</span>
              <Input
                type="number"
                placeholder="100"
                value={maxPeople}
                onChange={(e) => setMaxPeople(e.target.value)}
              />
            </PeopleRange>
          </InputBlock>
        </InputsRow>

        <ContinueButton disabled={selectedInterests.length === 0}>
          Продолжить
        </ContinueButton>
      </Content>
    </Layout>
  );
};

export default Interests;