import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "À PROPOS", mobile: "À propos", href: "#about" },
    { name: "SERVICES", mobile: "Services", href: "#services" },
    { name: "PROJETS", mobile: "Projets", href: "#portfolio" },
    { name: "EXPÉRIENCE", mobile: "Expérience", href: "#experience" },
  ];

  const scrollToSection = (e, href) => {
    const element = document.querySelector(href);
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg shadow-sky-100"
          : "bg-white/80 backdrop-blur-md"
      } border-b border-slate-200/80`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <motion.a
            href="#home"
            onClick={(e) => scrollToSection(e, "#home")}
            className="flex items-center gap-2 flex-shrink-0"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center flex-shrink-0 shadow-sm shadow-sky-200">
              <span className="text-white font-bold text-xs leading-none">
                RK
              </span>
            </div>
            <span className="text-slate-900 font-bold text-sm">
              Russel<span className="text-primary-dark">.dev</span>
            </span>
          </motion.a>

          <div className="hidden xl:flex items-center gap-5">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-slate-600 hover:text-primary-dark transition-colors duration-200 font-medium text-xs tracking-wide whitespace-nowrap before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-primary before:transition-all before:duration-300 hover:before:w-full relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -1 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="flex items-center gap-2 border border-primary text-primary-dark hover:bg-primary hover:text-white transition-all duration-300 font-semibold text-xs px-4 py-2 rounded-md whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
              ME CONTACTER
            </motion.a>
          </div>

          <div className="xl:hidden flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="flex items-center gap-2 bg-primary text-white font-semibold text-sm px-4 py-2 rounded-full whitespace-nowrap"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
              ME CONTACTER
            </a>
            <button
              className="text-slate-600 hover:text-primary-dark focus:outline-none transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Ouvrir le menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className="xl:hidden overflow-hidden"
        style={{
          maxHeight: isMobileMenuOpen ? "600px" : "0px",
          opacity: isMobileMenuOpen ? 1 : 0,
          transition: "max-height 0.35s ease, opacity 0.25s ease",
          background: "rgba(255, 255, 255, 0.98)",
          backdropFilter: "blur(16px)",
        }}
      >
        <div className="mx-8 my-4 p-4 rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-lg shadow-sky-100">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="block px-4 py-3 text-slate-600 hover:text-primary-dark hover:bg-sky-50 transition-colors duration-200 text-base font-medium rounded-xl"
            >
              {link.mobile}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
