const outcomes = [
  ["01", "Stronger Brands", "Experiences designed to create clarity, confidence and trust."],
  ["02", "Smarter Operations", "Automation and integration that reduce friction and repetitive work."],
  ["03", "Better Decisions", "Connected data and analytics that turn activity into useful intelligence."],
  ["04", "Scalable Growth", "Digital foundations built to evolve as your business and market change."],
];

export default function DigitalImpact() {
  return (
    <section id="impact" className="digital-impact section-dark" data-nav-tone="dark" aria-labelledby="impact-title">
      <div className="impact-transition"><p>Every digital investment should create meaningful business value.</p></div>
      <div className="page-shell impact-content">
        <p className="eyebrow reveal-copy"><span>10</span> DIGITAL IMPACT</p>
        <h2 id="impact-title" className="display-title reveal-title">Built around outcomes.<br /><em>Not just outputs.</em></h2>
        <p className="body-copy reveal-copy">Our work is driven by strategy, supported by technology and refined through continuous optimisation.</p>
        <div className="outcome-list">
          {outcomes.map(([number,title,copy]) => (
            <article className="outcome-row reveal-copy" key={title}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
      </div>
    </section>
  );
}
