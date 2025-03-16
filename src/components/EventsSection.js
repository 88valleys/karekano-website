import React from 'react';
import getUpcomingEvents from '../data/eventsData';

const events = getUpcomingEvents();

const EventsSection = () => {
  return (
    <section id="events" className="w-full py-12 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* section title */}
        <h2 className="text-4xl font-bold mb-6 uppercase border-b border-white inline-block">
          lives
        </h2>

        <div className="divide-y divide-gray-700">
          {events.map((event, index) => (
            <div
              key={index}
              className="py-6 flex flex-col md:flex-row justify-between"
            >
              <div className="text-gray-400 text-sm md:w-1/4 md:pr-6">
                {event.date}
              </div>
              <div className="md:w-2/4">
                <h3 className="text-lg font-bold">{event.title}</h3>
                <p className="text-gray-300 text-sm">{event.details}</p>
              </div>
              <div className="text-gray-400 text-sm md:w-1/4 md:text-right">
                {event.location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
