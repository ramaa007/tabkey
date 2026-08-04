const steps = [
  ["Discover", "Understand your business, goals, challenges and existing systems."],
  ["Identify", "Find the opportunities with the greatest potential business value."],
  ["Strategise", "Create a focused roadmap around measurable outcomes."],
  ["Design", "Transform strategy into meaningful and intuitive experiences."],
  ["Build", "Engineer secure, scalable and connected digital systems."],
  ["Optimise", "Use insight, support and continuous improvement to drive long-term growth."],
];

export default function ProcessJourney() {
  return (
    <section id="process" className="process-journey section-dark" data-nav-tone="dark" aria-labelledby="process-title">
      <div className="page-shell process-head">
        <p className="eyebrow reveal-copy"><span>09</span> OUR APPROACH</p>
        <h2 id="process-title" className="display-title reveal-title">From business vision<br />to <em>digital reality.</em></h2>
        <p className="body-copy reveal-copy">Every successful transformation begins with understanding the business—not choosing the technology.</p>
      </div>
      <div className="page-shell process-track">
        <div className="process-line" aria-hidden="true"><i /></div>
        {steps.map(([title, copy], index) => (
          <article className="process-step reveal-copy" key={title}>
            <span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{copy}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}
