import { useState } from 'react';
import profile from '../../assets/images/profile.png';
import logo from '../../assets/images/logo (2).png';

const Header = ({ searchTerm, handleSearch }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="p-4 md:p-6 max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img className="w-12" src={logo} alt="Logo" />
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Otaku Orbit
          </h1>
        </div>

        {/* Desktop search bar */}
        <div className="hidden md:flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={handleSearch}
            className="p-2 border rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
          <img
            src={profile}
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-gray-300 cursor-pointer transition-transform duration-200 hover:scale-105"
          />
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-600 focus:outline-none transition-transform duration-200"
        >
          <svg
            className={`w-6 h-6 transform ${menuOpen ? 'rotate-90' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4 mt-2 md:hidden z-40">
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={handleSearch}
              className="p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 transition duration-200"
            />
            <div className="flex justify-center">
              <img
                src={profile}
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-gray-300 cursor-pointer transition-transform duration-200 hover:scale-105"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
