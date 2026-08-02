import SEO from '../components/SEO';
import { useParams, Link } from 'react-router-dom';
import { RESEARCH } from '../constants';
import { motion } from 'framer-motion';
import { IoArrowBack, IoEyeSharp } from 'react-icons/io5';
import { FaFilePdf, FaChartLine, FaRobot, FaMicroscope } from 'react-icons/fa';
import PropTypes from 'prop-types';
import useViewCount from '../hooks/useViewCount';
import Navbar from '../components/Navbar';
import { trackEvent } from '../lib/analytics';

const ResearchImage = ({ src, title }) => (
    <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 hover:border-purple-500/50 transition-all duration-300 shadow-xl dark:shadow-2xl">
        <img
            src={src}
            alt={title}
            className="w-full h-auto object-contain bg-neutral-50 dark:bg-neutral-950 group-hover:scale-[1.02] transition-transform duration-500"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/90 dark:from-black/90 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-sm font-medium text-purple-600 dark:text-purple-300">{title}</p>
        </div>
    </div>
);

ResearchImage.propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

const ResearchDetails = ({ theme, toggleTheme }) => {
    const { id } = useParams();
    const item = RESEARCH.find((r) => r.id === id);
    const { views, formatViews } = useViewCount(id || '', true);

    if (!item) {
        return (
            <div className="min-h-screen flex items-center justify-center text-red-500 bg-white dark:bg-black">
                Research layout not found.
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white dark:bg-black transition-colors duration-500">
            <SEO title={item.title} description={item.description} />
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <div className="container mx-auto px-4 py-24 text-neutral-700 dark:text-neutral-300">
                {/* Back Navigation */}
                <Link to="/" className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 transition-colors mb-8 group font-medium">
                    <IoArrowBack className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Portfolio
                </Link>

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-4 mb-6">
                        <h1 className="text-4xl lg:text-6xl font-thin tracking-tight text-neutral-900 dark:text-white">
                            {item.title}
                        </h1>

                        {/* View Count Display */}
                        <div className="flex items-center gap-2 bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 px-4 py-2 rounded-full shadow-sm">
                            <IoEyeSharp className="text-purple-600 dark:text-purple-400 text-lg" />
                            <span className="text-neutral-900 dark:text-white font-medium">{formatViews(views)}</span>
                            <span className="text-neutral-500 text-sm ml-1">Views</span>
                        </div>
                    </div>
                    <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-4xl leading-relaxed font-light">
                        {item.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mt-8">
                        {item.technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-purple-600 dark:text-purple-300 px-4 py-1.5 rounded-full text-sm font-medium shadow-sm dark:shadow-none"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Documentation Section */}
                {item.papers && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-20"
                    >
                        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-8 border-l-4 border-red-500 dark:border-red-500 pl-4">
                            Research Publications
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {item.papers.map((paper, index) => (
                                <a
                                    key={index}
                                    href={paper.src}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => trackEvent("Research Publication", "View", `${item.title} - ${paper.title}`)}
                                    className="flex items-center gap-6 p-6 bg-neutral-50/50 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 rounded-2xl hover:bg-neutral-100 dark:hover:bg-neutral-800/60 hover:border-red-500/30 transition-all group shadow-sm hover:shadow-md"
                                >
                                    <div className="p-4 bg-red-500/10 rounded-xl group-hover:scale-110 transition-transform border border-neutral-200 dark:border-transparent">
                                        <FaFilePdf className="text-4xl text-red-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium text-neutral-900 dark:text-white group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors">
                                            {paper.title}
                                        </h3>
                                        <p className="text-sm text-neutral-500 mt-1 italic">Click to view PDF document</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Metrics & Analysis Section */}
                {item.metrics && (
                    <div className="space-y-24 pb-20">
                        {/* ResNet Metrics */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="flex items-center gap-3 text-3xl font-light text-neutral-900 dark:text-white mb-10">
                                <FaRobot className="text-blue-600 dark:text-blue-400" />
                                ResNet-50 <span className="text-neutral-500">Classification Metrics</span>
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {item.metrics.resnet.map((m, i) => (
                                    <ResearchImage key={i} src={m.url} title={m.title} />
                                ))}
                            </div>
                        </motion.div>

                        {/* YOLO Metrics */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="flex items-center gap-3 text-3xl font-light text-neutral-900 dark:text-white mb-10">
                                <FaMicroscope className="text-green-600 dark:text-green-400" />
                                YOLOv8 <span className="text-neutral-500">Detection Analysis</span>
                            </h2>
                            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
                                {item.metrics.yolo.map((m, i) => (
                                    <ResearchImage key={i} src={m.url} title={m.title} />
                                ))}
                            </div>
                        </motion.div>

                        {/* Training Visuals */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="flex items-center gap-3 text-3xl font-light text-neutral-900 dark:text-white mb-10">
                                <FaChartLine className="text-purple-600 dark:text-purple-400" />
                                Training <span className="text-neutral-500">& Validation Results</span>
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {item.metrics.training.map((m, i) => (
                                    <ResearchImage key={i} src={m.url} title={m.title} />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                )}
            </div>
        </div>
    );
};

ResearchDetails.propTypes = {
    theme: PropTypes.string.isRequired,
    toggleTheme: PropTypes.func.isRequired,
};

export default ResearchDetails;
