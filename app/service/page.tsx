import React from 'react';

const Services = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-6"
      style={{ backgroundImage: "url('/banner.jpg')" }} // Ensure 'services-bg.jpg' exists in the public folder
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-lg max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-orange-500 mb-4">Our Services</h1>
        <p className="text-lg text-gray-700 mb-6">
          At Flight Search, we provide a range of services to make your travel planning effortless:
        </p>

      </div>
    </div>
  );
};

export default Services;
