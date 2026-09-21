import React from "react";
import { motion } from "framer-motion";
import {
  SiAngular,
  SiBurpsuite,
  SiCss3,
  SiDocker,
  SiFigma,
  SiFlutter,
  SiGitlab,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOwasp,
  SiPhp,
  SiPostgresql,
  SiSpringboot,
  SiTailwindcss,
  SiVuedotjs,
  SiWireshark,
} from "react-icons/si";
import { GrJava, GrReactjs } from "react-icons/gr";
import { MdApi, MdSecurity } from "react-icons/md";
import { IoMdGitBranch } from "react-icons/io";
import { FaNetworkWired, FaServer } from "react-icons/fa6";

const About = () => {
  const techTicker = [
    { name: "HTML5", icon: <SiHtml5 />, color: "#E34C26" },
    { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#CA8A04" },
    { name: "React JS", icon: <GrReactjs />, color: "#0284C7" },
    { name: "Next JS", icon: <SiNextdotjs />, color: "#111827" },
    { name: "Angular", icon: <SiAngular />, color: "#DD0031" },
    { name: "Vue.js", icon: <SiVuedotjs />, color: "#42B883" },
    { name: "Laravel", icon: <SiLaravel />, color: "#FF2D20" },
    { name: "Spring Boot", icon: <SiSpringboot />, color: "#16A34A" },
    { name: "Node JS", icon: <SiNodedotjs />, color: "#339933" },
    { name: "NestJS", icon: <SiNestjs />, color: "#E0234E" },
    { name: "Flutter", icon: <SiFlutter />, color: "#0EA5E9" },
    { name: "PHP", icon: <SiPhp />, color: "#777BB4" },
    { name: "Java", icon: <GrJava />, color: "#B07219" },
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
    { name: "CI / CD", icon: <IoMdGitBranch />, color: "#F05033" },
    { name: "GitLab", icon: <SiGitlab />, color: "#E24329" },
    { name: "Linux", icon: <SiLinux />, color: "#111827" },
    { name: "Réseaux", icon: <FaNetworkWired />, color: "#0F766E" },
    { name: "Systèmes", icon: <FaServer />, color: "#475569" },
    { name: "OWASP", icon: <SiOwasp />, color: "#2563EB" },
    { name: "Nmap", icon: <MdSecurity />, color: "#2563EB" },
    { name: "Wireshark", icon: <SiWireshark />, color: "#1679A7" },
    { name: "Burp Suite", icon: <SiBurpsuite />, color: "#F97316" },
    { name: "REST API", icon: <MdApi />, color: "#0EA5E9" },
    { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
  ];

  const practicesTags = [
    "Clean Code",
    "API RESTful",
    "CI/CD",
    "Docker",
    "Réseaux & Systèmes",
    "Cybersécurité offensive",
    "Red Teamer Intermediate",
  ];

  const doubled = [...techTicker, ...techTicker];
  const [tickerPaused, setTickerPaused] = React.useState(false);
  const [hoveredIdx, setHoveredIdx] = React.useState(null);

  const infoCards = [
    {
      title: "Développeur Full Stack & Red Teamer Intermediate",
      subtitle: "Java · Angular · Flutter · Node JS · OWASP",
      label: "Profil",
      icon: <span>&lt;/&gt;</span>,
      wide: true,
    },
    {
      title: "Cybersécurité & Ethical Hacking",
      subtitle: "GETSMARTER Institut de Formation IT",
      label: "Formation",
      icon: <MdSecurity />,
    },
    {
      title: "Douala, Cameroun",
      subtitle: "Remote / Freelance / sur site",
      label: "Localisation",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "Français",
      subtitle: "Anglais",
      label: "Langues",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
    },
    {
      title: "Code · Sécurité",
      subtitle: "Musique · Football · Jeux",
      label: "Centres d'intérêt",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)" }}
    >
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-sky-100/70 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-100/60 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full overflow-hidden mb-16 py-6 border-y border-slate-200 bg-white/80">
        <div
          className="flex gap-3 w-max"
          style={{
            animation: "ticker 30s linear infinite",
            animationPlayState: tickerPaused ? "paused" : "running",
          }}
        >
          {doubled.map((tech, i) => (
            <span
              key={i}
              onMouseEnter={() => {
                setTickerPaused(true);
                setHoveredIdx(i);
              }}
              onMouseLeave={() => {
                setTickerPaused(false);
                setHoveredIdx(null);
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap flex-shrink-0 cursor-default transition-all duration-200"
              style={{
                background: hoveredIdx === i ? "#EFF6FF" : "#FFFFFF",
                color: "#334155",
                border:
                  hoveredIdx === i
                    ? "1px solid rgba(14,165,233,0.45)"
                    : "1px solid #E2E8F0",
                boxShadow: hoveredIdx === i ? "0 10px 25px rgba(14,165,233,0.08)" : "none",
              }}
            >
              {tech.icon && (
                <span style={{ color: tech.color, fontSize: "1rem" }}>
                  {tech.icon}
                </span>
              )}
              {tech.name}
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-5 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-4"
          >
            <div className="grid grid-cols-2 gap-4">
              {infoCards.map((card) => (
                <div
                  key={card.label}
                  className={`rounded-2xl p-5 border border-slate-200 bg-white flex flex-col gap-3 transition-all duration-300 hover:border-primary/35 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-100 ${card.wide ? "col-span-2" : ""
                    }`}
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-primary-dark bg-sky-50 text-xl">
                    {card.icon}
                  </div>
                  <div>
                    <div className="text-primary-dark text-xs font-semibold uppercase tracking-widest mb-1">
                      {card.label}
                    </div>
                    <div className="text-slate-900 font-bold text-sm sm:text-base">
                      {card.title}
                    </div>
                    <div className="text-slate-500 text-xs mt-1.5">
                      {card.subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-0.5 bg-primary"></div>
              <span className="text-primary-dark font-semibold text-sm tracking-widest uppercase">
                À propos
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Construire, sécuriser, <br />
              <span className="text-primary-dark">faire évoluer</span>
            </h2>

            <p className="text-slate-600 leading-relaxed">
              Développeur Full Stack passionné, je conçois des applications web
              et mobiles avec une attention forte portée à l'architecture, aux
              APIs et à la qualité d'exécution. Mon profil s'étend aussi aux{" "}
              <span className="text-primary-dark font-bold">
                réseaux, systèmes et environnements Linux
              </span>
              .
            </p>
            <p className="text-slate-600 leading-relaxed">
              Je développe également mes compétences en cybersécurité offensive
              comme{" "}
              <span className="text-primary-dark font-bold">
                Red Teamer Intermediate
              </span>
              , avec une base pratique autour d'OWASP, Nmap, Wireshark et Burp
              Suite pour mieux identifier, comprendre et corriger les risques.
            </p>

            <div className="flex flex-wrap gap-2">
              {practicesTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full text-xs font-medium text-slate-700 border border-slate-200 bg-white"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="CV_KAMMOE_KAMGANG_RUSSEL.pdf"
              download="CV_KAMMOE_KAMGANG_RUSSEL.pdf"
              rel="noreferrer"
              className="inline-flex items-center gap-2 w-fit px-6 py-3 rounded-xl font-semibold text-sm text-white shadow-lg shadow-sky-200"
              style={{ background: "linear-gradient(90deg, #0EA5E9, #0369A1)" }}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                />
              </svg>
              Télécharger mon CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
