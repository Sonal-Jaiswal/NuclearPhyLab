import { useEffect, useState } from 'react';

const LOADER_DURATION = 3000;

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const percent = Math.min(100, Math.round((elapsed / LOADER_DURATION) * 100));
      setProgress(percent);
      if (percent < 100) {
        requestAnimationFrame(tick);
      }
    };
    tick();
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, LOADER_DURATION);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  // Circle progress constants
  const size = 160;
  const stroke = 8;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="relative flex flex-col items-center">
        {/* Circular Progress Indicator */}
        <div className="relative w-40 h-40 mb-8 flex items-center justify-center">
          <svg width={size} height={size} className="absolute top-0 left-0">
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="#22223b"
              strokeWidth={stroke}
              fill="none"
            />
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="#60a5fa"
              strokeWidth={stroke}
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              className="transition-all duration-100"
              style={{ transition: 'stroke-dashoffset 0.1s linear' }}
            />
          </svg>
          <span className="absolute text-2xl font-bold text-foreground quantum-text-glow">
            {progress}%
          </span>
        </div>
        {/* Loader Text */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground quantum-text-glow mb-2">
            Loading website...
          </h2>
          <p className="text-lg text-accent font-mono mb-2 animate-fade-in">
            Entering into the world of Nuclear Physics
          </p>
          <p className="text-xs text-muted-foreground mt-2 font-mono">
            Please wait while we initialize quantum systems...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loader;

/*
Add these to your tailwind.config.js if not present:
  'quantum-glow': '#60a5fa',
  'quantum-accent': '#fbbf24',
  'quantum-secondary': '#a78bfa',
  'quantum-particle': '#f87171',
Add these keyframes to your CSS for the custom animations:
@keyframes orbit { 100% { transform: rotate(360deg) translateX(60px) rotate(-360deg); } }
@keyframes orbit-reverse { 100% { transform: rotate(-360deg) translateX(50px) rotate(360deg); } }
@keyframes orbit-delay { 100% { transform: rotate(360deg) translateY(40px) rotate(-360deg); } }
*/