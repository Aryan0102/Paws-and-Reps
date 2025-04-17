import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.png';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Events', path: '/events' },
  ];

  return (
    <div className="w-full bg-white shadow-md"> 
      <div className="flex items-center justify-between p-4">
        {/* Logo and title */}
        <Link className="flex items-center" to={"/"} >
          <img src={logoImage} alt="Paws and Reps logo" className="h-10 w-10 mr-2"/>
          <p className="text-xl font-bold text-gray-800">Paws & Reps</p>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navLinks.map(link => (
            <li key={link.name}>
              <Link 
                to={link.path} 
                className="text-gray-700 hover:text-emerald-600 font-medium"
              >
                {link.name}
              </Link>
            </li>
          ))}

          <Link 
            to="https://hcb.hackclub.com/donations/start/paws-reps"
            className="bg-emerald-600 text-white font-semibold px-4 py-2 rounded hover:bg-emerald-700 transition"
          >
            Donate
          </Link>
        </ul>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700" 
          onClick={() => setMobileOpen(!mobileOpen)}
        >
            <MenuIcon fontSize="large" />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <ul className="md:hidden bg-white border-t border-gray-200 px-4 pb-4">
          {navLinks.map(link => (
            <li key={link.name} className="py-2">
              <Link 
                to={link.path} 
                className="block text-gray-700 hover:text-emerald-600 font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="py-2">
            <Link 
              to="https://hcb.hackclub.com/donations/start/paws-reps"
              className="block text-gray-700 hover:text-emerald-600 font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Donate
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default NavBar;
