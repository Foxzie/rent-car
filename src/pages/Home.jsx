import React, { Suspense, lazy, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../index.css";
import { Link } from "react-router-dom";

// Lazy load the Navbar component
const Navbar = lazy(() => import("../components/navbar"));
const Footer = lazy(() => import("../components/footer"));
Aos.init();

const Button = (props) => {
  const { children, variant = "bg-black", link } = props;

  // If a link is provided, render a Link component; otherwise, render a button
  return link ? (
    <Link to={link} className={`px-4 py-2 text-white ${variant} rounded`}>
      {children}
    </Link>
  ) : (
    <button className={`px-4 py-2 text-white ${variant} rounded`}>
      {children}
    </button>
  );
};

function App() {
  const [clicked, setClicked] = useState(null);

  const handleClick = (key) => {
    setClicked(key);
  };

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
      </Suspense>
      <br />

      <div
        className="mx-auto max-w-11xl px-4 py-6 mt-8 bg-gray-600"
        data-aos="fade-up"
      >
        <div className="flex flex-col md:flex-row items-start">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl text-amber-400 font-bold text-start underline decoration-amber-400">
              Welcome To Andrea's Garage!
            </h1>
            <h2 className="text-lg md:text-2xl text-white font-bold mt-4">
              Find comprehensive information about your car, especially if
              you're looking to buy or sell a used vehicle. We provide insights
              into market values, maintenance history, and tips for negotiating
              the best price for a smooth transaction.
            </h2>
          </div>

          {/* Image pushed more to the right */}
          <div className="ml-auto mt-6 md:mt- md:ml-8">
            <img
              src="https://i.pinimg.com/564x/f2/19/f5/f219f5c529de507a65c22f7a11336db0.jpg"
              alt="Vintage car showcase at Andrea's Garage"
              className="w-90 h-50 md:w-52 md:h-52 shadow-2xl border-4 border-amber-400 object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-6" data-aos="fade-left">
        <h3 className="text-2xl md:text-3xl text-white font-bold text-center">
          Our Vision
        </h3>
        <p className="text-base md:text-lg text-white text-start mt-4">
          Our vision is to become the leading platform for car enthusiasts,
          dedicated to providing a seamless and comprehensive experience for
          buying, selling, and maintaining vehicles. We aim to create a vibrant
          community where car lovers can connect, share their passion, and
          access valuable resources that enhance their automotive journey. By
          offering innovative tools, expert advice, and a user-friendly
          interface, we strive to empower our users to make informed decisions
          and enjoy every aspect of vehicle ownership, from the initial purchase
          to ongoing maintenance and eventual resale.
        </p>
        <div className="flex justify-center mt-6">
          <Button
            variant="bg-blue-600 hover:bg-blue-700 cursor-pointer transition-colors"
            link="/about" // Pass the link prop here
          >
            Learn More
          </Button>
        </div>
      </div>

      <div
        className="mx-auto max-w-11xl px-4 py-6 bg-emerald-800"
        data-aos="fade-right"
      >
        <h3 className="text-2xl md:text-3xl text-amber-400 font-bold text-center">
          Our Product
        </h3>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* MPV Card */}
          <div
            className="relative group cursor-pointer transition-all duration-300"
            onClick={() => handleClick("mpv")}
          >
            <div
              className={`overflow-hidden rounded-lg shadow-lg ${
                clicked === "mpv" ? "ring-4 ring-blue-500" : ""
              }`}
            >
              <img
                src="https://i.pinimg.com/1200x/d0/27/14/d0271487634e2765bfbaaf97442c239f.jpg"
                alt="Premium MPV vehicle"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h4
              className={`text-xl md:text-2xl font-bold mt-4 text-center ${
                clicked === "mpv" ? "text-blue-500" : "text-amber-400"
              } underline`}
            >
              MPV
            </h4>
          </div>

          {/* Sedan Card */}
          <div
            className="relative group cursor-pointer transition-all duration-300"
            onClick={() => handleClick("sedan")}
          >
            <div
              className={`overflow-hidden rounded-lg shadow-lg ${
                clicked === "sedan" ? "ring-4 ring-blue-500" : ""
              }`}
            >
              <img
                src="https://i.pinimg.com/564x/f2/19/f5/f219f5c529de507a65c22f7a11336db0.jpg"
                alt="Luxury sedan car"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h4
              className={`text-xl md:text-2xl font-bold mt-4 text-center ${
                clicked === "sedan" ? "text-blue-500" : "text-amber-400"
              } underline`}
            >
              Sedan
            </h4>
          </div>

          {/* Truck Card */}
          <div
            className="relative group cursor-pointer transition-all duration-300"
            onClick={() => handleClick("trucks")}
          >
            <div
              className={`overflow-hidden rounded-lg shadow-lg ${
                clicked === "trucks" ? "ring-4 ring-blue-500" : ""
              }`}
            >
              <img
                src="https://i.pinimg.com/736x/74/fa/20/74fa20185736d2feccd8e801f845d4e6.jpg"
                alt="Heavy duty truck"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h4
              className={`text-xl md:text-2xl font-bold mt-4 text-center ${
                clicked === "trucks" ? "text-blue-500" : "text-amber-400"
              } underline`}
            >
              Trucks
            </h4>
          </div>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
