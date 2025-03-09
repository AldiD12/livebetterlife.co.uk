import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Live Better Life</h3>
            <p className="text-gray-300">
                We are a team of experienced builders who are dedicated to providing you with the best construction services.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/new-build" className="text-gray-300 hover:text-white">
                  New Build
                </a>
              </li>
              <li>
                <a href="/extension-structure" className="text-gray-300 hover:text-white">
                  Extension
                </a>
              </li>
              <li>
                <a href="/remodel-rooms" className="text-gray-300 hover:text-white">
                  Remodel
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-gray-300">
              Email: info@livebetterlife.com<br />
              Phone: (123) 456-7890 
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; 2025 Live Better Life. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;