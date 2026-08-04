"use client";

const links = [
  ["Services", "#services"],
  ["Solutions", "#ai"],
  ["Work", "#work"],
  ["Insights", "#impact"],
  ["Company", "#why"],
  ["Contact", "#contact"],
];

export default function FloatingNavigation() {
  return (
    <nav className="site-nav" data-tone="dark" aria-label="Primary navigation">
      <div className="nav-links">
        {links.map(([label, href]) => (
          <a key={label} href={href}>
            {label}
          </a>
        ))}
      </div>
      <a className="nav-cta" href="#contact">
        Start Your Project <span aria-hidden="true">↗</span>
      </a>
    </nav>
  );
}
