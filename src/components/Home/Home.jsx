import React from "react";

const Home = () => {
  return (
    <section id="home" className="flex flex-col items-center justify-center text-center py-20 min-h-screen hero-bg bg-gray-100">
      <div className="floating-card bg-white p-12 rounded-3xl mb-8 max-w-5xl shadow-xl border border-gray-100">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800 leading-tight mb-6">
          Smart <span className="gradient-text">Reconciliation</span> & <br />
          <span className="text-gray-700">Finance Automation</span><br />
          <span className="text-3xl md:text-4xl font-bold text-blue-600 mt-2">for Modern Teams</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mb-8">
          Eliminate manual mismatches, automate your daily MIS, and gain real-time financial clarity with SettleFlow.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 bg-green-50 p-4 rounded-2xl border border-green-100">
                <div className="text-green-600 text-xl font-bold">✅</div>
                <p className="text-gray-700 font-medium"><strong>99% Match Accuracy</strong> with intelligent algorithms</p>
            </div>
            <div className="flex items-center space-x-3 bg-blue-50 p-4 rounded-2xl border border-blue-100">
                <div className="text-blue-600 text-xl font-bold">✅</div>
                <p className="text-gray-700 font-medium"><strong>Custom ERP & API integrations</strong> for your workflows</p>
            </div>
            <div className="flex items-center space-x-3 bg-purple-50 p-4 rounded-2xl border border-purple-100">
                <div className="text-purple-600 text-xl font-bold">✅</div>
                <p className="text-gray-700 font-medium"><strong>Secure storage</strong> for financial data with instant access</p>
            </div>
            <div className="flex items-center space-x-3 bg-orange-50 p-4 rounded-2xl border border-orange-100">
                <div className="text-orange-600 text-xl font-bold">✅</div>
                <p className="text-gray-700 font-medium"><strong>Save 2–3 hours daily</strong> with full automation</p>
            </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <button className="btn-primary text-lg px-8 py-4">Start Free Trial</button>
          <button className="btn-secondary text-lg px-8 py-4">Book a Demo</button>
        </div>
        <p className="text-gray-500 font-medium text-sm md:text-base">
          Trusted by finance & operations teams across <strong className="text-gray-700">EdTech, e-commerce, and SaaS</strong>.
        </p>
      </div>

    </section>
  );
};

export default Home;
