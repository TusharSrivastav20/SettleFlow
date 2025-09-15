import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
// import Hero from "./components/Hero";
import Features from "./components/Features/Features";
import About from "./components/About/About";
import Pricing from "./components/Pricing/Pricing";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

export default function App() {
  return (
    <div className="bg-white font-sans text-[#1a1a1a]">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Home />
        <Features />
        <Pricing />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
