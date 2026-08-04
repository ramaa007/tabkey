export default function FinalCTA() {
  return (
    <>
      <section id="contact" className="final-cta section-dark" data-nav-tone="dark" aria-labelledby="cta-title">
        <div className="portal" aria-hidden="true">
          <div className="portal-ring portal-ring--one"/><div className="portal-ring portal-ring--two"/>
          <div className="portal-ring portal-ring--three"/><div className="portal-core"/>
          {Array.from({length:18},(_,index)=><i className="portal-particle" style={{transform:`rotate(${index*20}deg) translateX(${150 + (index%5)*47}px)`,animationDelay:`-${index*.23}s`}} key={index}/>)}
        </div>
        <div className="final-copy page-shell">
          <p className="eyebrow"><span>13</span> THE NEXT MOVE</p>
          <h2 id="cta-title">Ready to modernise<br/><em>your business?</em></h2>
          <p>Whether you&apos;re starting from scratch or transforming existing systems, let&apos;s build your next competitive advantage.</p>
          <div className="final-actions">
            <a className="button button--primary button--large" href="mailto:hello@tabkey.digital">Start Your Project <span>↗</span></a>
            <a className="button button--text" href="mailto:hello@tabkey.digital">Talk to our team <span>→</span></a>
          </div>
        </div>
        <span className="final-signal" aria-hidden="true"><i/> BRISBANE / AUSTRALIA&nbsp;&nbsp; 27.4698° S</span>
      </section>
      <div className="footer-curtain-spacer" aria-hidden="true" />
    </>
  );
}
