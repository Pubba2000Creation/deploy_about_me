import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaBriefcase } from "react-icons/fa";

const ExperienceSummary = () => {
  // Take only the most recent experience for the summary
  const latestExperience = EXPERIENCES[0];

  return (
    <div id="experience-summary" className="scroll-mt-24 border-b border-neutral-900 pb-20 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Side */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-neutral-100/20 text-neutral-100 text-xs font-medium uppercase tracking-widest mb-6">
              <FaBriefcase className="text-[10px]" />
              Experience Highlight
            </div>

            <h2 className="text-4xl lg:text-5xl font-thin tracking-tight text-white mb-6">
              Professional <span className="text-neutral-500">Journey</span>
            </h2>

            <p className="text-neutral-400 font-light leading-relaxed mb-8 text-lg">
              With over 3+ years of experience across freelance and corporate roles, I specialize in building
              high-performance backend architectures and scalable full-stack systems. Currently focusing on
              <span className="text-purple-400/80 font-normal"> NestJS, AI integrations, and Cloud deployments.</span>
            </p>

            <Link
              to="/experience"
              className="inline-flex items-center gap-3 px-8 py-4 bg-purple-500 hover:bg-purple-600 text-white rounded-xl font-bold transition-all shadow-xl shadow-purple-500/10 group"
            >
              View Full Experience
              <FaArrowRight className="text-sm transform transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Card Side */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full"
          >
            <div className="p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800/50 backdrop-blur-xl relative overflow-hidden group">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-600/10 blur-[100px] -z-10 rounded-full group-hover:bg-purple-600/20 transition-colors"></div>

              <div className="flex justify-between items-start mb-6">
                <span className="text-sm font-medium text-purple-400">{latestExperience.year}</span>
                <span className="px-3 py-1 bg-neutral-950 border border-neutral-800 rounded-lg text-[10px] text-neutral-200 uppercase tracking-tighter">Latest Role</span>
              </div>

              <h3 className="text-2xl font-semibold text-neutral-200 mb-2">{latestExperience.role}</h3>
              <p className="text-purple-400/80 font-light mb-4">{latestExperience.company}</p>

              <p className="text-neutral-400 font-light line-clamp-3 mb-6 text-sm italic">
                {latestExperience.description.split('\n')[0]}
              </p>

              <div className="flex flex-wrap gap-2">
                {latestExperience.technologies.slice(0, 4).map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-neutral-950 border border-neutral-800 rounded text-[10px] text-orange-200/70">
                    {tech}
                  </span>
                ))}
                <span className="text-[10px] text-neutral-600 self-center">+{latestExperience.technologies.length - 4} more</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSummary;
