export default function OrchidDecorations() {
  return (
    <>
      <svg
        className="absolute top-8 left-6 w-48 opacity-80 transform-gpu animate-float-slow z-0 pointer-events-none"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#540cdaff" stopOpacity="1" />
            <stop offset="100%" stopColor="#2B0A45" stopOpacity="1" />
          </linearGradient>
        </defs>
        <g transform="translate(20,20)">
          <ellipse
            cx="40"
            cy="40"
            rx="28"
            ry="18"
            fill="url(#g1)"
            opacity="0.95"
          />
          <path
            d="M30 30 C40 10, 70 10, 80 30 C70 45, 50 60, 30 30"
            fill="#4f22a2ff"
            opacity="0.9"
          />
        </g>
      </svg>

      <svg
        className="absolute bottom-12 right-8 w-56 opacity-80 transform-gpu animate-float z-0 pointer-events-none"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="g2" x1="0" x2="1">
            <stop offset="0%" stopColor="#653e69ff" stopOpacity="1" />
            <stop offset="100%" stopColor="#29056cff" stopOpacity="1" />
          </linearGradient>
        </defs>
        <g transform="translate(10,10)">
          <ellipse
            cx="60"
            cy="60"
            rx="36"
            ry="20"
            fill="url(#g2)"
            opacity="0.95"
          />
          <path
            d="M50 50 C60 20, 100 25, 110 50 C95 72, 70 90, 50 50"
            fill="#6C1FFF"
            opacity="0.9"
          />
        </g>
      </svg>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes float-slow {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(-1deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 7s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
