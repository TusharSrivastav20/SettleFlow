import React, { useState } from "react";
import LoginModal from "../Modals/LoginModal";
import SignupModal from "../Modals/SignupModal";

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <img src="/SettleLogo2.jpeg" alt="SettleFlow" className="h-10 mr-2" />
          <ul className="hidden md:flex items-center space-x-6 text-sm lg:text-base">
            <li><a href="#home" className="hover:text-blue-600 font-semibold">Home</a></li>
            <li><a href="#features" className="hover:text-blue-600 font-semibold">Features</a></li>
            <li><a href="#pricing" className="hover:text-blue-600 font-semibold">Pricing</a></li>
            <li><a href="#about" className="hover:text-blue-600 font-semibold">About</a></li>
            <li><a href="#contact" className="hover:text-blue-600 font-semibold">Contact</a></li>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <button className="btn-secondary" onClick={() => setIsLoginOpen(true)}>Login</button>
          <button className="btn-primary" onClick={() => setIsSignupOpen(true)}>Sign Up</button>
        </div>
      </nav>
      {isLoginOpen && <LoginModal onClose={() => setIsLoginOpen(false)} switchToSignup={() => { setIsLoginOpen(false); setIsSignupOpen(true); }} />}
      {isSignupOpen && <SignupModal onClose={() => setIsSignupOpen(false)} switchToLogin={() => { setIsSignupOpen(false); setIsLoginOpen(true); }} />}
    </header>
  );
};

export default Header;
