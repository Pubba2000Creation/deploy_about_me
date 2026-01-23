// src/components/About.jsx
import { useState } from "react";
import aboutimg from "../assets/profileone.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div id="about" className="border-b border-neutral-900 pb-20 pt-12">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="mb-20 text-center text-4xl font-thin tracking-tight text-white"
      >
        Engineering Journey & <span className="text-neutral-500">Expertise</span>
      </motion.h2>

      <div className="flex flex-wrap items-center justify-center lg:gap-12">
        {/* Profile Image & Summary */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/3 flex flex-col items-center mb-12 lg:mb-0"
        >
          <div className="relative group mb-8">
            <img
              src={aboutimg}
              alt="Prabod Pubudu"
              className="rounded-3xl shadow-2xl w-64 lg:w-80 border-2 border-neutral-800 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute -inset-4 bg-purple-500/10 blur-2xl -z-10 rounded-full"></div>
          </div>
          <p className="text-neutral-400 text-center text-sm lg:text-base max-w-sm leading-relaxed font-light italic">
            &quot;{ABOUT_TEXT.summary}&quot;
          </p>
        </motion.div>

        {/* Expertise Pillars */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 px-4"
        >
          <div className="grid gap-6">
            {ABOUT_TEXT.pillars.map((pillar, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 10 }}
                className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/30 backdrop-blur-sm"
              >
                <h3 className="text-blue-400 font-medium mb-2 text-lg">{pillar.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed font-light">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Read More Section */}
          <div className="mt-10 flex flex-col items-center lg:items-start">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-neutral-300 border-b border-neutral-700 pb-1 hover:text-white hover:border-white transition-all text-sm uppercase tracking-widest font-medium"
            >
              {isExpanded ? "Show Less" : "Read Full Story"}
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="mt-8 text-neutral-400 text-sm lg:text-base leading-loose font-light whitespace-pre-line border-l-2 border-neutral-800 pl-6">
                    {ABOUT_TEXT.fullBio}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
