import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex-grow text-center mb-4 md:mb-0">
          <p className="text-sm md:text-base text-gray-300">
            © 2025 Andrea's Garage. All rights reserved.
          </p>
        </div>

        <div className="flex space-x-5">
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors duration-300"
            aria-label="Instagram"
          >
            <i className="bi bi-instagram text-xl md:text-2xl"></i>
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors duration-300"
            aria-label="WhatsApp"
          >
            <i className="bi bi-whatsapp text-xl md:text-2xl"></i>
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors duration-300"
            aria-label="TikTok"
          >
            <i className="bi bi-tiktok text-xl md:text-2xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
