import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaMedium, FaBars, FaTimes } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { trackEvent } from "../lib/analytics";

const NAV_LINKS = [
  { name: "About", href: "/#about" },
  { name: "Technologies", href: "/technologies" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/#projects" },
  { name: "Research", href: "/research" },
  { name: "Contact", href: "/#contact" },
];

const Navbar = ({ theme, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.1 }
    }
  };

  const mobileMenuVariants = {
    closed: { x: "100%", transition: { type: "spring", stiffness: 300, damping: 30 } },
    open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "py-3 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-2xl border-b border-purple-500/10 dark:border-purple-500/20 shadow-2xl shadow-purple-500/5 dark:shadow-purple-500/10"
        : "py-6 bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto pt-10 px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Name as Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-shrink-0 items-center"
        >
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-1 group"
          >
            <span className="text-3xl font-bold tracking-tighter text-neutral-900 dark:text-white">Pubudu</span>
            <span className="w-2 h-2 rounded-full bg-purple-500 group-hover:animate-pulse"></span>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname + location.hash === link.href ||
                (location.pathname === '/' && link.href === '/#about' && !location.hash);

              return (
                <motion.div key={link.name} whileHover={{ y: -1 }}>
                  <Link
                    to={link.href}
                    onClick={() => trackEvent("Navigation", "Click", link.name)}
                    className={`${isActive ? "text-purple-600 dark:text-purple-100" : "text-neutral-600 dark:text-neutral-200"} hover:text-purple-500 dark:hover:text-purple-400 transition-colors relative group py-2 font-medium`}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="flex items-center gap-4 ml-4 pl-4 border-l border-neutral-200 dark:border-neutral-800">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                const nextTheme = theme === 'dark' ? 'light' : 'dark';
                trackEvent("User Interaction", "Theme Toggle", nextTheme);
                toggleTheme();
              }}
              className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors border border-neutral-200 dark:border-neutral-800"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              href="https://www.linkedin.com/in/prabashana-pubudu-a707b0230/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("Social Link", "Click", "LinkedIn")}
              className="text-neutral-700 dark:text-neutral-400 hover:text-purple-600 dark:hover:text-white transition-colors text-xl"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: -5 }}
              href="https://github.com/Pubba2000Creation"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("Social Link", "Click", "GitHub")}
              className="text-neutral-700 dark:text-neutral-400 hover:text-purple-600 dark:hover:text-white transition-colors text-xl"
            >
              <FaGithub />
            </motion.a>
          </div>
        </div>

        {/* Mobile Toggle & Mobile Theme Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <button
            onClick={() => {
              const nextTheme = theme === 'dark' ? 'light' : 'dark';
              trackEvent("User Interaction", "Theme Toggle", nextTheme);
              toggleTheme();
            }}
            className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800"
          >
            {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-neutral-900 dark:text-white p-2 hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-lg transition-colors"
          >
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/70 dark:bg-black/90 backdrop-blur-md z-[100] lg:hidden"
            />
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white dark:bg-neutral-950 z-[110] shadow-2xl lg:hidden p-10 flex flex-col border-l border-neutral-200 dark:border-neutral-800"
            >
              <div className="flex justify-between items-center mb-10 px-2">
                <Link
                  to="/"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="flex items-center gap-1 group"
                >
                  <span className="text-3xl font-bold tracking-tighter text-neutral-900 dark:text-white">Pubudu</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse"></span>
                </Link>
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-neutral-500 dark:text-neutral-400 p-2 hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-full transition-colors">
                  <FaTimes size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-6 px-2">
                {NAV_LINKS.map((link) => (
                  <motion.div key={link.name}>
                    <Link
                      to={link.href}
                      onClick={() => {
                        trackEvent("Navigation", "Click", link.name);
                        setIsMobileMenuOpen(false);
                      }}
                      whileHover={{ x: 10 }}
                      className="text-xl font-medium text-neutral-700 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-400 tracking-wide transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-neutral-200 dark:border-neutral-900 px-2">
                <p className="text-[10px] text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.3em] mb-6 font-semibold">Social Connect</p>
                <div className="flex items-center gap-8 text-xl text-neutral-600 dark:text-neutral-400">
                  <a href="https://www.linkedin.com/in/prabashana-pubudu-a707b0230/" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("Social Link", "Click", "LinkedIn")} className="hover:text-neutral-900 dark:hover:text-white transition-colors"><FaLinkedin /></a>
                  <a href="https://github.com/Pubba2000Creation" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("Social Link", "Click", "GitHub")} className="hover:text-neutral-900 dark:hover:text-white transition-colors"><FaGithub /></a>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("Social Link", "Click", "Facebook")} className="hover:text-neutral-900 dark:hover:text-white transition-colors"><FaFacebook /></a>
                  <a href="https://medium.com/@prabashanapubudu" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("Social Link", "Click", "Medium")} className="hover:text-neutral-900 dark:hover:text-white transition-colors"><FaMedium /></a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

Navbar.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Navbar;
