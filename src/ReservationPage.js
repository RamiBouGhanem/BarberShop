import React from 'react'

function ReservationPage() {
  return (
    <div>
      <div class="max-w-md mx-auto p-6 bg-gray-300 rounded-lg shadow-md m-4 h-full">
  <h2 class="text-2xl font-bold text-center mb-4">Make a Reservation</h2>
  
  <form>
    <div class="mb-4">
      <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
      <input type="text" id="name" name="name" required class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200 focus:border-blue-500" placeholder="Enter your name" />
    </div>
    
    <div class="mb-4">
      <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
      <input type="tel" id="phone" name="phone" required class="mt-1 block w-full  border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200 focus:border-blue-500" placeholder="Enter your phone number" />
    </div>
    
    <button type="submit" class='w-full bg-yellow-500 text-black font-bold px-4 rounded h-12'>Book Now!</button>
  </form>
</div>
</div>
  )
}

export default ReservationPage
