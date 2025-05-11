
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12 mt-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4 md:px-6">
        <div>
          <Link to="/" className="inline-block mb-4">
            <span className="text-2xl font-bold text-monkey">CraftyApe</span>
          </Link>
          <p className="text-gray-600 mb-4">
            Exploring the digital jungle with creativity and curiosity.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-500 hover:text-monkey transition-colors"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-monkey transition-colors"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-monkey transition-colors"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-gray-600 hover:text-monkey transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-gray-600 hover:text-monkey transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-600 hover:text-monkey transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-600 hover:text-monkey transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-600 mb-4">
            Subscribe to our newsletter for the latest updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-monkey-light flex-1"
              required
            />
            <button
              type="submit"
              className="bg-monkey text-white px-4 py-2 rounded-md hover:bg-monkey-dark transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-gray-200 px-4 md:px-6">
        <p className="text-center text-gray-500">
          &copy; {currentYear} CraftyApe. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
