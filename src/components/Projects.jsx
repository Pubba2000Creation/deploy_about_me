import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaEye } from "react-icons/fa";
import useViewCount from "../hooks/useViewCount";
import PropTypes from "prop-types";

const ProjectCard = ({ project, index }) => {
    const { views, formatViews } = useViewCount(project.id);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 group relative"
        >
            {/* Image Section */}
            <div className="w-full lg:w-1/2 relative">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

                <div className="relative overflow-hidden rounded-2xl border border-neutral-800">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* View Count Badge */}
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2 z-10 transition-opacity duration-300">
                        <FaEye className="text-purple-400 text-sm" />
                        <span className="text-white text-xs font-medium">{formatViews(views)}</span>
                    </div>

                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Link
                            to={`/project/${project.id}`}
                            className="bg-white text-black px-6 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-neutral-200"
                        >
                            View Details
                        </Link>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                <h3 className="text-3xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {project.title}
                </h3>
                <p className="mb-6 text-neutral-400 text-lg leading-relaxed max-w-xl">
                    {project.description}
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                        <span key={i} className="px-3 py-1 text-sm font-medium rounded-full bg-neutral-900 border border-neutral-800 text-purple-300">
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 4 && (
                        <span className="px-3 py-1 text-sm font-medium rounded-full bg-neutral-900 border border-neutral-800 text-neutral-500">
                            +{project.technologies.length - 4} more
                        </span>
                    )}
                </div>

                <Link
                    to={`/project/${project.id}`}
                    className="inline-flex items-center gap-2 text-white border-b border-purple-500 pb-1 hover:text-purple-400 transition-colors text-lg tracking-wide group/link"
                >
                    Read Case Study
                    <FaArrowRight className="text-sm transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <div id="projects" className="scroll-mt-24 border-b border-neutral-900 pb-20 px-4 sm:px-8">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 1 }}
                className="my-20 text-center text-4xl text-white font-thin tracking-tight"
            >
                Featured Projects
            </motion.h2>
            <div className="max-w-7xl mx-auto flex flex-col gap-16">
                {PROJECTS.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </div>
    );
};

ProjectCard.propTypes = {
    project: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
};

export default Projects;
