"use client";

import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios

const EventsPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/events");
        console.log("API Response:", response.data); // Debug: Log the API response

        // Ensure data is an array
        if (Array.isArray(response.data)) {
          setData(response.data);
        } else if (response.data && Array.isArray(response.data.events)) {
          // Handle case where API returns { events: [] }
          setData(response.data.events);
        } else {
          console.warn("API response is not an array:", response.data);
          setData([]); // Fallback to empty array
        }
      } catch (err) {
        console.error("Axios error:", err);
        setError(
          err.response?.data?.message ||
            err.message ||
            "An error occurred while fetching events."
        );
        setData([]); // Reset data to empty array on error
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <p>Loading events...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <main style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>Events</h1>

      {data.length === 0 ? (
        <p style={{ textAlign: "center" }}>No events available.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gap: "20px",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {data.map((event) => (
            <div
              key={event._id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#fff",
                transition: "transform 0.2s",
              }}
            >
              <img
                src={event.banner || "/fallback-image.jpg"}
                alt={event.title || "Event"}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
                onError={(e) => (e.target.src = "/fallback-image.jpg")}
              />
              <div style={{ padding: "15px", flex: "1" }}>
                <h2 style={{ margin: "0 0 10px 0" }}>{event.title}</h2>
                <p style={{ margin: "0 0 10px 0", color: "#555" }}>
                  {event.description || "No description available"}
                </p>
                <p style={{ margin: "0 0 5px 0", fontWeight: "bold" }}>
                  Date: {new Date(event.date).toLocaleDateString()}{" "}
                  {event.time && `at ${event.time}`}
                </p>
                <p style={{ margin: 0 }}>Venue: {event.venue || "TBD"}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default EventsPage;