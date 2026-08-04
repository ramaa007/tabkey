const projects = [
  {
    number: "01",
    kind: "CONNECTED CUSTOMER EXPERIENCE",
    title: "Experience, Connected",
    description: "A unified customer ecosystem connecting enterprise experience, brand, CRM and analytics—designed to create trust at every interaction.",
    outcomes: ["Trusted brand presence", "Integrated customer journey", "Scalable foundation"],
    visual: "platform",
  },
  {
    number: "02",
    kind: "INTELLIGENT OPERATIONS",
    title: "Operations, Simplified",
    description: "An intelligent operating layer connecting people, data and workflows so teams spend less time on repetitive work and more time creating value.",
    outcomes: ["Connected systems", "Smarter workflows", "Operational visibility"],
    visual: "automation",
  },
  {
    number: "03",
    kind: "BRAND & GROWTH INTELLIGENCE",
    title: "Growth, Engineered",
    description: "A coherent brand and growth system aligning identity, search, performance marketing and analytics around sustainable business momentum.",
    outcomes: ["Clear positioning", "Unified growth strategy", "Continuous insight"],
    visual: "identity",
  },
];

function PlatformVisual() {
  return (
    <div className="work-visual platform-visual has-concept" aria-hidden="true">
      <img className="concept-image" src="/images/work-experience.jpg" alt="" loading="lazy" decoding="async" />
      <div className="concept-image-wash" />
      <span className="concept-badge">CONCEPTUAL SYSTEM MODEL / 01</span>
      <div className="platform-shadow" />
      <div className="platform-browser">
        <div className="platform-top"><i/><i/><i/><span>digital.experience</span><b>↗</b></div>
        <div className="platform-nav"><b>TABKEY</b><span>01&nbsp;&nbsp; WORK</span><span>02&nbsp;&nbsp; SYSTEMS</span></div>
        <div className="platform-content">
          <small>THE NEXT ADVANTAGE</small>
          <strong>Move<br/><em>forward.</em></strong>
          <div className="platform-disc"><i/></div>
          <div className="platform-tag">INTELLIGENT BY DESIGN</div>
        </div>
      </div>
      <span className="work-coordinate work-coordinate--one">X / 18.297</span>
      <span className="work-coordinate work-coordinate--two">FRAME / ASSEMBLED</span>
    </div>
  );
}

function AutomationVisual() {
  const nodes = [
    {x:12,y:52,label:"INPUT"},{x:32,y:25,label:"QUALIFY"},{x:32,y:76,label:"ENRICH"},
    {x:55,y:50,label:"AI CORE"},{x:78,y:24,label:"CRM"},{x:89,y:51,label:"ACTION"},{x:77,y:78,label:"INSIGHT"},
  ];
  return (
    <div className="work-visual work-automation has-concept" aria-hidden="true">
      <img className="concept-image" src="/images/work-automation.jpg" alt="" loading="lazy" decoding="async" />
      <div className="concept-image-wash concept-image-wash--violet" />
      <span className="concept-badge">CONCEPTUAL SYSTEM MODEL / 02</span>
      <svg viewBox="0 0 1000 620" preserveAspectRatio="none">
        <path d="M120 322 C220 322 213 155 320 155 S458 310 550 310 674 148 780 148" />
        <path d="M120 322 C220 322 215 471 320 471 S446 310 550 310 673 484 770 484 843 316 890 316" />
        <path d="M320 155 C424 155 439 310 550 310" />
      </svg>
      {nodes.map((node,index)=><div className={`project-node ${index===3 ? "project-node--core":""}`} style={{left:`${node.x}%`,top:`${node.y}%`}} key={node.label}><i/><span>{node.label}</span></div>)}
      <div className="project-pulse project-pulse--one"/><div className="project-pulse project-pulse--two"/>
      <div className="workflow-readout"><span>WORKFLOW STATUS</span><b><i/> OPERATING</b></div>
    </div>
  );
}

function IdentityVisual() {
  return (
    <div className="work-visual identity-visual has-concept" aria-hidden="true">
      <img className="concept-image" src="/images/work-growth.jpg" alt="" loading="lazy" decoding="async" />
      <div className="concept-image-wash concept-image-wash--warm" />
      <span className="concept-badge">CONCEPTUAL SYSTEM MODEL / 03</span>
      <div className="identity-grid" />
      <div className="identity-word"><small>DIGITAL IDENTITY / 03</small><strong>TK<span>•</span></strong></div>
      <div className="identity-type"><span>Aa</span><div><b>Clarity</b><b>Confidence</b><b>Control</b></div></div>
      <div className="identity-spectrum"><i/><i/><i/><i/><i/></div>
      <div className="identity-annotation">RATIO&nbsp;&nbsp; 1 : 1.618</div>
    </div>
  );
}

const visuals = [<PlatformVisual key="platform"/>, <AutomationVisual key="automation"/>, <IdentityVisual key="identity"/>];

export default function FeaturedWork() {
  return (
    <>
      <div className="silence-beat section-dark" data-nav-tone="dark">
        <p>We don&apos;t build isolated digital products.<br/>We engineer complete digital ecosystems.</p>
        <span>STRATEGY / TECHNOLOGY / GROWTH</span>
      </div>
      <section id="work" className="featured-work section-dark" data-nav-tone="dark" aria-labelledby="work-title">
        <header className="work-intro page-shell">
          <p className="eyebrow reveal-copy"><span>06</span> TRANSFORMATION SYSTEMS</p>
          <h2 id="work-title" className="display-title reveal-title">Digital ecosystems designed<br/>around how your business <em>grows.</em></h2>
          <p className="body-copy reveal-copy">Not disconnected deliverables. Each system connects customer experience, operations and growth around a clear business objective.</p>
          <p className="concept-disclaimer reveal-copy">Conceptual capability demonstrations—not presented as client case studies.</p>
        </header>
        <div className="project-list">
          {projects.map((project,index)=>(
            <article className="project-story" key={project.title}>
              <div className="project-sticky page-shell">
                <div className="project-copy">
                  <div className="project-meta"><span>{project.number}</span><i/>{project.kind}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul>{project.outcomes.map(outcome=><li key={outcome}>{outcome}</li>)}</ul>
                </div>
                {visuals[index]}
                <span className="project-index">0{index + 1} / 03</span>
              </div>
            </article>
          ))}
        </div>
        <div id="work-inquiry" className="work-outro page-shell">
          <p>Ready to build your next competitive advantage?</p>
          <a className="button button--primary" href="#contact">Let&apos;s build it <span>↗</span></a>
        </div>
      </section>
    </>
  );
}
