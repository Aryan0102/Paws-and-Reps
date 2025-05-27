import { useEffect, useState } from "react";
import { getEvents } from "../assets/getInfo";

const ProgramsSection = () => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getEvents("Programs");
      setPrograms(data);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-black mb-6">
            Our <span className="text-emerald-400">Programs</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Engaging activities designed to support pets and build compassionate, fitness-focused communities.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((prog) => (
              <div key={prog.title} className="bg-white rounded-xl shadow-lg hover:shadow-xl overflow-hidden">
                <img
                  src={prog.img}
                  alt={prog.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-4">{prog.title}</h2>
                  <p className="text-gray-600 mb-6">{prog.description}</p>
                  <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-full">
                    Learn More →
                  </button>
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
            Want to Start a <span className="text-emerald-500">Program</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We're always looking for new ways to combine fitness and animal welfare. Got an idea? Let's talk!
          </p>
          <a href="#" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-full inline-block">
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProgramsSection;