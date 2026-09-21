import React from "react";
import { motion } from "framer-motion";
import { BiGlobe } from "react-icons/bi";
import { FaCodeBranch } from "react-icons/fa";
import { FaMobileScreen, FaNetworkWired, FaShieldHalved } from "react-icons/fa6";
import { Server } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <BiGlobe />,
      iconBg: "#2563EB",
      title: "Développement Web",
      desc: (
        <>
          Applications web modernes, performantes et scalables.{" "}
          <span className="text-primary-dark">APIs RESTful</span> robustes,
          interfaces réactives et architectures propres.
        </>
      ),
      tags: ["Laravel", "Angular", "Node.js", "REST API", "Tailwind CSS"],
      accentColor: "#2563EB",
    },
    {
      icon: <FaMobileScreen />,
      iconBg: "#0891B2",
      title: "Développement Mobile",
      desc: (
        <>
          Applications <span className="text-primary-dark">iOS & Android</span>{" "}
          avec une seule base de code, des expériences fluides et des
          performances solides.
        </>
      ),
      tags: ["Flutter", "Dart", "REST API", "Firebase"],
      accentColor: "#0891B2",
    },
    {
      icon: <Server />,
      iconBg: "#059669",
      title: "Architecture & Backend",
      desc: (
        <>
          Conception de <span className="text-primary-dark">microservices</span>,
          APIs sécurisées, gestion de bases de données et optimisation des
          performances.
        </>
      ),
      tags: ["Microservices", "Docker", "Java", "Spring Boot"],
      accentColor: "#059669",
    },
    {
      icon: <FaNetworkWired />,
      iconBg: "#0F766E",
      title: "Réseaux & Systèmes",
      desc: (
        <>
          Administration Linux, diagnostic réseau, bases infrastructure,
          durcissement système et support technique pour des environnements
          fiables.
        </>
      ),
      tags: ["Linux", "TCP/IP", "VLAN", "Diagnostic", "Systèmes"],
      accentColor: "#0F766E",
    },
    {
      icon: <FaCodeBranch />,
      iconBg: "#D97706",
      title: "DevOps & CI/CD",
      desc: (
        <>
          Mise en place de pipelines <span className="text-primary-dark">CI/CD</span>,
          conteneurisation Docker, automatisation des déploiements et suivi des
          applications.
        </>
      ),
      tags: ["Docker", "GitLab", "Linux", "CI/CD"],
      accentColor: "#D97706",
    },
    {
      icon: <FaShieldHalved />,
      iconBg: "#DC2626",
      title: "Cybersécurité",
      desc: (
        <>
          Audit de sécurité, tests d'intrusion éthiques, analyse de
          vulnérabilités et approche{" "}
          <span className="text-primary-dark">Red Teamer Intermediate</span> pour mieux
          sécuriser les applications.
        </>
      ),
      tags: ["OWASP", "Nmap", "Wireshark", "Burp Suite", "Red Team"],
      accentColor: "#DC2626",
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-surface-soft">
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100/70 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100/60 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-5 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-primary"></div>
            <span className="text-primary-dark font-semibold text-sm tracking-widest uppercase">
              Ce que je fais
            </span>
          </div>
          <h2 className="text-4xl md:text-4xl font-medium text-slate-900 mb-3">
            Mes Services
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            Des solutions sur mesure, de la{" "}
            <span className="text-primary-dark">conception</span> à la
            sécurisation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 400, damping: 20 } }}
              className="group rounded-2xl p-6 border border-slate-200 bg-white flex flex-col gap-4 hover:border-primary/35 hover:shadow-lg hover:shadow-sky-100"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl"
                style={{ background: service.iconBg + "18", color: service.iconBg }}
              >
                {service.icon}
              </div>

              <h3 className="text-slate-900 font-bold text-lg leading-snug">
                {service.title}
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed flex-1">
                {service.desc}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full text-xs text-slate-700 border border-slate-200 bg-slate-50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                <span className="text-slate-500 text-xs font-medium uppercase tracking-widest">
                  Sur devis
                </span>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-sm font-semibold flex items-center gap-1 transition-colors duration-200 hover:opacity-80"
                  style={{ color: service.accentColor }}
                >
                  Me contacter
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
