import React, { Suspense } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

// Initialize AOS
AOS.init();

const mpvProducts = [
  {
    id: "alphard", // Use a more descriptive ID for carType in the form
    name: "Toyota Alphard - Luxury MPV",
    description:
      "Ideal for executive travel and long family trips. Features premium leather seats and advanced infotainment.",
    imageUrl:
      "https://via.placeholder.com/400x250/F8D800/FFFFFF?text=Luxury+MPV",
    features: ["7 Seater", "GPS & WiFi", "Spacious Interior"],
    price: "Mulai Rp 800.000/hari",
  },
  {
    id: "avanza", // Use a more descriptive ID for carType in the form
    name: "Toyota Avanza - Standard MPV",
    description:
      "Perfect for daily commutes, city tours, or small group travel. Economical and reliable.",
    imageUrl:
      "https://via.placeholder.com/400x250/F8D800/FFFFFF?text=Standard+MPV",
    features: ["6 Seater", "Fuel Efficient", "Child Seat Ready"],
    price: "Mulai Rp 550.000/hari",
  },
  {
    id: "innova", // Use a more descriptive ID for carType in the form
    name: "Toyota Innova - Family MPV",
    description:
      "Built for family adventures with ample cargo space and robust performance. Pet-friendly option available.",
    imageUrl:
      "https://via.placeholder.com/400x250/F8D800/FFFFFF?text=Family+MPV",
    features: ["8 Seater", "Large Cargo Space", "Roof Rack Option"],
    price: "Mulai Rp 700.000/hari",
  },
];

// NewTabLink komponen sesuai format Anda
const NewTabLink = ({ to, children, className }) => (
  <div
    className={`relative group cursor-pointer transition-all duration-500 ${className}`}
    onClick={(e) => {
      e.preventDefault();
      window.open(to, "_blank");
    }}
  >
    {children}
  </div>
);

const Mpv = () => {
  const title = "Our MPV Services - Andrea's Garage";
  document.title = title;

  const Footer = React.lazy(() => import("/src/components/footer"));

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
        <div
          className="max-w-4xl w-full text-center mb-12"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <br />
          <h1 className="text-5xl md:text-5xl font-extrabold text-amber-400 drop-shadow-lg mb-4">
            Pilihan MPV Terbaik untuk Anda
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Temukan kenyamanan dan fleksibilitas tak tertandingi dengan beragam
            pilihan Multi-Purpose Vehicle (MPV) kami, siap menemani setiap
            perjalanan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {mpvProducts.map((product, index) => (
            <div
              key={product.id}
              className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-700 transform hover:scale-105 transition-transform duration-300 ease-in-out group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="800"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />
              <div className="p-6">
                <h2 className="text-3xl font-bold text-amber-400 mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-300 text-base mb-4">
                  {product.description}
                </p>
                <div className="mb-4">
                  {product.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-gray-700 text-gray-200 text-sm px-3 py-1 rounded-full mr-2 mb-2"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <p className="text-xl font-semibold text-gray-100 mb-6">
                  {product.price}
                </p>
                <NewTabLink
                  // MODIFIED: Pass carType and carName as query parameters
                  to={`/rent?carType=${product.id}&carName=${encodeURIComponent(
                    product.name
                  )}`}
                  className="w-full bg-amber-500 text-gray-900 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-amber-400 transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-amber-500 focus:ring-opacity-50 text-center block"
                >
                  Pesan Sekarang
                </NewTabLink>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Mpv;
