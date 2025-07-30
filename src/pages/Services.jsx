import React, { Suspense, lazy, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Shorter duration for quicker animations
      once: false, // Allow animations to trigger on scroll back
      easing: "ease-in-out", // Smoother easing
    });
  }, []);

  const Footer = lazy(() => import("../components/footer"));

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

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-700 py-10 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl mt-20">
          <h1
            className="text-4xl font-bold text-amber-400 mb-10 text-center"
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
          >
            Our Services
          </h1>
          <div
            className="mb-10 p-6 bg-gray-900 rounded-2xl shadow-xl"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-offset="150"
          >
            <p className="text-lg text-gray-300 leading-relaxed text-center">
              We offer a wide range of car rental services to meet your needs,
              whether you're looking for a short-term rental or a long-term
              lease. Our fleet includes everything from MPV cars, Pickups, and
              Luxury Sedans, ensuring you find the perfect ride for any
              occasion.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["mpv", "sedan", "pickup"].map((type, index) => {
              const productData = {
                mpv: {
                  title: "MPV",
                  desc: "Versatile family vehicles with spacious interiors.",
                  img: "/src/assets/innovacartun.jpg",
                },
                sedan: {
                  title: "Premium Sedan",
                  desc: "Luxury and performance combined for a smooth ride.",
                  img: "/src/assets/premiumsedancartun.jpg",
                },
                pickup: {
                  title: "Power Pickups",
                  desc: "Heavy-duty capability for all your hauling needs.",
                  img: "/src/assets/pickupkartun.jpg",
                },
              };

              return (
                <NewTabLink
                  key={type}
                  to={`/services/${type}`}
                  className="group transform hover:-translate-y-1 transition-transform duration-300"
                  data-aos="fade-left"
                  data-aos-delay={index * 300 + 500} // Increased delay for better staggering
                  data-aos-duration="800"
                  data-aos-offset="80"
                >
                  <div
                    className="bg-gray-900 bg-opacity-50 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl border border-gray-700 hover:border-amber-400 transition-all"
                    data-aos="fade-up"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={productData[type].img}
                        alt={`${productData[type].title} at Andrea's Garage`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-amber-400 mb-2">
                        {productData[type].title}
                      </h3>
                      <p className="text-gray-300">{productData[type].desc}</p>
                      <div className="mt-4 inline-flex items-center text-amber-400 font-medium group-hover:text-amber-300 transition-colors">
                        View selection
                        <svg
                          className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </NewTabLink>
              );
            })}
          </div>
        </div>
      </div>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Services;
