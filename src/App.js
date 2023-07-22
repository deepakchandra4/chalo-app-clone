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

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="chaloapp" element={<ChaloApp />} />
        <Route path="chalocard" element={<ChaloCard />} />
        <Route path="mobilepass" element={<Mobilepass />} />
        <Route path="mobileticket" element={<MobileTicket />} />
        <Route path="swiperslider" element={<SwiperSlider />} />
        <Route path="signup" element={<Signup />} />
        <Route path="cities" element={<Cities />} />
        <Route path="allcities" element={<AllCities />} />
      </Routes>
      <Routes>
      <Route path="viewdetails" element={<ViewDetails/>} />
      

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
