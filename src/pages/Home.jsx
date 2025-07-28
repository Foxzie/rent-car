import React, { Suspense, lazy } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../index.css";
import { Link } from "react-router-dom";

// Lazy load components
const Navbar = lazy(() => import("../components/navbar"));
const Footer = lazy(() => import("../components/footer"));

Aos.init({});

const Button = ({ children, variant = "bg-gray-900", link }) =>
  link ? (
    <Link
      to={link}
      className={`
        px-6 py-3 text-white ${variant} rounded-lg 
        shadow-md hover:shadow-xl transform hover:-translate-y-1 
        transition-all duration-300 font-medium
      `}
    >
      {children}
    </Link>
  ) : (
    <button
      className={`
      px-6 py-3 text-white ${variant} rounded-lg 
      shadow-md hover:shadow-xl transform hover:-translate-y-1 
      transition-all duration-300 font-medium
    `}
    >
      {children}
    </button>
  );

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

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            Loading...
          </div>
        }
      >
        <Navbar />
      </Suspense>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section
          className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 mb-12 shadow-2xl"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-amber-400 mb-6 leading-tight">
                Welcome To{" "}
                <span className="font-extrabold">Andrea's Garage</span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-200 mb-8">
                Your premier destination for comprehensive vehicle rental
                information. Whether renting or leasing vehicles, we provide
                market insights, maintenance history, and expert negotiation
                tips for seamless transactions.
              </p>
              <Button
                variant="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700"
                link="/about"
              >
                Get Started →
              </Button>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative rounded-xl overflow-hidden group transform hover:rotate-1 transition-transform duration-500">
                <img
                  src="https://i.pinimg.com/564x/f2/19/f5/f219f5c529de507a65c22f7a11336db0.jpg"
                  alt="Showcase of premium vehicles at Andrea's Garage"
                  className="w-full h-auto max-h-96 object-cover rounded-xl border-4 border-amber-400 shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section
          className="bg-gray-800 rounded-2xl p-8 mb-12 shadow-2xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Our <span className="text-amber-400">Vision</span>
            </h2>
            <div className="h-1 w-24 bg-amber-500 mx-auto mb-8 rounded-full" />
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              We're redefining the automotive rental experience by creating a
              platform that connects car enthusiasts worldwide. Through
              innovative tools, expert insights, and a vibrant community, we
              empower your vehicle rental journey from selection to maintenance
              and beyond.
            </p>
            <Button variant="bg-blue-600 hover:bg-blue-700" link="/about">
              Explore Our Story
            </Button>
          </div>
        </section>

        {/* Products Section */}
        <section
          className="bg-gradient-to-br from-emerald-900 to-emerald-800 rounded-2xl p-8 shadow-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our <span className="text-amber-400">Services</span> Selection
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Discover our curated collection of exceptional vehicles tailored
              to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["mpv", "sedan", "pickup"].map((type) => {
              const productData = {
                mpv: {
                  title: "MPV",
                  desc: "Versatile family vehicles with spacious interiors.",
                  img: "https://i.pinimg.com/1200x/d0/27/14/d0271487634e2765bfbaaf97442c239f.jpg",
                },
                sedan: {
                  title: "Premium Sedan",
                  desc: "Luxury and performance combined for a smooth ride.",
                  img: "https://i.pinimg.com/564x/f2/19/f5/f219f5c529de507a65c22f7a11336db0.jpg",
                },
                pickup: {
                  title: "Power Pickups",
                  desc: "Heavy-duty capability for all your hauling needs.",
                  img: "https://i.pinimg.com/736x/74/fa/20/74fa20185736d2feccd8e801f845d4e6.jpg",
                },
              };

              return (
                <NewTabLink
                  key={type}
                  to={`/products/${type}`}
                  className="group transform hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="bg-gray-900 bg-opacity-50 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl border border-gray-700 hover:border-amber-400 transition-all">
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
        </section>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
