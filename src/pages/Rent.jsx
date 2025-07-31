import React, { Suspense, lazy, useState, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser"; // Import emailjs

// Data dummy for all your products.
const allCarProducts = [
  // MPV Products (from Mpv.jsx)
  {
    id: "alphard",
    name: "Toyota Alphard - Luxury MPV",
    type: "mpv",
  },
  {
    id: "avanza",
    name: "Toyota Avanza - Standard MPV",
    type: "mpv",
  },
  {
    id: "innova",
    name: "Toyota Innova - Family MPV",
    type: "mpv",
  },
  // Sedan Products (from Sedan.jsx)
  {
    id: "toyota-camry",
    name: "Toyota Camry - Luxury Sedan",
    type: "sedan",
  },
  {
    id: "toyota-vios",
    name: "Toyota Vios - Standard Sedan",
    type: "sedan",
  },
  {
    id: "honda-civic-type-r",
    name: "Honda Civic Type R - Sport Sedan",
    type: "sedan",
  },
  // Pickup Products (from Pickup.jsx)
  {
    id: "ford-ranger",
    name: "Ford Ranger - Heavy-Duty Pickup",
    type: "pickup",
  },
  {
    id: "toyota-hilux",
    name: "Toyota Hilux - Versatile Pickup",
    type: "pickup",
  },
  {
    id: "mitsubishi-triton",
    name: "Mitsubishi Triton - Sporty Pickup",
    type: "pickup",
  },
  // Other categories
  {
    id: "suv",
    name: "SUV (e.g., Toyota Fortuner)",
    type: "other",
  },
  {
    id: "sport",
    name: "Sport Car (e.g., Mazda MX-5)",
    type: "other",
  },
  {
    id: "luxury",
    name: "Luxury Car (e.g., Mercedes-Benz C-Class)",
    type: "other",
  },
];

const Rent = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  const Footer = lazy(() => import("../components/footer"));

  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    carType: "",
    pickupDate: "",
    returnDate: "",
    pickupLocation: "",
    driver: false,
    notes: "",
  });

  const [errors, setErrors] = useState({});
  const [availableCarOptions, setAvailableCarOptions] = useState([]);
  const EMAILJS_SERVICE_ID = "service_i35z1hd"; // Ganti dengan Service ID dari EmailJS
  const EMAILJS_TEMPLATE_ID = "template_p03gsyv"; // Ganti dengan Template ID dari EmailJS
  const EMAILJS_PUBLIC_KEY = "KQ_TnlY2LNKStp8uz"; // Ganti dengan Public Key (User ID) dari EmailJS

  useEffect(() => {
    // Inisialisasi EmailJS dengan Public Key kamu
    emailjs.init(EMAILJS_PUBLIC_KEY);

    const params = new URLSearchParams(location.search);
    const selectedCarId = params.get("carType");
    const selectedCarName = params.get("carName");

    if (selectedCarId) {
      const preSelectedCar = allCarProducts.find(
        (car) => car.id === selectedCarId
      );
      if (preSelectedCar) {
        setFormData((prevData) => ({
          ...prevData,
          carType: preSelectedCar.id,
          notes: selectedCarName
            ? `I'd like to rent the ${selectedCarName}.`
            : prevData.notes,
        }));
        setAvailableCarOptions([preSelectedCar]);
      } else {
        setAvailableCarOptions(allCarProducts);
        setFormData((prevData) => ({ ...prevData, carType: "" }));
      }
    } else {
      setAvailableCarOptions(allCarProducts);
    }
  }, [location.search]); // Tambahkan `emailjs` jika kamu menginisialisasinya di sini dan ingin `emailjs.init` dijalankan lagi.

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Full Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.phone) newErrors.phone = "Phone Number is required.";
    if (!formData.carType) newErrors.carType = "Car Type is required.";
    if (!formData.pickupDate) newErrors.pickupDate = "Pickup Date is required.";
    if (!formData.returnDate) newErrors.returnDate = "Return Date is required.";
    if (!formData.pickupLocation)
      newErrors.pickupLocation = "Pickup Location is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    // Pastikan fungsi ini async
    e.preventDefault();
    if (validateForm()) {
      try {
        // Objek yang akan dikirim ke template EmailJS
        // Pastikan nama properti di sini cocok dengan placeholder di template EmailJS kamu (misal: {{name}}, {{email}})
        const templateParams = {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          carType:
            allCarProducts.find((car) => car.id === formData.carType)?.name ||
            formData.carType, // Mengambil nama lengkap mobil
          pickupDate: formData.pickupDate,
          returnDate: formData.returnDate,
          pickupLocation: formData.pickupLocation,
          driver: formData.driver ? "Yes" : "No",
          notes: formData.notes || "No additional notes.",
          // Kamu bisa tambahkan properti lain yang dibutuhkan di template EmailJS
        };

        // Mengirim email menggunakan EmailJS
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY // Public Key juga bisa diletakkan di sini, atau di `emailjs.init()`
        );

        alert(
          "Your car rental request has been received! We'll contact you shortly with the pricing details based on your request."
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          carType: "",
          pickupDate: "",
          returnDate: "",
          pickupLocation: "",
          driver: false,
          notes: "",
        });
        setErrors({});
      } catch (error) {
        console.error("Failed to send request via EmailJS:", error);
        alert(
          `There was an issue sending your request: ${
            error.text || "Unknown error"
          }. Please try again later.`
        );
      }
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-700 py-10 px-4 sm:px-6 lg:px-8">
        <br />
        <div className="container mx-auto max-w-7xl mt-20">
          <h1
            className="text-4xl font-bold text-amber-400 mb-10 text-center"
            data-aos="fade-down"
          >
            Rent Your Dream Car
          </h1>
          <p
            className="text-lg text-gray-300 text-center mb-10"
            data-aos="fade-up"
          >
            Fill out the form below to start your adventure!
          </p>
        </div>

        <div
          className="container mx-auto max-w-2xl mt-10 p-8 rounded-3xl shadow-lg text-zinc-800"
          data-aos="zoom-in"
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(10px)",
          }}
        >
          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <label
              htmlFor="name"
              className="block font-medium text-gray-900 mb-2 text-2xl"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-lg bg-gray-100 border-gray-300 shadow-sm focus:border-amber-400 focus:ring-amber-400 p-3 transition duration-200 ease-in-out ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="John Doe"
              required
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}

            {/* Email */}
            <label
              htmlFor="email"
              className="block font-medium text-gray-900 mb-2 text-2xl mt-4"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-lg bg-gray-100 border-gray-300 shadow-sm focus:border-amber-400 focus:ring-amber-400 p-3 transition duration-200 ease-in-out ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="john.doe@example.com"
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}

            {/* Phone Number */}
            <label
              htmlFor="phone"
              className="block font-medium text-gray-900 mb-2 text-2xl mt-4"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-lg bg-gray-100 border-gray-300 shadow-sm focus:border-amber-400 focus:ring-amber-400 p-3 transition duration-200 ease-in-out ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="+62 812 3456 7890"
              required
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}

            {/* Select Car Type */}
            <label
              htmlFor="carType"
              className="block font-medium text-gray-900 mb-2 text-2xl mt-4"
            >
              Select Car Type
            </label>
            <select
              id="carType"
              name="carType"
              value={formData.carType}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-lg bg-gray-100 border-gray-300 shadow-sm focus:border-amber-400 focus:ring-amber-400 p-3 transition duration-200 ease-in-out appearance-none ${
                errors.carType ? "border-red-500" : "border-gray-300"
              }`}
              required
            >
              {/* Conditional rendering of options */}
              {availableCarOptions.length > 1 && (
                <option value="">-- Select a Car --</option>
              )}
              {availableCarOptions.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
            </select>
            {errors.carType && (
              <p className="text-red-500 text-sm mt-1">{errors.carType}</p>
            )}

            {/* Pickup Date */}
            <label
              htmlFor="pickupDate"
              className="block font-medium text-gray-900 mb-2 text-2xl mt-4"
            >
              Pickup Date
            </label>
            <input
              type="date"
              id="pickupDate"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-lg bg-gray-100 border-gray-300 shadow-sm focus:border-amber-400 focus:ring-amber-400 p-3 transition duration-200 ease-in-out ${
                errors.pickupDate ? "border-red-500" : "border-gray-300"
              }`}
              required
            />
            {errors.pickupDate && (
              <p className="text-red-500 text-sm mt-1">{errors.pickupDate}</p>
            )}

            {/* Return Date */}
            <label
              htmlFor="returnDate"
              className="block font-medium text-gray-900 mb-2 text-2xl mt-4"
            >
              Return Date
            </label>
            <input
              type="date"
              id="returnDate"
              name="returnDate"
              value={formData.returnDate}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-lg bg-gray-100 border-gray-300 shadow-sm focus:border-amber-400 focus:ring-amber-400 p-3 transition duration-200 ease-in-out ${
                errors.returnDate ? "border-red-500" : "border-gray-300"
              }`}
              required
            />
            {errors.returnDate && (
              <p className="text-red-500 text-sm mt-1">{errors.returnDate}</p>
            )}

            {/* Pickup Location */}
            <label
              htmlFor="pickupLocation"
              className="block font-medium text-gray-900 mb-2 text-2xl mt-4"
            >
              Pickup Location
            </label>
            <input
              type="text"
              id="pickupLocation"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-lg bg-gray-100 border-gray-300 shadow-sm focus:border-amber-400 focus:ring-amber-400 p-3 transition duration-200 ease-in-out ${
                errors.pickupLocation ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="e.g., Soekarno-Hatta Airport"
              required
            />
            {errors.pickupLocation && (
              <p className="text-red-500 text-sm mt-1">
                {errors.pickupLocation}
              </p>
            )}

            {/* Additional Options: Driver */}
            <div className="flex items-center mt-6">
              <input
                type="checkbox"
                id="driver"
                name="driver"
                checked={formData.driver}
                onChange={handleChange}
                className="h-5 w-5 text-amber-400 border-gray-300 rounded focus:ring-amber-400 cursor-pointer"
              />
              <label
                htmlFor="driver"
                className="ml-3 text-gray-900 text-xl font-medium"
              >
                Rent with Driver
              </label>
            </div>

            {/* Additional Notes (Optional) */}
            <label
              htmlFor="notes"
              className="block font-medium text-gray-900 mb-2 text-2xl mt-4"
            >
              Additional Notes (Optional)
            </label>
            <textarea
              id="notes"
              name="notes"
              rows="4"
              value={formData.notes}
              onChange={handleChange}
              className="mt-1 block w-full rounded-lg bg-gray-100 border-gray-300 shadow-sm focus:border-amber-400 focus:ring-amber-400 p-3 transition duration-200 ease-in-out resize-y"
              placeholder="Any special requests or additional information"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-6 w-full px-6 py-3 bg-amber-400 text-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 font-medium cursor-pointer"
            >
              Submit Rental Request{" "}
              <span className="text-sm block opacity-80 mt-1">
                (Pricing details will be provided after submission)
              </span>
            </button>
          </form>
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Rent;
