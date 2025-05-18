
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-medicollect-blue flex items-center">
            <span className="text-medicollect-teal mr-1">Medi</span>
            Collect<span className="text-medicollect-blue ml-1 font-normal">Pro</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 hover:text-medicollect-blue transition-colors">Features</a>
          <a href="#how-it-works" className="text-gray-700 hover:text-medicollect-blue transition-colors">How It Works</a>
          <a href="#testimonials" className="text-gray-700 hover:text-medicollect-blue transition-colors">Testimonials</a>
          <a href="#pricing" className="text-gray-700 hover:text-medicollect-blue transition-colors">Pricing</a>
          <Button className="bg-medicollect-blue hover:bg-medicollect-blue/90 text-white">
            Request Demo
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-medicollect-blue focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
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

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 pt-20 px-4 md:hidden transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col space-y-6 items-center">
          <a 
            href="#features" 
            className="text-lg text-gray-700 hover:text-medicollect-blue"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#how-it-works" 
            className="text-lg text-gray-700 hover:text-medicollect-blue"
            onClick={() => setIsMenuOpen(false)}
          >
            How It Works
          </a>
          <a 
            href="#testimonials" 
            className="text-lg text-gray-700 hover:text-medicollect-blue"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#pricing" 
            className="text-lg text-gray-700 hover:text-medicollect-blue"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </a>
          <Button 
            className="bg-medicollect-blue hover:bg-medicollect-blue/90 text-white w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            Request Demo
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
