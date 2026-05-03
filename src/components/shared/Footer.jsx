import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black p-2 ">
      <div className="container mx-auto text-center">
        {/* Logo Section */}
        <h2 className="text-2xl md:text-5xl font-bold mb-2 mt-2">BookFlow</h2>

        {/* Subtitle */}
        <p className="text-black max-w-xl mx-auto mb-2 text-sm md:text-base">
          A seamless and modern web application designed to digitize the
          traditional library experience.
        </p>

        {/* Grid Section for Contact and Social Links */}
        <div className="grid grid-cols-2  max-w-5xl mx-auto">
          {/* Contact Us Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-gray-600" />
                <a
                  href="mailto:support@bookflow.com"
                  className="hover:text-black transition"
                >
                  support@bookflow.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <FaPhone className="text-gray-600" />
                <a
                  href="tel:+880123456789"
                  className="hover:text-black transition"
                >
                  +880 1234-56789
                </a>
              </p>
              <p className="flex items-center gap-2">
                <FaLocationDot className="text-gray-600" /> Dhaka, Bangladesh
              </p>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <h3 className="text-lg font-bold mb-2">Social Links</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-white p-2 rounded-full text-black hover:bg-gray-100 transition shadow-sm"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="bg-white p-2 rounded-full text-black hover:bg-gray-100 transition shadow-sm"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                className="bg-white p-2 rounded-full text-black hover:bg-gray-100 transition shadow-sm"
              >
                <FaXTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-400 my-3"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-700 gap-4 pb-2">
          <p>© 2026 BookFlow. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-black transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-black transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-black transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
