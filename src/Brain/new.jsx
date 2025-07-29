import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Sedan from "../pages/services/sedan";
import Mpv from "../pages/services/mpv";
import Pickup from "../pages/services/pickup";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound"; // Assuming you have a NotFound component

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />{" "}
        {/* Redirect to home */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/sedan" element={<Sedan />} />{" "}
        {/* Corrected path */}
        <Route path="/services/mpv" element={<Mpv />} /> {/* Corrected path */}
        <Route path="/services/pickup" element={<Pickup />} />{" "}
        {/* Corrected path */}
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all for 404 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
