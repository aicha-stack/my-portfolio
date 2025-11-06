import { motion } from "framer-motion";
import Decorations from "./Decorations";

export default function SectionWrapper({ children, onBack }) {
  return (
    <motion.section
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.5 }}
      className="relative z-20 bg-gradient-to-br from-[#230022]/95 via-[#1a0a2a]/95 to-[#0b0015]/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 mt-6 border border-[#6C1FFF]/30 shadow-2xl text-gray-200 overflow-hidden"
    >
      <Decorations />
      <div className="relative z-10 flex justify-between items-start mb-6">
        <motion.button
          whileHover={{ scale: 1.05, x: -4 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#1a0a2a] to-[#2f0b3a] hover:from-[#2f0b3a] hover:to-[#3b0f55] border border-[#6C1FFF]/30 hover:border-[#6C1FFF]/50 text-[#f0d8ff] font-medium transition-all duration-300 shadow-lg hover:shadow-[#6C1FFF]/20"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Retour
        </motion.button>
      </div>

      <div className="relative z-10">{children}</div>
    </motion.section>
  );
}
