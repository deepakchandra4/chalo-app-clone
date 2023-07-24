import "./App.css";
import Footer from "./Components/Main/Footer";
import Home from "./Components/Main/Home";
import Navbar from "./Components/Main/Navbar";
import ChaloApp from "./Components/Pages/ChaloApp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChaloCard from "./Components/Pages/ChaloCard";
import Mobilepass from "./Components/Pages/Mobilepass";
import MobileTicket from "./Components/Pages/MobileTicket";
import Signup from "./Components/Register/Signup";
import SwiperSlider from "./Components/Slider/SwiperSlider";
import Cities from "./Components/Cities/Cities";
import AllCities from "./Components/Cities/AllCities";
import ViewDetails from "./Components/UserInterface/ViewDetails";
import { useEffect } from "react";
import BusPass from "./Components/UserInterface/BusPass";
import OneWayTicket from './Components/UserInterface/OneWayTicket'
import HidePage from "./Components/HidePages/HidePages";

function App() {
    
    useEffect(() => {
      window.scrollTo(0, 0);
    });

  return (
    <BrowserRouter>

      <HidePage>
        <Navbar/>
      </HidePage>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="chalo-app" element={<ChaloApp />} />
        <Route path="chalo-card" element={<ChaloCard />} />
        <Route path="chalo-app/mobile-pass" element={<Mobilepass />} />
        <Route path="chalo-app/mobile-ticket" element={<MobileTicket />} />
        <Route path="swiperslider" element={<SwiperSlider />} />
        <Route path="signup" element={<Signup />} />
        <Route path="cities" element={<Cities />} />
        <Route path="allcities"  element={<AllCities />} />
      </Routes>
      <Routes>
        
      <Route path="app-features" element={<ViewDetails/>} />
      <Route path="app-features/select-trip" element={<OneWayTicket/>} />
      <Route path="app-features/select-product-type" element={<BusPass/>} />
      </Routes>
     <HidePage>
     <Footer />
     </HidePage>
    </BrowserRouter>
  );
}

export default App;
