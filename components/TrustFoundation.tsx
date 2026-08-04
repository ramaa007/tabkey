const capabilities = [
  "Brand Strategy & Identity",
  "Enterprise Websites",
  "AI Automation",
  "Custom Software",
  "CRM Integration",
  "SEO & Performance",
  "Analytics & BI",
  "Cloud & APIs",
];

export default function TrustFoundation() {
  return (
    <section id="trust" className="trust-foundation section-dark" data-nav-tone="dark" aria-labelledby="trust-title">
      <div className="trust-glow" aria-hidden="true" />
      <div className="page-shell trust-layout">
        <p className="eyebrow reveal-copy"><span>02</span> INTEGRATED DIGITAL PARTNER</p>
        <div className="trust-heading-row">
          <h2 id="trust-title" className="reveal-title">One partner.<br /><em>One connected ecosystem.</em></h2>
          <p className="body-copy reveal-copy">Businesses no longer need multiple agencies, freelancers and disconnected software providers. We bring strategy, technology, design and automation together into one intelligent digital foundation.</p>
        </div>
        <div className="capability-rail" aria-label="Integrated digital capabilities">
          {capabilities.map((capability, index) => (
            <span key={capability}><b>{String(index + 1).padStart(2, "0")}</b>{capability}</span>
          ))}
        </div>
        <div className="trust-promise reveal-copy">
          <span>OUR PROMISE</span>
          <p>Every solution is built with purpose—to strengthen your brand, improve efficiency and support long-term growth.</p>
        </div>
      </div>
    </section>
  );
}
