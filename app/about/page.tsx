// pages/about.tsx
import React from 'react';

const About = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-6"
      style={{ backgroundImage: "url('/banner.jpg')" }} // Ensure 'about-bg.jpg' exists in the public folder
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-lg max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-orange-500 mb-4">About Us</h1>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
          Welcome to Flight Search! We are dedicated to helping you find the best travel deals and
          experiences. Our mission is to make your journey seamless and enjoyable, whether you are
          planning a vacation, business trip, or weekend getaway.
        </p>
        <p className="mt-4 text-lg text-gray-700 text-center max-w-3xl mx-auto">
          Our platform provides an easy-to-use interface to search for flights, compare prices, and
          book your tickets with confidence. At Flight Search, we believe that travel should be
          accessible to everyone, and we strive to provide the tools and resources to make it
          possible.
        </p>
      </div>
    </div>
  );
};

export default About;
