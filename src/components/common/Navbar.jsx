import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { dropdown, Logo, Logo1 } from '../../assets';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  // Effect to handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // Reset dropdown state when switching to desktop view
        setIsOpen(false);
        setDropdownOpen(null);
      }
    };

    window.addEventListener('resize', handleResize);
    
    // Call handler right away so state is updated with initial window size
    handleResize();

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDropdownToggle = (dropdownName) => {
    setDropdownOpen(prev => (prev === dropdownName ? null : dropdownName));
  };

  return (
    <nav className="bg-transparent py-4">
      <div className="mx-auto flex items-center justify-between">
        {/* Left side logo */}
        <div className="flex-shrink-0 z-10">
          <Link to="/">
            <img src={Logo1} alt="Logo" className="py-3 px-1 bg-[#C3E11D] rounded-[8px] md:w-[100%] w-[40px]" />
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden z-10 flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Center links (desktop) */}
        <div className="hidden md:flex z-10 flex-grow justify-center space-x-16 font-semibold text-md">
          <div className="relative">
            <button
              onClick={() => handleDropdownToggle('userCases')}
              className="flex gap-1 items-center hover:text-gray-500"
            >
              User Cases
              <img src={dropdown} alt="" className="ml-1" />
            </button>
            {dropdownOpen === 'userCases' && (
              <div className="absolute top-full mt-2 bg-gray-700 text-white rounded-lg shadow-lg">
                <Link to="/case1" className="block px-4 py-2 hover:bg-gray-600">Case 1</Link>
                <Link to="/case2" className="block px-4 py-2 hover:bg-gray-600">Case 2</Link>
                <Link to="/case3" className="block px-4 py-2 hover:bg-gray-600">Case 3</Link>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => handleDropdownToggle('resources')}
              className="flex gap-1 items-center hover:text-gray-500"
            >
              Resources
              <img src={dropdown} alt="" className="ml-1" />
            </button>
            {dropdownOpen === 'resources' && (
              <div className="absolute top-full mt-2 bg-gray-700 text-white rounded-lg shadow-lg">
                <Link to="/resource1" className="block px-4 py-2 hover:bg-gray-600">Resource 1</Link>
                <Link to="/resource2" className="block px-4 py-2 hover:bg-gray-600">Resource 2</Link>
                <Link to="/resource3" className="block px-4 py-2 hover:bg-gray-600">Resource 3</Link>
              </div>
            )}
          </div>
          <Link to="/pricing" className="hover:text-gray-500">Pricing Plan</Link>
        </div>

        {/* Right side buttons (desktop) */}
        <div className="hidden z-10 md:flex space-x-2 font-semibold">
          <button className="px-4 py-2">
            Login
          </button>
          <button className="bg-[#C3E11D] px-5 py-2 rounded-full">
            Get Started
          </button>
        </div>
      </div>

      {/* Dropdown menu (mobile) */}
      <div className={`md:hidden z-10 ${isOpen ? 'block' : 'hidden'} bg-gray-700`}>
        <div className="flex flex-col items-center space-y-2 py-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <div className="relative">
            <button
              onClick={() => handleDropdownToggle('userCases')}
              className="flex gap-1 items-center text-white hover:text-gray-300"
            >
              User Cases
              <img src={dropdown} alt="" className="ml-1" />
            </button>
            {dropdownOpen === 'userCases' && (
              <div className="absolute top-full mt-2 bg-gray-600 text-white rounded-lg shadow-lg">
                <Link to="/case1" className="block px-4 py-2 hover:bg-gray-500">Case 1</Link>
                <Link to="/case2" className="block px-4 py-2 hover:bg-gray-500">Case 2</Link>
                <Link to="/case3" className="block px-4 py-2 hover:bg-gray-500">Case 3</Link>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => handleDropdownToggle('resources')}
              className="flex gap-1 items-center text-white hover:text-gray-300"
            >
              Resources
              <img src={dropdown} alt="" className="ml-1" />
            </button>
            {dropdownOpen === 'resources' && (
              <div className="absolute top-full mt-2 bg-gray-600 text-white rounded-lg shadow-lg">
                <Link to="/resource1" className="block px-4 py-2 hover:bg-gray-500">Resource 1</Link>
                <Link to="/resource2" className="block px-4 py-2 hover:bg-gray-500">Resource 2</Link>
                <Link to="/resource3" className="block px-4 py-2 hover:bg-gray-500">Resource 3</Link>
              </div>
            )}
          </div>
          <Link to="/pricing" className="text-white hover:text-gray-300">Pricing Plan</Link>
          <button className=" text-white z-10 px-4 py-2">
            Login
          </button>
          <button className="bg-[#C3E11D] z-10 px-5 py-2 rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
