import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const knowledgeBase = {
  nom: ["Aicha Ezzahraoui", "Aisha Ezzahraoui"],
  profession: [
    "Développeuse Full-Stack",
    "Développeuse web",
    "Programmeuse",
    "Développeuse frontend et backend",
  ],
  competences: [
    "React.js",
    "JavaScript",
    "Python",
    "Node.js",
    "Express.js",
    "Flask",
    "MongoDB",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Redux",
    "TypeScript",
    "C",
    "C++",
    "Java",
    "PHP",
  ],
  projets: [
    "Portfolio interactif",
    "Projet voiture AI",
    "Applications web modernes",
  ],
  formation: [
    "Classes préparatoires (2 ans)",
    "Spécialisation en développement informatique",
  ],
  email: "aicha12ezzahraoui@gmail.com",
  github: "aicha-stack",
  linkedin: "aicha-ezzahraoui-b55a11243",
  telephone: "+212697360777",
};

function generateResponse(question) {
  const lowerQuestion = question.toLowerCase();

  // Salutations
  if (
    lowerQuestion.includes("bonjour") ||
    lowerQuestion.includes("salut") ||
    lowerQuestion.includes("hello") ||
    lowerQuestion.includes("hi")
  ) {
    return "Bonjour ! Je suis l'assistant IA d'Aicha Ezzahraoui. Comment puis-je vous aider à en apprendre plus sur elle ?";
  }

  // Nom
  if (
    lowerQuestion.includes("nom") ||
    lowerQuestion.includes("qui est") ||
    lowerQuestion.includes("qui êtes")
  ) {
    return "Aicha Ezzahraoui est une développeuse Full-Stack passionnée par la création de solutions web innovantes. Elle combine créativité et expertise technique pour développer des applications performantes.";
  }

  // Profession / Métier
  if (
    lowerQuestion.includes("profession") ||
    lowerQuestion.includes("métier") ||
    lowerQuestion.includes("travail") ||
    lowerQuestion.includes("fait quoi") ||
    lowerQuestion.includes("développeuse") ||
    lowerQuestion.includes("développeur")
  ) {
    return "Aicha est une développeuse Full-Stack spécialisée en développement frontend et backend. Elle crée des applications web modernes avec React, Node.js, Python et d'autres technologies modernes.";
  }

  // Compétences
  if (
    lowerQuestion.includes("compétence") ||
    lowerQuestion.includes("sait faire") ||
    lowerQuestion.includes("technologies") ||
    lowerQuestion.includes("langages") ||
    lowerQuestion.includes("maîtrise")
  ) {
    return `Aicha maîtrise de nombreuses technologies : Frontend (React.js, JavaScript, HTML5, CSS3, Tailwind CSS, Redux, TypeScript), Backend (Node.js, Express.js, Python, Flask), Bases de données (MongoDB, SQL), et langages de programmation (C, C++, Java, PHP). Elle a également de l'expérience en IA et Machine Learning.`;
  }

  // Projets
  if (
    lowerQuestion.includes("projet") ||
    lowerQuestion.includes("réalisé") ||
    lowerQuestion.includes("travaille sur")
  ) {
    return "Aicha a réalisé plusieurs projets, notamment un Portfolio interactif avec React et Tailwind CSS, et un Projet voiture AI utilisant Flask et Python avec un agent intelligent pour recommander des voitures. Explorez la section 'Mes projets' pour plus de détails.";
  }

  // Formation
  if (
    lowerQuestion.includes("formation") ||
    lowerQuestion.includes("études") ||
    lowerQuestion.includes("diplôme") ||
    lowerQuestion.includes("parcours") ||
    lowerQuestion.includes("académique") ||
    lowerQuestion.includes("geeks") ||
    lowerQuestion.includes("institute")
  ) {
    return "Aicha suit actuellement une formation professionnelle en Développement Informatique et Compétences Numériques à GEEKS Institute. Cette formation couvre la programmation et le développement web (HTML, CSS, JavaScript, React, Node.js), les bases de données SQL, la gestion de projet, le travail en équipe, Git/GitHub, et inclut des projets pratiques pour créer des applications et sites web réels. Elle a également suivi deux ans de classes préparatoires. Consultez la section 'Formations & Certifications' pour plus de détails.";
  }

  // Certifications
  if (
    lowerQuestion.includes("certification") ||
    lowerQuestion.includes("certificat") ||
    lowerQuestion.includes("attestation") ||
    lowerQuestion.includes("certifié") ||
    lowerQuestion.includes("elements of ai") ||
    lowerQuestion.includes("minnalearn") ||
    lowerQuestion.includes("helsinki")
  ) {
    return "Aicha a obtenu plusieurs certifications : 'L'IA au Service de la Rédaction Scientifique' délivré par l'Université d'Helsinki en mars 2025, qui couvre l'utilisation de l'IA dans la rédaction scientifique, et 'Elements of AI for Business' délivré par MinnaLearn en septembre 2025, qui couvre les fondamentaux de l'intelligence artificielle appliqués au monde des affaires. Vous pouvez voir les certificats dans la section 'Formations & Certifications' du portfolio.";
  }

  // Contact
  if (
    lowerQuestion.includes("contact") ||
    lowerQuestion.includes("email") ||
    lowerQuestion.includes("mail") ||
    lowerQuestion.includes("joindre") ||
    lowerQuestion.includes("contacter")
  ) {
    return `Vous pouvez contacter Aicha par email : ${knowledgeBase.email}, ou via LinkedIn et GitHub. Toutes les informations de contact sont disponibles dans le footer du portfolio.`;
  }

  // GitHub
  if (lowerQuestion.includes("github") || lowerQuestion.includes("git")) {
    return `Le profil GitHub d'Aicha est : github.com/${knowledgeBase.github}. Vous y trouverez ses projets et contributions.`;
  }

  // LinkedIn
  if (lowerQuestion.includes("linkedin")) {
    return `Vous pouvez trouver Aicha sur LinkedIn. Le lien est disponible dans le footer du portfolio.`;
  }

  // Expérience / Expérience professionnelle
  if (
    lowerQuestion.includes("expérience") ||
    lowerQuestion.includes("années") ||
    lowerQuestion.includes("carrière")
  ) {
    return "Aicha est une développeuse passionnée qui continue d'apprendre et d'explorer de nouvelles technologies. Elle a de l'expérience dans le développement web full-stack, l'intelligence artificielle, et la conception d'interfaces utilisateur.";
  }

  // Design / UX
  if (
    lowerQuestion.includes("design") ||
    lowerQuestion.includes("ux") ||
    lowerQuestion.includes("interface") ||
    lowerQuestion.includes("ui")
  ) {
    return "Aicha accorde une grande importance au design et à l'expérience utilisateur. Elle crée des interfaces élégantes et intuitives en combinant créativité et compétences techniques.";
  }

  // IA / Intelligence Artificielle
  if (
    lowerQuestion.includes("ia") ||
    lowerQuestion.includes("intelligence artificielle") ||
    lowerQuestion.includes("ai") ||
    lowerQuestion.includes("machine learning")
  ) {
    return "Aicha a de l'expérience dans le développement d'agents intelligents et l'intégration de solutions IA dans des applications web. Elle a notamment travaillé sur un projet de recommandation de voitures utilisant l'IA.";
  }

  // Réponse par défaut
  const defaultResponses = [
    "Je peux vous renseigner sur les compétences, projets, formation et expérience d'Aicha. Posez-moi une question spécifique !",
    "Aicha est une développeuse Full-Stack passionnée. Que souhaitez-vous savoir sur elle ?",
    "Je peux vous parler de ses compétences techniques, projets, formation ou contact. Quelle est votre question ?",
  ];
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

export default function AIAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Bonjour ! Je suis l'assistant IA d'Aicha Ezzahraoui. Posez-moi des questions sur ses compétences, projets, formation ou expérience ! 😊",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simuler un délai de réponse
    setTimeout(() => {
      const response = generateResponse(input);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: response,
        },
      ]);
    }, 500);
  };

  return (
    <>
      {/* Bouton flottant */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-[#6C1FFF] to-[#8a3fff] text-white shadow-2xl hover:shadow-[#6C1FFF]/50 transition-all duration-300 flex items-center justify-center group"
        aria-label="Ouvrir l'assistant IA"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </motion.svg>
          ) : (
            <motion.svg
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </motion.svg>
          )}
        </AnimatePresence>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
        )}
      </motion.button>

      {/* Fenêtre de chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-8rem)] rounded-2xl border border-[#6C1FFF]/30 bg-gradient-to-br from-[#1a0a2a]/95 via-[#230022]/95 to-[#0b0015]/95 backdrop-blur-xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* En-tête */}
            <div className="p-4 border-b border-[#6C1FFF]/20 bg-gradient-to-r from-[#6C1FFF]/10 to-[#8a3fff]/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#6C1FFF] to-[#8a3fff] flex items-center justify-center">
                  <span className="text-xl">🤖</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#f0d8ff]">Assistant IA</h3>
                  <p className="text-xs text-[#e8dfff]/70">Posez vos questions sur Aicha</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl p-3 ${
                      msg.role === "user"
                        ? "bg-gradient-to-r from-[#6C1FFF] to-[#8a3fff] text-white"
                        : "bg-[#1a0a2a]/60 border border-[#6C1FFF]/20 text-[#e8dfff]"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.content}</p>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-4 border-t border-[#6C1FFF]/20">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Posez votre question..."
                  className="flex-1 px-4 py-2 rounded-lg bg-[#1a0a2a]/60 border border-[#6C1FFF]/20 text-[#e8dfff] placeholder-[#e8dfff]/50 focus:outline-none focus:border-[#6C1FFF]/50 focus:ring-2 focus:ring-[#6C1FFF]/20"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#6C1FFF] to-[#8a3fff] text-white font-semibold hover:shadow-lg hover:shadow-[#6C1FFF]/40 transition-all duration-300"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </motion.button>
              </div>
              <p className="text-xs text-[#e8dfff]/50 mt-2 text-center">
                Exemples : "Quelles sont ses compétences ?", "Parlez-moi de ses projets"
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

