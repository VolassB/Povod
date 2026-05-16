import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/Layot';

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

const Tag = styled.span`
  background: #eef2ff;
  color: #4a6bff;
  padding: 4px 10px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  align-self: flex-start;
  margin-bottom: 12px;
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
  &:hover {
    background: #3b52d9;
  }
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
  color: #6b7280;
  font-size: 14px;
`;

const HomeFeed = () => {
  const allEvents = [
    {
      id: 1,
      title: "Пляжный волейбол",
      category: "Спорт",
      image: "https://unsplash.com",
      location: "ЦПКиО / ЗЕНИТ",
      date: "Сегодня",
      time: "15:00",
      participants: "5 из 12 человек"
    },
    {
      id: 2,
      title: "Выставка современного искусства",
      category: "Искусство",
      image: "https://unsplash.com",
      location: "Эрарта",
      date: "19.06.26",
      time: "12:00",
      participants: "2 из 4 человек"
    }
  ];

  return (
    <Layout>
      <Feed>
        {allEvents.map(event => (
          <EventCard key={event.id}>
            <EventImage src={event.image} alt={event.title} />
            <EventInfo>
              <Tag>{event.category}</Tag>
              <EventTitle>{event.title}</EventTitle>
              <EventDetails>
                📍 {event.location}<br />
                📅 {event.date} • {event.time}<br />
                👥 {event.participants}
              </EventDetails>
              <BlueButton>Интересно</BlueButton>
            </EventInfo>
          </EventCard>
        ))}
      </Feed>

      <FiltersSidebar>
        <FilterTitle>Категория</FilterTitle>
        <FilterSelect>Все интересы</FilterSelect>
        <FilterTitle>Район</FilterTitle>
        <FilterSelect>Любой</FilterSelect>
      </FiltersSidebar>
    </Layout>
  );
};

export default HomeFeed;
