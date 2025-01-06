import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-900 text-gray-400 text-left md:text-center">
      <div className="space-y-4 text-sm">
        <h5 className="font-bold text-white">ABOUT</h5>
        <p className="hover:text-orange-500 cursor-pointer transition-colors">News room</p>
        <p className="hover:text-orange-500 cursor-pointer transition-colors">Investors</p>
        <p className="hover:text-orange-500 cursor-pointer transition-colors">Flight Plus</p>
        <p className="hover:text-orange-500 cursor-pointer transition-colors">Flight Luxe</p>
      </div>

      <div className="space-y-4 text-sm">
        <h5 className="font-bold text-white">COMMUNITY</h5>
        <p className="hover:text-orange-500 cursor-pointer transition-colors">Accessibility</p>
        <p className="hover:text-orange-500 cursor-pointer transition-colors">This is not a real site</p>
        <p className="hover:text-orange-500 cursor-pointer transition-colors">It&apos;s a pretty awesome clone</p>
        <p className="hover:text-orange-500 cursor-pointer transition-colors">Referrals accepted</p>
      </div>

      <div className="space-y-4 text-sm">
        <h5 className="font-bold text-white">CONTACT US</h5>
        <p className="hover:text-orange-500 cursor-pointer transition-colors">Help Center</p>
        <p className="hover:text-orange-500 cursor-pointer transition-colors">Trust & Safety</p>
        <p className="hover:text-orange-500 cursor-pointer transition-colors">Easter Eggs</p>
        <p className="hover:text-orange-500 cursor-pointer transition-colors">Blog</p>
      </div>

      <div className="space-y-4 text-sm">
        <h5 className="font-bold text-white">SUPPORT</h5>
        <p className="hover:text-orange-500 cursor-pointer transition-colors">Our COVID-19 Response</p>
        <p className="hover:text-orange-500 cursor-pointer transition-colors">Cancellation Options</p>
        <p className="hover:text-orange-500 cursor-pointer transition-colors">Neighborhood Support</p>
        <p className="hover:text-orange-500 cursor-pointer transition-colors">Trust & Safety</p>
      </div>
    </div>
  );
};

export default Footer;
