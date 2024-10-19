import React from "react";



function TimeSlot() {
  return (
    <div className="flex justify-between w-[60%] bg-gray-300 m-auto shadow-md mt-8 border h-28 border-black">
      <h4 className="text-2xl text-black m-10 ">10:00 --&gt; 10:30</h4>
      <button
        type="submit"
        class="bg-yellow-500 text-black font-bold px-4 rounded h-12 m-10"
      >
        Reserve
      </button>
    </div>
  );
}

export default TimeSlot;
