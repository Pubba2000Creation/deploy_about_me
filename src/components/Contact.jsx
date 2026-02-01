import { useState, useRef } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { CONTACT } from "../constants";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaWhatsapp } from "react-icons/fa";

const ContactInfo = ({ icon: Icon, text, label, subtext, href }) => {
  const content = (
    <motion.div
      whileHover={{ x: 10 }}
      className="flex items-start gap-6 p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800/50 backdrop-blur-sm hover:border-purple-500/30 transition-all group w-full"
    >
      <div className="p-4 bg-purple-500/10 rounded-xl text-purple-400 group-hover:scale-110 transition-transform">
        <Icon className="text-2xl" />
      </div>
      <div>
        <p className="text-sm font-medium text-neutral-500 uppercase tracking-widest mb-1">{label}</p>
        <h3 className="text-lg font-light text-neutral-100">{text}</h3>
        {subtext && <p className="text-xs text-neutral-500 mt-1 font-light">{subtext}</p>}
      </div>
    </motion.div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block w-full">
      {content}
    </a>
  ) : content;
};

ContactInfo.propTypes = {
  icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  subtext: PropTypes.string,
  href: PropTypes.string,
};

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID ;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ;

    if (serviceId === "YOUR_SERVICE_ID" || !import.meta.env.VITE_EMAILJS_SERVICE_ID) {
      console.warn("EmailJS IDs not found in environment variables. Falling back to demo mode.");
      setTimeout(() => {
        alert("EmailJS is not configured yet. Please add your credentials to .env file.");
        setIsSubmitting(false);
      }, 1000);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setIsSubmitting(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send the message. Please try again or contact me via WhatsApp.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div id="contact" className="mt-20 border-b border-neutral-900 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-thin tracking-tight text-white mb-4">
            Let&apos;s Build <span className="text-purple-500">Something Great</span>
          </h2>
          <p className="text-neutral-400 font-light max-w-2xl mx-auto">
            Ready to collaborate on your next system? Whether it&apos;s a scalable backend, AI integration, or a full-stack project, let&apos;s connect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <ContactInfo
              icon={FaMapMarkerAlt}
              label="Location"
              text={CONTACT.address}
              subtext="Horana, Western Province, Sri Lanka"
            />
            <ContactInfo
              icon={FaPhoneAlt}
              label="Phone"
              text={CONTACT.phoneNo}
              subtext="Click to call"
              href={`tel:${CONTACT.phoneNo.replace(/\s+/g, '')}`}
            />
            <ContactInfo
              icon={FaWhatsapp}
              label="WhatsApp"
              text={CONTACT.whatsapp}
              subtext="Direct message for quick response"
              href={`https://wa.me/${CONTACT.whatsapp.replace('+', '')}`}
            />
            <ContactInfo
              icon={FaEnvelope}
              label="Email"
              text={CONTACT.email}
              subtext="Usually responds within 24 hours"
              href={`mailto:${CONTACT.email}`}
            />

            <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/20 mt-10">
              <h4 className="text-white font-medium mb-2">Looking for a technical consultant?</h4>
              <p className="text-neutral-400 text-sm font-light">
                I specialize in NestJS architectures, AI system pipelines, and Dockerized deployments. Let&apos;s discuss your technical roadmap.
              </p>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-8 lg:p-10 rounded-3xl bg-neutral-900/40 border border-neutral-800/50 backdrop-blur-xl shadow-2xl relative overflow-hidden"
          >
            {/* Background Glow for Form */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-600/10 blur-[100px] -z-10 rounded-full"></div>

            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="title" value="Portfolio Message" />
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-neutral-500 font-medium ml-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full px-6 py-4 rounded-xl bg-neutral-950/50 border border-neutral-800 text-white placeholder:text-neutral-700 focus:border-purple-500/50 focus:outline-none transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-neutral-500 font-medium ml-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="someone@example.com"
                  className="w-full px-6 py-4 rounded-xl bg-neutral-950/50 border border-neutral-800 text-white placeholder:text-neutral-700 focus:border-purple-500/50 focus:outline-none transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-neutral-500 font-medium ml-1">Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="How can I help you?"
                  className="w-full px-6 py-4 rounded-xl bg-neutral-950/50 border border-neutral-800 text-white placeholder:text-neutral-700 focus:border-purple-500/50 focus:outline-none transition-all resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-xl shadow-purple-900/20 disabled:opacity-70 group"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <FaPaperPlane className={`text-sm transform transition-transform ${isSubmitting ? 'translate-x-10 opacity-0' : 'group-hover:translate-x-1 group-hover:-translate-y-1'}`} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
