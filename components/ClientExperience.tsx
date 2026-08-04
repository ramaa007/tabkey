export default function ClientExperience() {
  return (
    <section id="experience" className="client-experience section-dark" data-nav-tone="dark" aria-labelledby="experience-title">
      <figure className="experience-photo">
        <img src="/images/client-partnership.jpg" alt="Conceptual editorial scene of business and technology leaders collaborating in a Brisbane office" loading="lazy" decoding="async" />
        <figcaption>CONCEPTUAL EDITORIAL / PARTNERSHIP IN PRACTICE</figcaption>
      </figure>
      <div className="experience-shade" aria-hidden="true" />
      <div className="page-shell experience-copy">
        <p className="eyebrow reveal-copy"><span>11</span> CLIENT EXPERIENCE</p>
        <h2 id="experience-title" className="reveal-title">Partnership,<br /><em>not handover.</em></h2>
        <p className="experience-statement reveal-copy">Our goal is not simply to complete projects, but to create digital systems that continue delivering value as your business grows.</p>
        <div className="experience-principles reveal-copy">
          <span>Clear communication</span><span>Thoughtful strategy</span><span>Long-term support</span>
        </div>
        <p className="body-copy reveal-copy">We take the time to understand each business before recommending solutions. Every recommendation is made with your long-term objectives in mind.</p>
      </div>
    </section>
  );
}
