import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Reservation() {
  const [selectedBarber, setSelectedBarber] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleBarberChange = (event) => {
    setSelectedBarber(event.target.value);
  };

  const handleBook = () => {
    navigate('/booking'); // Navigate to the Booking page
  };

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center p-8">
      <div className="relative bg-gray-800 w-[40%] p-10 rounded-lg shadow-2xl">
        {/* 3D Effect with Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-700 to-gray-900 transform -translate-x-1 -translate-y-2 rounded-lg blur-sm"></div>

        <div className="relative z-10 p-8 bg-gray-800 rounded-lg shadow-2xl">
          {/* Form Heading */}
          <h2 className="text-3xl font-bold text-white text-center mb-6">Book Your Barber</h2>

          {/* Special Styling for Barber Selection */}
          <div className="flex flex-col items-center pb-8">
            <label htmlFor="barber_name" className="text-xl font-semibold text-white mb-4">
              Who would you like to book?
            </label>
            <select
              id="barber_name"
              className="w-[80%] bg-gray-700 border-2 border-blue-500 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3 shadow-inner"
              value={selectedBarber}
              onChange={handleBarberChange}
            >
              <option value="">No preference</option>
              <option value="Sultan">Sultan</option>
              <option value="Rami">Rami</option>
              <option value="Rita">Rita</option>
              <option value="Salam">Salam</option>
              <option value="Imad">Imad</option>
              <option value="Hsein">Hsein</option>
            </select>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-600 my-6"></div>

          {/* Slot Section */}
          <div className="space-y-6">
            <div className="flex justify-between p-4 bg-gray-700 rounded shadow-lg">
              <div className="flex flex-col">
                <p className="font-semibold text-white">Haircut - Men's Regular</p>
                <p className="text-gray-300">30 min | $32.00</p>
              </div>
              <div>
                <button
                  type="button" // Change to button to avoid form submission
                  onClick={handleBook} // Call the function to navigate
                  className="bg-yellow-500 text-black font-bold px-4 rounded h-12 shadow-md hover:bg-yellow-600 transition"
                >
                  Book
                </button>
              </div>
            </div>

            <div className="flex justify-between p-4 bg-gray-700 rounded shadow-lg">
              <div className="flex flex-col">
                <p className="font-semibold text-white">Haircut - Senior</p>
                <p className="text-gray-300">30 min | $27.00</p>
              </div>
              <div>
                <button
                  type="button" // Change to button to avoid form submission
                  onClick={handleBook} // Call the function to navigate
                  className="bg-yellow-500 text-black font-bold px-4 rounded h-12 shadow-md hover:bg-yellow-600 transition"
                >
                  Book
                </button>
              </div>
            </div>

            <div className="flex justify-between p-4 bg-gray-700 rounded shadow-lg">
              <div className="flex flex-col">
                <p className="font-semibold text-white">Haircut - Kids (8th grade and under)</p>
                <p className="text-gray-300">30 min | $26.00</p>
              </div>
              <div>
                <button
                  type="button" // Change to button to avoid form submission
                  onClick={handleBook} // Call the function to navigate
                  className="bg-yellow-500 text-black font-bold px-4 rounded h-12 shadow-md hover:bg-yellow-600 transition"
                >
                  Book
                </button>
              </div>
            </div>

            <div className="flex justify-between p-4 bg-gray-700 rounded shadow-lg">
              <div className="flex flex-col">
                <p className="font-semibold text-white">Head Shave</p>
                <p className="text-gray-300">30 Min - 45 Min | $45.00</p>
              </div>
              <div>
                <button
                  type="button" // Change to button to avoid form submission
                  onClick={handleBook} // Call the function to navigate
                  className="bg-yellow-500 text-black font-bold px-4 rounded h-12 shadow-md hover:bg-yellow-600 transition"
                >
                  Book
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
