import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 min-h-screen bg-gray-100">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">Let's Simplify Finance</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Book a demo or request a custom quote – we'll respond within one business day.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="bg-white p-8 rounded-3xl border-2 border-blue-500 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
          <ul className="space-y-6">
            <li>📧 info.settleflow@gmail.com</li>
            <li>📞 +91-9625893070</li>
            <li>📍 Noida, Uttar Pradesh, India</li>
          </ul>
        </div>
        <form className="bg-white p-8 rounded-3xl border-2 shadow-lg border-blue-500 ">
          <input type="text" placeholder="First Name" className="form-input" />
          <input type="text" placeholder="Last Name" className="form-input" />
          <input type="email" placeholder="Email" className="form-input" />
          <input type="text" placeholder="Company" className="form-input" />
          <textarea placeholder="Message" className="form-input" rows="4"></textarea>
          <button type="submit" className="w-full btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
