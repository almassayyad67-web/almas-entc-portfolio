import confetti from 'canvas-confetti';

const PAW_COLORS = [
  '#FF8DA1', // Soft Paw Pink
  '#FF6B8B', // Rosy Nose
  '#FB923C', // Ginger Fur
  '#FDBA74', // Cream Fur
  '#4ADE80', // Cat Eye Emerald
  '#A855F7', // Yarn Purple
  '#38BDF8', // Collar Bell Blue
  '#FFFFFF', // White Whiskers
];

export const burstPaws = (x = 0.5, y = 0.5) => {
  confetti({
    particleCount: 45,
    spread: 65,
    origin: { x, y },
    colors: PAW_COLORS,
    ticks: 180,
    gravity: 0.85,
    scalar: 1.15,
    shapes: ['circle', 'square'],
    disableForReducedMotion: true,
  });
};

export const grandCatCelebration = () => {
  const duration = 2.5 * 1000;
  const animationEnd = Date.now() + duration;

  const frame = () => {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 60,
      origin: { x: 0, y: 0.7 },
      colors: PAW_COLORS,
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 60,
      origin: { x: 1, y: 0.7 },
      colors: PAW_COLORS,
    });

    if (Date.now() < animationEnd) {
      requestAnimationFrame(frame);
    }
  };
  frame();
};

// Aliases for compatibility
export const burstSprinkles = burstPaws;
export const grandSprinkleExplosion = grandCatCelebration;
