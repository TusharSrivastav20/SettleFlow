import React from "react";

const plans = [
  {
    name: "Starter",
    price: "₹24999",
    desc: "Perfect for small businesses",
    features: ["Auto reconciliation", "Daily MIS reports", "Secure storage (5GB)", "Email support"],
  },
  {
    name: "Growth",
    price: "₹64999",
    desc: "For growing companies",
    features: ["All Starter features", "Priority support", "ERP & API integrations", "Extended storage"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For large organizations",
    features: ["Dedicated onboarding", "Custom rules & workflows", "Unlimited storage", "Advanced automation"],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 min-h-screen bg-gray-100">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">Pricing Plans</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Choose the perfect plan for your business needs.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((p, idx) => (
          <div key={idx} className="pricing-card bg-white p-8 rounded-3xl border border-gray-200 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{p.name}</h3>
              <div className="text-4xl font-bold text-gray-800 mb-2">{p.price}</div>
              <p className="text-gray-600">{p.desc}</p>
            </div>
            <ul className="space-y-3 mb-6">
              {p.features.map((f, i) => (
                <li key={i} className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-2">✓</span> {f}
                </li>
              ))}
            </ul>
            <button className="w-full btn-secondary">Start Free Trial</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
