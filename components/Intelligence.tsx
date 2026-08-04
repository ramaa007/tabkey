import DigitalSphere from "./DigitalSphere";

const technologies = [
  "BUSINESS STRATEGY",
  "AI SOLUTIONS",
  "ENTERPRISE PLATFORMS",
  "CRM SYSTEMS",
  "CLOUD INFRASTRUCTURE",
  "ANALYTICS",
  "API INTEGRATIONS",
  "DIGITAL GROWTH",
];

export default function Intelligence() {
  return (
    <section id="intelligence" className="intelligence section-dark" data-nav-tone="dark" aria-labelledby="intelligence-title">
      <div className="intelligence-glow" aria-hidden="true" />
      <div className="page-shell intelligence-layout">
        <div className="intelligence-copy">
          <p className="eyebrow reveal-copy"><span>03</span> WHO WE ARE</p>
          <h2 id="intelligence-title" className="display-title reveal-title">
            Technology.<br />Strategy.<br /><em>Execution.</em>
          </h2>
          <p className="intelligence-lead reveal-copy">Unified into one digital partner.</p>
          <p className="body-copy reveal-copy">
            TabKey Digital is a premium AI-first Digital Transformation Consultancy. We connect strategy, enterprise technology, automation, branding and digital growth into one integrated solution—built to help businesses operate smarter, grow faster and remain competitive.
          </p>
          <a className="text-link reveal-copy" href="#services">Discover our capabilities <span>↘</span></a>
        </div>
        <div className="intelligence-visual" data-cursor="active">
          <DigitalSphere variant="intelligence" />
          <div className="system-caption system-caption--top"><span /> INTELLIGENCE LAYER</div>
          <div className="system-caption system-caption--bottom">CONNECTED ECOSYSTEM <b>ACTIVE</b></div>
        </div>
      </div>
      <div className="technology-stream" aria-label="Core technologies">
        <div>
          {technologies.map((technology, index) => (
            <span key={technology}>{technology}{index < technologies.length - 1 && <i aria-hidden="true">✦</i>}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
