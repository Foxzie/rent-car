// src/pages/NotFound.js
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white mt-20">
      <h1 className="text-5xl font-bold mb-2">404 - Page Not Found</h1>
      <h2 className="text-3xl font-semibold mb-4 text-center">
        Oops! The page you're looking for doesn't exist.
      </h2>
      <p className="text-gray-400 mb-6 text-center">
        Please check the URL or return to the homepage.
      </p>
      <a
        href="/"
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition duration-300"
      >
        Go to Homepage
      </a>
    </div>
  );
};

export default NotFound;
