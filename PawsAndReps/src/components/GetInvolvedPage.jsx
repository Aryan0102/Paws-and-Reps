import React, { useState, useEffect } from 'react';

const GetInvolvedPage = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [showBanner, setShowBanner] = useState(true);

  const testimonials = [
    "Our gym family saved 15 dogs through Paws & Reps events! — Partner Gym Owner",
    "Using my fitness platform for good has never been more rewarding. — Paws & Reps Ambassador",
    "I met my best friend at a Paws & Reps event — my rescue dog! — Proud Dog Owner"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-black mb-6">
            Make a <span className="text-emerald-400">Difference</span>
            <span className="block">Through Fitness</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Anyone can help save a pup – choose your path below to get started.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSd4AcFcsUneSBLJKP9ke_hjAksVOhk4XbPr4ZiqMMGmu7JWPA/viewform?usp=sharing" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-full">
              Become a Partner Gym
            </a>
            <a href="#" className="border-2 border-white hover:bg-white hover:text-gray-900 font-bold px-8 py-4 rounded-full">
              Join Our Fitness Challenge
            </a>
            <a href="#" className="border-2 border-white hover:bg-white hover:text-gray-900 font-bold px-8 py-4 rounded-full">
              Donate to Help a Pup
            </a>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-black text-gray-900 mb-8">Our Mission</h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            At Paws & Reps, we believe awareness starts with movement — and together, we can make a real impact for rescue dogs in need.
            Whether you're a gym owner, a fitness influencer, or a passionate dog parent, there's a way for you to get involved.
          </p>

          <h3 className="text-3xl font-bold mb-10">Who Are You?</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <a href="#gym" className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl">
              <div className="text-5xl mb-4">🏋️</div>
              <p className="text-xl font-bold">Gym Owner/Trainer</p>
            </a>
            <a href="#influencer" className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl">
              <div className="text-5xl mb-4">💪</div>
              <p className="text-xl font-bold">Fitness Influencer</p>
            </a>
            <a href="#supporter" className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl">
              <div className="text-5xl mb-4">🐕</div>
              <p className="text-xl font-bold">Dog Owner/Supporter</p>
            </a>
          </div>
        </div>
      </section>

      {/* Gym Owners */}
      <section id="gym" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltfGVufDB8fDB8fHww"
            alt="Gym"
            className="md:w-1/2 rounded-xl shadow-lg"
          />
          <div className="md:w-1/2">
            <h2 className="text-4xl font-black mb-6">
              For Gyms & <span className="text-emerald-500">Fitness Centers</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Open your doors to make a difference! Partner gyms host Paws & Reps charity workouts and adoption events, turning workouts into lifesaving fun.
              By becoming a partner, you'll engage your community, gain positive exposure, and help pets find loving homes.
            </p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSd4AcFcsUneSBLJKP9ke_hjAksVOhk4XbPr4ZiqMMGmu7JWPA/viewform?usp=sharing" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-full inline-block">
              Partner with Us →
            </a>
          </div>
        </div>
      </section>

      {/* Influencers */}
      <section id="influencer" className="py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-black mb-6">
              For Fitness <span className="text-emerald-500">Influencers</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Use your passion and platform for a great cause. As a Paws & Reps Ambassador, you can inspire your followers to support rescue pups.
              From hosting fitness challenges to sharing our mission on social media, you'll help grow our community and save more lives.
            </p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeapAjBH7FuHIP4RxKhQg6uIABGUqcZDg_nP4A6Xt1rAcvz_g/viewform?usp=sharing&ouid=117794635158920196981" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-full inline-block">
              Apply to Be an Ambassador →
            </a>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <img src="https://4.bp.blogspot.com/-cuApDoBt96o/XJ2jZHVhN_I/AAAAAAAACm0/6qEEJKTd68ownXXJly6l79YsW1pxjcbHACLcBGAs/s1600/Instagram%2BTemplate.png" alt="Social post" className="rounded-lg shadow" />
            <img src="https://4.bp.blogspot.com/-cuApDoBt96o/XJ2jZHVhN_I/AAAAAAAACm0/6qEEJKTd68ownXXJly6l79YsW1pxjcbHACLcBGAs/s1600/Instagram%2BTemplate.png" alt="Social post" className="rounded-lg shadow" />
            <img src="https://4.bp.blogspot.com/-cuApDoBt96o/XJ2jZHVhN_I/AAAAAAAACm0/6qEEJKTd68ownXXJly6l79YsW1pxjcbHACLcBGAs/s1600/Instagram%2BTemplate.png" alt="Social post" className="rounded-lg shadow" />
            <img src="https://4.bp.blogspot.com/-cuApDoBt96o/XJ2jZHVhN_I/AAAAAAAACm0/6qEEJKTd68ownXXJly6l79YsW1pxjcbHACLcBGAs/s1600/Instagram%2BTemplate.png" alt="Social post" className="rounded-lg shadow" />
          </div>
        </div>
      </section>

      {/* Dog Owners */}
      <section id="supporter" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <img
            src="https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg?cs=srgb&dl=pexels-svetozar-milashevich-99573-1490908.jpg&fm=jpg"
            alt="Dog owner"
            className="md:w-1/2 rounded-xl shadow-lg"
          />
          <div className="md:w-1/2">
            <h2 className="text-4xl font-black mb-6">
              For Dog Owners & <span className="text-emerald-500">Animal Lovers</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Turn your love for dogs into action! Join our fitness fundraisers or even start your own. Whether it's a charity run, a dog-friendly yoga class, or a simple pledge-per-rep with friends,
              every bit of effort and every dollar raised provides shelter pups with food, care, and medical treatment.
            </p>
            <a href="#" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-full inline-block">
              Start a Fundraiser →
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-12">Impact in <span className="text-emerald-500">Action</span></h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-5xl mb-4">🏋️</div>
              <p className="text-4xl font-black text-emerald-500">2</p>
              <p className="text-gray-600">Partner Gyms</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-5xl mb-4">💰</div>
              <p className="text-4xl font-black text-emerald-500">$8,546</p>
              <p className="text-gray-600">Funds Raised</p>
            </div>
          </div>

          {/* Partner Gyms */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8">Our Partner Gyms Include:</h3>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="bg-gray-100 rounded-lg px-8 py-4">
                <p className="text-lg font-bold">Gold's Gym Bridgewater</p>
              </div>
              <div className="bg-gray-100 rounded-lg px-8 py-4">
                <p className="text-lg font-bold">Retro Fitness Bridgewater</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="mb-30 text-center">
        <p className="text-lg font-bold mb-4">Follow Our Journey:</p>
        <a
          href="https://www.instagram.com/paws_and_reps?igsh=MXRteXpucnpwaWlzag%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-bold"
        >
          @paws_and_reps
        </a>
      </section>

      {/* Footer Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 w-full bg-emerald-600 text-white p-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <p className="flex-1 mr-4">{testimonials[messageIndex]}</p>
            <div className="flex items-center gap-4">
              <a href="#" className="bg-white text-emerald-600 font-bold px-6 py-2 rounded-full">
                Get Involved
              </a>
              <button onClick={() => setShowBanner(false)} className="text-white hover:text-gray-200">
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetInvolvedPage;