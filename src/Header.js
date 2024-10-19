import React, { useEffect, useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Header() {
  const [isTransparent, setIsTransparent] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate here

  const handleScroll = () => {
    if (window.scrollY > 5) {
      setIsTransparent(true);
    } else {
      setIsTransparent(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`flex items-center justify-between py-6 px-24 transition-all duration-300 ease-in-out ${isTransparent ? 'bg-transparent opacity-80' : 'bg-gray-900 text-white backdrop-blur-lg'}`}>
      <h1 className="text-4xl font-extrabold logo ml-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-gray-400 hover:from-gray-400 hover:via-teal-500 hover:to-blue-400 transition duration-300">
        R<span className="text-yellow-500">@</span>mi
      </h1>
      <ul className='flex gap-4'>
        <li className='text-gray-200 hover:text-blue-400'>SERVICES</li>
        <li className='text-gray-200 hover:text-blue-400'>LOCATIONS</li>
        <li className='text-gray-200 hover:text-blue-400'>ABOUT</li>
        <li className='text-gray-200 hover:text-blue-400'>BLOG</li>
        <li className='text-gray-200 hover:text-blue-400'>CONTACT</li>
        <li className='text-gray-200 hover:text-blue-400'>GIFT CARDS</li>
      </ul>
      <button 
        className='bg-yellow-500 text-black font-bold px-4 py-2 rounded'
        onClick={() => navigate('/reservation')} // Navigate to Reservation page
      >
        BOOK NOW
      </button>
    </div>
  );
}

export default Header;
