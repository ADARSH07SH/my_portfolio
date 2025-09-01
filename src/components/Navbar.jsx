"use client";

import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { personalInfo } from "./data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#tech" },
    { label: "Projects", href: "#projects" },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // close mobile menu
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-black/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={() => scrollToSection("home")}
              className="text-2xl font-bold text-black dark:text-yellow-500 transition-colors duration-300"
            >
              Ad.
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href.slice(1))}
                className="text-black dark:text-white hover:text-black-800 dark:hover:text-yellow-500 text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}

            {/* Resume */}
            <a
              href={personalInfo.resumeUrl}
              download
              className="text-black dark:text-white hover:text-black-800 dark:hover:text-yellow-500 text-sm font-medium transition-colors duration-200"
            >
              Resume
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-2 p-3 rounded-full bg-black dark:bg-yellow-500 text-white dark:text-black hover:bg-black/80 dark:hover:bg-yellow-400 transition-all duration-200 border-2 border-black dark:border-yellow-600 shadow-lg hover:shadow-xl transform hover:scale-105"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* Contact Button */}
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-black dark:bg-yellow-500 text-white dark:text-black px-4 py-2 rounded-lg font-medium hover:bg-black/80 dark:hover:bg-yellow-400 transition-colors duration-200"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-black dark:bg-yellow-500 text-white dark:text-black hover:bg-black/80 dark:hover:bg-yellow-400 transition-all duration-200 border border-black dark:border-yellow-600 shadow-md"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black dark:text-white p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Links */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 px-2 py-3 space-y-1">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href.slice(1))}
                className="block w-full text-left px-3 py-2 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}

            <a
              href={personalInfo.resumeUrl}
              download
              className="block bg-black dark:bg-yellow-500 text-white dark:text-black px-3 py-2 rounded-lg font-medium hover:bg-black/80 dark:hover:bg-yellow-400 transition-colors duration-200"
            >
              Resume
            </a>

            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-3 py-2 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded transition-colors duration-200"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
