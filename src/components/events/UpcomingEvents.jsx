import React from "react";

const UpcomingEvents = ({ events }) => {
  return (
    <div>
      <h2>Upcoming Events</h2>
      {events.length === 0 && <p>No upcoming events</p>}
      {events.map(event => (
        <div key={event._id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
          <img src={event.banner} alt={event.title} style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }} />
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <p>{new Date(event.date).toLocaleDateString()} | {event.time}</p>
          <p>Venue: {event.venue}</p>
          <p>Status: Coming Soon</p>
        </div>
      ))}
    </div>
  );
};

export default UpcomingEvents;
