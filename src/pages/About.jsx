import React, { Suspense, lazy, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
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

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-700 py-10 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl mt-20">
          {/* Title */}
          <h1
            className="text-4xl font-bold text-amber-400 mb-10 text-center"
            data-aos="fade-down"
          >
            About Us
          </h1>

          {/* Introduction Section */}
          <div
            className="mb-10 p-6 bg-gray-900 rounded-2xl shadow-xl"
            data-aos="fade-up"
          >
            <h2 className="text-2xl font-semibold text-amber-400 mb-4">
              Welcome to Andrea's Garage
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Your premier car rental service dedicated to providing an
              exceptional experience. With a passion for automobiles and
              commitment to customer satisfaction, we make every journey smooth
              and enjoyable.
            </p>
          </div>

          {/* Fleet Section */}
          <div
            className="mb-10 p-6 bg-gray-900 rounded-2xl shadow-xl"
            data-aos="fade-up"
          >
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-semibold text-amber-400 mb-4">
                  Our Fleet
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We offer a diverse fleet of well-maintained vehicles, from
                  compact city cars to spacious SUVs. Each vehicle undergoes
                  rigorous inspections to ensure your safety and comfort.
                </p>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://i.pinimg.com/564x/f2/19/f5/f219f5c529de507a65c22f7a11336db0.jpg"
                  alt="Andrea's Garage Fleet"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div
            className="mb-10 p-6 bg-gray-900 rounded-2xl shadow-xl"
            data-aos="fade-up"
          >
            <h2 className="text-2xl font-semibold text-amber-400 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              To revolutionize car rentals through transparent pricing, flexible
              options, and exceptional service. Whether for business or leisure,
              we're with you at every turn.
            </p>
          </div>

          {/* Benefits Section */}
          <div
            className="mb-10 p-6 bg-gray-900 rounded-2xl shadow-xl"
            data-aos="fade-up"
          >
            <h2 className="text-2xl font-semibold text-amber-400 mb-4">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-gray-800 rounded-lg shadow">
                <h3 className="text-xl text-amber-300 mb-2">
                  Quality Assurance
                </h3>
                <p className="text-gray-300">
                  Every vehicle undergoes 150+ point inspection before each
                  rental.
                </p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg shadow">
                <h3 className="text-xl text-amber-300 mb-2">No Hidden Fees</h3>
                <p className="text-gray-300">
                  Transparent pricing with all costs disclosed upfront.
                </p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg shadow">
                <h3 className="text-xl text-amber-300 mb-2">24/7 Support</h3>
                <p className="text-gray-300">
                  Round-the-clock assistance for all your needs.
                </p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg shadow">
                <h3 className="text-xl text-amber-300 mb-2">
                  Flexible Rentals
                </h3>
                <p className="text-gray-300">
                  Hourly, daily, weekly - rent exactly what you need.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div
            className="mb-10 p-6 bg-gray-900 rounded-2xl shadow-xl"
            data-aos="fade-up"
          >
            <h2 className="text-2xl font-semibold text-amber-400 mb-4">
              Customer Voices
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-800 rounded-lg shadow">
                <p className="text-gray-300 italic mb-4">
                  "Andrea's Garage made my business trip seamless. The car was
                  immaculate and the process so efficient!"
                </p>
                <p className="text-amber-300">- Sarah K., Regular Customer</p>
              </div>
              <div className="p-6 bg-gray-800 rounded-lg shadow">
                <p className="text-gray-300 italic mb-4">
                  "I've rented from many places but the attention to detail here
                  is unmatched. Will definitely return!"
                </p>
                <p className="text-amber-300">
                  - Michael T., Travel Enthusiast
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="p-6 bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-semibold text-white mb-4 text-center">
              Ready for Your Next Journey?
            </h2>
            <p className="text-white text-center mb-6">
              Join thousands of satisfied customers who trust Andrea's Garage
              for their mobility needs.
            </p>
            <div className="flex justify-center">
              <NewTabLink
                to="https://your-booking-link.com"
                className="px-8 py-3 bg-gray-900 text-white rounded-lg shadow hover:bg-gray-800 transition-colors"
              >
                Book Your Vehicle Now
              </NewTabLink>
            </div>
          </div>
        </div>
      </div>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
};

export default About;
