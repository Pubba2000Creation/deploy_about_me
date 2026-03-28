import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCode } from "react-icons/fa";
import { 
    SiNestjs, SiDocker, SiPython, SiTypescript, SiPostgresql, 
    SiMongodb, SiNextdotjs,
    SiExpress, SiRubyonrails, SiPhp, SiDigitalocean, SiLinux,
    SiElectron, SiDjango, SiOpencv, SiPytorch, SiTensorflow,
    SiReact,
    SiHubspot
} from "react-icons/si";
import { AiOutlineScan } from "react-icons/ai";

const CORE_TECH = [
    { Name: "NestJS", Icon: SiNestjs, Color: "text-red-500" },
    { Name: "Node (Express)", Icon: SiExpress, Color: "text-neutral-100" },
    { Name: "MERN Stack", Icon: SiMongodb, Color: "text-green-500" },
    { Name: "Ruby on Rails", Icon: SiRubyonrails, Color: "text-red-600" },
    { Name: "Django", Icon: SiDjango, Color: "text-green-800" },
    { Name: "LAMP Stack", Icon: SiPhp, Color: "text-blue-400" },
    
    { Name: "TypeScript", Icon: SiTypescript, Color: "text-blue-500" },
    { Name: "Python", Icon: SiPython, Color: "text-yellow-500" },
    { Name: "Next.js", Icon: SiNextdotjs, Color: "text-white" },
    { Name: "Docker", Icon: SiDocker, Color: "text-blue-400" },
    { Name: "Docker Hub", Icon: SiHubspot, Color: "text-blue-600" },
    
    { Name: "Electron", Icon: SiElectron, Color: "text-cyan-300" },
    { Name: "OpenCV", Icon: SiOpencv, Color: "text-green-400" },
    { Name: "YOLO", Icon: AiOutlineScan, Color: "text-yellow-400" },
    { Name: "PyTorch", Icon: SiPytorch, Color: "text-red-500" },
    { Name: "TensorFlow", Icon: SiTensorflow, Color: "text-orange-500" },

    { Name: "PostgreSQL", Icon: SiPostgresql, Color: "text-blue-300" },
    { Name: "DigitalOcean", Icon: SiDigitalocean, Color: "text-blue-500" },
    { Name: "Linux", Icon: SiLinux, Color: "text-white" },
    { Name: "React", Icon: SiReact  , Color: "text-cyan-400" },
];

const TechnologiesSummary = () => {
  return (
    <div id="technologies-summary" className="scroll-mt-24 border-b border-neutral-900 pb-20 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Side */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium uppercase tracking-widest mb-6">
              <FaCode className="text-[10px]" />
              Core Tech Stack
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-thin tracking-tight text-white mb-6">
              Advanced <span className="text-neutral-500 font-normal">Expertise</span>
            </h2>
            
            <p className="text-neutral-400 font-light leading-relaxed mb-8 text-lg">
                I specialize in heavy backend architectures, AI-driven pipelines, and cloud-native deployments. 
                My workflow is built on efficiency, stability, and modern standards.
            </p>

            <Link
              to="/technologies"
              className="inline-flex items-center gap-3 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold transition-all shadow-xl shadow-purple-900/20 group"
            >
              See All Technologies
              <FaArrowRight className="text-sm transform transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Grid Side */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full grid grid-cols-3 sm:grid-cols-4 gap-4"
          >
            {CORE_TECH.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(38, 38, 38, 0.4)" }}
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-neutral-900/30 border border-neutral-800/50 backdrop-blur-sm transition-all group"
              >
                <tech.Icon className={`text-3xl ${tech.Color} group-hover:animate-pulse`} />
                <span className="text-[10px] text-neutral-500 mt-2 font-light group-hover:text-neutral-300 transition-colors uppercase tracking-widest">{tech.Name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesSummary;
