import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const refName = useRef(null);
  const refEmail = useRef(null);
  const refSubject = useRef(null);
  const refMessage = useRef(null);
  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    refName.current.textContent = "";
    refEmail.current.textContent = "";
    refSubject.current.textContent = "";
    refMessage.current.textContent = "";
    setFormStatus("sending");

    if (!formData.name.trim()) {
      refName.current.textContent = "Veuillez remplir le champ nom !";
      setFormStatus("");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      refEmail.current.textContent = "Veuillez entrer un email valide !";
      setFormStatus("");
      return;
    }
    if (!formData.subject.trim()) {
      refSubject.current.textContent = "Veuillez remplir le champ sujet !";
      setFormStatus("");
      return;
    }
    if (!formData.message.trim()) {
      refMessage.current.textContent = "Veuillez remplir le champ message !";
      setFormStatus("");
      return;
    }

    emailjs
      .send(
        "service_1",
        "template_3agys85",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          year: new Date().getFullYear(),
        },
        "BAiAzV1bKJT3aZtkZ",
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setTimeout(() => {
            setFormStatus("success");
            setFormData({
              name: "",
              email: "",
              phone: "",
              subject: "",
              message: "",
            });

            setTimeout(() => {
              setFormStatus("");
            }, 5000);
          }, 1200);
        },
        (err) => {
          console.error("Erreur :", err);
          setFormStatus("");
          alert("Une erreur est survenue lors de l'envoi du message. Réessayez.");
        },
      );
  };

  const contactCards = [
    {
      icon: Mail,
      iconBg: "#EFF6FF",
      iconColor: "#2563EB",
      label: "EMAIL",
      value: "russelkammoe9@gmail.com",
      sub: null,
      link: "mailto:russelkammoe9@gmail.com",
    },
    {
      icon: SiWhatsapp,
      iconBg: "#ECFDF5",
      iconColor: "#16A34A",
      label: "WHATSAPP",
      value: "+237 698 83 79 94",
      sub: null,
      link: "https://wa.me/237698837994",
    },
    {
      icon: Linkedin,
      iconBg: "#EFF6FF",
      iconColor: "#2563EB",
      label: "LINKEDIN",
      value: "russel-kamgang",
      sub: null,
      link: "https://www.linkedin.com/in/russel-kamgang-9483b0347",
    },
    {
      icon: MapPin,
      iconBg: "#F8FAFC",
      iconColor: "#64748B",
      label: "LOCALISATION",
      value: "Douala, Cameroun",
      sub: "Remote OK · Disponible",
      link: "#",
    },
  ];

  const socialIcons = [
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/russel-kamgang-9483b0347",
    },
    { icon: Mail, url: "mailto:russelkammoe9@gmail.com" },
    { icon: Github, url: "https://github.com/Russel-Kamgang" },
    { icon: SiWhatsapp, url: "https://wa.me/237698837994" },
  ];

  const fieldClass =
    "w-full px-4 py-3 rounded-xl text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-primary/40 transition-all duration-200 border border-slate-200 bg-slate-50 focus:bg-white";

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white">
      <div className="absolute top-0 left-0 w-96 h-96 bg-sky-100/70 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-100/60 rounded-full blur-3xl pointer-events-none"></div>

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
              Contact
            </span>
          </div>
          <h2 className="text-4xl md:text-4xl font-medium text-slate-900 mb-4">
            Travaillons Ensemble
          </h2>
          <p className="text-slate-500 max-w-md mx-auto text-sm leading-relaxed">
            Une idée de projet, un poste à pourvoir ou un besoin en développement
            et sécurité ? Je suis ouvert aux opportunités.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-3"
          >
            {contactCards.map((card, i) => (
              <motion.a
                key={card.label}
                href={card.link}
                target={card.link.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 rounded-2xl border border-slate-200 bg-white hover:border-primary/35 hover:shadow-lg hover:shadow-sky-100 transition-all duration-200 group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: card.iconBg, color: card.iconColor }}
                >
                  <card.icon size={17} />
                </div>
                <div>
                  <div className="text-slate-400 text-xs font-semibold tracking-widest mb-0.5">
                    {card.label}
                  </div>
                  <div className="text-slate-900 text-sm font-medium group-hover:text-primary-dark transition-colors duration-200">
                    {card.value}
                  </div>
                  {card.sub && (
                    <div className="text-slate-500 text-xs mt-0.5">
                      {card.sub}
                    </div>
                  )}
                </div>
              </motion.a>
            ))}

            <div className="flex gap-2 mt-2">
              {socialIcons.map((s) => (
                <motion.a
                  key={s.url}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center border border-slate-200 bg-white ${
                    s.url === "https://wa.me/237698837994"
                      ? "text-green-500 hover:text-green-600"
                      : "text-slate-500 hover:text-primary-dark"
                  } hover:border-primary/35 transition-all duration-200`}
                >
                  <s.icon size={15} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            whileHover={{
              y: -6,
              transition: { type: "spring", stiffness: 400, damping: 20 },
            }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl p-6 border border-slate-200 bg-white hover:border-primary/35 hover:shadow-lg hover:shadow-sky-100 flex flex-col gap-4"
            >
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-widest mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={fieldClass}
                  placeholder="Jean Dupont"
                />
                <span ref={refName} className="text-red-500 text-xs mt-1 block"></span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-widest mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={fieldClass}
                  placeholder="jean@exemple.com"
                />
                <span ref={refEmail} className="text-red-500 text-xs mt-1 block"></span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-widest mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={fieldClass}
                  placeholder="Proposition de collaboration"
                />
                <span ref={refSubject} className="text-red-500 text-xs mt-1 block"></span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-widest mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`${fieldClass} resize-none`}
                  placeholder="Décrivez votre projet ou opportunité..."
                ></textarea>
                <span ref={refMessage} className="text-red-500 text-xs mt-1 block"></span>
              </div>

              <motion.button
                type="submit"
                disabled={formStatus === "sending"}
                whileHover={{ scale: formStatus === "sending" ? 1 : 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 uppercase tracking-widest bg-primary hover:bg-primary-dark shadow-lg shadow-sky-100"
              >
                {formStatus === "sending" ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></div>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    Envoyer le message
                  </>
                )}
              </motion.button>

              {formStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-xl border border-green-200 text-green-700 bg-green-50 text-sm"
                >
                  <span>✓</span>
                  Message envoyé ! Je vous répondrai très bientôt.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
