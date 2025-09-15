import React from "react";

const features = [
  { icon: "🤖", title: "Automated Reconciliation", desc: "Match transactions in seconds across banks, payment gateways, and invoices - reducing manual work by 90%." },
  { icon: "⚡", title: "Real-time MIS Dashboard", desc: "Track revenue, daily P&L, and unmatched transactions live with insights." },
  { icon: "📊", title: "Custom ERP & API Integrations", desc: "Connect SettleFlow seamlessly with ERP, CRM, or accounting tools. We also build custom APIs to eliminate repetitive, lengthy manual tasks." },
  { icon: "🔒", title: "Secure Storage", desc: "All data is encrypted and stored securely with scalable storage built for financial records." },
  { icon: "🔗", title: "Audit-ready Exports", desc: "Generate one-click reports for reviews, audits, and investor updates." },
  { icon: "🎯", title: "Exception Handling", desc: "Flexible rule engine and alerts for unmatched items, missing references, or duplicates." },
];

const Features = () => {
  return (
    <section id="features" className="py-20 min-h-screen bg-gray-100">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">Key Features</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the advanced capabilities that make SettleFlow the industry leader.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f, idx) => (
          <div key={idx} className="feature-card bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl mb-6 flex items-center justify-center">
              <span className="text-2xl">{f.icon}</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
