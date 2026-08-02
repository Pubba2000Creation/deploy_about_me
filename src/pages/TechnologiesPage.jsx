import PropTypes from "prop-types";
import SEO from "../components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaCode } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Technologies from "../components/Technologies";

const TechnologiesPage = ({ theme, toggleTheme }) => {
  return (
    <div className="container mx-auto px-10 pt-20 lg:pt-24 min-h-screen text-neutral-900 dark:text-neutral-300">
      <SEO title="Technologies & Skills" description="Comprehensive list of tools, languages, and frameworks." />
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

        <div className="flex items-center gap-4 mb-2 overflow-hidden">
          <FaCode className="text-4xl text-purple-600 dark:text-purple-400" />
          <h1 className="text-5xl font-thin tracking-tight text-neutral-900 dark:text-white">
            Technical <span className="text-purple-600 dark:text-purple-500 font-normal">Expertise</span>
          </h1>
        </div>
        <p className="text-neutral-600 dark:text-neutral-400 font-light mb-16 tracking-wide">A comprehensive overview of my technical stack and specialized tools.</p>

        <Technologies />
      </div>
    </div>
  );
};

TechnologiesPage.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default TechnologiesPage;
