import { useState } from "react";
import styled from '@emotion/styled';

import Button from "./components/Button";
import EventCard from "./components/EventCard";
import CreateEventForm from "./components/CreateEventForm";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: system-ui, Arial, sans-serif;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

function App() {
  const [page, setPage] = useState("home");

  const sampleEvents = [
    {
      id: 1,
      title: "Встреча в парке Горького",
      location: "Парк Горького, Москва",
      date: "15 мая",
      time: "18:00",
      type: "public"
    },
    {
      id: 2,
      title: "Игровой вечер у Димы",
      location: "У Димы дома",
      date: "16 мая",
      time: "19:30",
      type: "private"
    }
  ];

  return (
    <Container>
      <Header>
        <h1>🤝 Встречи ВКонтакте</h1>
        <p>Находи друзей и создавай события легко</p>
      </Header>

      {/* Навигация */}
      <div style={{ marginBottom: "30px", textAlign: "center" }}>
        <Button 
          primary={page === "home"} 
          onClick={() => setPage("home")}
        >
          Главная
        </Button>
        
        <Button 
          primary={page === "create"} 
          onClick={() => setPage("create")}
          style={{ margin: "0 8px" }}
        >
          Создать встречу
        </Button>
        
        <Button 
          primary={page === "my-events"} 
          onClick={() => setPage("my-events")}
        >
          Мои встречи
        </Button>
      </div>

      {/* Главная страница */}
      {page === "home" && (
        <>
          <h2>Ближайшие встречи</h2>
          {sampleEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </>
      )}

      {/* Страница создания встречи */}
      {page === "create" && (
        <>
          <h2>Создать повод</h2>
          <CreateEventForm />
        </>
      )}

      {/* Мои встречи */}
      {page === "my-events" && (
        <div>
          <h2>Мои встречи</h2>
          <p>Здесь позже будет список твоих созданных и принятых встреч.</p>
        </div>
      )}
    </Container>
  );
}

export default App;