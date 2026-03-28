import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaFacebook, FaMedium, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { name: "About", href: "/#about" },
  { name: "Technologies", href: "/#technologies" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/#projects" },
  { name: "Research", href: "/research" },
  { name: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "py-3 bg-neutral-950/80 backdrop-blur-2xl border-b border-purple-500/20 shadow-2xl shadow-purple-500/10"
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
            <span className="text-3xl font-bold tracking-tighter text-white">Pubudu</span>
            <span className="w-2 h-2 rounded-full bg-purple-500 group-hover:animate-pulse"></span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8 text-neutral-400 text-sm uppercase tracking-[0.2em] font-medium">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.href || (link.href.startsWith("/#") && location.pathname === "/");
              return (
                <motion.div key={link.name} whileHover={{ y: -1 }}>
                  <Link
                    to={link.href}
                    className={`${isActive ? "text-purple-100" : "text-neutral-200"} hover:text-purple-400 transition-colors relative group py-2`}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="h-4 w-px bg-neutral-800 mx-2"></div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 text-lg text-neutral-400">
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
                className="hover:text-white transition-all duration-300"
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-neutral-300 hover:text-white focus:outline-none transition-transform active:scale-90"
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
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[60] lg:hidden"
            />
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-neutral-950 z-[70] shadow-2xl lg:hidden p-10 flex flex-col"
            >
              <div className="flex justify-between items-center mb-16 px-2">
                <Link
                  to="/"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="flex items-center gap-1 group"
                >
                  <span className="text-3xl font-bold tracking-tighter text-white">Pubudu</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse"></span>
                </Link>
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-neutral-400 p-2 hover:bg-neutral-900 rounded-full transition-colors">
                  <FaTimes size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-8 px-2">
                {NAV_LINKS.map((link) => (
                  <motion.div key={link.name}>
                    <Link
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      whileHover={{ x: 10 }}
                      className="text-3xl font-thin text-neutral-300 hover:text-purple-400 tracking-wide transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto pt-12 border-t border-neutral-900 px-2">
                <p className="text-xs text-neutral-500 uppercase tracking-[0.3em] mb-8 font-semibold">Social Connect</p>
                <div className="flex items-center gap-8 text-2xl text-neutral-400">
                  <a href="https://www.linkedin.com/in/prabashana-pubudu-a707b0230/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaLinkedin /></a>
                  <a href="https://github.com/Pubba2000Creation" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaGithub /></a>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaFacebook /></a>
                  <a href="https://medium.com/@prabashanapubudu" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaMedium /></a>
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
