import { RESEARCH } from "../constants";
import { motion } from "framer-motion";
import { FaFilePdf, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Research = () => {
    return (
        <div id="research" className="scroll-mt-24 text-neutral-100 mt-20 border-b border-neutral-900 pb-16 px-4 sm:px-6 lg:px-8">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 1 }}
                className="my-10 text-center text-5xl font-thin tracking-tight"
            >
                Research & <span className="text-purple-500">ML Analytics</span>
            </motion.h2>

            <div className="max-w-6xl mx-auto space-y-12">
                {RESEARCH.map((item, index) => {
                    const itemId = item.id || `research-${index}`;

                    return (
                        <motion.div
                            key={itemId}
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="bg-neutral-900/30 rounded-3xl p-6 lg:p-10 border border-neutral-800/50 backdrop-blur-sm hover:border-neutral-700/50 transition-all shadow-2xl"
                        >
                            <div className="flex flex-wrap lg:flex-nowrap gap-8 items-start">
                                {/* Content Area */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 bg-red-500/10 rounded-xl border border-red-500/20">
                                            <FaFilePdf className="text-3xl text-red-500" />
                                        </div>
                                        <h3 className="text-2xl lg:text-3xl font-light text-neutral-100 leading-tight">
                                            {item.title}
                                        </h3>
                                    </div>

                                    <p className="text-neutral-400 text-lg font-light leading-relaxed mb-6">
                                        {item.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {item.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-4 py-1.5 bg-neutral-950/50 border border-neutral-800 rounded-full text-xs font-medium text-purple-400/90 tracking-wide"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-4">
                                        {item.id ? (
                                            <Link
                                                to={`/research/${item.id}`}
                                                className="inline-flex items-center gap-2 px-8 py-3 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 transition-all shadow-lg shadow-purple-500/20 active:scale-95 group"
                                            >
                                                View Research & Analytics
                                                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        ) : (
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-8 py-3 bg-neutral-100 text-black rounded-xl font-bold hover:bg-neutral-200 transition-all shadow-lg active:scale-95"
                                            >
                                                Read Research Paper
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default Research;
