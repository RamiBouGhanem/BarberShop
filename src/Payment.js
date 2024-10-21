import React, { useState } from "react";

function Payment() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({ name: "", phone: "" });

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", phone: "" };

    // Validate name (minimum 3 characters)
    if (name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
      valid = false;
    }

    // Validate phone number (basic pattern for phone numbers)
    const phoneRegex = /^[0-9]{8,15}$/; // Accepts 8 to 15 digits (adjust as needed)
    if (!phoneRegex.test(phone.trim())) {
      newErrors.phone = "Please enter a valid phone number (8-15 digits).";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Confirmation message before charging the card
      const confirmPayment = window.confirm(
        `You are about to charge your card for the reservation. Do you accept?`
      );

      if (confirmPayment) {
        alert(
          `Thank you, ${name}! Your reservation has been successfully booked.`
        );

        setName("");
        setPhone("");

      }
    }
  };

  return (
    <div className="bg-gray-900 flex justify-center items-center p-2">
      <div className="relative max-w-lg w-full mx-auto p-12 bg-dark-blue-800 rounded-lg shadow-2xl m-4 h-full border border-gray-700">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-700 to-gray-900 transform -translate-x-2 -translate-y-2 rounded-lg blur-md"></div>

        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-center text-white mb-7">
            Make a Reservation
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className={`mt-1 block w-full border ${
                  errors.name ? "border-red-500" : "border-gray-600"
                } bg-gray-700 text-gray-300 rounded-md p-3 focus:ring focus:ring-blue-500 focus:border-blue-500`}
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-300"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className={`mt-1 block w-full border ${
                  errors.phone ? "border-red-500" : "border-gray-600"
                } bg-gray-700 text-gray-300 rounded-md p-3 focus:ring focus:ring-blue-500 focus:border-blue-500`}
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-black font-bold px-6 rounded h-14 shadow-lg hover:bg-yellow-600 transition duration-300 text-lg"
            >
              Book Now!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;
