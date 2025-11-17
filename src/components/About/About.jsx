import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 min-h-screen bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">About SettleFlow</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            At SettleFlow, finance teams shouldn't waste hours chasing mismatches or juggling spreadsheets.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h3>
            <p className=" mb-2">
              Our mission is simple: to give businesses real-time financial clarity by automating reconciliation, reporting, and daily MIS.
            </p>
            <p className=" mb-2">
              We are a team of finance professionals and technology experts who’ve lived the challenges of manual reconciliation first-hand. That’s why we built SettleFlow — a platform that eliminates complexity, reduces errors, and empowers teams to focus on decisions, not data entry
            </p>
            <p>
                With secure integrations, intelligent matching algorithms, and audit-ready reporting, SettleFlow has already helped growing businesses save hundreds of hours every month while improving accuracy and compliance.
            </p>
            <div className="text-center mt-5 p-4 bg-gray-50 rounded-2xl">
              <p className="text-gray-700 font-medium">📍 Noida, Uttar Pradesh, India</p>
              <p className="text-gray-600 mt-2">Serving forward-thinking companies across industries</p>
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-lg">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Values</h3>
              <ul className="space-y-4">
                <li>🚀 Efficiency – Automating what slows finance teams down.</li>
                <li>🔒 Trust – Secure, compliant, and reliable.</li>
                <li>💡 Clarity – Real-time insights for better decisions.</li>
                <li>🤝 Partnership – Growing together with our customers.</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl text-center border border-gray-200 shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                <div className="text-gray-600 font-medium">Hours Saved Weekly</div>
              </div>
              <div className="bg-white p-6 rounded-2xl text-center border border-gray-200 shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">99%+</div>
                <div className="text-gray-600 font-medium">Accuracy Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
