import { useEffect, useState } from 'react';

const SCIENCE_QUOTES = [
  "The nucleus is the heart of the atom. — Ernest Rutherford",
  "Nothing in life is to be feared, it is only to be understood. — Marie Curie",
  "Physics is the only real science. The rest are just stamp collecting. — Ernest Rutherford",
  "The important thing is not to stop questioning. — Albert Einstein",
  "Energy is liberated matter, matter is energy waiting to happen. — Bill Bryson",
  "In nuclear physics, we have the power to change the world. — Unknown",
  "The universe is made of stories, not atoms. — Muriel Rukeyser",
  "To understand the atom is to understand the universe. — Unknown",
  "Every atom in your body came from a star that exploded. — Lawrence Krauss",
  "Nuclear physics: unlocking the secrets of the universe. — Unknown"
];

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [quote, setQuote] = useState('');

  useEffect(() => {
    setQuote(SCIENCE_QUOTES[Math.floor(Math.random() * SCIENCE_QUOTES.length)]);
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="relative">
        {/* Quantum Loader Animation */}
        <div className="relative w-32 h-32">
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-quantum-glow/20 animate-quantum-pulse"></div>
          {/* Middle Ring */}
          <div className="absolute inset-2 rounded-full border-2 border-quantum-secondary/40 animate-loader-spin"></div>
          {/* Inner Ring */}
          <div className="absolute inset-4 rounded-full border-2 border-quantum-accent/60 animate-loader-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
          {/* Center Particle */}
          <div className="absolute top-1/2 left-1/2 w-3 h-3 -mt-1.5 -ml-1.5 bg-quantum-particle rounded-full animate-quantum-float"></div>
          {/* Floating Particles */}
          <div className="absolute top-2 right-2 w-1 h-1 bg-quantum-glow rounded-full animate-particle-drift"></div>
          <div className="absolute bottom-2 left-2 w-1 h-1 bg-quantum-secondary rounded-full animate-particle-drift" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-2 left-2 w-1 h-1 bg-quantum-accent rounded-full animate-particle-drift" style={{ animationDelay: '4s' }}></div>
        </div>
        {/* Loading Text */}
        <div className="mt-8 text-center">
          <h2 className="text-xl font-semibold text-foreground quantum-text-glow">
            Nuclear Physics Lab
          </h2>
          <p className="text-sm text-muted-foreground mt-2 font-mono">
            Initializing quantum systems...
          </p>
          <p className="text-xs text-accent mt-4 max-w-xs mx-auto italic">
            {quote}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loader;