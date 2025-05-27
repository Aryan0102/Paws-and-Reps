import React from 'react';

const AboutSection = () => {
  const teamMembers = [
    {
      name: "Sreyash Sinha",
      role: "Founder & President",
      about: "Hi my name is Sreyash Sinha and I am a junior at Bridgewater Raritan High School in New Jersey. Outside of school, I love playing basketball, pickleball, and playing outside with my dog.",
      image: "xyz"
    },
    {
      name: "Neel Wakde",
      role: "Vice President",
      about: "My name is Neel Wakde and I am a junior at Bridgewater-Raritan High School in New Jersey. I enjoy weightlifting as well as doing mixed-martial arts. I also have 2 dogs that I frequently participate in activities with.",
      image: "xyz"
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-black mb-6">
            About <span className="text-emerald-400">Paws & Reps</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Paws & Reps is a nonprofit dedicated to connecting fitness with pet health by raising awareness 
            about UTIs in female dogs.
          </p>
          <div className="mt-8">
            <span className="text-2xl font-bold text-emerald-400">"Lifting for a Cause"</span>
          </div>
        </div>
      </section>

      {/* Our Mission & UTI Awareness */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-8">
              Our <span className="text-emerald-500">Mission</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12">
              Founded on the belief that passion for fitness can translate into compassion for animals in need, 
              Paws & Reps is committed to making every rep count. We unite fitness enthusiasts to raise awareness 
              and funds for a critical health issue affecting our canine companions.
            </p>
          </div>

          {/* UTI Stats Section */}
          <div className="bg-gray-50 rounded-xl p-12 mb-16">
            <h3 className="text-3xl font-bold text-center mb-10">
              Why <span className="text-emerald-500">UTI Awareness</span> Matters
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-5xl font-black text-emerald-500 mb-2">14%</p>
                <p className="text-gray-600">of all dogs will experience a UTI in their lifetime</p>
              </div>
              <div>
                <p className="text-5xl font-black text-emerald-500 mb-2">3x</p>
                <p className="text-gray-600">more likely in female dogs than males</p>
              </div>
              <div>
                <p className="text-5xl font-black text-emerald-500 mb-2">85%</p>
                <p className="text-gray-600">can be prevented with proper care and awareness</p>
              </div>
            </div>
            <p className="text-center mt-10 text-lg text-gray-600 max-w-3xl mx-auto">
              UTIs in female dogs often go undetected, leading to serious complications. Through our fitness events, 
              we raise funds for veterinary care and educate pet owners about prevention and early detection.
            </p>
          </div>

          {/* Our Story */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <img
              src="https://www.akc.org/wp-content/uploads/2017/11/Icelandic-Sitting.jpg"
              alt="Our Story"
              className="md:w-1/2 rounded-xl shadow-lg"
            />
            <div className="md:w-1/2">
              <h3 className="text-3xl font-black mb-6">
                How It <span className="text-emerald-500">Started</span>
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Paws & Reps began when our founder's dog suffered from a UTI that went undiagnosed for weeks. 
                This experience highlighted the need for better awareness about this common but often overlooked condition.
              </p>
              <p className="text-lg text-gray-600">
                Combining a love for fitness with a passion for animal welfare, we created a unique platform where 
                every workout contributes to the health and wellbeing of dogs everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4">
            Meet Our <span className="text-emerald-500">Team</span>
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            A dedicated group of high school students from New Jersey working together to make a difference
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-emerald-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.about}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600">
              Plus many more amazing volunteers who help make our events possible!
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-8">
            What We <span className="text-emerald-500">Do</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="text-4xl mb-4">🏋️</div>
              <h3 className="text-xl font-bold mb-3">Fitness Events</h3>
              <p className="text-gray-600">
                Organize charity workouts, competitions, and challenges where every rep raises funds
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-3">Education</h3>
              <p className="text-gray-600">
                Spread awareness about UTI prevention and early detection in female dogs
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Partnerships</h3>
              <p className="text-gray-600">
                Connect gyms, vets, and shelters to create a supportive community
              </p>
            </div>
          </div>
          <div className="bg-emerald-50 rounded-xl p-8 inline-block">
            <p className="text-xl font-bold text-emerald-600">
              100% of proceeds go directly to veterinary care and UTI prevention programs
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6">
            Ready to Join Our Mission?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Help us spread awareness and save dogs from preventable UTIs.
          </p>
          <a href="#" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-full inline-block">
            Get Involved Today →
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;