import React from "react";
import { motion } from "framer-motion";
import photo from "../assets/photo.jpeg";

export default function HomePage({ onNavigate }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center gap-10"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="relative flex flex-col items-center gap-6"
      >
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#f0d8ff] tracking-wide"
          style={{ textShadow: "0 6px 30px rgba(108, 31, 255, 0.3)" }}
        >
          Aicha Ezzahraoui
        </h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 mb-12 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#6C1FFF]/40 via-[#EEC8F2]/40 to-[#6C1FFF]/40 rounded-full blur-2xl animate-pulse"></div>
          <div
            className="relative rounded-full ring-4 ring-[#6C1FFF]/40 bg-gradient-to-br from-[#1f0b2a] to-transparent flex items-center justify-center overflow-hidden shadow-2xl"
            style={{ width: "280px", height: "280px" }}
          >
            <img
              src={photo}
              alt="Aicha Ezzahraoui"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="w-32 h-1 bg-gradient-to-r from-transparent via-[#6C1FFF]/60 to-transparent rounded-full"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="flex flex-col gap-8 mt-8 w-full max-w-3xl"
      >
        <div className="flex flex-row flex-wrap gap-6 justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate("dev")}
            className="group relative flex items-center gap-4 px-12 md:px-16 py-5 md:py-6 rounded-full bg-gradient-to-r from-[#2f0b3a] via-[#6C1FFF] to-[#2f0b3a] text-white font-semibold shadow-lg shadow-[#6C1FFF]/40 hover:shadow-[#6C1FFF]/60 transition-all duration-300 ring-2 ring-white/10 overflow-hidden"
            aria-label="Explorer développeuse"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
              className="opacity-95 group-hover:scale-110 transition-transform duration-300"
            >
              <path
                d="M8 9L4 12l4 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 9l4 3-4 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 5v14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-left relative z-10">
              <div className="text-base md:text-lg font-bold">Voir plus</div>
            </span>
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-8 text-center text-[#e8dfff]/90 max-w-3xl mx-auto"
        >
          <p className="leading-relaxed text-lg md:text-xl mb-4">
            <span className="text-[#f0d8ff] font-semibold text-xl md:text-2xl">Développeuse Full-Stack</span> passionnée par la création de solutions web innovantes
          </p>
          <p className="leading-relaxed text-base md:text-lg text-[#e8dfff]/80">
            Spécialisée en développement frontend et backend, je transforme des idées en applications performantes avec un design moderne et une expérience utilisateur optimale. Explorez mon portfolio pour découvrir mes projets, compétences techniques et réalisations.
          </p>
        </motion.div>
      </motion.div>
    </motion.main>
  );
}

