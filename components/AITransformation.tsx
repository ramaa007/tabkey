const pillars = [
  { number: "01", title: "AI Strategy", copy: "Identify practical opportunities where artificial intelligence can improve efficiency, customer experience and decision-making." },
  { number: "02", title: "Intelligent Automation", copy: "Connect systems, remove repetitive work and create dependable workflows that operate around the clock." },
  { number: "03", title: "AI-Powered Experiences", copy: "Build more relevant, responsive customer journeys through intelligent and adaptive digital experiences." },
];

export default function AITransformation() {
  return (
    <section id="ai" className="ai-transformation section-dark" data-nav-tone="dark" aria-labelledby="ai-title">
      <div className="ai-network" aria-hidden="true">
        <svg viewBox="0 0 1200 820">
          <g className="ai-lines">
            <path d="M82 410 C230 385 260 176 430 220 S585 410 674 410 843 196 1097 248" />
            <path d="M82 410 C240 438 272 654 447 590 S579 410 674 410 845 628 1110 570" />
            <path d="M430 220 C510 284 555 309 674 410 S840 504 1110 570" />
            <path d="M447 590 C530 528 575 482 674 410 S874 328 1097 248" />
          </g>
          {[[82,410],[430,220],[447,590],[674,410],[1097,248],[1110,570],[312,410],[884,410]].map(([x,y],index)=>(
            <g className={`ai-node ${index===3 ? "ai-node--core" : ""}`} transform={`translate(${x} ${y})`} key={index}><circle r={index===3?34:16}/><circle r={index===3?7:4}/></g>
          ))}
        </svg>
      </div>
      <div className="page-shell ai-content">
        <p className="eyebrow reveal-copy"><span>07</span> AI-FIRST TRANSFORMATION</p>
        <h2 id="ai-title" className="display-title reveal-title">Intelligence built into<br /><em>every solution.</em></h2>
        <p className="body-copy reveal-copy">We combine human creativity with intelligent technology to build faster, smarter and more scalable digital ecosystems.</p>
        <div className="ai-pillar-list">
          {pillars.map((pillar) => (
            <article className="ai-pillar reveal-copy" key={pillar.title}>
              <span>{pillar.number}</span><h3>{pillar.title}</h3><p>{pillar.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
