import React, { Suspense } from "react"; // Import Suspense
import AOS from "aos"; // Import AOS for initialization
import "aos/dist/aos.css"; // Import AOS styles

// Dummy data for your Sedan products
const sedanProducts = [
  {
    id: "toyota-camry", // Changed ID to a more descriptive string
    name: "Toyota Camry - Luxury Sedan",
    description:
      "Experience refined elegance and superior comfort with our luxury **Toyota Camry**. Perfect for executive travel, special occasions, or long family trips, it offers plush seating for four, advanced infotainment, and a serene ride.", // Updated description in English
    imageUrl:
      "https://via.placeholder.com/400x250/F8D800/FFFFFF?text=Luxury+Sedan", // Placeholder, replace with actual image
    features: [
      "4 Seater",
      "Premium Audio",
      "Executive Comfort",
      "Advanced Safety",
    ], // Features updated
    price: "Starts from Rp 800,000/day", // Price updated
  },
  {
    id: "toyota-vios", // Changed ID to a more descriptive string
    name: "Toyota Vios - Standard Sedan",
    description:
      "Our reliable **Toyota Vios** is the perfect standard sedan for daily commutes, city tours, or small group travel. It's economical, fuel-efficient, and offers a comfortable, agile ride for urban environments.", // Updated description in English
    imageUrl:
      "https://via.placeholder.com/400x250/F8D800/FFFFFF?text=Standard+Sedan", // Placeholder, replace with actual image
    features: [
      "4 Seater",
      "Fuel Efficient",
      "Compact & Agile",
      "Child Seat Ready",
    ], // Features updated
    price: "Starts from Rp 550,000/day", // Price updated
  },
  {
    id: "honda-civic-type-r", // Changed ID to a more descriptive string
    name: "Honda Civic Type R - Sport Sedan",
    description:
      "Unleash exhilarating performance with the **Honda Civic Type R** sport sedan. Designed for thrill-seekers, it combines aggressive styling with powerful engineering, offering dynamic handling and a responsive drive.", // Updated description in English
    imageUrl:
      "https://via.placeholder.com/400x250/F8D800/FFFFFF?text=Sport+Sedan", // Placeholder, replace with actual image
    features: [
      "4 Seater",
      "High Performance Engine",
      "Sport Suspension",
      "Aerodynamic Design",
    ], // Features updated
    price: "Starts from Rp 700,000/day", // Price updated
  },
];

// NewTabLink component as per your format
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

const Sedan = () => {
  // Initialize AOS when the component mounts
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  const title = "Our Sedan Services - Andrea's Garage"; // Title updated to English
  document.title = title;

  // Lazily load the Footer component
  const Footer = React.lazy(() => import("/src/components/footer"));

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
        {/* Main Title Section */}
        <div
          className="max-w-4xl w-full text-center mb-12"
          data-aos="fade-up" // AOS animation for the whole title section
          data-aos-duration="1000"
        >
          <br />
          <h1 className="text-5xl md:text-5xl font-extrabold text-amber-400 drop-shadow-lg mb-4">
            Our Best Sedan Choices for You
          </h1>{" "}
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Discover unparalleled comfort and flexibility with our diverse
            selection of Sedans, ready to accompany you on every journey.
          </p>{" "}
        </div>

        {/* --- */}

        {/* Sedan Products Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sedanProducts.map((product, index) => (
            <div
              key={product.id}
              className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-700 transform hover:scale-105 transition-transform duration-300 ease-in-out group"
              data-aos="fade-up" // Animation for each product card
              data-aos-delay={index * 100} // Stagger the animation of each card
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
                {/* Modified NewTabLink to pass carType and carName */}
                <NewTabLink
                  to={`/rent?carType=${product.id}&carName=${encodeURIComponent(
                    product.name
                  )}`} // Pass ID and Name
                  className="w-full bg-amber-500 text-gray-900 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-amber-400 transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-amber-500 focus:ring-opacity-50 text-center block"
                >
                  Book Now
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

export default Sedan;
