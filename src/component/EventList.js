import React from 'react';
import { Link } from 'react-router-dom';
import { events } from '../Data/eventData';

// Assume the events data is passed as a prop to EventList component
function EventList() {
  return (
    <div>
      {events.map(event => (
        <div key={event.id}>
          <h3>{event.title}</h3>
          <p>Date: {event.date}</p>
          <p>Location: {event.location}</p>
          <Link to={`/events/${event.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default EventList;
