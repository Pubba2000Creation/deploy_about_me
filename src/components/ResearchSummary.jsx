import { RESEARCH } from "../constants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaMicroscope } from "react-icons/fa";

const ResearchSummary = () => {
  // Take the most prominent research item
  const latestResearch = RESEARCH[0];

  return (
    <div id="research-summary" className="scroll-mt-24 border-b border-neutral-200 dark:border-neutral-900 pb-20 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
          {/* Text Side */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-neutral-100 text-xs font-medium uppercase tracking-widest mb-6">
              <FaMicroscope className="text-[10px]" />
              Research Highlight
            </div>

            <h2 className="text-4xl lg:text-5xl font-thin tracking-tight text-blue-600 dark:text-blue-400 mb-6">
              Technical <span className="text-neutral-900 dark:text-white">Research</span>
            </h2>

            <p className="text-neutral-600 dark:text-neutral-400 font-light leading-relaxed mb-8 text-lg">
              Exploring the boundaries of AI and Computer Vision. My research focuses on
              <span className="text-blue-600 dark:text-blue-400/80 font-normal"> structural health monitoring using Deep Learning (YOLO & ResNet)</span>
              to automate defect detection and cost estimation in real-world infrastructure.
            </p>

            <Link
              to="/research"
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-xl shadow-blue-900/10 dark:shadow-blue-900/20 group"
            >
              Explore Full Research
              <FaArrowRight className="text-sm transform transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Card Side */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full"
          >
            <div className="p-8 rounded-3xl bg-neutral-50/50 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800/50 backdrop-blur-xl relative overflow-hidden group">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/5 dark:bg-blue-600/10 blur-[100px] -z-10 rounded-full group-hover:bg-blue-600/10 dark:group-hover:bg-blue-600/20 transition-colors"></div>

              <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-4 line-clamp-2">{latestResearch.title}</h3>

              <p className="text-neutral-600 dark:text-neutral-400 font-light line-clamp-3 mb-6 text-sm italic">
                {latestResearch.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {latestResearch.technologies.slice(0, 4).map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded text-[10px] text-blue-600 dark:text-blue-300/70">
                    {tech}
                  </span>
                ))}
                <span className="text-[10px] text-neutral-500 dark:text-neutral-600 self-center">+{latestResearch.technologies.length - 4} more</span>
              </div>

              <div className="p-4 bg-white/50 dark:bg-black/30 rounded-2xl border border-neutral-200 dark:border-white/5">
                <p className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Key Metrics</p>
                <div className="flex justify-between text-xs">
                  <span className="text-blue-600 dark:text-blue-400 font-medium">YOLOv8 & ResNet-50</span>
                  <span className="text-neutral-500 dark:text-neutral-400">Deep Learning Ensemble</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ResearchSummary;
