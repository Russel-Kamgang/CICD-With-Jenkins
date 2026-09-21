import React from "react";
import { motion } from "framer-motion";
import { Book, Building } from "lucide-react";
import { FaSeedling, FaShieldHalved } from "react-icons/fa6";

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-3 3 3 3M16 9l3 3-3 3M12 6l-2 12" />
  </svg>
);

const typeMeta = {
  formation: {
    label: "Formation",
    bg: "#EFF6FF",
    color: "#2563EB",
    border: "#BFDBFE",
    icon: Book,
  },
  emploi: {
    label: "Emploi",
    bg: "#ECFDF5",
    color: "#059669",
    border: "#A7F3D0",
    icon: Building,
  },
};

const Experience = () => {
  const items = [
    {
      type: "emploi",
      icon: FaSeedling,
      title: "Intructeur Informatique",
      org: "GETSMARTER Institut de Formation IT — Douala",
      period: "Jan. 2026 – Aujourd'hui",
      current: true,
      desc:
        "Conçois et anime des formations en développement logiciel (HTML, CSS, JavaScript, PHP, Laravel). Encadre une vingtaine d'étudiants et aussi des stagiaires avec un suivi personnalisé, élabore des supports pédagogiques complets et évalue les acquis via des projets pratiques.",
      tech: ["Enseignement", "Formation", "Mentorat", "Pédagogie", "Communication", "Gestion de projet"],
    },
    {
      type: "emploi",
      icon: FaSeedling,
      title: "Développeur Fullstack Web/Mobile",
      org: "Maisoft — Douala",
      period: "Jan. 2026 – Aujourd'hui",
      current: true,
      desc:
        "Développe et maintient des applications métiers et projets clients en Laravel, React et Flutter. Implémente des fonctionnalités full-stack, corrige des bugs critiques, optimise les performances et collabore avec les équipes d'analyse et de test en cycle Agile.",
      tech: ["Flutter", "Laravel", "MySQL", "React", "Git", "Nodejs", "Angular", "..."],
    },
    {
      type: "formation",
      icon: FaShieldHalved,
      title: "Formation Cybersécurité & Ethical Hacking",
      org: "GETSMARTER Institut de Formation IT — Douala",
      period: "2024 - 2026",
      desc:
        "Formation spécialisée en sécurité offensive de niveau intermédiaire : analyse de vulnérabilités web (OWASP Top 10), tests d'intrusion sur réseaux et systèmes, exploitation et post-exploitation. Pratique intensive d'outils — Nmap, Wireshark, Burp Suite, Metasploit.",
      tech: ["Cybersécurité", "Red Teamer Intermediate", "Réseaux", "Systèmes", "Linux", "OWASP", "..."],
    },
    {
      type: "formation",
      icon: CodeIcon,
      title: "Formation Développement Logiciel",
      org: "GETSMARTER Institut de Formation IT — Douala",
      period: "2024 - 2026",
      desc:
        "Acquis des fondamentaux solides en algorithmique, développement web full-stack (Angular, React, Laravel), création d'API RESTful et développement mobile (Flutter). Ces compétences constituent le socle de mon profil Full Stack.",
      tech: ["Angular", "PHP", "Laravel", "React", "API RESTful", "Node.js", "Flutter", "..."],
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-surface-soft">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-100/70 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-teal-100/60 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-5 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-primary"></div>
            <span className="text-primary-dark font-semibold text-sm tracking-widest uppercase">
              Parcours
            </span>
          </div>
          <h2 className="text-4xl md:text-4xl font-medium text-slate-900">
            Expériences & Formation
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div
            className="absolute left-6 top-6 bottom-6 w-px hidden md:flex"
            style={{
              background:
                "linear-gradient(to bottom, transparent, #CBD5E1 8%, #CBD5E1 92%, transparent)",
            }}
          ></div>

          <div className="space-y-6">
            {items.map((item, i) => {
              const meta = typeMeta[item.type];
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.55 }}
                  className="flex gap-6 items-start"
                >
                  <div
                    className="w-12 h-12 rounded-full hidden md:flex items-center justify-center flex-shrink-0 border-2 z-10"
                    style={{
                      background: meta.bg,
                      color: meta.color,
                      borderColor: meta.border,
                    }}
                  >
                    <IconComp />
                  </div>

                  <div className="flex-1 rounded-2xl p-5 border border-slate-200 bg-white transition-all duration-300 hover:border-primary/35 hover:shadow-lg hover:shadow-sky-100 hover:-translate-y-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <h3 className="text-slate-900 font-bold text-base leading-snug">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span
                          className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border"
                          style={{
                            background: meta.bg,
                            color: meta.color,
                            borderColor: meta.border,
                          }}
                        >
                          <meta.icon size={13} />
                          {meta.label}
                          {item.current && (
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse ml-0.5"></span>
                          )}
                        </span>
                        <span className="text-slate-500 text-xs whitespace-nowrap">
                          {item.period}
                        </span>
                      </div>
                    </div>

                    <p className="text-primary-dark text-sm mb-3">{item.org}</p>

                    {item.desc && (
                      <p className="text-slate-500 text-sm leading-relaxed mb-3">
                        {item.desc}
                      </p>
                    )}

                    {item.tech.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {item.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-full text-xs text-slate-700 border border-slate-200 bg-slate-50"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
