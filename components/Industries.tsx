const industries = [
  ["Professional Services", "Trusted digital experiences, lead systems and connected operations."],
  ["Healthcare", "Clear patient journeys, secure workflows and intelligent administration."],
  ["Finance & Lending", "High-trust platforms, CRM integration and performance intelligence."],
  ["Real Estate & Construction", "Property experiences, lead automation and scalable project systems."],
  ["Retail & Hospitality", "Connected commerce, customer journeys and measurable digital growth."],
  ["Education & Technology", "Learning platforms, digital products and future-ready infrastructure."],
  ["Manufacturing & Trades", "Workflow automation, customer portals and operational visibility."],
  ["Startups & SMEs", "Focused strategy and scalable systems designed to grow with the business."],
];

export default function Industries() {
  return (
    <section id="industries" className="industries section-dark" data-nav-tone="dark" aria-labelledby="industries-title">
      <figure className="industry-panorama" aria-hidden="true">
        <img src="/images/industries-panorama.jpg" alt="" loading="lazy" decoding="async" />
        <span>MODERN INDUSTRIES / BRISBANE</span>
      </figure>
      <div className="page-shell industries-head">
        <p className="eyebrow reveal-copy"><span>08</span> INDUSTRY INTELLIGENCE</p>
        <h2 id="industries-title" className="display-title reveal-title">Built for the realities<br />of <em>modern business.</em></h2>
        <p className="body-copy reveal-copy">Different industries face different pressures. We begin by understanding your operating environment before recommending technology.</p>
      </div>
      <div className="page-shell industry-list">
        {industries.map(([name, copy], index) => (
          <article className="industry-row" tabIndex={0} key={name}>
            <span>{String(index + 1).padStart(2, "0")}</span><h3>{name}</h3><p>{copy}</p><i aria-hidden="true">↗</i>
          </article>
        ))}
      </div>
    </section>
  );
}
