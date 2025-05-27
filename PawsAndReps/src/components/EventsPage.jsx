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
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-black mb-6">
            Upcoming <span className="text-emerald-400">Events</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join us in our exciting, pet-loving fitness events and make a difference!
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg hover:shadow-xl overflow-hidden flex flex-col">
                <img
                  src={event.img}
                  alt={event.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-8 flex flex-col flex-1">
                  <div className="text-emerald-600 font-semibold text-lg mb-3">{event.date}</div>
                  <h2 className="text-2xl font-bold mb-4">{event.name}</h2>
                  <p className="text-gray-600 mb-6 flex-grow">{event.description}</p>
                  <a
                    href={event.link}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-full inline-block text-center"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6">
            Don't See an Event <span className="text-emerald-500">Near You</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Partner with us to bring Paws & Reps to your community and help raise awareness about canine health.
          </p>
          <a href="#" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-full inline-block">
            Host an Event
          </a>
        </div>
      </section>
    </div>
  );
};

export default EventsSection;