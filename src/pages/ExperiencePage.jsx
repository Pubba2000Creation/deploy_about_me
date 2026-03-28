import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import PropTypes from "prop-types";
import Navbar from "../components/Navbar";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

const ExperiencePage = ({ theme, toggleTheme }) => {
  return (
    <div className="container mx-auto px-10 pt-20 lg:pt-24 min-h-screen text-neutral-900 dark:text-neutral-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors py-2 px-4 rounded-full bg-neutral-100 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800"
          >
            <FaArrowLeft className="text-sm" />
            <span className="text-sm font-medium uppercase tracking-widest">Back to Home</span>
          </Link>
        </motion.div>

        <Experience />
      </div>

      <Contact />
    </div>
  );
};

ExperiencePage.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default ExperiencePage;
