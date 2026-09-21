import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { hero } from "../assets/img";
import { SiDocker, SiFlutter, SiSpringboot } from "react-icons/si";
import { GrNode } from "react-icons/gr";
import { FaNetworkWired, FaShieldHalved } from "react-icons/fa6";

const TYPING_TEXTS = [
  "Développeur Full Stack & Red Teamer Intermediate",
  "Applications web, mobile, sécurité offensive et systèmes",
];

const Hero = () => {
  const [typingIndex, setTypingIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = TYPING_TEXTS[typingIndex];
    let timeout;
    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        80,
      );
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length - 1)),
        40,
      );
    } else {
      setIsDeleting(false);
      setTypingIndex((prev) => (prev + 1) % TYPING_TEXTS.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, typingIndex]);

  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { value: "3+", label: "ans d'expérience" },
    { value: "10+", label: "projets réalisés" },
    { value: "15+", label: "compétences IT" },
  ];

  const techTags = [
    { name: "Node JS", icon: <GrNode />, color: "#339933" },
    { name: "Flutter", icon: <SiFlutter />, color: "#0EA5E9" },
    { name: "Spring Boot", icon: <SiSpringboot />, color: "#16A34A" },
    { name: "Docker", icon: <SiDocker />, color: "#2563EB" },
    { name: "Réseaux", icon: <FaNetworkWired />, color: "#0F766E" },
    { name: "Red Team", icon: <FaShieldHalved />, color: "#DC2626" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-background"
      style={{
        background:
          "linear-gradient(160deg, #F8FAFC 0%, #EFF6FF 52%, #ECFEFF 100%)",
      }}
    >
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
      <div className="absolute -top-24 right-[-10%] w-[520px] h-[520px] bg-sky-200/45 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-[-12%] w-[460px] h-[460px] bg-teal-100/70 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-5 lg:px-12 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col gap-6 order-2 lg:order-1"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-0.5 bg-primary flex-shrink-0"></div>
              <span className="text-primary-dark font-semibold text-xs tracking-[0.2em] uppercase">
                Bonjour, je suis
              </span>
            </div>

            <div className="leading-tight">
              <h1 className="text-6xl sm:text-7xl font-light text-slate-900 block">
                Russel
              </h1>
              <h1 className="text-6xl sm:text-7xl font-semibold text-primary-dark block">
                Kamgang
              </h1>
            </div>

            <div className="flex items-center gap-0.5 min-h-8">
              <span className="text-lg sm:text-xl font-semibold text-slate-700">
                {displayed}
              </span>
              <span className="inline-block w-0.5 h-5 bg-primary ml-0.5 animate-pulse"></span>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
              Développeur{" "}
              <span className="text-primary-dark font-semibold">Full Stack</span>{" "}
              web/mobile, je conçois des interfaces, APIs et architectures
              solides. Je renforce aussi mes projets avec des compétences en{" "}
              <span className="text-primary-dark font-semibold">
                réseaux & systèmes
              </span>{" "}
              et en{" "}
              <span className="text-primary-dark font-semibold">
                cybersécurité offensive intermediate
              </span>{" "}
              orientée Red Team.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <motion.button
                onClick={() => scrollToSection("#portfolio")}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm text-white shadow-lg shadow-sky-200"
                style={{
                  background: "linear-gradient(90deg, #0EA5E9, #0369A1)",
                }}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
                VOIR MES PROJETS
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("#contact")}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-300 text-slate-700 font-semibold text-sm hover:border-primary hover:text-primary-dark hover:bg-white transition-colors duration-200"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                ME CONTACTER
              </motion.button>

              <motion.a
                href="https://www.linkedin.com/in/russel-kamgang-9483b0347"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-600 hover:border-primary hover:text-primary-dark transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </motion.a>

              <motion.a
                href="https://github.com/russel-kamgang"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-600 hover:border-primary hover:text-primary-dark transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </motion.a>
            </div>

            <div className="flex gap-8 sm:gap-10 pt-5 border-t border-slate-200">
              {stats.map((s, i) => (
                <div key={i}>
                  <div className="text-4xl font-bold text-primary-dark">
                    {s.value}
                  </div>
                  <div className="text-slate-500 text-xs mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col gap-5 items-center order-1 lg:order-2"
          >
            <div className="relative">
              <div className="relative w-[300px] h-[300px] sm:w-[320px] sm:h-[320px]">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="absolute rounded-full border border-primary/25"
                    style={{
                      inset: 0,
                      animation: `ripple 3s ease-out ${i * 1}s infinite`,
                    }}
                  ></div>
                ))}
                <div
                  className="absolute inset-0 rounded-full shadow-2xl shadow-sky-200"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #0EA5E9 0%, #14B8A6 35%, #E0F2FE 62%, #0EA5E9 100%)",
                    padding: "3px",
                  }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <img
                      src={hero}
                      alt="Russel Kamgang"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <motion.div
                initial={{ scale: 0, y: 10 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold border border-emerald-200 bg-white text-emerald-700 shadow-lg shadow-emerald-100 whitespace-nowrap"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Disponible
              </motion.div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-full max-w-sm rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl shadow-sky-100/80 mt-2"
            >
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-200 bg-slate-50">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F57]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#FEBC2E]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#28C840]"></span>
                  <span className="ml-3 text-slate-500 text-xs">
                    russel@portfolio ~
                  </span>
                </div>
                <span className="flex items-center gap-1.5 text-xs text-emerald-600">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  disponible
                </span>
              </div>

              <div className="p-4 font-mono text-xs leading-relaxed space-y-4">
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-primary-dark">›</span>
                    <span className="text-slate-800 font-semibold"> whoami</span>
                  </div>
                  <div className="mt-1.5 text-primary-dark font-semibold">
                    Russel Kamgang
                  </div>
                  <div className="text-slate-500">
                    Développeur Full Stack & Red Teamer Intermediate
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-primary-dark">›</span>
                    <span className="text-slate-800 font-semibold">
                      {" "}
                      cat stack.json
                    </span>
                  </div>
                  <div className="mt-1.5">
                    <div className="text-slate-600">{"{"}</div>
                    <div className="ml-4 space-y-0.5">
                      <div>
                        <span className="text-sky-700">"backend"</span>
                        <span className="text-slate-400">: </span>
                        <span className="text-rose-700">
                          ["Spring Boot", "Node JS", "Laravel"]
                        </span>
                        <span className="text-slate-400">,</span>
                      </div>
                      <div>
                        <span className="text-sky-700">"frontend"</span>
                        <span className="text-slate-400">: </span>
                        <span className="text-rose-700">
                          ["React JS", "Next JS", "Angular"]
                        </span>
                        <span className="text-slate-400">,</span>
                      </div>
                      <div>
                        <span className="text-sky-700">"devops"</span>
                        <span className="text-slate-400">: </span>
                        <span className="text-rose-700">
                          ["Docker", "GitLab", "CI/CD"]
                        </span>
                        <span className="text-slate-400">,</span>
                      </div>
                      <div>
                        <span className="text-sky-700">"network_systems"</span>
                        <span className="text-slate-400">: </span>
                        <span className="text-rose-700">
                          ["Linux", "Réseaux", "Systèmes"]
                        </span>
                        <span className="text-slate-400">,</span>
                      </div>
                      <div>
                        <span className="text-sky-700">"security"</span>
                        <span className="text-slate-400">: </span>
                        <span className="text-rose-700">
                          ["OWASP", "Nmap", "Burp Suite"]
                        </span>
                      </div>
                    </div>
                    <div className="text-slate-600">{"}"}</div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-primary-dark">›</span>
                    <span className="text-slate-800 font-semibold">
                      {" "}
                      git log --oneline
                    </span>
                  </div>
                  <div className="mt-1.5 space-y-0.5">
                    <div>
                      <span className="text-amber-700">a3f2c1d</span>
                      <span className="text-slate-500">
                        {" "}
                        feat: Application Web Full Stack{" "}
                      </span>
                    </div>
                    <div>
                      <span className="text-amber-700">b7e4d9a</span>
                      <span className="text-slate-500">
                        {" "}
                        feat: Audit sécurité & systèmes{" "}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <span className="text-primary-dark">›</span>
                  <span className="inline-block w-2 h-4 bg-primary animate-pulse ml-0.5 align-middle"></span>
                </div>
              </div>
            </motion.div>

            <div className="flex flex-wrap gap-2 justify-center w-full max-w-md">
              {techTags.map((tag, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-slate-200 text-slate-700 bg-white shadow-sm"
                >
                  <span style={{ color: tag.color, fontSize: "0.9rem" }}>
                    {tag.icon}
                  </span>
                  {tag.name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="flex flex-col items-center mt-14 cursor-pointer"
          onClick={() => scrollToSection("#about")}
        >
          <span className="text-slate-500 text-xs tracking-[0.2em] uppercase mb-2">
            Défiler
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg
              className="w-5 h-5 text-slate-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
