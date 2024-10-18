import "./App.css";
import Header from "./Header";
import ReservationPage from "./ReservationPage";
import TimeSlot from "./TimeSlot"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center relative bg-image">
        <span className="text-gray-200 text-5xl font-bold">
          Classic
        </span>
        <span className="text-gray-200 text-9xl font-bold mb-2  p-4">
          Cuts
        </span>
        <span className="text-gray-400 text-lg font-semibold mb-4 ">
          Sip, Savor, Repeat
        </span>
        <button className='bg-yellow-500 text-black font-bold px-4 py-2 mt-6 rounded'>
        BOOK NOW
      </button>
      </div>
      <div className="bg-black flex justify-center items-center flex-col p-4">
        <h2 className="text-4xl font-extrabold text-white flex flex-col text-center">
          The <span className="text-blue-600">Vibe</span>
        </h2>
        <p className="text-3xl text-center text-white font-semibold p-10 w-[75%] pt-4 mt-4 border-t border-b border-gray-300 ">
          Fort Worth Barber Shop specializes in classic cuts, beard trims, hot
          towel shaves and quality grooming products. Our team of professional
          and knowledgeable barbers work to help you achieve your best look.
          We're a little bit old school with a modern touch. We thrive on great
          music, thoughtful conversation and fostering relationship in our
          community. We've created a laid back environment for your regular dose
          of self-care.
        </p>
      </div>
      <ReservationPage />
      <TimeSlot />
    </div>
  );
}

export default App;
