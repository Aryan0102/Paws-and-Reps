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
        <div className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50 text-gray-800">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold">Our Programs</h1>
                <p className="text-lg mt-4">Engaging activities designed to support pets and build compassionate, fitness-focused communities.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {programs.map((prog) => (
                    <div key={prog.title} className="bg-white rounded-lg shadow hover:shadow-xl transition duration-300">
                        <img
                            src={prog.img}
                            alt={prog.title}
                            className="rounded-t-lg h-52 w-full object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold mb-2 text-gray-800">{prog.title}</h2>
                            <p className="text-gray-600 mb-4">{prog.description}</p>
                            <button className="bg-emerald-600 text-white px-4 py-2 rounded font-medium hover:bg-emerald-700 transition">
                                Learn More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProgramsSection;
