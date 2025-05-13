import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-monkey-bg py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              About Danvertise S.L.U
            </h1>
            <p className="mb-8 text-xl text-gray-600">
              A service provided by Danvertise S.L.U, committed to delivering exceptional digital solutions.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2022, Danvertise S.L.U began as a small team of passionate developers with a vision to transform how businesses leverage technology. What started in a tiny office with just three team members has grown into a thriving company serving clients across the globe.
              </p>
              <p className="text-gray-600 mb-4">
                Through dedication to quality and customer satisfaction, we've built a reputation for excellence in our industry. Our diverse team brings together experts from various backgrounds including software development, design, marketing, and business strategy.
              </p>
              <p className="text-gray-600">
                We collaborate closely to deliver innovative solutions tailored to each client's unique needs, with team members spanning three continents and bringing a global perspective to every project.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Danvertise S.L.U Team" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="bg-monkey-bg py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl mb-8">
              To provide exceptional digital solutions that empower businesses to thrive in the modern marketplace, driven by innovation, integrity, and creating lasting value for our clients.
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-monkey-light/20 text-monkey rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovative</h3>
                <p className="text-gray-600">
                  We continuously push the boundaries of technology to create cutting-edge solutions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-monkey-light/20 text-monkey rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                <p className="text-gray-600">
                  We are committed to transparency, honesty, and ethical business practices.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-monkey-light/20 text-monkey rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                <p className="text-gray-600">
                  We leverage our international team to provide diverse, comprehensive solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Company Information */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Company Details</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-4">
                <span className="font-semibold">Company Name:</span> Danvertise S.L.U
              </div>
              <div className="mb-4">
                <span className="font-semibold">Address:</span> C/Cristofor Colom 99, Vilassar de Mar 08340, Barcelona, Spain
              </div>
              <div>
                <span className="font-semibold">Country:</span> Spain
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 mb-8">
              Have questions or want to discuss your next project? We'd love to hear from you!
            </p>
            <Button asChild className="bg-monkey hover:bg-monkey-dark">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
