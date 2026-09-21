import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import {
  digisms,
  eyeson,
  ghostnode,
  ideas,
  manageo,
  reseau1,
  socialN,
  tourshop,
  gescbank,
  shopx,
  myreklam
} from "../assets/img/";
import {
  FaGlobe,
  FaMobileScreen,
  FaNetworkWired,
  FaShieldHalved,
} from "react-icons/fa6";
import { FaCode } from "react-icons/fa";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const categoryMeta = {
    mobile: {
      label: "Mobile",
      iconBg: "#0891B2",
      iconColor: "#0891B2",
      icon: FaMobileScreen,
    },
    web: {
      label: "Web App",
      iconBg: "#2563EB",
      iconColor: "#2563EB",
      icon: FaGlobe,
    },
    security: {
      label: "Sécurité",
      iconBg: "#DC2626",
      iconColor: "#DC2626",
      icon: FaShieldHalved,
    },
    network: {
      label: "Réseau",
      iconBg: "#0F766E",
      iconColor: "#0F766E",
      icon: FaNetworkWired,
    },
    other: {
      label: "Projet",
      iconBg: "#7C3AED",
      iconColor: "#7C3AED",
      icon: FaCode,
    },
  };

  const projects = [
    {
      id: 2,
      title: "The Ideas Nest",
      category: "web",
      badge: "Web",
      description:
        "Blog dynamique en PHP avec interface d'administration complète, gestion d'articles, catégories et stockage MySQL.",
      technologies: ["HTML", "PHP", "CSS", "JS", "MySQL"],
      image: ideas,
      demo: "#",
    },
    {
      id: 3,
      title: "DigiSMS Mobile App",
      category: "mobile",
      badge: "Mobile",
      description:
        "Application mobile de messagerie pour agences marketing, avec gestion de contacts, planification et envoi de campagnes SMS personnalisées.",
      technologies: ["Flutter", "Laravel", "MySQL"],
      image: digisms,
      demo: "#",
    },
    {
      id: 4,
      title: "Social Network",
      category: "web",
      badge: "Web",
      description:
        "Réseau social moderne avec système de follow, publication d'articles, likes, commentaires et gestion complète des utilisateurs.",
      technologies: ["MongoDB", "React JS", "Node JS"],
      image: socialN,
      demo: "#",
    },
    {
      id: 5,
      title: "GhostNode Webshell",
      category: "security",
      badge: "Sécurité",
      description:
        "Interface WebShell en PHP permettant d'exécuter des commandes système, d'explorer les fichiers serveur et d'interagir avec l'environnement distant.",
      technologies: ["HTML", "PHP", "CSS", "JS"],
      image: ghostnode,
      demo: "#",
    },
    {
      id: 6,
      title: "Infrastructure Réseau 3-Tier",
      category: "network",
      badge: "Réseau",
      description:
        "Infrastructure 3-Tier sécurisée intégrant VLAN, HSRP, LACP, OSPF et DHCP avec redondance et haute disponibilité, simulée sous Packet Tracer.",
      technologies: ["Cisco", "DHCP", "HSRP", "VLAN", "OSPF"],
      image: reseau1,
      demo: reseau1,
    },
    {
      id: 7,
      title: "Eyeson Mobile App",
      category: "mobile",
      badge: "Mobile",
      description:
        "Application de contrôle parental avancé avec surveillance d'activité en temps réel, gestion du temps d'écran, localisation et rapports détaillés.",
      technologies: ["Flutter", "Laravel", "MySQL"],
      image: eyeson,
      demo: "#",
    },
    {
      id: 8,
      title: "TourShop",
      category: "web",
      badge: "Web",
      description:
        "Plateforme e-commerce adaptative avec manipulation avancée du DOM, gestion d'événements, panier dynamique et conception responsive.",
      technologies: ["HTML", "CSS", "JS"],
      image: tourshop,
      demo: "#",
    },
    {
      id: 10,
      title: "GESCBank",
      category: "web",
      badge: "Web",
      description:
        "Application bancaire moderne avec gestion de comptes, transactions et tableaux de bord analytiques, construite avec Spring Boot et Angular.",
      technologies: ["Spring Boot", "Angular", "MySQL"],
      image: gescbank,
      demo: "#",
    },
    {
      id: 11,
      title: "ShopX Website",
      category: "web",
      badge: "Web",
      description:
        "Site e-commerce moderne avec catalogue produits, panier d'achat et interface utilisateur réactive développée avec Vue.js et TailwindCSS.",
      technologies: ["Vue.js", "TailwindCSS"],
      image: shopx,
      demo: "#",
    },
    {
      id: 9,
      title: "Manageo Web Application",
      category: "web",
      badge: "Web",
      description:
        "Application complète de gestion d'entreprise avec gestion des utilisateurs, rôles, permissions, suivi des projets et supervision des opérations métiers.",
      technologies: ["Laravel", "MySQL", "jQuery", "Bootstrap"],
      image: manageo,
      demo: "#",
    },
    {
      id: 12,
      title: "MyReklam",
      category: "mobile",
      badge: "Mobile",
      description:
        "Plateforme qui digitalise le bouche-à-oreille : publiez bons plans, offres et événements, recommandez des contacts et gagnez des points « my's » convertibles en cartes cadeaux.",
      technologies: ["Flutter", "Firebase", "Laravel"],
      image: myreklam,
      demo: "#",
    },
  ];

  const categories = [
    { id: "all", label: "Tous" },
    { id: "web", label: "Web" },
    { id: "mobile", label: "Mobile" },
    { id: "security", label: "Sécurité" },
    { id: "network", label: "Réseau" },
  ];

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);;

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-white">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-100/70 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-100/60 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-5 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-primary"></div>
            <span className="text-primary-dark font-semibold text-sm tracking-widest uppercase">
              Réalisations
            </span>
          </div>
          <h2 className="text-4xl md:text-4xl font-medium text-slate-900 mb-3">
            Projets Notables
          </h2>
          <p className="text-slate-500 max-w-md mx-auto text-sm leading-relaxed">
            Des solutions concrètes en web, mobile, sécurité et{" "}
            <span className="text-primary-dark">réseaux & systèmes</span>.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${filter === cat.id
                ? "bg-primary text-white border-primary shadow-lg shadow-sky-100"
                : "border-slate-200 text-slate-600 hover:border-primary/40 hover:text-primary-dark bg-white"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => {
            const meta = categoryMeta[project.category] || categoryMeta.other;
            const IconComp = meta.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{
                  y: -6,
                  transition: { type: "spring", stiffness: 400, damping: 20 },
                }}
                className="rounded-2xl border border-slate-200 bg-white flex flex-col overflow-hidden hover:border-primary/35 hover:shadow-lg hover:shadow-sky-100"
              >
                <div
                  className="h-56 w-full flex-shrink-0 bg-slate-100"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    backgroundRepeat: "no-repeat",
                  }}
                />

                <div className="flex flex-col gap-3 p-5 flex-1">
                  <div className="flex items-center justify-between">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: meta.iconBg + "18",
                        color: meta.iconColor,
                      }}
                    >
                      <IconComp size={17} />
                    </div>
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full border"
                      style={{
                        background: meta.iconBg + "12",
                        color: meta.iconColor,
                        borderColor: meta.iconBg + "44",
                      }}
                    >
                      {project.badge}
                    </span>
                  </div>

                  <h3 className="text-slate-900 font-bold text-lg leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-full text-xs text-slate-700 border border-slate-200 bg-slate-50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.demo && project.demo !== "#" ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-primary-dark text-sm font-semibold hover:opacity-80 transition-opacity pt-1"
                    >
                      Voir le projet <ExternalLink size={13} />
                    </a>
                  ) : (
                    <span className="text-slate-400 text-xs italic pt-1">
                      Projet privé / NDA
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
