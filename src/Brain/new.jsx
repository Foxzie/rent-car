import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Product from "../pages/Product";
import Sedan from "../pages/products/sedan";
import Mpv from "../pages/products/mpv";
import Pickup from "../pages/products/pickup";
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
        <Route path="/product" element={<Product />} />
        <Route path="/products/sedan" element={<Sedan />} />{" "}
        {/* Corrected path */}
        <Route path="/products/mpv" element={<Mpv />} /> {/* Corrected path */}
        <Route path="/products/pickup" element={<Pickup />} />{" "}
        {/* Corrected path */}
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all for 404 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
