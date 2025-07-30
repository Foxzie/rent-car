import React, { Suspense } from "react"; // Import Suspense
import AOS from "aos"; // Import AOS for initialization
import "aos/dist/aos.css"; // Import AOS styles

// Dummy data for your Pickup products
const pickupProducts = [
  {
    id: "ford-ranger", // Changed ID to a more descriptive string
    name: "Ford Ranger - Heavy-Duty Pickup",
    description:
      "Tackle any challenge with our rugged **Ford Ranger**. Engineered for heavy loads and rough terrain, this powerful pickup offers exceptional towing capacity, advanced off-road features, and a spacious cabin for both work and adventure.",
    imageUrl:
      "https://via.placeholder.com/400x250/F8D800/FFFFFF?text=Heavy-Duty+Pickup", // Placeholder, replace with actual image
    features: [
      "2-4 Seater",
      "High Towing Capacity",
      "4x4 Drivetrain",
      "Off-Road Ready",
    ],
    price: "Starts from Rp 950,000/day",
  },
  {
    id: "toyota-hilux", // Changed ID to a more descriptive string
    name: "Toyota Hilux - Versatile Pickup",
    description:
      "Our versatile **Toyota Hilux** is built for reliability and adaptability. Perfect for both commercial hauling and adventurous excursions, it combines robust performance with comfortable interiors and superior durability.",
    imageUrl:
      "https://via.placeholder.com/400x250/F8D800/FFFFFF?text=Versatile+Pickup", // Placeholder, replace with actual image
    features: [
      "2-4 Seater",
      "Fuel Efficient",
      "Large Cargo Bed",
      "Durable Build",
    ],
    price: "Starts from Rp 750,000/day",
  },
  {
    id: "mitsubishi-triton", // Changed ID to a more descriptive string
    name: "Mitsubishi Triton - Sporty Pickup",
    description:
      "Experience dynamic performance and sleek design with the **Mitsubishi Triton**. This sporty pickup offers a comfortable ride for daily use and the power needed for weekend escapades, featuring modern amenities and advanced handling.",
    imageUrl:
      "https://via.placeholder.com/400x250/F8D800/FFFFFF?text=Sporty+Pickup", // Placeholder, replace with actual image
    features: [
      "2-5 Seater",
      "Powerful Engine",
      "Sport Suspension",
      "Stylish Design",
    ],
    price: "Starts from Rp 850,000/day",
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

const Pickup = () => {
  // Initialize AOS when the component mounts
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  const title = "Our Pickup Services - Andrea's Garage";
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
            Our Best Pickup Choices for You
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Discover unmatched strength and durability with our diverse
            selection of Pickup vehicles, ready for any adventure or job.
          </p>
        </div>

        {/* --- */}

        {/* Pickup Products Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pickupProducts.map((product, index) => (
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

export default Pickup;
