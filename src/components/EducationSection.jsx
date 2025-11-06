import React from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollAnimation";

const formations = [
  {
    id: 1,
    type: "Formation Professionnelle",
    title: "Développement Informatique et Compétences Numériques",
    institution: "GEEKS Institute",
    period: "202X - Présent",
    description: "Formation axée sur le développement informatique et les compétences numériques pratiques. Cette formation combine programmation et développement web, bases de données, projets pratiques et compétences professionnelles pour préparer à entrer rapidement sur le marché du travail avec des compétences techniques solides et une expérience pratique.",
    skills: [
      "HTML, CSS, JavaScript",
      "React, Node.js",
      "Bases de données SQL",
      "Gestion et manipulation des données",
      "Projets pratiques (applications et sites web)",
      "Gestion de projet",
      "Travail en équipe",
      "Git/GitHub",
    ],
    icon: "💻",
  },
  {
    id: 2,
    type: "Formation Académique",
    title: "Classes Préparatoires",
    institution: "École/Université",
    period: "202X - 202X (2 ans)",
    description: "Deux années de classes préparatoires ayant fourni des bases solides en mathématiques, algorithmique et programmation.",
    skills: ["Algorithmique", "Mathématiques", "Logique", "Résolution de problèmes"],
    icon: "📚",
  },
];

const certifications = [
  {
    id: 1,
    title: "L'IA au Service de la Rédaction Scientifique",
    issuer: "University of Helsinki",
    date: "17 Mars 2025",
    description: "Certificat de formation sur l'utilisation de l'intelligence artificielle dans la rédaction scientifique. Cette formation couvre les méthodes et outils d'IA pour améliorer la qualité, la précision et l'efficacité de la rédaction de documents scientifiques, tout en respectant les normes académiques et éthiques.",
    credential: "0c02743c-5de3-49a1-a9e3-59ff06831e14",
    icon: "🎓",
    link: "https://geagijc.r.af.d.sendibt2.com/tr/cl/I4x6D4_qzKGK5BS_taVVKEPno4-i1_rah4AWKRe_fCAa7IrSNHe-Pbdt6d6cM34MVXocOAe3sy9zfJuzjmBBGTgTY3ovbqPRwbNFN41jxYdZWCTiuMIRwSgharnCLoL8GRuLfUsu8T9TsVtaljU-6pvrMJynQkV2vyXFZGhIQGMT9SQMB-xX4htWEdSgK_Jxqa4zXXpG_09ePZbM7mab3Dslc21QWVqP5SnTG_6mGeBP6Jnced5GwN_XWrSn_vB26o-ZsmSLq0ap2LnJYyK_aAWV3dOlC5GDEtF_aBhJppWlIRiIHBFffaoNU5Idtfr7MI3TJblDGouMGFv1ZTLrXNCYCEICY8jbH91ZYItD5rcBe_mgOeHO5DG0bwjZMZPRbQKbkNH9FehmjoE2kglXg6K98z4f0hBPQFlHg1mZDn-NdiL-I-sBOiyy7tpTnkIkyZ0fm453tnzdvtRQRJAJX8Z4mxVH",
  },
  {
    id: 2,
    title: "Elements of AI for Business",
    issuer: "MinnaLearn",
    date: "Septembre 2025",
    description: "Certificat de complétion du programme de 4 semaines 'Elements of AI for Business' délivré par MinnaLearn. Ce programme couvre les fondamentaux de l'intelligence artificielle appliqués au monde des affaires.",
    credential: "0c02743c-5de3-49a1-a9e3-59ff06831e14",
    icon: "🤖",
    link: "https://courses.minnalearn.com/certificate/ar/elements-of-ai-for-business/0c02743c-5de3-49a1-a9e3-59ff06831e14",
  },
];

export default function EducationSection() {
  return (
    <div className="space-y-12">
      {/* Formations Académiques */}
      <ScrollReveal>
        <h3
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#f0d8ff] text-center mb-4"
          style={{ textShadow: "0 2px 8px hsla(0, 56%, 95%, 0.10)" }}
        >
          Formations Académiques
        </h3>
        <p className="text-center text-[#e8dfff]/80 text-lg max-w-2xl mx-auto mb-12">
          Mon parcours académique et mes formations en développement informatique
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {formations.map((formation, index) => (
          <ScrollReveal key={formation.id} delay={index * 0.1}>
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="h-full p-6 rounded-2xl border border-[#6C1FFF]/20 bg-gradient-to-br from-black/30 via-[#1a0a2a]/40 to-black/30 shadow-xl hover:shadow-2xl hover:shadow-[#6C1FFF]/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">{formation.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#6C1FFF]/20 text-[#d1c7ff] border border-[#6C1FFF]/30">
                      {formation.type}
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold text-[#f0d8ff] mb-2">{formation.title}</h4>
                  <p className="text-[#6C1FFF] font-medium mb-1">{formation.institution}</p>
                  <p className="text-sm text-[#e8dfff]/70">{formation.period}</p>
                </div>
              </div>
              <p className="text-[#e8dfff]/80 mb-4 leading-relaxed">{formation.description}</p>
              <div className="flex flex-wrap gap-2">
                {formation.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-[#1a0a2a]/60 text-[#d1c7ff] border border-[#6C1FFF]/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>

      {/* Certifications */}
      <ScrollReveal delay={0.3} className="mt-20">
        <h3
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#f0d8ff] text-center mb-4"
          style={{ textShadow: "0 2px 8px hsla(0, 56%, 95%, 0.10)" }}
        >
          Certifications
        </h3>
        <p className="text-center text-[#e8dfff]/80 text-lg max-w-2xl mx-auto mb-12">
          Certifications et attestations obtenues dans différents domaines du développement
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {certifications.map((cert, index) => (
          <ScrollReveal key={cert.id} delay={0.4 + index * 0.1}>
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative p-6 rounded-2xl border border-[#6C1FFF]/20 bg-gradient-to-br from-black/30 via-[#1a0a2a]/40 to-black/30 shadow-xl hover:shadow-2xl hover:shadow-[#6C1FFF]/20 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#6C1FFF]/0 to-[#6C1FFF]/0 group-hover:from-[#6C1FFF]/5 group-hover:to-transparent transition-all duration-300"></div>

              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{cert.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-[#f0d8ff] mb-2">{cert.title}</h4>
                    <p className="text-[#6C1FFF] font-medium text-sm mb-1">{cert.issuer}</p>
                    <p className="text-xs text-[#e8dfff]/70 mb-2">Obtenu en {cert.date}</p>
                    {cert.credential && (
                      <p className="text-xs text-[#e8dfff]/60 font-mono">ID: {cert.credential}</p>
                    )}
                  </div>
                </div>
                <p className="text-[#e8dfff]/80 mb-4 leading-relaxed text-sm">{cert.description}</p>
                {cert.link && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[#6C1FFF] hover:text-[#8a3fff] font-medium transition-colors"
                  >
                    Voir la certification
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </motion.a>
                )}
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

