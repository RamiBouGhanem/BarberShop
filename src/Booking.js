import React, { useState } from 'react';

function Booking() {
  const [selectedDate, setSelectedDate] = useState('');
  const [timeSlots, setTimeSlots] = useState([]);
  const [isOffDay, setIsOffDay] = useState(false);

  const getTimeSlots = (date) => {
    const dayOfWeek = new Date(date).getDay();
    let slots = [];

    // Check for Sunday (0) or Monday (1)
    if (dayOfWeek === 0 || dayOfWeek === 1) {
      setIsOffDay(true);
      return slots; // No slots available
    }

    setIsOffDay(false);

    // Define time ranges based on the day of the week
    let startHour = 9;
    let endHour = dayOfWeek === 6 ? 15 : 18; // Saturday: 9am - 3pm, Tues-Fri: 9am - 6pm

    for (let hour = startHour; hour <= endHour; hour++) {
      for (let minutes = 0; minutes < 60; minutes += 15) {
        // let time = `${hour}:${minutes === 0 ? '00' : minutes}`; it is an unused-declared-variable
        let ampm = hour >= 12 ? 'pm' : 'am';
        let adjustedHour = hour > 12 ? hour - 12 : hour;
        slots.push(`${adjustedHour}:${minutes === 0 ? '00' : minutes}${ampm}`);
      }
    }
    return slots;
  };

  const handleDateChange = (event) => {
    const selectedDay = event.target.value;
    setSelectedDate(selectedDay);
    const slots = getTimeSlots(selectedDay);
    setTimeSlots(slots);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center p-8">
      <div className="bg-gray-800 w-[50%] p-10 rounded-lg shadow-2xl border border-gray-700">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Book a Reservation</h2>

        {/* Date Picker */}
        <div className="flex flex-col items-center mb-8">
          <label htmlFor="date" className="text-lg font-semibold text-gray-300 mb-4">
            Pick a Date
          </label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="w-[80%] bg-gray-700 border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 shadow-lg"
          />
        </div>

        {/* Time Slots or Off Day Message */}
        {isOffDay ? (
          <div className="text-center text-red-400 font-semibold text-lg">
            We are off on Sundays and Mondays.
          </div>
        ) : (
          <div className="space-y-4">
            {timeSlots.length > 0 ? (
              <>
                <h3 className="text-lg font-semibold text-gray-300 mb-4">Pick a Time</h3>
                <div className="grid grid-cols-4 gap-4">
                  {timeSlots.map((slot, index) => (
                    <button
                      key={index}
                      className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition shadow-lg"
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center text-gray-400">Please select a valid date.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Booking;
