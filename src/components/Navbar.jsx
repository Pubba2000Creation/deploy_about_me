import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaHome, FaCode, FaBriefcase, FaProjectDiagram, FaSearch, FaEnvelope } from "react-icons/fa";
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

const MOBILE_NAV_LINKS = [
  { name: "Home", href: "/", icon: FaHome },
  { name: "Tech", href: "/technologies", icon: FaCode },
  { name: "Proj", href: "/#projects", icon: FaProjectDiagram },
  { name: "Exp", href: "/experience", icon: FaBriefcase },
  { name: "Res", href: "/research", icon: FaSearch },
  { name: "Mail", href: "/#contact", icon: FaEnvelope },
];

const Navbar = ({ theme, toggleTheme }) => {
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
      <div className="max-w-7xl mx-auto pt-10 px-6 lg:px-12 items-center justify-between hidden lg:flex">
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

        {/* Mobile Theme Toggle ONLY (Hamburger removed) */}
        <div className="flex items-center gap-4 lg:hidden">
          <button
            onClick={() => {
              const nextTheme = theme === 'dark' ? 'light' : 'dark';
              trackEvent("User Interaction", "Theme Toggle", nextTheme);
              toggleTheme();
            }}
            className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 shadow-sm"
          >
            {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </div>
      </div>

      {/* Modern Unified Mobile Bottom Control Center */}
      <div className="lg:hidden fixed bottom-6 left-0 right-0 px-4 z-[120]">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
          className="flex items-center justify-between px-4 py-2 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-2xl border border-neutral-200/50 dark:border-neutral-800/50 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_50px_rgba(168,85,247,0.15)]"
        >
          {/* Brand Logo in Dock */}
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              trackEvent("Mobile Navigation", "Click", "Logo Home");
            }}
            className="flex flex-col items-center gap-0.5 group px-2"
          >
            <div className="relative">
              <span className="text-xl font-bold tracking-tighter text-neutral-900 dark:text-white">P.</span>
              <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-purple-500"></span>
            </div>
            <span className="text-[8px] font-bold uppercase text-neutral-400">Home</span>
          </Link>

          <div className="h-8 w-[1px] bg-neutral-200 dark:bg-neutral-800 mx-1"></div>

          {/* Nav Icons */}
          <div className="flex items-center justify-around flex-1">
            {MOBILE_NAV_LINKS.filter(l => l.name !== "Home" && l.name !== "Mail").map((link) => {
              const isActive = location.pathname + location.hash === link.href;

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => trackEvent("Mobile Navigation", "Click", link.name)}
                  className="relative flex flex-col items-center gap-1"
                >
                  <div className={`p-2 rounded-xl transition-all duration-300 ${isActive ? "text-purple-600 dark:text-purple-400 bg-purple-500/10" : "text-neutral-500 dark:text-neutral-400"}`}>
                    <link.icon className="text-lg" />
                  </div>
                  <span className={`text-[8px] font-bold uppercase tracking-tighter ${isActive ? "text-purple-600 dark:text-purple-400" : "text-neutral-500 dark:text-neutral-400"}`}>
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="h-8 w-[1px] bg-neutral-200 dark:bg-neutral-800 mx-1"></div>

          {/* Theme Toggle in Dock */}
          <button
            onClick={() => {
              const nextTheme = theme === 'dark' ? 'light' : 'dark';
              trackEvent("User Interaction", "Theme Toggle", nextTheme);
              toggleTheme();
            }}
            className="p-3 rounded-2xl bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 shadow-inner"
          >
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
      </AnimatePresence>
    </motion.nav>
  );
};

Navbar.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Navbar;
