import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaFacebook, FaMedium, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Technologies", href: "#technologies" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0, transition: { type: "spring", damping: 25, stiffness: 200 } },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4 bg-neutral-950/80 backdrop-blur-xl border-b border-white/5 shadow-2xl" : "py-6 bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} className="flex flex-shrink-0 items-center">
          <a href="#">
            <img className="w-20 lg:w-24 h-auto" src={logo} alt="Portfolio Logo" />
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8 text-neutral-400 text-sm uppercase tracking-widest font-medium">
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -2 }}
                className="hover:text-purple-400 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          <div className="h-6 w-px bg-neutral-800 mx-2"></div>

          {/* Social Icons */}
          <div className="flex items-center gap-5 text-xl text-neutral-400">
            {[
              { icon: FaLinkedin, url: "https://www.linkedin.com/in/prabashana-pubudu-a707b0230/" },
              { icon: FaGithub, url: "https://github.com/Pubba2000Creation" },
              { icon: FaFacebook, url: "https://www.facebook.com" },
              { icon: FaMedium, url: "https://medium.com/@prabashanapubudu" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#a855f7" }}
                className="hover:text-white transition-all"
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-neutral-300 hover:text-white focus:outline-none"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
            />
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-neutral-950 z-[70] shadow-2xl lg:hidden p-8 flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <img className="w-20 h-auto" src={logo} alt="Logo" />
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-neutral-400">
                  <FaTimes size={28} />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-light text-neutral-300 hover:text-purple-400 tracking-wider transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="mt-auto pt-10 border-t border-neutral-800">
                <p className="text-sm text-neutral-500 uppercase tracking-widest mb-6 font-medium">Connect with me</p>
                <div className="flex items-center gap-6 text-2xl text-neutral-400">
                  <a href="https://www.linkedin.com/in/prabashana-pubudu-a707b0230/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                  <a href="https://github.com/Pubba2000Creation" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                  <a href="https://medium.com/@prabashanapubudu" target="_blank" rel="noopener noreferrer"><FaMedium /></a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
