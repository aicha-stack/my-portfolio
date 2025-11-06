import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HomePage from "./components/HomePage";
import DeveloperSection from "./components/DeveloperSection";
import Footer from "./components/Footer";
import SectionWrapper from "./components/SectionWrapper";
import OrchidDecorations from "./components/OrchidDecorations";
import Decorations from "./components/Decorations";
import AIAgent from "./components/AIAgent";

export default function App() {
  const [view, setView] = useState("home"); // 'home' | 'dev'
  const videoRef = useRef(null);

  useEffect(() => {
    // Try to autoplay video muted
    if (videoRef.current) {
      const v = videoRef.current;
      v.muted = true;
      const playPromise = v.play();
      if (playPromise !== undefined) playPromise.catch(() => {});
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#26002e] via-[#1a0a2a] to-[#0b0015] text-gray-200 font-sans overflow-x-hidden relative">
      {/* Background decorations */}
      <Decorations />
      
      {/* Video background (optional, currently disabled) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#26002e] via-[#1a0a2a] to-[#0b0015] pointer-events-none" />
      
      {/* Soft overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2B0A45]/30 to-black/80 pointer-events-none" />

      {/* Floating orchids (SVGs) */}
      <OrchidDecorations />

      {/* AI Agent Chat */}
      <AIAgent />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <AnimatePresence initial={false} mode="wait">
          {view === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <HomePage onNavigate={setView} />
              <Footer />
            </motion.div>
          )}

          {view === "dev" && (
            <SectionWrapper key="dev" onBack={() => setView("home")}>
              <DeveloperSection />
            </SectionWrapper>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
