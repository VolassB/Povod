import styled from '@emotion/styled';
import Button from './Button';

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  margin-bottom: 16px;
`;

const Title = styled.h3`
  margin: 0 0 12px 0;
  color: #1a1a1a;
`;

const Info = styled.p`
  margin: 8px 0;
  color: #555;
  font-size: 15px;
`;

export default function EventCard({ event }) {
  return (
    <Card>
      <Title>{event.title}</Title>
      <Info>📍 {event.location}</Info>
      <Info>🕒 {event.date} • {event.time}</Info>
      <Info>
        👥 {event.type === 'public' ? 'Публичное мероприятие' : 'Приватное для друзей'}
      </Info>
      
      <Button primary>Подробнее</Button>
    </Card>
  );
}