// src/components/Research.jsx
import { RESEARCH } from "../constants";
import { motion } from "framer-motion";
import { FaFilePdf } from "react-icons/fa";

const Research = () => {
    return (
        <div id="research" className="text-neutral-100 mt-20 border-b border-neutral-900 pb-16 px-4 sm:px-6 lg:px-8">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 1 }}
                className="my-10 text-center text-3xl sm:text-4xl font-thin tracking-tight"
            >
                Research & Publications
            </motion.h2>
            <div className="max-w-6xl mx-auto">
                {RESEARCH.map((item, index) => (
                    <div key={index} className="mb-12 flex flex-wrap lg:justify-center items-center gap-8 lg:gap-16">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4 flex justify-center"
                        >
                            <div className="bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800 shadow-xl">
                                <FaFilePdf className="text-7xl text-red-500/80" />
                            </div>
                        </motion.div>

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-2xl"
                        >
                            <h6 className="mb-4 text-2xl font-medium text-neutral-200">{item.title}</h6>
                            <p className="mb-6 text-neutral-400 leading-relaxed font-light">
                                {item.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {item.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-3 py-1 bg-neutral-950 border border-neutral-800 rounded text-xs font-normal text-purple-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-2 bg-neutral-200 text-black rounded-lg font-medium hover:bg-white transition-all text-sm"
                            >
                                <FaFilePdf /> Read Full Paper
                            </a>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Research;
