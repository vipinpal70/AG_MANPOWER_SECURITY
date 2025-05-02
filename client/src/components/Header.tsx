import { useState } from "react";
import { Link } from "wouter";
import { ThemeToggle } from "./ThemeToggle";
import { useMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useMobile();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-90 shadow-sm backdrop-blur-sm transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center h-16">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold font-heading text-primary dark:text-white">AG SECURITY SERVICE</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-sm font-medium hover:text-primary dark:hover:text-secondary transition-colors">Home</a>
          <a href="#about" className="text-sm font-medium hover:text-primary dark:hover:text-secondary transition-colors">About Us</a>
          <a href="#services" className="text-sm font-medium hover:text-primary dark:hover:text-secondary transition-colors">Services</a>
          <a href="#quality" className="text-sm font-medium hover:text-primary dark:hover:text-secondary transition-colors">Quality Policy</a>
          <a href="#training" className="text-sm font-medium hover:text-primary dark:hover:text-secondary transition-colors">Training</a>
          <a href="#contact" className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300">Contact Us</a>
        </nav>
        <button
          id="mobile-menu-button"
          className="md:hidden flex items-center"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      
      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white dark:bg-gray-800 shadow-md transition-all duration-300 ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          <a href="#home" className="block text-base font-medium hover:text-primary dark:hover:text-secondary" onClick={closeMobileMenu}>Home</a>
          <a href="#about" className="block text-base font-medium hover:text-primary dark:hover:text-secondary" onClick={closeMobileMenu}>About Us</a>
          <a href="#services" className="block text-base font-medium hover:text-primary dark:hover:text-secondary" onClick={closeMobileMenu}>Services</a>
          <a href="#quality" className="block text-base font-medium hover:text-primary dark:hover:text-secondary" onClick={closeMobileMenu}>Quality Policy</a>
          <a href="#training" className="block text-base font-medium hover:text-primary dark:hover:text-secondary" onClick={closeMobileMenu}>Training</a>
          <a href="#contact" className="inline-block bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md text-base font-medium mt-2" onClick={closeMobileMenu}>Contact Us</a>
        </div>
      </div>
      
      <ThemeToggle />
    </header>
  );
};

export default Header;
