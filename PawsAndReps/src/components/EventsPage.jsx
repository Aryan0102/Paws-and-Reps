import { useState, useEffect } from 'react';
import { getEvents } from '../assets/getInfo';

const EventsSection = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getEvents("Events");
      setEvents(data);
    };
    fetchData();
  }, []);

  return (
    <div className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50 text-gray-800">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Upcoming Events</h1>
        <p className="text-lg mt-4">Join us in our exciting, pet-loving fitness events and make a difference!</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {events.map((event, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 overflow-hidden flex flex-col">
            <img
              src={event.img}
              alt={event.name}
              className="h-52 w-full object-cover"
            />
            <div className="p-6 flex-1">
              <div className="text-emerald-600 font-semibold mb-2">{event.date}</div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{event.name}</h2>
              <p className="text-gray-600 mb-4 flex-grow">{event.description}</p>
              <a
                href={event.link}
                className="inline-block mt-auto bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 transition"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsSection;