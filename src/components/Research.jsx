import { RESEARCH } from "../constants";
import { motion } from "framer-motion";
import { FaFilePdf, FaArrowRight, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import useViewCount from "../hooks/useViewCount";
import PropTypes from "prop-types";
import { trackEvent } from "../lib/analytics";

const ResearchCard = ({ item, index }) => {
    const itemId = item.id || `research-${index}`;
    const { views, formatViews } = useViewCount(itemId);

    return (
        <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="bg-neutral-50/50 dark:bg-neutral-900/30 rounded-3xl p-6 lg:p-10 border border-neutral-200 dark:border-neutral-800/50 backdrop-blur-sm hover:border-purple-500/50 dark:hover:border-neutral-700/50 transition-all shadow-xl dark:shadow-2xl relative group"
        >
            {/* View Count Badge */}
            <div className="absolute top-6 right-6 bg-white/70 dark:bg-black/40 backdrop-blur-md border border-neutral-200 dark:border-white/5 px-3 py-1 rounded-full flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaEye className="text-purple-600 dark:text-purple-400 text-xs" />
                <span className="text-neutral-600 dark:text-neutral-300 text-[10px] font-medium tracking-wider uppercase">{formatViews(views)} Views</span>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap gap-8 items-start">
                {/* Content Area */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-red-500/10 rounded-xl border border-red-500/20">
                            <FaFilePdf className="text-3xl text-red-500" />
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-light text-neutral-900 dark:text-neutral-100 leading-tight">
                            {item.title}
                        </h3>
                    </div>

                    <p className="text-neutral-600 dark:text-neutral-400 text-lg font-light leading-relaxed mb-6">
                        {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {item.technologies.map((tech, techIndex) => (
                            <span
                                key={techIndex}
                                className="px-4 py-1.5 bg-white dark:bg-neutral-950/50 border border-neutral-200 dark:border-neutral-800 rounded-full text-xs font-medium text-purple-600 dark:text-purple-400/90 tracking-wide"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                        {item.id ? (
                            <Link
                                to={`/research/${item.id}`}
                                onClick={() => trackEvent("Research", "Click Analytics", item.title)}
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
                                onClick={() => trackEvent("Research", "Click External Paper", item.title)}
                                className="inline-flex items-center gap-2 px-8 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black rounded-xl font-bold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all shadow-lg active:scale-95"
                            >
                                Read Research Paper
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

ResearchCard.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
        link: PropTypes.string,
    }).isRequired,
    index: PropTypes.number.isRequired,
};

const Research = () => {
    return (
        <div id="research" className="scroll-mt-24 text-neutral-900 dark:text-neutral-100 mt-20 border-b border-neutral-200 dark:border-neutral-900 pb-16 px-4 sm:px-6 lg:px-8">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 1 }}
                className="my-10 text-center text-5xl font-thin tracking-tight"
            >
                Research & <span className="text-purple-600 dark:text-purple-500">ML Analytics</span>
            </motion.h2>

            <div className="max-w-6xl mx-auto space-y-12">
                {RESEARCH.map((item, index) => (
                    <ResearchCard key={item.id || `research-${index}`} item={item} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Research;
