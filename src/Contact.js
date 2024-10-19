import React from 'react';

function Contact() {
  return (
    <div className="contact-container p-6 shadow-md w-full bg-black">
      {/* <h2 className="text-5xl font-bold text-center text-white mb-8">Contact Us</h2> */}
      <div className="contact-info flex justify-between p-12 pb-24 text-center">
        <div className="hours">
          <h3 className="text-5xl font-semibold text-white mb-4">Hours</h3>
          <p className="text-gray-200 text-2xl">Tues-Fri: <span className="font-medium text-blue-500">9:00am - 6:00pm</span></p>
          <p className="text-gray-200 text-2xl">Sat: <span className="font-medium text-blue-500">9:00am - 3:00pm</span></p>
          <p className="text-gray-200 text-2xl">Closed: <span className="font-medium text-blue-500">Sun & Mon</span></p>
        </div>
        <div className="contact-details">
          <h3 className="text-5xl font-semibold text-white mb-4">Contact Us</h3>
          <p className="flex items-center text-gray-200 text-2xl p-1">
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg> */}
            <a href="tel:+961 70 439 225" className="text-blue-500 hover:underline ml-20">+961 70 439 225</a>
          </p>
          <p className="flex items-center text-gray-200 text-2xl p-1">
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 7.5a4.5 4.5 0 01-4.5 4.5H5.25a4.5 4.5 0 01-4.5-4.5V5.25a4.5 4.5 0 014.5-4.5h12a4.5 4.5 0 014.5 4.5V7.5z" />
            </svg> */}
            <a href="mailto:rami.boughanem240@gmail.com" className="text-blue-500 hover:underline">rami.boughanem240@gmail.com</a>
          </p>
        </div>
        <div className="location">
          <h3 className="text-5xl font-semibold text-white mb-4 ml-8">Location</h3>
          <p className="text-gray-600 flex items-center ">
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 6.75l-7.5 7.5-7.5-7.5" />
            </svg> */}
            <p className="text-blue-500 hover:underline ml-16 text-2xl pb-1">3529 Lovell Ave</p>
          </p>
          <p className="text-gray-600 flex items-center">
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25V12.75l-4-4-4 4V8.25l4-4 4 4z" />
            </svg> */}
            <p className="text-blue-500 hover:underline ml-8 text-2xl pt-1">Fort Worth, TX 76107</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;