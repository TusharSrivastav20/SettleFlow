import React from "react";

const LoginModal = ({ onClose, switchToSignup }) => {
  return (
    <div className="modal show">
      <div className="modal-content relative">
        <span onClick={onClose} className="close-btn">&times;</span>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Welcome Back</h2>
        <form>
          <input type="email" placeholder="Email" className="form-input" />
          <input type="password" placeholder="Password" className="form-input" />
          <button type="submit" className="btn-primary w-full mb-4">Login</button>
        </form>
        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <span className="switch-form" onClick={switchToSignup}>Sign up here</span>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
