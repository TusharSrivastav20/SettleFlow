import React, { useState } from "react";

const SignupModal = ({ onClose, switchToLogin }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!form.terms) {
      alert("Please agree to Terms & Privacy Policy!");
      return;
    }

    alert(`Signup successful for ${form.name} (${form.email})`);
    console.log("Signup data:", form);

    onClose(); // close modal after signup
  };

  return (
    <div className="modal show">
      <div className="modal-content relative">
        <span onClick={onClose} className="close-btn">&times;</span>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Create Account
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="form-input"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="form-input"
            required
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="form-input"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="form-input"
            required
          />

          <label className="flex items-center text-sm text-gray-600 mb-4">
            <input
              type="checkbox"
              name="terms"
              checked={form.terms}
              onChange={handleChange}
              className="mr-2"
              required
            />
            I agree to the{" "}
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Privacy Policy
            </a>
          </label>

          <button type="submit" className="btn-primary w-full mb-4">
            Create Account
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <span className="switch-form" onClick={switchToLogin}>
            Login here
          </span>
        </p>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <button className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors mb-2">
            Sign up with Google
          </button>
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
            Sign up with LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
