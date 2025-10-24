
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold">UPSC Prep Hub</h3>
            <p className="mt-2 text-sm text-blue-200">Your Complete Guide to Cracking the Civil Services Exam.</p>
          </div>
          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="mt-2 space-y-1">
              <li><Link to="/prelims" className="text-blue-200 hover:text-white text-sm">Prelims</Link></li>
              <li><Link to="/mains" className="text-blue-200 hover:text-white text-sm">Mains</Link></li>
              <li><Link to="/current-affairs" className="text-blue-200 hover:text-white text-sm">Current Affairs</Link></li>
              <li><Link to="/resources" className="text-blue-200 hover:text-white text-sm">Resources</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Support</h4>
            <ul className="mt-2 space-y-1">
              <li><Link to="#" className="text-blue-200 hover:text-white text-sm">About Us</Link></li>
              <li><Link to="#" className="text-blue-200 hover:text-white text-sm">Contact Us</Link></li>
              <li><Link to="#" className="text-blue-200 hover:text-white text-sm">FAQ</Link></li>
              <li><Link to="#" className="text-blue-200 hover:text-white text-sm">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Follow Us</h4>
            <div className="flex mt-2 space-x-4">
              {/* Social Media Icons */}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-blue-700 pt-4 text-center text-sm text-blue-300">
          &copy; {new Date().getFullYear()} UPSC Prep Hub. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
