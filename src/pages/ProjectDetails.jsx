import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { IoArrowBack } from 'react-icons/io5';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = PROJECTS.find((p) => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center text-red-500">
                Project not found.
            </div>
        );
    }

    return (
        <div className="min-h-screen container mx-auto px-4 py-8 text-neutral-300">
            {/* Back Navigation */}
            <Link to="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-8 group">
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
                <h1 className="text-4xl lg:text-6xl font-thin tracking-tight text-white mb-4">
                    {project.title}
                </h1>
                <p className="text-xl text-neutral-400 max-w-2xl">
                    <span className="text-purple-500 font-medium">{project.role}</span>
                </p>
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
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                    <img
                        src={project.image}
                        alt={project.title}
                        className="relative rounded-2xl shadow-2xl w-full object-cover transform transition-transform duration-500 hover:scale-[1.01]"
                    />
                </motion.div>

                {/* Details Section */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-2xl font-semibold text-white mb-6 border-l-4 border-purple-500 pl-4">
                        Overview
                    </h2>
                    <p className="text-lg leading-relaxed text-neutral-300 mb-8">
                        {project.fullDescription || project.description}
                    </p>

                    <h2 className="text-2xl font-semibold text-white mb-6 border-l-4 border-pink-500 pl-4">
                        Key Features
                    </h2>
                    <ul className="list-disc list-inside space-y-2 mb-8 text-neutral-300">
                        {project.features && project.features.map((feature, index) => (
                            <li key={index} className="pl-2">
                                <span className="text-neutral-200">{feature.split(':')[0]}</span>
                                {feature.includes(':') && <span className="text-neutral-400">:{feature.split(':')[1]}</span>}
                            </li>
                        ))}
                    </ul>

                    <h2 className="text-2xl font-semibold text-white mb-6 border-l-4 border-purple-500 pl-4">
                        Technologies
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="bg-neutral-900 border border-neutral-800 text-purple-300 px-3 py-1 rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectDetails;
