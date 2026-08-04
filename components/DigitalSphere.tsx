type SphereProps = {
  variant?: "hero" | "intelligence";
  className?: string;
};

const nodes = Array.from({ length: 42 }, (_, index) => {
  const angle = index * 2.399963;
  const radius = 10 + Math.sqrt(index / 42) * 38;
  return {
    left: (50 + Math.cos(angle) * radius).toFixed(3),
    top: (50 + Math.sin(angle) * radius * 0.94).toFixed(3),
    delay: (-((index * 0.37) % 4)).toFixed(3),
    scale: (0.55 + ((index * 17) % 10) / 12).toFixed(3),
  };
});

export default function DigitalSphere({ variant = "hero", className = "" }: SphereProps) {
  return (
    <div className={`digital-sphere digital-sphere--${variant} ${className}`} aria-hidden="true">
      <div className="sphere-aura" />
      <div className="sphere-shell">
        <div className="sphere-grid sphere-grid--one" />
        <div className="sphere-grid sphere-grid--two" />
        <div className="sphere-grid sphere-grid--three" />
        <div className="sphere-equator sphere-equator--one" />
        <div className="sphere-equator sphere-equator--two" />
        <div className="sphere-meridian sphere-meridian--one" />
        <div className="sphere-meridian sphere-meridian--two" />
        <div className="sphere-core" />
        {nodes.map((node, index) => (
          <i
            className="sphere-node"
            key={index}
            style={{
              left: `${node.left}%`,
              top: `${node.top}%`,
              animationDelay: `${node.delay}s`,
              transform: `translate(-50%, -50%) scale(${node.scale})`,
            }}
          />
        ))}
      </div>
      <div className="sphere-orbit sphere-orbit--outer"><i /></div>
      <div className="sphere-orbit sphere-orbit--inner"><i /></div>
      <span className="sphere-coordinate sphere-coordinate--a">17.421° S</span>
      <span className="sphere-coordinate sphere-coordinate--b">SYSTEM / ACTIVE</span>
    </div>
  );
}
