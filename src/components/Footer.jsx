import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    {
      name: "Email",
      href: "mailto:aicha12ezzahraoui@gmail.com",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M3 8.5v7A2.5 2.5 0 005.5 18h13A2.5 2.5 0 0021 15.5v-7"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 8.5L12 13 3 8.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/aicha-stack",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 2C7.6 2 4 5.6 4 10c0 3.6 2.3 6.6 5.5 7.6.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1-2.7-1-.4-1.1-1-1.4-1-1.4-.8-.6.1-.6.1-.6.9.1 1.4.9 1.4.9.8 1.4 2 1 .2.8 0 0 2.3-.8 3.1-2.3.1-.8.6-1.3 1.1-1.6-1.8-.2-3.6-.9-3.6-4A3.2 3.2 0 009.5 7c.1-.2.4-.9 1.5-0.6 0 0 1-.4 2.5 0 0 0 1.9-.6 1.9.6 0 3.1-1.9 3.9-3.6 4.1.6.5 1 1.3 1 2.6v3.8c0 .2.1.5.6.4C17.7 16.6 20 13.6 20 10c0-4.4-3.6-8-8-8z"
            stroke="currentColor"
            strokeWidth="0.3"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/aicha-ezzahraoui-b55a11243",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <path
            d="M7 10v7"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <circle cx="7" cy="7.5" r="0.9" fill="currentColor" />
          <path
            d="M11 17V12.5c0-1.2.9-2.1 2.1-2.1s2.1.9 2.1 2.1V17"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      name: "Téléphone",
      href: "tel:+212697360777",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M22 16.9v3a1 1 0 01-1.1 1 19 19 0 01-8.7-3.3 19 19 0 01-6-6A19 19 0 012 3.1 1 1 0 013 2h3a1 1 0 011 .8c.2 1 .5 2 .9 2.9a1 1 0 01-.2 1L6.4 8.9a13 13 0 006 6l1.2-1.1a1 1 0 011-.2c1 .4 1.9.7 2.9.9a1 1 0 01.8 1z"
            stroke="currentColor"
            strokeWidth="0.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <footer className="mt-20 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8"
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer noopener" : undefined}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-br from-[#1a0a2a]/60 to-[#2b0a45]/60 border border-[#6C1FFF]/20 hover:border-[#6C1FFF]/40 hover:bg-gradient-to-br hover:from-[#2f0b3a]/80 hover:to-[#3b0f55]/80 text-[#e8dfff] transition-all duration-300 shadow-lg hover:shadow-[#6C1FFF]/20"
            aria-label={link.name}
          >
            <span className="text-[#6C1FFF]">{link.icon}</span>
            <span className="text-sm font-medium">{link.name}</span>
          </motion.a>
        ))}
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-6 text-sm text-[#bbb]/70"
      >
        © {new Date().getFullYear()} Aicha Ezzahraoui. Tous droits réservés.
      </motion.p>
    </footer>
  );
}

