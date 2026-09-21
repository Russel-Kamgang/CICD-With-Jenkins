import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    {
      name: 'Cisco CCNA – Réseaux Informatiques',
      issuer: 'Cisco',
      year: '2023',
      color: '#1BA0D7',
      icon: '🌐',
    },
    {
      name: 'Introduction to Cybersecurity',
      issuer: 'Cisco',
      year: '2023',
      color: '#1BA0D7',
      icon: '🔒',
    },
    {
      name: 'Cybersecurity Fundamentals',
      issuer: 'IBM',
      year: '2023',
      color: '#006699',
      icon: '🛡️',
    },
    {
      name: 'Python for Data Science',
      issuer: 'IBM',
      year: '2022',
      color: '#006699',
      icon: '🐍',
    },
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden" style={{ background: '#0a1628' }}>
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
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Certifications</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Mes <span className="text-primary">Certifications</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5 max-w-3xl">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-2xl p-6 border border-white/8 hover:border-primary/30 transition-all duration-300 flex gap-4 items-start"
              style={{ background: '#0d1f38' }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: cert.color + '20' }}
              >
                {cert.icon}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold text-sm leading-snug mb-1">{cert.name}</h3>
                <div className="flex items-center justify-between gap-2 mt-2">
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: cert.color + '20', color: cert.color }}
                  >
                    {cert.issuer}
                  </span>
                  <span className="text-gray-500 text-xs">{cert.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
