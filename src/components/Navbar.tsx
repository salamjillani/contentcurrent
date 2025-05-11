
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-monkey">CraftyApe</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-monkey-text hover:text-monkey transition-colors">
            Home
          </Link>
          <Link to="/blog" className="text-monkey-text hover:text-monkey transition-colors">
            Blog
          </Link>
          <Link to="/about" className="text-monkey-text hover:text-monkey transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-monkey-text hover:text-monkey transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button className="bg-monkey hover:bg-monkey-dark">Subscribe</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-monkey-text"
          aria-label="Toggle menu"
        >
          {!isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden px-4 py-6 bg-white border-t border-gray-100 animate-fade-in">
          <nav className="flex flex-col gap-4">
            <Link
              to="/"
              className="block py-2 text-monkey-text hover:text-monkey"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/blog"
              className="block py-2 text-monkey-text hover:text-monkey"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/about"
              className="block py-2 text-monkey-text hover:text-monkey"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-monkey-text hover:text-monkey"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 mt-2 border-t border-gray-100">
              <Button
                className="w-full bg-monkey hover:bg-monkey-dark"
                onClick={() => setIsOpen(false)}
              >
                Subscribe
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
