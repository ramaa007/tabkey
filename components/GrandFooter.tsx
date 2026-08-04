export default function GrandFooter() {
  return (
    <footer className="grand-footer" aria-label="Footer">
      <div className="footer-watermark" aria-hidden="true">TABKEY</div>
      <div className="footer-glow" aria-hidden="true" />
      <div className="footer-content page-shell">
        <div className="footer-topline"><span>14 / ENGINEERING DIGITAL ADVANTAGE</span><span>CREATING WHAT&apos;S NEXT</span></div>
        <div className="footer-main">
          <div className="footer-brand">
            <img src="/tabkey-logo.png" alt="TabKey Digital" width="236" height="56"/>
            <p>Brisbane-based AI-first Digital Transformation Consultancy helping ambitious businesses build intelligent digital ecosystems through strategy, technology, automation and innovation.</p>
            <small className="footer-studio">CREATING WHAT&apos;S NEXT · THE CREATIVE STUDIO OF SQUARE CONNECT</small>
          </div>
          <div className="footer-column">
            <p>Explore</p>
            <a href="#services">Services</a><a href="#ai">AI Solutions</a><a href="#industries">Industries</a><a href="#work">Systems</a>
          </div>
          <div className="footer-column footer-connect">
            <p>Connect</p>
            <a href="mailto:hello@tabkey.digital">hello@tabkey.digital <span>↗</span></a>
            <a href="#contact">Start a project <span>↗</span></a>
            <a href="#home">LinkedIn <span>↗</span></a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} TabKey Digital</span>
          <span>A Creative Studio of Square Connect · Brisbane, Australia</span>
          <div><a href="#home">Privacy</a><a href="#home">Terms</a><a href="#home">Back to top ↑</a></div>
        </div>
      </div>
    </footer>
  );
}
