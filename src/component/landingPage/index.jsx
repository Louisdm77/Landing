import React, { useState, useEffect, useRef } from "react";
import "animate.css";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Refs for sections to observe
  const sectionRefs = {
    hero: useRef(null),
    products: useRef(null),
    categories: useRef(null),
    testimonials: useRef(null),
    about: useRef(null),
    instagram: useRef(null),
    newsletter: useRef(null),
    contact: useRef(null),
  };

  // State to track visibility of each section
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    products: false,
    categories: false,
    testimonials: false,
    about: false,
    instagram: false,
    newsletter: false,
    contact: false,
  });

  // Smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close menu after clicking
  };

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setVisibleSections((prev) => ({
              ...prev,
              [sectionId]: true,
            }));
            // Optional: Uncomment to stop observing after first trigger
            // observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    // Observe each section
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    // Cleanup observer on unmount
    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <div className="font-sans bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-blue-900 text-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">LuxWear</h1>
          <div className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection("hero")}
              className="hover:text-yellow-400 transition duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="hover:text-yellow-400 transition duration-200"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("categories")}
              className="hover:text-yellow-400 transition duration-200"
            >
              Categories
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-yellow-400 transition duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-yellow-400 transition duration-200"
            >
              Contact
            </button>
          </div>
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-blue-900 px-4 py-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-left hover:text-yellow-400 transition duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-left hover:text-yellow-400 transition duration-200"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("categories")}
              className="text-left hover:text-yellow-400 transition duration-200"
            >
              Categories
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-left hover:text-yellow-400 transition duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left hover:text-yellow-400 transition duration-200"
            >
              Contact
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        ref={sectionRefs.hero}
        className={`pt-20 bg-blue-900 text-white min-h-screen flex items-center ${
          visibleSections.hero
            ? "animate__animated animate__fadeInUp animate__slow animate__delay-500ms"
            : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Timeless Fashion Awaits
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-200 max-w-md mx-auto md:mx-0">
              LuxWear brings you elegance, comfort, and sustainability in every
              stitch.
            </p>
            <button
              onClick={() => scrollToSection("products")}
              className="mt-8 px-8 py-3 bg-yellow-500 text-blue-900 font-semibold rounded-md hover:bg-yellow-600 transition duration-300"
            >
              Shop Now
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://img.freepik.com/free-photo/low-angle-woman-dancing-outdoors_23-2149643024.jpg?t=st=1743509183~exp=1743512783~hmac=d567caa815e0987519ed563fcb2eacb9bc33c6bca8d16a7675655101c66ad1f8&w=740"
              alt="Hero Fashion"
              className="w-full h-64 sm:h-80 md:h-[500px] object-cover rounded-md shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section
        id="products"
        ref={sectionRefs.products}
        className={`py-20 bg-gray-50 ${
          visibleSections.products
            ? "animate__animated animate__slideInLeft animate__delay-500ms"
            : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Wool Overcoat",
                price: "$179",
                img: "https://i.pinimg.com/236x/5b/2c/c7/5b2cc72b7f3a74743f4dd16a58d927e6.jpg",
              },
              {
                name: "Cotton Dress",
                price: "$69",
                img: "https://i.pinimg.com/736x/0d/c7/2d/0dc72da9f5ac15ce1dc1d6addba071d3.jpg",
              },
              {
                name: "Denim Jacket",
                price: "$99",
                img: "https://i.pinimg.com/236x/39/c7/85/39c78591876e65e9734cf8fc543e5b9e.jpg",
              },
              {
                name: "Knit Sweater",
                price: "$49",
                img: "https://i.pinimg.com/236x/55/7a/4c/557a4cd125d41c2b617510fe6a4a6096.jpg",
              },
            ].map((product) => (
              <div
                key={product.name}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-64 object-contain"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-blue-900">
                    {product.name}
                  </h3>
                  <p className="text-gray-600">{product.price}</p>
                  <button className="mt-4 px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition duration-200">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section
        id="categories"
        ref={sectionRefs.categories}
        className={`py-20 bg-white ${
          visibleSections.categories
            ? "animate__animated animate__zoomIn animate__delay-500ms"
            : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Men’s Apparel",
                img: "https://i.pinimg.com/236x/73/8c/01/738c013e8b1bf5068f3f07913c551919.jpg",
              },
              {
                name: "Women’s Apparel",
                img: "https://images.unsplash.com/photo-1524255684952-5f9c3e196e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
              },
              {
                name: "Accessories",
                img: "https://images.unsplash.com/photo-1524800875136-c38c1d26fb33?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
              },
            ].map((category) => (
              <div
                key={category.name}
                className="relative rounded-lg overflow-hidden group"
              >
                <img
                  src={category.img}
                  alt={category.name}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-2xl font-semibold text-white">
                    {category.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        ref={sectionRefs.testimonials}
        className={`py-20 bg-gray-100 ${
          visibleSections.testimonials
            ? "animate__animated animate__bounceInUp animate__delay-500ms"
            : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "LuxWear’s quality is unmatched—my new favorite brand!",
                author: "Sarah M.",
              },
              {
                quote: "Fast shipping and stunning designs. Highly recommend!",
                author: "James T.",
              },
              {
                quote: "Sustainable fashion that actually looks good. Love it!",
                author: "Emily R.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <p className="text-gray-700 italic mb-4">
                  "{testimonial.quote}"
                </p>
                <p className="text-blue-900 font-semibold">
                  -{testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section
        id="about"
        ref={sectionRefs.about}
        className={`py-20 bg-white ${
          visibleSections.about
            ? "animate__animated animate__fadeInRight animate__delay-500ms"
            : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:justify-between gap-3 items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 bg-gray-600">
            <img
              src="https://i.pinimg.com/236x/cb/8e/ba/cb8eba71d22908bf61144c76e8dff908.jpg"
              alt="About LuxWear"
              className="w-full h-64 md:h-96 object-contain rounded-md shadow-lg"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              About LuxWear
            </h2>
            <p className="text-lg text-gray-700 max-w-md mx-auto md:mx-0">
              Founded with a passion for fashion and sustainability, LuxWear
              creates clothing that blends timeless design with modern
              craftsmanship. Our goal is to empower you to express your style,
              responsibly.
            </p>
          </div>
        </div>
      </section>

      {/* Instagram Feed (Mock) */}
      <section
        id="instagram"
        ref={sectionRefs.instagram}
        className={`py-20 bg-gray-50 ${
          visibleSections.instagram
            ? "animate__animated animate__slideInUp animate__delay-500ms"
            : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
            Follow Us @LuxWear
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
              "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
              "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
              "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
              "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
            ].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Instagram Post ${index + 1}`}
                className="w-full h-40 object-cover rounded-md hover:opacity-90 transition-opacity duration-200"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section
        id="newsletter"
        ref={sectionRefs.newsletter}
        className={`py-20 bg-blue-900 text-white ${
          visibleSections.newsletter
            ? "animate__animated animate__zoomIn animate__slow animate__delay-500ms"
            : ""
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Community
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get exclusive discounts, style tips, and early access to new
            collections.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full sm:w-72 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="px-8 py-3 bg-yellow-500 text-blue-900 font-semibold rounded-md hover:bg-yellow-600 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={sectionRefs.contact}
        className={`py-20 bg-white ${
          visibleSections.contact
            ? "animate__animated animate__fadeInUp animate__delay-500ms"
            : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                Contact Us
              </h3>
              <p className="text-gray-700">
                Email: support@luxwear.com
                <br />
                Phone: +1 (555) 123-4567
                <br />
                Address: 123 Fashion Lane, Style City, USA
              </p>
            </div>
            <div>
              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-900 text-white font-semibold rounded-md hover:bg-blue-800 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">LuxWear</h3>
          <p className="text-sm mb-6">
            © 2025 LuxWear. All rights reserved. Designed with passion for
            fashion.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="hover:text-yellow-400 transition duration-200"
            >
              Instagram
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 transition duration-200"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 transition duration-200"
            >
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
