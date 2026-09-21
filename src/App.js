import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
// import Certifications from './components/Certifications';
// import Hackathons from './components/Hackathons';
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulation du chargement initial
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-surface-soft">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-primary-dark text-xl font-display">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="App bg-surface-soft min-h-screen text-slate-900">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Experience />
          {/* <Certifications /> */}
          {/* <Hackathons /> */}
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
