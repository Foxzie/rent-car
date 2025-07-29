import { Suspense, lazy, useEffect, useState } from "react";
import "aos/dist/aos.css"; // Ensure you import AOS CSS
import Aos from "aos"; // Import AOS

const Rent = () => {
  const title = "Rent a Car - Andrea's Garage";
  document.title = title; // Set the document title

  // Initialize AOS on component mount
  useEffect(() => {
    Aos.init();
  }, []);

  const Footer = lazy(() => import("../components/footer"));

  // State to manage selected car type and model
  const [carType, setCarType] = useState("sedan");
  const [carModel, setCarModel] = useState("");

  // Handle car type change
  const handleCarTypeChange = (event) => {
    setCarType(event.target.value);
    setCarModel(""); // Reset model when car type changes
  };

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center ">
        <div className="container mx-auto px-6 py-10 bg-gray-800 text-white rounded-lg shadow-lg">
          <br />
          <h1
            className="text-4xl font-bold mb-4 text-center mt-5"
            data-aos="fade-up"
          >
            Rent a Car
          </h1>
          <p
            className="text-lg mb-8 text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Find the perfect car for your needs.
          </p>
          <form className="space-y-6" data-aos="fade-up" data-aos-delay="200">
            <div>
              <label className="block text-lg font-medium mb-2">
                Select Car Type:
              </label>
              <select
                value={carType}
                onChange={handleCarTypeChange}
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition duration-200"
              >
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="truck">Truck</option>
              </select>
            </div>

            <div>
              <label className="block text-lg font-medium mb-2">
                {carType === "sedan" && "Select Sedan Model:"}
                {carType === "suv" && "Select SUV Model:"}
                {carType === "truck" && "Select Truck Model:"}
              </label>
              <select
                value={carModel}
                onChange={(e) => setCarModel(e.target.value)}
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition duration-200"
              >
                <option value="">Select Model</option>
                {carType === "sedan" && (
                  <>
                    <option value="model1">Sedan Model 1</option>
                    <option value="model2">Sedan Model 2</option>
                    <option value="model3">Sedan Model 3</option>
                  </>
                )}
                {carType === "suv" && (
                  <>
                    <option value="model1">SUV Model 1</option>
                    <option value="model2">SUV Model 2</option>
                    <option value="model3">SUV Model 3</option>
                  </>
                )}
                {carType === "truck" && (
                  <>
                    <option value="model1">Truck Model 1</option>
                    <option value="model2">Truck Model 2</option>
                    <option value="model3">Truck Model 3</option>
                  </>
                )}
              </select>
            </div>

            <div>
              <label className="block text-lg font-medium mb-2">
                Rental Date:
              </label>
              <input
                type="date"
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition duration-200"
              />
            </div>

            <div>
              <label className="block text-lg font-medium mb-2">
                Pickup Location:
              </label>
              <input
                type="text"
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition duration-200"
                placeholder="Enter pickup location"
              />
            </div>

            <div>
              <label className="block text-lg font-medium mb-2">
                Rental Duration (days):
              </label>
              <input
                type="number"
                min="1"
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition duration-200"
                placeholder="Enter number of days"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition duration-200 shadow-md hover:shadow-lg"
            >
              Rent Now
            </button>
          </form>
        </div>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Rent;
