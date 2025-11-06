import React from "react";

export default function Decorations() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden>
      {/* Sparkles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`spark-${i}`}
          className="absolute sparkle text-pink-300/80"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${10 + Math.random() * 16}px`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        >
          ✨
        </div>
      ))}

      {/* Floating hearts */}
      {[...Array(10)].map((_, i) => (
        <div
          key={`heart-${i}`}
          className="absolute heart text-pink-300/70"
          style={{
            left: `${5 + Math.random() * 90}%`,
            bottom: `${-10 - Math.random() * 20}vh`,
            fontSize: `${16 + Math.random() * 14}px`,
            animationDelay: `${i * 0.9 + Math.random()}s`,
          }}
        >
          💖
        </div>
      ))}

      {/* Rotating roses */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`rose-${i}`}
          className="absolute rose text-pink-200/70"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${8 + Math.random() * 70}%`,
            fontSize: `${12 + Math.random() * 10}px`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        >
          🌹
        </div>
      ))}

      {/* Decorative SVG butterflies */}
      {[...Array(5)].map((_, i) => (
        <svg
          key={`butter-${i}`}
          className="absolute butterfly"
          viewBox="0 0 24 24"
          fill="none"
          style={{
            left: `${8 + i * 18 + Math.random() * 6}%`,
            top: `${10 + (i % 2) * 20 + Math.random() * 6}%`,
            width: `${24 + Math.random() * 18}px`,
            height: `${24 + Math.random() * 18}px`,
            animationDelay: `${i * 0.8 + Math.random()}s`,
            opacity: 0.85,
          }}
          aria-hidden
        >
          <defs>
            <linearGradient id={`bgrad-${i}`} x1="0" x2="1">
              <stop offset="0%" stopColor="#ff9ad3" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#6c1fff" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          <path
            d="M6 12c-4-6 4-10 6-6 2-4 10 0 6 6 4 2-2 8-6 6-4 2-10-4-6-6z"
            fill={`url(#bgrad-${i})`}
          />
        </svg>
      ))}

      <style>{`
        @keyframes girly-twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.9) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.4) rotate(5deg); }
        }
        .sparkle {
          animation: girly-twinkle 3.6s ease-in-out infinite;
          will-change: transform, opacity;
        }

        @keyframes heartFloat {
          0% { transform: translateY(0) scale(0.9); opacity: 0; }
          10% { opacity: 1; }
          50% { transform: translateY(-50vh) scale(1.05) rotate(-6deg); opacity: 0.9; }
          100% { transform: translateY(-110vh) scale(1.1) rotate(12deg); opacity: 0; }
        }
        .heart {
          animation: heartFloat 10s linear infinite;
          will-change: transform, opacity;
          filter: drop-shadow(0 6px 18px rgba(220,100,180,0.15));
        }

        @keyframes roseDrift {
          0% { transform: translateY(0) rotate(0deg); opacity: 0.8; }
          50% { transform: translateY(-10px) rotate(15deg); opacity: 1; }
          100% { transform: translateY(0) rotate(0deg); opacity: 0.75; }
        }
        .rose {
          animation: roseDrift 7s ease-in-out infinite;
          will-change: transform, opacity;
          filter: drop-shadow(0 6px 12px rgba(150,50,120,0.1));
        }

        @keyframes butterflyFloat {
          0% { transform: translateY(0) rotate(0deg) scale(1); opacity: 0.85; }
          25% { transform: translateY(-10px) rotate(10deg) scale(1.05); }
          50% { transform: translateY(0) rotate(0deg) scale(1); }
          75% { transform: translateY(8px) rotate(-8deg) scale(0.98); }
          100% { transform: translateY(0) rotate(0deg) scale(1); }
        }
        .butterfly {
          animation: butterflyFloat 8s ease-in-out infinite;
          filter: drop-shadow(0 8px 20px rgba(120,40,160,0.1));
        }
      `}</style>
    </div>
  );
}

