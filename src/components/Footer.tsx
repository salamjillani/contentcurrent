import { useEffect } from "react";
import { Link } from "react-router-dom";

// ScrollToTop component that will scroll to top when route changes
function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return null;
}

// Custom Link component that scrolls to top when clicked
function ScrollToTopLink(props) {
  const { to, children, className } = props;
  
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  
  return (
    <Link to={to} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}

// Modified Footer component using ScrollToTopLink
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12 mt-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4 md:px-6">
        <div>
          <ScrollToTopLink to="/" className="inline-block mb-4">
            <span className="text-2xl font-bold text-monkey">The Content Current</span>
          </ScrollToTopLink>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <ScrollToTopLink to="/" className="text-gray-600 hover:text-monkey transition-colors">
                Home
              </ScrollToTopLink>
            </li>
            <li>
              <ScrollToTopLink to="/blog" className="text-gray-600 hover:text-monkey transition-colors">
                Blog
              </ScrollToTopLink>
            </li>
            <li>
              <ScrollToTopLink to="/about" className="text-gray-600 hover:text-monkey transition-colors">
                About Us
              </ScrollToTopLink>
            </li>
            <li>
              <ScrollToTopLink to="/contact" className="text-gray-600 hover:text-monkey transition-colors">
                Contact Us
              </ScrollToTopLink>
            </li>
             <li>
              <ScrollToTopLink to="/advertisers" className="text-gray-600 hover:text-monkey transition-colors">
                For Advertisers
              </ScrollToTopLink>
            </li>
            <li>
              <ScrollToTopLink to="/privacy-policy" className="text-gray-600 hover:text-monkey transition-colors">
                Privacy Policy
              </ScrollToTopLink>
            </li>
            <li>
              <ScrollToTopLink to="/terms" className="text-gray-600 hover:text-monkey transition-colors">
                Terms Of Service
              </ScrollToTopLink>
            </li>

          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <ul className="space-y-2">
            <li>
              <ScrollToTopLink to="/category/technology" className="text-gray-600 hover:text-monkey transition-colors">
                Technology
              </ScrollToTopLink>
            </li>
            <li>
              <ScrollToTopLink to="/category/business" className="text-gray-600 hover:text-monkey transition-colors">
                Business
              </ScrollToTopLink>
            </li>
            <li>
              <ScrollToTopLink to="/category/lifestyle" className="text-gray-600 hover:text-monkey transition-colors">
                Lifestyle
              </ScrollToTopLink>
            </li>
            <li>
              <ScrollToTopLink to="/category/innovation" className="text-gray-600 hover:text-monkey transition-colors">
                Innovation
              </ScrollToTopLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-gray-200 px-4 md:px-6">
        <p className="text-center text-gray-500">
          &copy; {currentYear} Danvertise S.L.U. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;