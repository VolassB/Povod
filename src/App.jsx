import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Register from './pages/Register';
import HomeFeed from './pages/HomeFeed'; // Подключаем новую главную
import CreateEventIdea from './pages/CreateEventIdea';
import MyEvents from './pages/MyEvents';
import Discussions from './pages/Discussions';
import MyProfile from './pages/MyProfile';
import NotificationsOverlay from './pages/NotificationsOverlay';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/home" element={<HomeFeed />} /> {/* Наш новый адрес */}
        <Route path="/create" element={<CreateEventIdea />} />
        <Route path="/my-events" element={<MyEvents />} />
        <Route path="/discussions" element={<Discussions />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/event-details" element={<NotificationsOverlay />} />
      </Routes>
    </Router>
  );
}

export default App;
