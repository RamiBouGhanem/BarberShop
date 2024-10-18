import React from 'react';

function Header() {
  return (
    <div className='flex items-center justify-between bg-gray-900 text-white py-4 px-24'>
      <h1 className='text-2xl font-bold logo ml-8 '>R@mi</h1>
      <ul className='flex gap-4'>
        <li>SERVICES</li>
        <li>LOCATIONS</li>
        <li>ABOUT</li>
        <li>BLOG</li>
        <li>CONTACT</li>
        <li>GIFT CARDS</li>
      </ul>
      <button className='bg-yellow-500 text-black font-bold px-4 py-2 rounded'>
        BOOK NOW
      </button>
    </div>
  );
}

export default Header;
