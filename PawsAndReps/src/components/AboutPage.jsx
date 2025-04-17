import React from 'react';

const AboutSection = () => {
  return (
    <div className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50 text-gray-800">

      {/* About Introduction */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About Paws & Reps</h1>
        <p className="max-w-3xl mx-auto text-lg">
          Founded on the belief that passion for fitness can translate into compassion for animals in need, Paws & Reps is a 501 nonprofit committed to making every rep count. Our motto, <strong>"Lifting for a Cause"</strong>, drives everything we do.
        </p>
      </div>

      {/* Our Story */}
      <div className="md:flex md:items-center md:space-x-10 mb-16">
        <img
          src="https://www.akc.org/wp-content/uploads/2017/11/Icelandic-Sitting.jpg"
          alt="Our Story"
          className="rounded-lg shadow-md mb-6 md:mb-0 md:w-1/2"
        />
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="mb-4">
            Paws & Reps started in 2024 when a group of gym buddies decided to turn their workout challenge into a fundraiser for a local animal shelter. The overwhelming success of that first lift-a-thon sparked the creation of our organization.
          </p>
          <p>
            Today, we continue to rally communities through fitness events that support rescue pets—all while promoting fun, fitness, and animal welfare.
          </p>
        </div>
      </div>

      {/* Our Team */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-center mb-8">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-xl font-bold mb-2">Jane Doe</p>
            <p className="text-emerald-600 font-semibold mb-3">Founder & President</p>
            <p>A lifelong animal lover and powerlifting enthusiast, Jane leads Paws & Reps with a passionate vision to strengthen communities and save pets.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-xl font-bold mb-2">John Smith</p>
            <p className="text-emerald-600 font-semibold mb-3">Co-Founder & Head Coach</p>
            <p>John is a certified trainer who designs our inclusive fitness programs, ensuring everyone—from beginner to pro—feels welcome and empowered at our events.</p>
          </div>
        </div>
      </div>

      {/* What We Do */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
        <p className="max-w-4xl mx-auto mb-6">
          Paws & Reps organizes charity fitness events, educational initiatives, and fosters partnerships with gyms and animal shelters. Whether it's a deadlift competition where each rep raises crucial funds or community pet yoga classes designed to promote adoptions, we're constantly innovating to unite fitness enthusiasts and animal lovers.
        </p>
        <p className="font-bold">
          Every dollar raised directly supports animal care and welfare initiatives.
        </p>
      </div>

    </div>
  );
};

export default AboutSection;