import React from "react";

const Services = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-700 py-10 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl mt-20">
          <h1 className="text-4xl font-bold text-amber-400 mb-10 text-center">
            Our Services
          </h1>
          <div className="mb-10 p-6 bg-gray-900 rounded-2xl shadow-xl">
            <p className="text-lg text-gray-300 leading-relaxed text-center">
              We offer a wide range of car rental services to meet your needs,
              whether you're looking for a short-term rental or a long-term
              lease. Our fleet includes everything from compact cars to luxury
              vehicles, ensuring you find the perfect ride for any occasion.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
