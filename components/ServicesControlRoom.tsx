const services = [
  {
    index: "01",
    name: "Digital Experience Platforms",
    short: "Enterprise experience",
    description: "Enterprise websites, e-commerce, customer portals and mobile experiences designed to create trust and turn attention into action.",
  },
  {
    index: "02",
    name: "AI & Business Automation",
    short: "Intelligent operations",
    description: "AI solutions, CRM integration and connected workflows that remove repetitive work and improve operational efficiency.",
  },
  {
    index: "03",
    name: "Digital Growth & Intelligence",
    short: "Measurable growth",
    description: "SEO, performance marketing, lead generation, content strategy and analytics aligned around accountable business growth.",
  },
  {
    index: "04",
    name: "Brand Strategy & Identity",
    short: "Strategic clarity",
    description: "Positioning, identity and design systems that communicate trust, strengthen recognition and create lasting brand value.",
  },
  {
    index: "05",
    name: "Custom Software & Cloud",
    short: "Scalable technology",
    description: "Purpose-built software, mobile applications, cloud infrastructure and API integrations engineered around the way your business operates.",
  },
];

function WebsiteScene() {
  return (
    <div className="control-scene website-scene is-active" data-scene="0" aria-hidden="true">
      <div className="browser-ghost browser-ghost--back" />
      <div className="browser-window">
        <div className="browser-bar"><i /><i /><i /><span>tabkey.system / experience</span></div>
        <div className="browser-content">
          <div className="browser-nav"><b>TK</b><span /><span /><span /></div>
          <div className="browser-hero-copy"><small>DIGITAL ADVANTAGE</small><strong>Future<br />engineered.</strong><i /></div>
          <div className="browser-orb"><span /></div>
          <div className="browser-stat"><b>01</b><span>Scalable<br />architecture</span></div>
        </div>
      </div>
      <span className="scene-note scene-note--left">PERFORMANCE / 98</span>
      <span className="scene-note scene-note--right">RESPONSIVE GRID</span>
    </div>
  );
}

function AutomationScene() {
  return (
    <div className="control-scene automation-scene" data-scene="1" aria-hidden="true">
      <svg viewBox="0 0 800 590" role="presentation">
        <defs>
          <linearGradient id="flow" x1="0" x2="1"><stop stopColor="#17E7EE"/><stop offset="1" stopColor="#22BEE3" stopOpacity=".16"/></linearGradient>
          <filter id="cyanGlow"><feGaussianBlur stdDeviation="5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <path className="flow-path" d="M86 300 C190 300 165 130 294 130 S391 300 486 300 592 156 718 156"/>
        <path className="flow-path flow-path--two" d="M86 300 C194 300 196 476 326 476 S430 300 486 300 594 434 718 434"/>
        <path className="flow-path flow-path--three" d="M294 130 C365 130 407 182 407 300 S411 476 326 476"/>
        {[[86,300],[294,130],[326,476],[407,300],[486,300],[718,156],[718,434]].map(([x,y], index) => (
          <g className="flow-node" transform={`translate(${x} ${y})`} key={index}>
            <circle r={index === 3 ? 31 : 23}/><circle r="5"/><text y={index === 3 ? 58 : 50} textAnchor="middle">{["INPUT","AI ROUTE","CRM","CORE","VERIFY","ACTION","INSIGHT"][index]}</text>
          </g>
        ))}
        <circle className="data-pulse" r="5"><animateMotion dur="4s" repeatCount="indefinite" path="M86 300 C190 300 165 130 294 130 S391 300 486 300 592 156 718 156"/></circle>
        <circle className="data-pulse data-pulse--delay" r="4"><animateMotion dur="4.8s" begin="-2s" repeatCount="indefinite" path="M86 300 C194 300 196 476 326 476 S430 300 486 300 594 434 718 434"/></circle>
      </svg>
      <div className="automation-status"><i /> 24 WORKFLOWS OPERATING</div>
    </div>
  );
}

function GrowthScene() {
  return (
    <div className="control-scene growth-scene" data-scene="2" aria-hidden="true">
      <div className="growth-axis"><i/><i/><i/><i/><i/></div>
      <svg viewBox="0 0 760 390" role="presentation">
        <defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#17E7EE" stopOpacity=".32"/><stop offset="1" stopColor="#17E7EE" stopOpacity="0"/></linearGradient></defs>
        <path className="chart-area" d="M15 349 C90 342 102 310 166 316 S229 261 296 276 372 189 430 204 523 147 566 156 649 83 745 47 L745 378 L15 378Z"/>
        <path className="chart-line" d="M15 349 C90 342 102 310 166 316 S229 261 296 276 372 189 430 204 523 147 566 156 649 83 745 47"/>
      </svg>
      <div className="growth-metric growth-metric--one"><span>ENGAGEMENT</span><strong>RISING</strong><i>↗</i></div>
      <div className="growth-metric growth-metric--two"><span>SIGNAL QUALITY</span><strong>HIGH</strong><i>92</i></div>
      <div className="growth-ticker">DATA / CREATIVE / AUTOMATION / OPTIMISE</div>
    </div>
  );
}

function BrandScene() {
  return (
    <div className="control-scene brand-scene" data-scene="3" aria-hidden="true">
      <div className="brand-crosshair brand-crosshair--one" />
      <div className="brand-crosshair brand-crosshair--two" />
      <div className="brand-mark"><span>T</span><span>K</span></div>
      <div className="brand-baseline" />
      <div className="brand-meta brand-meta--one"><small>TYPE / PRIMARY</small><b>Space Grotesk</b></div>
      <div className="brand-meta brand-meta--two"><small>SYSTEM / SIGNAL</small><div><i/><i/><i/><i/></div></div>
      <div className="brand-ratio">1.618</div>
    </div>
  );
}

function SoftwareScene() {
  return (
    <div className="control-scene software-scene" data-scene="4" aria-hidden="true">
      <div className="software-sidebar"><b>TK</b>{[0,1,2,3,4].map((i)=><i key={i}/>)}</div>
      <div className="software-main">
        <div className="software-head"><span>OPERATIONS / COMMAND</span><div><i/> LIVE SYSTEM</div></div>
        <div className="software-number"><small>AUTOMATION EFFICIENCY</small><b>94.8<sup>%</sup></b></div>
        <div className="software-rings"><i/><i/><i/><span>AI</span></div>
        <div className="software-bars">{[38,72,51,88,63,96,79,90,68,100].map((height,index)=><i style={{height:`${height}%`}} key={index}/>)}</div>
        <div className="software-feed"><span>DATA INGESTION</span><span>DECISION LAYER</span><span>ACTION QUEUE</span></div>
      </div>
      <div className="code-float"><span>if</span> signal.isReady:<br />&nbsp;&nbsp;system.<b>scale</b>()</div>
    </div>
  );
}

export default function ServicesControlRoom() {
  return (
    <section id="services" className="services-control" data-nav-tone="dark" aria-labelledby="services-title">
      <div className="control-sticky" data-active-scene="0">
        <div className="control-grid" aria-hidden="true" />
        <header className="control-header page-shell">
          <p className="eyebrow"><span>04</span> INTEGRATED CAPABILITIES</p>
          <div className="control-counter"><b className="control-current">01</b><i />05</div>
        </header>
        <div className="control-layout page-shell">
          <div className="control-copy">
            <h2 id="services-title" className="control-overline">What we engineer.</h2>
            <div className="service-copy-stack">
              {services.map((service, index) => (
                <article className={`service-copy ${index === 0 ? "is-active" : ""}`} data-copy={index} key={service.name}>
                  <p>{service.short}</p>
                  <h3>{service.name}</h3>
                  <div><span>{service.index}</span><p>{service.description}</p></div>
                </article>
              ))}
            </div>
          </div>
          <div className="control-visual" data-cursor="active">
            <WebsiteScene />
            <AutomationScene />
            <GrowthScene />
            <BrandScene />
            <SoftwareScene />
          </div>
        </div>
        <div className="control-footer page-shell">
          <div className="control-progress"><i /></div>
          <p>Every capability solves a business problem—not just a digital deliverable.</p>
        </div>
      </div>
    </section>
  );
}
