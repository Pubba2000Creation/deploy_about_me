// src/components/Experience.jsx
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div id="experience" className="scroll-mt-24 border-b border-neutral-900 pb-24 px-4 sm:px-6 lg:px-8 pt-12">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="my-16 text-center text-4xl font-thin tracking-tight text-white"
      >
        Professional <span className="text-neutral-500">Experience</span>
      </motion.h2>

      <div className="max-w-6xl mx-auto space-y-20">
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="flex flex-col lg:flex-row lg:justify-center gap-8 lg:gap-16 relative">
            {/* Timeline Year */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/4"
            >
              <div className="lg:sticky lg:top-24">
                <span className="text-lg font-medium text-neutral-400 border-l-2 border-purple-500 pl-4 py-1">
                  {experience.year}
                </span>
              </div>
            </motion.div>

            {/* Role Details */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-3/4"
            >
              <h3 className="text-2xl font-semibold text-neutral-200 mb-2">
                {experience.role} <span className="text-neutral-500 font-light hidden lg:inline-block mx-2">—</span>
                <span className="text-purple-400/80 block lg:inline-block mt-1 lg:mt-0">{experience.company}</span>
              </h3>

              <div className="mt-4 text-neutral-400 leading-relaxed font-light whitespace-pre-line text-base lg:text-lg italic">
                {experience.description}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-neutral-950 border border-neutral-800 rounded-md text-sm font-normal text-orange-200/90 shadow-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;