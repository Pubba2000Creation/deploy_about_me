import SEO from '../components/SEO';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { IoArrowBack, IoEyeSharp } from 'react-icons/io5';
import useViewCount from '../hooks/useViewCount';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import { trackEvent } from '../lib/analytics';

const ProjectDetails = ({ theme, toggleTheme }) => {
    const { id } = useParams();
    const project = PROJECTS.find((p) => p.id === id);
    const { views, formatViews } = useViewCount(id || '', true);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center text-red-500 bg-white dark:bg-black">
                Project not found.
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white dark:bg-black transition-colors duration-500">
            <SEO 
                title={project.title} 
                description={project.description} 
                image={project.image}
                url={`https://pubbadev.cv/project/${project.id}`}
                type="article"
            />
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <div className="container mx-auto px-4 py-24 text-neutral-700 dark:text-neutral-300">
                {/* Back Navigation */}
                <Link to="/" className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 transition-colors mb-8 group font-medium">
                    <IoArrowBack className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Projects
                </Link>

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center lg:text-left"
                >
                    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-4">
                        <div>
                            <h1 className="text-4xl lg:text-6xl font-thin tracking-tight text-neutral-900 dark:text-white mb-4">
                                {project.title}
                            </h1>
                            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl">
                                <span className="text-purple-600 dark:text-purple-500 font-medium">{project.role}</span>
                            </p>
                        </div>

                        {/* View Count Display */}
                        <div className="flex items-center gap-2 bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 px-4 py-2 rounded-full shadow-sm">
                            <IoEyeSharp className="text-purple-600 dark:text-purple-400 text-lg" />
                            <span className="text-neutral-900 dark:text-white font-medium">{formatViews(views)}</span>
                            <span className="text-neutral-500 text-sm ml-1">Views</span>
                        </div>
                    </div>
                </motion.div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative group"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-10 dark:opacity-25 group-hover:opacity-20 dark:group-hover:opacity-50 transition duration-1000"></div>
                        <img
                            src={project.image}
                            alt={project.title}
                            className="relative rounded-2xl shadow-xl dark:shadow-2xl w-full object-cover border border-neutral-200 dark:border-transparent transform transition-transform duration-500 hover:scale-[1.01]"
                        />
                    </motion.div>

                    {/* Details Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6 border-l-4 border-purple-500 pl-4">
                            Overview
                        </h2>
                        <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300 mb-8">
                            {project.fullDescription || project.description}
                        </p>

                        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6 border-l-4 border-pink-500 pl-4">
                            Key Features
                        </h2>
                        <ul className="list-disc list-inside space-y-2 mb-8 text-neutral-600 dark:text-neutral-300">
                            {project.features && project.features.map((feature, index) => (
                                <li key={index} className="pl-2">
                                    <span className="text-neutral-800 dark:text-neutral-200">{feature.split(':')[0]}</span>
                                    {feature.includes(':') && <span className="text-neutral-500 dark:text-neutral-400">:{feature.split(':')[1]}</span>}
                                </li>
                            ))}
                        </ul>

                        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6 border-l-4 border-purple-500 pl-4">
                            Technologies
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-purple-600 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors shadow-sm dark:shadow-none"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Video Section */}
                {project.video && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mt-16 sm:mt-24"
                    >
                        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-8 border-l-4 border-purple-500 pl-4">
                            Project Demo
                        </h2>
                        <div className="relative w-full rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-xl dark:shadow-2xl bg-neutral-50 dark:bg-neutral-900">
                            <video
                                controls
                                className="w-full h-auto max-h-[70vh]"
                                poster={project.image}
                            >
                                <source src={project.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </motion.div>
                )}

                {/* Documentation Section */}
                {project.documents && project.documents.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mt-16 sm:mt-24 pb-20"
                    >
                        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-8 border-l-4 border-pink-500 pl-4">
                            Technical Documentation
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {project.documents.map((doc, index) => (
                                <a
                                    key={index}
                                    href={doc.src}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => trackEvent("Project Documentation", "View", `${project.title} - ${doc.title}`)}
                                    className="group flex flex-col p-6 bg-neutral-50/50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:bg-white dark:hover:bg-neutral-800 hover:border-purple-500/50 transition-all duration-300 shadow-sm hover:shadow-md"
                                >
                                    <div className="h-12 w-12 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors border border-neutral-200 dark:border-transparent">
                                        <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                                        {doc.title}
                                    </h3>
                                    <div className="mt-auto pt-4 flex items-center text-sm text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                                        <span>View Document</span>
                                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

ProjectDetails.propTypes = {
    theme: PropTypes.string.isRequired,
    toggleTheme: PropTypes.func.isRequired,
};

export default ProjectDetails;
