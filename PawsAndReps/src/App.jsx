// src/App.jsx
import React from 'react';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import GetInvolvedPage from './components/GetInvolvedPage';
import AboutSection from './components/AboutPage';
import ProgramsSection from './components/ProgramsPage';
import EventsSection from './components/EventsPage';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-1">
        <Routes>
          <Route path='/' element={<GetInvolvedPage />} />;
          <Route path='/about' element={<AboutSection />} />;
          <Route path='/programs' element={<ProgramsSection />} />;
          <Route path='/events' element={<EventsSection />} />;
        </Routes>
      </div>
    </div>
  );
}

export default App;
