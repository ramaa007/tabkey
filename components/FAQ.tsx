const questions = [
  ["What services do you provide?", "We provide integrated strategy, branding, enterprise websites, AI and workflow automation, custom software, mobile applications, CRM and API integration, cloud solutions, SEO, performance marketing and analytics."],
  ["What industries do you work with?", "We work across professional services, healthcare, finance and lending, real estate, construction, retail, hospitality, education, technology, manufacturing, trades, startups and small to medium businesses."],
  ["Can you work with our existing systems?", "Yes. We begin by reviewing your current technology and workflows, then identify what should be retained, improved, integrated or replaced."],
  ["Do you provide ongoing support?", "Yes. TabKey Digital is designed to operate as a long-term partner, supporting optimisation, maintenance and the continued evolution of your digital ecosystem."],
  ["How long does a project usually take?", "Timing depends on complexity, integrations and scope. After discovery, we provide a clear roadmap with delivery stages, responsibilities and expected timeframes."],
  ["Can AI improve our business?", "Often, yes—but only where it solves a genuine problem. We identify practical AI opportunities that can improve efficiency, customer experience or decision-making."],
  ["Do you offer strategy before development?", "Yes. Strategy comes first. We define business objectives and the right transformation roadmap before recommending platforms or beginning development."],
  ["Can you manage everything in one place?", "Yes. Our integrated model brings strategy, design, development, automation, growth and ongoing support together through one accountable digital partner."],
];

export default function FAQ() {
  return (
    <section id="faq" className="faq-section section-dark" data-nav-tone="dark" aria-labelledby="faq-title">
      <div className="page-shell faq-layout">
        <div className="faq-head">
          <p className="eyebrow reveal-copy"><span>12</span> BEFORE WE BUILD</p>
          <h2 id="faq-title" className="display-title reveal-title">Questions?<br /><em>Let’s make it clear.</em></h2>
          <p className="body-copy reveal-copy">A strong partnership starts with clarity. Here are the questions businesses most often ask before beginning.</p>
        </div>
        <div className="faq-list">
          {questions.map(([question,answer],index)=>(
            <details className="faq-item" key={question} open={index===0}>
              <summary><span>{String(index+1).padStart(2,"0")}</span><b>{question}</b><i aria-hidden="true" /></summary>
              <div><p>{answer}</p></div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
