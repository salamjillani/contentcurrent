import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    navigate(`/blog?category=${category.toLowerCase()}`);
    setIsOpen(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/blog?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-monkey">The Content Current</span>
        </Link>

        <form onSubmit={handleSearch} className="hidden md:block flex-1 max-w-xl mx-8">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-monkey"
          />
        </form>

        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => handleCategoryClick("Technology")} 
            className="text-monkey-text hover:text-monkey transition-colors"
          >
            Technology
          </button>
          <button 
            onClick={() => handleCategoryClick("Business")} 
            className="text-monkey-text hover:text-monkey transition-colors"
          >
            Business
          </button>
          <button 
            onClick={() => handleCategoryClick("Lifestyle")} 
            className="text-monkey-text hover:text-monkey transition-colors"
          >
            Lifestyle
          </button>
          <button 
            onClick={() => handleCategoryClick("Innovation")} 
            className="text-monkey-text hover:text-monkey transition-colors"
          >
            Innovation
          </button>
        </nav>

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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 py-6 bg-white border-t border-gray-100 animate-fade-in">
          <form onSubmit={handleSearch} className="mb-4">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-monkey"
            />
          </form>
          <nav className="flex flex-col gap-4">
            <Link to="/" className="block py-2 text-monkey-text hover:text-monkey" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <button
              onClick={() => handleCategoryClick("Technology")}
              className="block py-2 text-left text-monkey-text hover:text-monkey"
            >
              Technology
            </button>
            <button
              onClick={() => handleCategoryClick("Business")}
              className="block py-2 text-left text-monkey-text hover:text-monkey"
            >
              Business
            </button>
            <button
              onClick={() => handleCategoryClick("Lifestyle")}
              className="block py-2 text-left text-monkey-text hover:text-monkey"
            >
              Lifestyle
            </button>
            <button
              onClick={() => handleCategoryClick("Innovation")}
              className="block py-2 text-left text-monkey-text hover:text-monkey"
            >
              Innovation
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
