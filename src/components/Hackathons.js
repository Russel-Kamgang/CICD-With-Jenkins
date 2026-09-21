import React from 'react';
import { motion } from 'framer-motion';

const Hackathons = () => {
  const hackathons = [
    {
      name: 'HackYaoundé 2024',
      date: 'Mars 2024',
      project: 'EduTrack – Système de suivi des étudiants',
      description: 'Plateforme de suivi en temps réel des étudiants pour les établissements scolaires',
      result: '2ème place',
      medal: '🥈',
      resultColor: '#C0C0C0',
      tech: ['React', 'Node.js', 'Socket.io'],
    },
    {
      name: 'DevFest Hackathon 2023',
      date: 'Novembre 2023',
      project: 'AgriConnect – Plateforme agricole intelligente',
      description: 'Application mettant en relation agriculteurs et acheteurs avec prédiction des prix',
      result: 'Finaliste Top 5',
      medal: '🏅',
      resultColor: '#00D9FF',
      tech: ['Flutter', 'FastAPI', 'TensorFlow Lite'],
    },
    {
      name: 'CamerHack 2022',
      date: 'Juillet 2022',
      project: 'MobiPay – Solution de paiement mobile',
      description: 'Solution de paiement mobile intégrant MTN MoMo et Orange Money',
      result: '1er prix',
      medal: '🥇',
      resultColor: '#FFD700',
      tech: ['React Native', 'Node.js', 'MTN MoMo API'],
    },
  ];

  return (
    <section id="hackathons" className="py-24 relative overflow-hidden" style={{ background: '#071120' }}>
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-primary"></div>
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Hackathons</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Mes <span className="text-primary">Hackathons</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {hackathons.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="rounded-2xl p-6 border border-white/8 hover:border-primary/30 transition-all duration-300 flex flex-col gap-4"
              style={{ background: '#0d1f38' }}
            >
              {/* Top row: medal + result badge */}
              <div className="flex items-start justify-between gap-2">
                <span className="text-3xl">{h.medal}</span>
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full border flex-shrink-0"
                  style={{
                    color: h.resultColor,
                    borderColor: h.resultColor + '40',
                    background: h.resultColor + '15',
                  }}
                >
                  {h.result}
                </span>
              </div>

              {/* Event name + date */}
              <div>
                <h3 className="text-white font-bold text-base">{h.name}</h3>
                <p className="text-gray-500 text-xs mt-0.5">{h.date}</p>
              </div>

              {/* Project */}
              <div>
                <p className="text-primary font-semibold text-sm">{h.project}</p>
                <p className="text-gray-400 text-xs mt-1 leading-relaxed">{h.description}</p>
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-white/8">
                {h.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full text-xs font-medium text-gray-300 border border-white/10"
                    style={{ background: 'rgba(255,255,255,0.04)' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
