const comparisons = [
  ["Multiple disconnected suppliers", "One integrated digital partner"],
  ["Services delivered in isolation", "Business-first transformation strategy"],
  ["Short-term project thinking", "Scalable foundations built for growth"],
  ["Manual, repetitive workflows", "Intelligent automation and integration"],
  ["Launch and handover", "Continuous optimisation and support"],
];

const principles = [
  {
    number: "01",
    label: "MISSION",
    title: "Create measurable business value.",
    copy: "Help businesses transform through intelligent digital ecosystems that improve operational efficiency and deliver exceptional customer experiences.",
  },
  {
    number: "02",
    label: "VISION",
    title: "Shape Australia’s future economy.",
    copy: "Become Australia’s most trusted AI-first Digital Transformation Consultancy—recognised for innovative solutions that help businesses thrive.",
  },
  {
    number: "03",
    label: "PHILOSOPHY",
    title: "Technology should simplify business.",
    copy: "Good design creates trust. Automation removes repetitive work. Data improves decisions. Every digital investment should contribute to sustainable growth.",
  },
];

export default function WhyTabKey() {
  return (
    <section id="why" className="why-tabkey section-dark" data-nav-tone="dark" aria-labelledby="why-title">
      <div className="page-shell why-intro">
        <p className="eyebrow reveal-copy"><span>05</span> WHY TABKEY DIGITAL</p>
        <h2 id="why-title" className="display-title reveal-title">Built differently.<br /><em>Because business deserves better.</em></h2>
        <p className="body-copy reveal-copy">We don’t measure success by the number of websites we build. We measure it by the business outcomes we help create.</p>
      </div>
      <div className="page-shell comparison-system">
        <div className="comparison-head"><span>THE DISCONNECTED MODEL</span><span>THE TABKEY ECOSYSTEM</span></div>
        {comparisons.map(([traditional, tabkey], index) => (
          <div className="comparison-row" key={traditional}>
            <b>{String(index + 1).padStart(2, "0")}</b><p>{traditional}</p><i aria-hidden="true">→</i><p>{tabkey}</p>
          </div>
        ))}
      </div>
      <div className="page-shell principle-list">
        {principles.map((principle) => (
          <article className="principle-row reveal-copy" key={principle.label}>
            <div><span>{principle.number}</span><small>{principle.label}</small></div>
            <h3>{principle.title}</h3>
            <p>{principle.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
