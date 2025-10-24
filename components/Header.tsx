
import React, { useState } from 'react';
import { Link, NavLink as RouterNavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { MenuIcon, XIcon, SearchIcon } from './IconComponents';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              UPSC Prep Hub
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <nav className="flex space-x-4">
              {NAV_LINKS.map((link) => (
                <RouterNavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-primary text-white'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
                    }`
                  }
                >
                  {link.name}
                </RouterNavLink>
              ))}
            </nav>
            <div className="relative">
                <input type="text" placeholder="Search..." className="border rounded-full py-1.5 pl-4 pr-10 w-40 focus:w-48 transition-all duration-300 outline-none focus:ring-2 focus:ring-primary"/>
                <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
            </div>
            <Link to="/login" className="ml-4 px-4 py-2 text-sm font-medium text-white bg-secondary rounded-md hover:bg-green-600 transition-colors">
              Login/Sign Up
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <RouterNavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
              >
                {link.name}
              </RouterNavLink>
            ))}
             <div className="pt-4 pb-2 px-3 border-t">
                <Link to="/login" onClick={() => setIsMenuOpen(false)} className="w-full text-center block px-4 py-2 text-sm font-medium text-white bg-secondary rounded-md hover:bg-green-600 transition-colors">
                    Login/Sign Up
                </Link>
             </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
