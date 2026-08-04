import DigitalSphere from "./DigitalSphere";

const titleLines = ["ENGINEERING", "DIGITAL ADVANTAGE."];

function SplitLine({ text }: { text: string }) {
  return (
    <span className="hero-line" aria-label={text}>
      {Array.from(text).map((character, index) => (
        <span className="hero-char-wrap" aria-hidden="true" key={`${character}-${index}`}>
          <span className="hero-char">{character === " " ? "\u00A0" : character}</span>
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section id="home" className="hero section-dark" data-nav-tone="dark" aria-labelledby="hero-title">
      <div className="hero-intro" aria-hidden="true">
        <p className="intro-phrase intro-phrase--one">The future won&apos;t wait.</p>
        <p className="intro-phrase intro-phrase--two">The businesses that lead tomorrow…</p>
        <p className="intro-phrase intro-phrase--three">…are being engineered today.</p>
        <p className="intro-brand">TabKey Digital.</p>
      </div>

      <div className="hero-orb-field">
        <DigitalSphere />
      </div>

      <div className="hero-content page-shell">
        <div className="hero-kicker"><span /> AI-FIRST DIGITAL TRANSFORMATION CONSULTANCY</div>
        <h1 id="hero-title">
          {titleLines.map((line) => <SplitLine text={line} key={line} />)}
        </h1>
        <div className="hero-lower">
          <p className="hero-support">
            Strategy, technology and automation—engineered into intelligent digital ecosystems that help ambitious businesses grow with confidence.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="button button--primary">Start Your Project <span>↗</span></a>
            <a href="#work" className="button button--secondary">Explore Our Work <span>↓</span></a>
          </div>
        </div>
      </div>

      <div className="hero-index" aria-hidden="true">TK / 001</div>
      <a href="#trust" className="scroll-cue" aria-label="Scroll to discover">
        <span>SCROLL TO DISCOVER</span><i />
      </a>
    </section>
  );
}
