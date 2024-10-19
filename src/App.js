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
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/payment" element={<Payment />} /> {/* Add Payment route */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
