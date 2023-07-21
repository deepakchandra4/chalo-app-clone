import "./App.css";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import ChaloApp from "./Components/Pages/ChaloApp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChaloCard from "./Components/Pages/ChaloCard";
import Mobilepass from "./Components/Pages/Mobilepass";
import MobileTicket from "./Components/Pages/MobileTicket";
import Signup from "./Components/Register/Signup";
import SwiperSlider from "./Components/Slider/SwiperSlider";
import Cities from "./Components/Pages/Cities";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
     
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="chaloapp" element={<ChaloApp />} />
        <Route path="chalocard" element={<ChaloCard />} />
        <Route path="mobilepass" element={<Mobilepass />} />
        <Route path="mobileticket" element={<MobileTicket />} />
        <Route path="signup" element={<Signup />} />
        <Route path="cities" element={<Cities />} />

        {/* Sliders */}
      </Routes>

      <SwiperSlider/>
      <Cities/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
