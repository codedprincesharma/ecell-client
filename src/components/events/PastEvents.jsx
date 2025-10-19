import React from "react";

const PastEvents = ({ events }) => {
  return (
    <div>
      <h2>Past Events</h2>
      {events.length === 0 && <p>No past events</p>}
      {events.map(event => (
        <div key={event._id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
          <img src={event.banner} alt={event.title} style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }} />
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <p>{new Date(event.date).toLocaleDateString()} | {event.time}</p>
          <p>Venue: {event.venue}</p>
          <p>Status: Completed</p>
        </div>
      ))}
    </div>
  );
};

export default PastEvents;
