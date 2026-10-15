import React, { useEffect, useState } from 'react';

const ICONS = ['🐾', '🧶', '🐟', '✨', '🐾', '⭐', '🐾'];

export default function PawRain({ active }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (!active) {
      setParticles([]);
      return;
    }

    const items = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 4 + Math.random() * 5,
      delay: Math.random() * 4,
      rotation: (Math.random() - 0.5) * 60,
      size: 16 + Math.random() * 14,
      icon: ICONS[Math.floor(Math.random() * ICONS.length)],
      opacity: 0.6 + Math.random() * 0.4,
    }));

    setParticles(items);
  }, [active]);

  if (!active || particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-40 select-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.left}%`,
            top: '-30px',
            fontSize: `${p.size}px`,
            opacity: p.opacity,
            transform: `rotate(${p.rotation}deg)`,
            animation: `fallPaw ${p.animationDuration}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        >
          {p.icon}
        </div>
      ))}
      <style>{`
        @keyframes fallPaw {
          0% {
            transform: translateY(-30px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.85;
          }
          90% {
            opacity: 0.85;
          }
          100% {
            transform: translateY(105vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
