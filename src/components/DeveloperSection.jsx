import React from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollAnimation";
import SkillsSection from "./SkillsSection";
import EducationSection from "./EducationSection";

const projects = [
  {
    id: 1,
    title: "Portfolio interactif",
    description: "Présentation des univers de développement web et de design",
    details: [
      "Réalisé avec React, Tailwind CSS et JavaScript",
      "Animations subtiles et design responsive",
      "Éléments décoratifs : effets lumineux et détails graphiques",
      "Met en avant créativité, sens du design et compétences techniques",
      "Expérience utilisateur fluide et moderne",
    ],
    technologies: ["React", "Tailwind CSS", "JavaScript", "Framer Motion"],
    link: "#",
  },
  {
    id: 2,
    title: "Projet voiture AI",
    description: "Agent intelligent pour recommander des voitures selon les besoins",
    details: [
      "Projet Flask avec un agent intelligent 🤖 pour recommander des voitures",
      "Combinaison de développement web et d'intelligence artificielle",
      "Développement de compétences en Python 🐍",
      "Conception d'interfaces utilisateur intuitives et ergonomiques 🚗✨",
    ],
    technologies: ["Flask", "Python", "AI", "Web Development"],
    link: "#",
  },
];

const aboutPoints = [
  {
    icon: "💻",
    title: "Développeuse Full-Stack",
    text: "Passionnée par le développement web et le design, je crée des applications modernes et performantes avec une attention particulière à l'expérience utilisateur.",
  },
  {
    icon: "🎓",
    title: "Formation Académique",
    text: "Parcours solide avec deux ans de classes préparatoires suivis d'une spécialisation en développement informatique, me permettant d'acquérir des bases solides en programmation et en algorithmique.",
  },
  {
    icon: "✨",
    title: "Design & UX",
    text: "Création d'expériences fonctionnelles et esthétiques, avec un design élégant et interactif. Je combine créativité et technique pour développer des interfaces intuitives.",
  },
  {
    icon: "🤖",
    title: "Intelligence Artificielle",
    text: "Expérience dans le développement d'agents intelligents et l'intégration de solutions IA dans des applications web, notamment pour des systèmes de recommandation.",
  },
  {
    icon: "🛠️",
    title: "Innovation Continue",
    text: "Passionnée par la découverte d'outils innovants et nouvelles technologies. Apprentissage continu pour rester à jour avec les dernières tendances du développement web.",
  },
];

export default function DeveloperSection() {
  return (
    <div className="space-y-12">
      {/* About Section */}
      <ScrollReveal className="w-full flex justify-center">
        <div className="text-center max-w-4xl mx-auto">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#f0d8ff] mb-4"
            style={{ textShadow: "0 2px 8px hsla(0, 56%, 95%, 0.10)" }}
          >
            À propos de moi
          </h2>
          <p className="text-lg md:text-xl text-[#e8dfff]/80 leading-relaxed">
            Développeuse Full-Stack passionnée, je combine créativité et expertise technique pour créer des solutions web innovantes et performantes.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {aboutPoints.map((point, index) => (
          <ScrollReveal key={index} delay={0.2 + index * 0.1}>
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="h-full p-6 rounded-xl border border-[#6C1FFF]/20 bg-gradient-to-br from-black/30 via-[#1a0a2a]/40 to-black/30 shadow-lg hover:shadow-xl hover:shadow-[#6C1FFF]/20 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{point.icon}</div>
              <h3 className="text-xl font-bold text-[#f0d8ff] mb-3">{point.title}</h3>
              <p className="text-[#e8dfff]/80 leading-relaxed text-sm md:text-base">
                {point.text}
              </p>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>

      {/* Skills Section */}
      <div className="mt-20">
        <SkillsSection />
      </div>

      {/* Education & Certifications Section */}
      <div className="mt-20">
        <EducationSection />
      </div>

      {/* Projects Section */}
      <ScrollReveal delay={0.2} className="mt-16">
        <h3
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#f0d8ff] text-center mb-12"
          style={{ textShadow: "0 2px 8px hsla(0, 56%, 95%, 0.10)" }}
        >
          Mes projets
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={0.3 + index * 0.2}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative rounded-2xl p-6 border border-[#6C1FFF]/20 bg-gradient-to-br from-black/30 via-[#1a0a2a]/40 to-black/30 shadow-xl hover:shadow-2xl hover:shadow-[#6C1FFF]/20 transition-all duration-300 overflow-hidden"
              >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#6C1FFF]/0 to-[#6C1FFF]/0 group-hover:from-[#6C1FFF]/5 group-hover:to-transparent transition-all duration-300"></div>

              <div className="relative z-10">
                <div className="h-56 rounded-lg bg-gradient-to-br from-[#1a0a2a] via-[#2b0a45] to-[#1a0a2a] flex items-end p-6 mb-4 border border-[#6C1FFF]/10">
                  <div className="bg-black/70 backdrop-blur-sm text-[#d1c7ff]/90 font-medium p-6 rounded-lg w-full border border-[#6C1FFF]/20">
                    <h4 className="text-2xl md:text-3xl font-bold text-[#f0d8ff] mb-3">
                      {project.title}
                    </h4>
                    <p className="text-[#d1c7ff]/80 mb-4">{project.description}</p>
                    <ul className="mt-3 text-[#d1c7ff]/70 text-sm leading-relaxed space-y-2">
                      {project.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#6C1FFF] mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-[#6C1FFF]/20 text-[#d1c7ff] border border-[#6C1FFF]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.link}
                    className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#6C1FFF] to-[#8a3fff] text-white font-semibold hover:shadow-lg hover:shadow-[#6C1FFF]/40 transition-all duration-300"
                  >
                    Voir le projet →
                  </motion.a>
                </div>
              </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>

      {/* CV Section */}
      <ScrollReveal delay={0.6} className="mt-20 text-center">
        <div className="max-w-3xl mx-auto p-8 rounded-2xl border border-[#6C1FFF]/20 bg-gradient-to-br from-black/30 via-[#1a0a2a]/40 to-black/30">
          <h4 className="text-3xl md:text-4xl font-bold text-[#f0d8ff] mb-4">
            Curriculum Vitae
          </h4>
          <p className="text-base md:text-lg text-[#e8dfff]/80 max-w-2xl mx-auto mb-6">
            Téléchargez mon CV technique pour une vue d'ensemble complète de mon parcours, mes compétences et mes réalisations professionnelles.
          </p>
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-gradient-to-r from-[#6C1FFF] to-[#8a3fff] text-white font-semibold hover:shadow-lg hover:shadow-[#6C1FFF]/40 transition-all duration-300"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Télécharger le CV (PDF)
          </motion.a>
        </div>
      </ScrollReveal>
    </div>
  );
}
