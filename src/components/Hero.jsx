// src/components/Hero.jsx
import { motion } from "framer-motion";
import profilepic from "../assets/professionl.png";
import { HERO_CONTENT } from "../constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <div id="hero" className="scroll-mt-42 border-b border-neutral-900 pb-16 lg:mb-36 pt-40 px-4 sm:px-8">
      <div className="flex flex-wrap items-center">
        {/* Text Content */}
        <div className="w-full lg:w-3/5">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center lg:items-start"
          >
            <motion.h1
              variants={itemVariants}
              className="pb-6 text-4xl font-extralight tracking-tight lg:text-7xl text-white text-center lg:text-left leading-tight"
            >
              Prabod Pubudu
            </motion.h1>

            <motion.span
              variants={itemVariants}
              className="bg-gradient-to-r from-pink-400 via-slate-500 to-purple-600
                        bg-clip-text text-2xl lg:text-3xl tracking-tight text-transparent font-medium text-center lg:text-left mb-6"
            >
              Backend-Focused Full-Stack Engineer • AI Systems
            </motion.span>

            <motion.div variants={itemVariants} className="max-w-2xl px-2">
              <p className="text-neutral-400 text-base lg:text-lg leading-relaxed text-center lg:text-left mb-8 whitespace-pre-line font-light">
                {HERO_CONTENT}
              </p>
            </motion.div>

            {/* CTA and Quick Stack */}
            <motion.div variants={itemVariants} className="flex flex-col lg:flex-row items-center gap-6 mt-4">
              <a
                href="#contact"
                className="px-10 py-4 bg-white text-black rounded-full font-semibold hover:bg-neutral-200 transition-all shadow-xl shadow-white/5 whitespace-nowrap"
              >
                Let&apos;s Build Systems
              </a>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <span className="px-4 py-1.5 border border-neutral-800 rounded-full text-neutral-400 text-sm bg-neutral-900/50">NestJS</span>
                <span className="px-4 py-1.5 border border-neutral-800 rounded-full text-neutral-400 text-sm bg-neutral-900/50">Docker</span>
                <span className="px-4 py-1.5 border border-neutral-800 rounded-full text-neutral-400 text-sm bg-neutral-900/50">AI Systems</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Profile Image */}
        <div className="w-full lg:w-2/5 lg:p-12 mt-20 lg:mt-0 flex justify-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative z-10"
            >
              <img
                src={profilepic}
                alt="Prabod Pubudu"
                className="rounded-3xl shadow-2xl shadow-purple-500/10 w-64 lg:w-[450px] border border-neutral-800 transition-all duration-1000"
              />
            </motion.div>
            {/* Ambient Background Glow */}
            <div className="absolute -inset-10 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 blur-3xl opacity-40 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
