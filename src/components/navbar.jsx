import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTitleChange = (title) => {
    document.title = title; // Set the document title
  };

  return (
    <>
      <nav>
        <header className="flex items-center justify-between py-3 bg-gray-800 text-white fixed top-0 w-full z-50">
          <Link to="/home" className="text-2xl font-bold ml-3 text-amber-100">
            Andrea's Garage
          </Link>
          <div>
            <ul className="hidden xl:flex items-center space-x-4 gap-2.5 mr-3">
              <li>
                <Link
                  to="/home"
                  className="text-amber-100 hover:text-amber-800 text-lg font-medium"
                  onClick={() => {
                    handleTitleChange("Home - Andrea's Garage");
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-amber-100 hover:text-amber-800 text-lg font-medium"
                  onClick={() => {
                    handleTitleChange("About Us - Andrea's Garage");
                  }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-amber-100 hover:text-amber-800 text-lg font-medium"
                  onClick={() => {
                    handleTitleChange("Services - Andrea's Garage");
                  }}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-amber-100 hover:text-amber-800 text-lg font-medium"
                  onClick={() => {
                    handleTitleChange("Contact Us - Andrea's Garage");
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <i
              className={`bi ${
                isOpen ? "bi-x" : "bi-list"
              } xl:hidden block text-5xl cursor-pointer mr-9 transition-transform duration-300 ${
                isOpen ? "rotate-90" : ""
              }`}
              onClick={() => setIsOpen(!isOpen)}
            ></i>
          </div>
          <div
            className={
              "absolute xl:hidden top-16 left-0 w-full bg-gray-800 flex flex-col items-center gap-4 transform transition-transform" +
              (isOpen
                ? " opacity-100 translate-y-0"
                : " opacity-0 -translate-y-4")
            }
            style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
          >
            <ul className="flex flex-col items-center w-full gap-4 mb-3">
              <li>
                <Link
                  to="/home"
                  className="text-amber-100 hover:text-amber-800 text-lg font-medium"
                  onClick={() => {
                    handleTitleChange("Home - Andrea's Garage");
                    setIsOpen(false);
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-amber-100 hover:text-amber-800 text-lg font-medium"
                  onClick={() => {
                    handleTitleChange("About Us - Andrea's Garage");
                    setIsOpen(false);
                  }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/product"
                  className="text-amber-100 hover:text-amber-800 text-lg font-medium"
                  onClick={() => {
                    handleTitleChange("Products - Andrea's Garage");
                    setIsOpen(false);
                  }}
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-amber-100 hover:text-amber-800 text-lg font-medium"
                  onClick={() => {
                    handleTitleChange("Contact Us - Andrea's Garage");
                    setIsOpen(false);
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </header>
      </nav>
    </>
  );
};

export default Navbar;
