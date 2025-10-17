"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

const eventsData = [
  {
    title: "Startup Bootcamp",
    slug: "startup-bootcamp",
    banner: "https://source.unsplash.com/800x400/?startup",
    description: "Learn the basics of starting a successful startup with mentors and workshops.",
    date: "2025-11-10",
    time: "10:00 AM - 4:00 PM",
    venue: "E-Cell Hall",
    type: "upcoming",
  },
  {
    title: "Pitch Competition",
    slug: "pitch-competition",
    banner: "https://source.unsplash.com/800x400/?competition",
    description: "Pitch your ideas to investors and win funding.",
    date: "2025-11-20",
    time: "11:00 AM - 5:00 PM",
    venue: "E-Cell Hall",
    type: "upcoming",
  },
  {
    title: "Innovation Hackathon",
    slug: "innovation-hackathon",
    banner: "https://source.unsplash.com/800x400/?hackathon",
    description: "Collaborate and build innovative solutions in 48 hours.",
    date: "2025-12-05",
    time: "9:00 AM - 6:00 PM",
    venue: "E-Cell Lab",
    type: "upcoming",
  },
];

const EventDetailPage = () => {
  const { slug } = useParams();
  const router = useRouter();
  const event = eventsData.find((e) => e.slug === slug);

  if (!event) return <div className="text-white text-center py-20">Event not found.</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <section className="max-w-4xl mx-auto py-20 px-6">
        {event.banner && <img src={event.banner} alt={event.title} className="w-full rounded-xl mb-6" />}
        <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
        <p className="text-gray-300 mb-6">{event.description}</p>
        <div className="text-gray-400 space-y-2 mb-6">
          <p><span className="font-semibold">Date:</span> {event.date}</p>
          <p><span className="font-semibold">Time:</span> {event.time}</p>
          <p><span className="font-semibold">Venue:</span> {event.venue}</p>
        </div>
        <a
          href={event.type === "upcoming" ? "/register" : "#"}
          className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition"
        >
          {event.type === "upcoming" ? "Register" : "For More Details"}
        </a>
        <div className="mt-6">
          <button
            onClick={() => router.back()}
            className="text-purple-400 hover:underline"
          >
            ← Back to Events
          </button>
        </div>
      </section>
    </div>
  );
};

export default EventDetailPage;
