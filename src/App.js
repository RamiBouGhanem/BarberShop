import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Booking from "./Booking";
import { Routes, Route } from "react-router-dom";
import Reservation from "./Reservation";
import Home from "./Home";
import Payment from "./Payment"; // Import Payment component

function App() {
  return (
    <div>
      <Header />
      <Routes> {/* Inside the <Routes> component, we define the different URL paths that the app will respond to. */}
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/payment" element={<Payment />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
