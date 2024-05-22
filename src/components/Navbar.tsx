"use client";
import { useState } from "react";
import Link from "next/link";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a href="#" className="text-white text-lg font-bold">
            Logo
          </a>
        </div>
        <div className="hidden md:block">
          <Link
            href="/genre"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md"
          >
            Genre
          </Link>
          <Link
            href="/watchedMovie"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md"
          >
            Watched
          </Link>
          <Link
            href="/topThree"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md"
          >
            Top 3 Liked
          </Link>
          <Link
            href="/mostReview"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md"
          >
            Most Review
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        {/* Conditional rendering of mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-800">
            <div className="px-2 py-3">
              <a
                href="#"
                className="block text-gray-300 hover:text-white px-4 py-2 rounded-md"
              >
                Home
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-white px-4 py-2 rounded-md"
              >
                About
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-white px-4 py-2 rounded-md"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
