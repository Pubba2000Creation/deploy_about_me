import { useState } from "react";
import { RESEARCH } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { FaFilePdf, FaChartLine, FaChevronDown, FaChevronUp, FaRobot, FaMicroscope } from "react-icons/fa";

const ResearchImage = ({ src, title }) => (
    <div className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 hover:border-purple-500/50 transition-all duration-300 shadow-lg">
        <img
            src={src}
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <p className="text-xs font-medium text-purple-300">{title}</p>
        </div>
    </div>
);

const MetricsSection = ({ metrics }) => {
    return (
        <div className="mt-8 space-y-8">
            {/* ResNet metrics */}
            <div>
                <h7 className="flex items-center gap-2 text-lg font-medium text-neutral-300 mb-4">
                    <FaRobot className="text-blue-400" /> ResNet-50 Analysis Metrics
                </h7>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {metrics.resnet.map((m, i) => (
                        <ResearchImage key={i} src={m.url} title={m.title} />
                    ))}
                </div>
            </div>

            {/* YOLO metrics */}
            <div>
                <h7 className="flex items-center gap-2 text-lg font-medium text-neutral-300 mb-4">
                    <FaMicroscope className="text-green-400" /> YOLOv8 Performance Curves
                </h7>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {metrics.yolo.map((m, i) => (
                        <ResearchImage key={i} src={m.url} title={m.title} />
                    ))}
                </div>
            </div>

            {/* Training Visuals */}
            <div>
                <h7 className="flex items-center gap-2 text-lg font-medium text-neutral-300 mb-4">
                    <FaChartLine className="text-purple-400" /> Model Training & Validation Visuals
                </h7>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                    {metrics.training.map((m, i) => (
                        <ResearchImage key={i} src={m.url} title={m.title} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const Research = () => {
    const [expandedItem, setExpandedItem] = useState(null);

    const toggleExpand = (id) => {
        setExpandedItem(expandedItem === id ? null : id);
    };

    return (
        <div id="research" className="text-neutral-100 mt-20 border-b border-neutral-900 pb-16 px-4 sm:px-6 lg:px-8">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 1 }}
                className="my-10 text-center text-4xl font-thin tracking-tight"
            >
                Research & <span className="text-purple-500">ML Analytics</span>
            </motion.h2>

            <div className="max-w-6xl mx-auto space-y-12">
                {RESEARCH.map((item, index) => {
                    const itemId = item.id || `research-${index}`;
                    const isExpanded = expandedItem === itemId;

                    return (
                        <motion.div
                            key={itemId}
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="bg-neutral-900/30 rounded-3xl p-6 lg:p-10 border border-neutral-800/50 backdrop-blur-sm hover:border-neutral-700/50 transition-all shadow-2xl"
                        >
                            <div className="flex flex-wrap lg:flex-nowrap gap-8 items-start">
                                {/* Left Content */}
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
                                        {/* Dynamic buttons for papers or link */}
                                        {(item.papers || [{ title: "Read Full Research", src: item.link }]).map((paper, pIndex) => (
                                            <a
                                                key={pIndex}
                                                href={paper.src}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-6 py-2.5 bg-neutral-100 text-black rounded-xl font-semibold hover:bg-neutral-200 transition-all text-sm shadow-lg shadow-white/5 active:scale-95"
                                            >
                                                <FaFilePdf /> {paper.title}
                                            </a>
                                        ))}

                                        {item.metrics && (
                                            <button
                                                onClick={() => toggleExpand(itemId)}
                                                className="inline-flex items-center gap-2 px-6 py-2.5 bg-purple-600/10 text-purple-400 border border-purple-500/30 rounded-xl font-semibold hover:bg-purple-600/20 transition-all text-sm active:scale-95"
                                            >
                                                <FaChartLine /> {isExpanded ? "Hide Performance Analytics" : "View ML Analytics"}
                                                {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Expandable Metrics Section */}
                            <AnimatePresence>
                                {isExpanded && item.metrics && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="border-t border-neutral-800/50 mt-10 pt-8">
                                            <MetricsSection metrics={item.metrics} />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default Research;
