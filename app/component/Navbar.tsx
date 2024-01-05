// components/Navbar.js
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav
    className="fixed w-full z-10 transition-all duration-300 ease-in-out"
    style={{
      backgroundColor: scrolled ? '#14B8A6' : 'transparent',
      fontWeight: 'bold'
    }}
  >

      <div className="container mx-auto p-4 flex items-center justify-between flex-col lg:flex-row">
        {/* Logo */}
        <div className="text-xl font-bold mb-4 lg:mb-0 self-start" style={{ width: '100%' }}>
          <div style={{ float: 'left' }}>Logo</div>
          <div style={{ float: 'right' }}>
          <button
          className="lg:hidden focus:outline-none ml-auto"
          onClick={toggleMobileMenu}
        >
          <svg
            className="h-6 w-6 text-teal-500"
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
          </div>
        </div>
        

        {/* Responsive Menu */}
        <div className={`lg:flex items-center ${isMobile ? 'flex flex-col w-full' : 'hidden'}`}>
          <a href="#" className="lg:mr-4 text-white w-full mb-2">About</a>
          <a href="#" className="lg:mr-4 text-white w-full mb-2">Contact</a>
          <a href="#" className="lg:mr-4 text-white w-full mb-2">Profile</a>
        </div>

        {/* Mobile Toggle Button */}
        
      </div>
    </nav>
  );
};

export default Navbar;
