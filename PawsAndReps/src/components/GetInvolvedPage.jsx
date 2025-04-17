import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const GetInvolvedPage = () => {
  const rotateMessages = React.useMemo(() => [
    "“Our gym family saved 15 dogs through Paws & Reps events!” — Partner Gym Owner",
    "“Using my fitness platform for good has never been more rewarding.” — Paws & Reps Ambassador",
    "“I met my best friend at a Paws & Reps event — my rescue dog!” — Proud Dog Owner"
  ], []);
  const [messageIndex, setMessageIndex] = useState(0);
  const [footerOpen, setFooterOpen] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % rotateMessages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [rotateMessages]);

  const identityOptions = [
    { id: "gym", emoji: "🏋️", label: "Gym Owner/Trainer" },
    { id: "influencer", emoji: "💪", label: "Fitness Influencer" },
    { id: "supporter", emoji: "🐕", label: "Dog Owner/Supporter" },
  ];

  const stats = [
    { icon: "🏋️", value: "20", label: "Partner Gyms" },
    { icon: "🐾", value: "120", label: "Pets Adopted" },
    { icon: "💰", value: "$50k", label: "Funds Raised" }
  ];

  return (
    <div className="relative scroll-smooth pb-20">
      {/* Main Banner */}
      <section
        className="relative bg-cover bg-center h-100 md:h-96 flex items-center justify-center text-center main-banner"
      >
        <div className="absolute inset-0 md:inset-5 bg-black/70"></div>
        <div className="relative text-white px-4">
          <p className="text-3xl md:text-5xl font-extrabold mb-4">Make a Difference Through Fitness</p>
          <p className="text-lg md:text-xl font-medium mb-6">
            Anyone can help save a pup – choose your path below to get started.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              className="bg-emerald-600 px-5 py-3 rounded font-semibold hover:bg-emerald-700"
            >
              Become a Partner Gym
            </Link>
            <Link
              className="bg-emerald-600 px-5 py-3 rounded font-semibold hover:bg-emerald-700"
            >
              Join Our Fitness Challenge
            </Link>
            <Link
              className="bg-emerald-600 px-5 py-3 rounded font-semibold hover:bg-emerald-700"
            >
              Donate to Help a Pup
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-12 px-4 text-gray-800 text-center flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="max-w-3xl mb-8">
          At Paws & Reps, we believe awareness starts with movement — and together, we can make a real impact for rescue dogs in need.
          Whether you're a gym owner, a fitness influencer, or a passionate dog parent, there’s a way for you to get involved and help save lives through fitness-driven action.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Who Are You?</h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
          {identityOptions.map(option => (
            <a
              key={option.id}
              href={`#${option.id}`}
              className="block bg-gray-100 p-6 rounded-xl shadow cursor-pointer hover:bg-emerald-600 hover:text-white transition"
            >
              <div className="text-4xl mb-2">{option.emoji}</div>
              <p className="text-xl font-semibold">{option.label}</p>
            </a>
          ))}
        </div>
      </section>

      {/* For Gyms & Fitness Centers */}
      <section id="gym" className="py-12 px-4 flex flex-col md:flex-row md:items-center text-gray-800">
        <img
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltfGVufDB8fDB8fHww"
          alt="Gym partnering with Paws & Reps (placeholder)"
          className="md:w-1/2 rounded-lg shadow-md mb-6 md:mb-0 md:mr-8"
        />
        <div className="md:w-1/2">
          <p className="text-2xl font-bold mb-4">For Gyms & Fitness Centers</p>
          <p className="mb-6">
            Open your doors to make a difference! Partner gyms host Paws & Reps charity workouts and adoption events, turning workouts into lifesaving fun.
            By becoming a partner, you’ll engage your community, gain positive exposure, and help pets find loving homes in the process.
          </p>
          <Link
            className="bg-emerald-600 text-white px-6 py-3 rounded font-medium hover:bg-emerald-700"
          >
            Partner with Us
          </Link>
        </div>
      </section>

      {/* For Fitness Influencers & Athletes */}
      <section id="influencer" className="py-12 px-4 flex flex-col md:flex-row md:items-center text-gray-800">
        <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
          <p className="text-2xl font-bold mb-4">For Fitness Influencers & Athletes</p>
          <p className="mb-6">
            Use your passion and platform for a great cause. As a Paws & Reps Ambassador, you can inspire your followers to support rescue pups.
            From hosting fitness challenges to sharing our mission on social media, you’ll help grow our community and save more lives — all while doing what you love.
          </p>
          <Link
            className="bg-emerald-600 text-white px-6 py-3 rounded font-medium hover:bg-emerald-700"
          >
            Apply to Be an Ambassador
          </Link>
        </div>
        <div className="md:w-1/2 grid grid-cols-4 gap-4">
          <img
            src="https://4.bp.blogspot.com/-cuApDoBt96o/XJ2jZHVhN_I/AAAAAAAACm0/6qEEJKTd68ownXXJly6l79YsW1pxjcbHACLcBGAs/s1600/Instagram%2BTemplate.png"
            alt="Influencer post 1"
            className="rounded-md shadow max-w-40"
          />
          <img
            src="https://4.bp.blogspot.com/-cuApDoBt96o/XJ2jZHVhN_I/AAAAAAAACm0/6qEEJKTd68ownXXJly6l79YsW1pxjcbHACLcBGAs/s1600/Instagram%2BTemplate.png"
            alt="Influencer post 2"
            className="rounded-md shadow max-w-40"
          />
          <img
            src="https://4.bp.blogspot.com/-cuApDoBt96o/XJ2jZHVhN_I/AAAAAAAACm0/6qEEJKTd68ownXXJly6l79YsW1pxjcbHACLcBGAs/s1600/Instagram%2BTemplate.png"
            alt="Influencer post 3"
            className="rounded-md shadow max-w-40"
          />
          <img
            src="https://4.bp.blogspot.com/-cuApDoBt96o/XJ2jZHVhN_I/AAAAAAAACm0/6qEEJKTd68ownXXJly6l79YsW1pxjcbHACLcBGAs/s1600/Instagram%2BTemplate.png"
            alt="Influencer post 4"
            className="rounded-md shadow max-w-40"
          />
        </div>
      </section>

      {/* For Dog Owners & Supporters */}
      <section id="supporter" className="py-12 px-4 flex flex-col md:flex-row md:items-center text-gray-800">
        <img
          src="https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg?cs=srgb&dl=pexels-svetozar-milashevich-99573-1490908.jpg&fm=jpg"
          alt="Dog owner supporting Paws & Reps"
          className="md:w-1/2 rounded-lg shadow-md mb-6 md:mb-0 md:mr-8"
        />
        <div className="md:w-1/2">
          <p className="text-2xl font-bold mb-4">For Dog Owners & Animal Lovers</p>
          <p className="mb-6">
            Turn your love for dogs into action! Join our fitness fundraisers or even start your own. Whether it’s a charity run, a dog-friendly yoga class, or a simple pledge-per-rep with friends,
            every bit of effort and every dollar raised provides shelter pups with food, care, and medical treatment. Get fit, have fun, and save lives at the same time.
          </p>
          <Link
            className="bg-emerald-600 text-white px-6 py-3 rounded font-medium hover:bg-emerald-700"
          >
            Start a Fundraiser
          </Link>
        </div>
      </section>

      {/* Impact in Action */}
      <section className="py-12 px-4 bg-gray-100 text-gray-800 text-center flex flex-col items-center">
        <h3 className="text-2xl font-bold mb-8">Impact in Action</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
          {stats.map((item, index) => (
            <div key={index} className="bg-white p-26 rounded-lg shadow-md">
              <div className="text-4xl mb-2">{item.icon}</div>
              <p className="text-3xl font-extrabold">{item.value}</p>
              <p className="text-gray-700">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Media Connect */}
      <section className="py-8 text-gray-800 flex flex-col items-center md:flex-row md:justify-center md:space-x-4 text-lg">
        <p className="font-semibold mb-2 md:mb-0">Explore More:</p>
        <a
          href="https://www.instagram.com/paws_and_reps?igsh=MXRteXpucnpwaWlzag%3D%3D&utm_source=qr"
          target="_blank"
          className="flex items-center space-x-2 hover:text-emerald-600 transition"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-D7Y509bER6qQ0iPLDyxbgvfm5xFUX6E_Ag&s"
            alt="Instagram"
            className="w-8 h-8"
          />
        </a>
      </section>


      {/* Sticky Footer CTA Banner */}
      {footerOpen ? (
        <div className="fixed bottom-0 left-0 w-full bg-emerald-600 text-white px-4 py-4 md:py-3 flex flex-col md:flex-row items-center justify-center shadow-md">
          <p className="mb-3 md:mb-0 md:mr-6 text-center md:text-left">
            {rotateMessages[messageIndex]}
          </p>
          <div className='flex flex-row items-center'>
            <Link
              className="bg-white text-emerald-600 font-semibold px-5 py-2 rounded hover:bg-gray-100"
            >
              Get Involved
            </Link>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Ic_close_48px.svg/480px-Ic_close_48px.svg.png" alt="close" onClick={() => setFooterOpen(false)} className='w-8 h-8 ml-5' />
          </div>
        </div>
      ) : (
        ""
      )
      }
    </div>
  );
};

export default GetInvolvedPage;
