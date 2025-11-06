import React from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollAnimation";

const skillCategories = [
  {
    category: "Frontend Development",
    icon: "🎨",
    skills: [
      { name: "React.js", level: 90, icon: "⚛️" },
      { name: "JavaScript (ES6+)", level: 85, icon: "📜" },
      { name: "HTML5", level: 95, icon: "🌐" },
      { name: "CSS3", level: 90, icon: "🎨" },
      { name: "Tailwind CSS", level: 88, icon: "💨" },
      { name: "Redux", level: 75, icon: "🔄" },
      { name: "TypeScript", level: 70, icon: "📘" },
    ],
  },
  {
    category: "Backend Development",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 80, icon: "🟢" },
      { name: "Express.js", level: 78, icon: "🚂" },
      { name: "Python", level: 85, icon: "🐍" },
      { name: "Flask", level: 82, icon: "🌶️" },
      { name: "RESTful APIs", level: 85, icon: "🔌" },
      { name: "MongoDB", level: 75, icon: "🍃" },
      { name: "SQL", level: 70, icon: "🗄️" },
    ],
  },
  {
    category: "Programming Languages",
    icon: "💻",
    skills: [
      { name: "JavaScript", level: 88, icon: "📜" },
      { name: "Python", level: 85, icon: "🐍" },
      { name: "C", level: 75, icon: "🔷" },
      { name: "C++", level: 72, icon: "➕" },
      { name: "Java", level: 65, icon: "☕" },
      { name: "PHP", level: 60, icon: "🐘" },
    ],
  },
  {
    category: "Tools & Technologies",
    icon: "🛠️",
    skills: [
      { name: "Git & GitHub", level: 85, icon: "🔀" },
      { name: "Vite", level: 80, icon: "⚡" },
      { name: "Webpack", level: 70, icon: "📦" },
      { name: "Postman", level: 75, icon: "📮" },
      { name: "VS Code", level: 90, icon: "💻" },
      { name: "Figma", level: 65, icon: "🎨" },
    ],
  },
  {
    category: "AI & Machine Learning",
    icon: "🤖",
    skills: [
      { name: "AI Agents Development", level: 75, icon: "🤖" },
      { name: "Machine Learning Basics", level: 70, icon: "🧠" },
      { name: "Data Analysis", level: 68, icon: "📊" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <div className="space-y-8">
      <ScrollReveal>
        <h3
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#f0d8ff] text-center mb-4"
          style={{ textShadow: "0 2px 8px hsla(0, 56%, 95%, 0.10)" }}
        >
          Compétences Techniques
        </h3>
        <p className="text-center text-[#e8dfff]/80 text-lg max-w-2xl mx-auto mb-12">
          Un aperçu détaillé de mes compétences techniques et de mon expertise dans différentes technologies
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {skillCategories.map((category, categoryIndex) => (
          <ScrollReveal key={category.category} delay={categoryIndex * 0.1}>
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              className="rounded-2xl p-6 border border-[#6C1FFF]/20 bg-gradient-to-br from-black/30 via-[#1a0a2a]/40 to-black/30 shadow-xl hover:shadow-2xl hover:shadow-[#6C1FFF]/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h4 className="text-2xl font-bold text-[#f0d8ff]">{category.category}</h4>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-[#e8dfff] font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-[#6C1FFF] font-semibold">{skill.level}%</span>
                    </div>
                    <div className="relative h-2.5 bg-[#1a0a2a] rounded-full overflow-hidden border border-[#6C1FFF]/10">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          duration: 0.8,
                          ease: "easeOut",
                        }}
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#6C1FFF] via-[#8a3fff] to-[#6C1FFF] rounded-full shadow-lg shadow-[#6C1FFF]/50"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

