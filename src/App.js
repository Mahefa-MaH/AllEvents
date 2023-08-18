import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventList from './component/EventList';
import EventDetails from './component/EventDetails';
import { events } from './Data/eventData';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventList />} />
        <Route path="/events/:id" element={<EventDetails event={events} />} />
      </Routes>
    </Router>
  );
}

export default App;
