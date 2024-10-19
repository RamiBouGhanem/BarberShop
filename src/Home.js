import React from 'react'
import { useNavigate } from "react-router-dom"
import Contact from "./Contact";

function Home() {
    const navigate = useNavigate(); // Initialize useNavigate here
  
    return (
      <>
        <div className="video-container">
          <video autoPlay loop muted className="video-background">
            <source src="/3998440-uhd_4096_2160_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
  
        <div className="content flex flex-col items-center justify-center h-[100%] relative p-28 ">
          <span className="text-gray-300 text-5xl font-bold text-animation-1">Classic</span>
          <span className="text-gray-300 text-9xl font-bold mb-2 p-4 pb-5 text-animation-2">Cuts</span>
          <span className="text-gray-400 text-lg font-semibold mb-4 text-animation-3">Sip, Savor, Repeat</span>
          <button 
            className='bg-yellow-500 text-black font-bold px-4 py-2 mt-6 rounded'
            onClick={() => navigate('/Reservation')} // Navigate to Reservation page
          >
            BOOK NOW
          </button>
        </div>
  
        <div className="bg-black flex justify-center items-center flex-col p-4 ">
          <h2 className="text-4xl font-extrabold text-white flex flex-col text-center mt-8 pb-8">
            The <span className="vibe-text">Vibe</span>
          </h2>
          <p className="text-3xl text-center text-white font-semibold p-10 w-[75%] pt-4 mt-4 border-t border-b border-gray-300 mb-12">
            Fort Worth Barber Shop specializes in classic cuts, beard trims, hot towel shaves, and quality grooming products. Our team of professional and knowledgeable barbers works to help you achieve your best look. We're a little bit old school with a modern touch. We thrive on great music, thoughtful conversation, and fostering relationships in our community. We've created a laid-back environment for your regular dose of self-care.
          </p>
        </div>
        <Contact />
      </>
    );
  }

export default Home
