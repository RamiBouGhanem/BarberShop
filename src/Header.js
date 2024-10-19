import React, { useEffect, useState } from 'react';
import "./App.css";

function Header() {
  const [isTransparent, setIsTransparent] = useState(false);

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
    <div className={`flex items-center justify-between py-6 px-24 transition-all duration-300 ease-in-out ${isTransparent ? 'bg-transparent' : 'bg-gray-900 text-white backdrop-blur-lg'}`}>
      <h1 className='text-2xl font-bold logo ml-6'>R@mi</h1>
      <ul className='flex gap-4'>
        <li className='text-gray-200'>SERVICES</li>
        <li className='text-gray-200'>LOCATIONS</li>
        <li className='text-gray-200'>ABOUT</li>
        <li className='text-gray-200'>BLOG</li>
        <li className='text-gray-200'>CONTACT</li>
        <li className='text-gray-200'>GIFT CARDS</li>
      </ul>
      <button className='bg-yellow-500 text-black font-bold px-4 py-2 rounded'>
        BOOK NOW
      </button>
    </div>
  );
}

export default Header;
