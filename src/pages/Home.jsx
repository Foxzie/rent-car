import React, { Suspense, lazy, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../index.css";

// Lazy load the Navbar component
const Navbar = lazy(() => import("../components/navbar"));
Aos.init();
const Button = (props) => {
  const { children = "Hello Mase", variant = "bg-black" } = props;
  return (
    <button className={`px-4 py-2 text-white ${variant} rounded`}>
      {children}
    </button>
  );
};

function App() {
  const [clicked, setClicked] = useState(null); // Store the currently clicked image

  const handleClick = (key) => {
    setClicked(key); // Set the clicked image to the current one
  };

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
      </Suspense>
      <br />
      <div
        className="mx-auto max-w-6xl px-4 py-6 mt-5"
        data-aos="fade-up"
        onLoadStart={() => lazy()}
      >
        <h1 className="text-3xl text-amber-400 font-bold text-start underline decoration-amber-400">
          Welcome To Andrea's Garage!
        </h1>
        <div className="float-right ml-5">
          <img
            src="https://i.pinimg.com/564x/f2/19/f5/f219f5c529de507a65c22f7a11336db0.jpg"
            alt="car"
            className="w-48 h-48 rounded-full shadow-lg bg-none"
          />
        </div>
        <br />
        <h2 className="text-2xl text-white font-bold text-start">
          Here you can find all the information about your car, particularly if
          you're looking to buy or sell a used vehicle. We offer insights into
          market values, maintenance history, and tips for negotiating the best
          price for a smooth transaction.
        </h2>
        <br />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-6" data-aos="fade-right">
        <h3 className="text-3xl text-amber-400 font-bold text-center">
          Our Product
        </h3>
        <br />
        <div className="flex flex-wrap justify-center">
          {/* SUV Image */}
          <div className="w-full sm:w-1/3 p-4 relative group">
            <div
              onClick={() => handleClick("mpv")}
              className={`cursor-pointer transition-transform duration-300 ease-in-out ${
                clicked === "mpv" ? "scale-105" : ""
              }`}
            >
              <img
                src="https://i.pinimg.com/1200x/d0/27/14/d0271487634e2765bfbaaf97442c239f.jpg"
                alt="SUV"
                className="w-full h-80 object-cover rounded shadow-lg bg-none transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <p
                className={`font-bold text-2xl underline text-center mt-2 transition-transform duration-300 ease-in-out ${
                  clicked === "mpv"
                    ? "text-blue-500 scale-105"
                    : "text-amber-400"
                } group-hover:text-blue-500 group-hover:scale-105`}
              >
                MPV
              </p>
            </div>
          </div>

          {/* Sedan Image */}
          <div className="w-full sm:w-1/3 p-4 relative group">
            <div
              onClick={() => handleClick("sedan")}
              className={`cursor-pointer transition-transform duration-300 ease-in-out ${
                clicked === "sedan" ? "scale-105" : ""
              }`}
            >
              <img
                src="https://i.pinimg.com/564x/f2/19/f5/f219f5c529de507a65c22f7a11336db0.jpg" // Updated Sedan Image
                alt="Sedan"
                className="w-full h-80 object-cover rounded shadow-lg bg-none transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <p
                className={`font-bold text-2xl underline text-center mt-2 transition-transform duration-300 ease-in-out ${
                  clicked === "sedan"
                    ? "text-blue-500 scale-105"
                    : "text-amber-400"
                } group-hover:text-blue-500 group-hover:scale-105`}
              >
                Sedan
              </p>
            </div>
          </div>

          {/* Trucks Image */}
          <div className="w-full sm:w-1/3 p-4 relative group">
            <div
              onClick={() => handleClick("trucks")}
              className={`cursor-pointer transition-transform duration-300 ease-in-out ${
                clicked === "trucks" ? "scale-105" : ""
              }`}
            >
              <img
                src="https://i.pinimg.com/736x/74/fa/20/74fa20185736d2feccd8e801f845d4e6.jpg"
                alt="Trucks"
                className="w-full h-80 object-cover rounded shadow-lg bg-none transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <p
                className={`font-bold text-2xl underline text-center mt-2 transition-transform duration-300 ease-in-out ${
                  clicked === "trucks"
                    ? "text-blue-500 scale-105"
                    : "text-amber-400"
                } group-hover:text-blue-500 group-hover:scale-105`}
              >
                Trucks
              </p>
            </div>
          </div>
        </div>
        <br />
        <Button variant="bg-blue-500">Click Me</Button>
        <Button variant="bg-green-500">Click Me</Button>
        <Button variant="bg-red-500">Click Me</Button>
      </div>
    </>
  );
}

export default App;
