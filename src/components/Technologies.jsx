// src/components/Technologies.jsx
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiMongodb, SiNestjs, SiTypescript, SiDocker, SiPostgresql, SiNextdotjs,
  SiElectron, SiPython, SiOpencv, SiTensorflow, SiNginx, SiGithubactions,
  SiRedis, SiAmazonaws, SiDigitalocean, SiJavascript,
  SiExpress, SiDjango, SiFlask, SiFastapi, SiRuby, SiGo, SiElasticsearch,
  SiApachecassandra, SiMicrosoftazure, SiGraphql, SiFirebase, SiSupabase,
  SiPowerapps, SiPowerautomate, SiMicrosoft, SiKubernetes
} from "react-icons/si";
import { FaPhp, FaNodeJs, FaRobot, FaJava } from "react-icons/fa";
import { TbDatabaseSearch, TbHierarchy } from "react-icons/tb";
import { AiOutlineScan } from "react-icons/ai";
import { GiBrain } from "react-icons/gi";
import { MdOutlineImageSearch } from "react-icons/md";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
});

const TechIcon = ({ Icon, name, color, duration }) => (
  <motion.div
    variants={iconVariants(duration)}
    initial="initial"
    animate="animate"
    whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(120, 119, 198, 0.1)" }}
    className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border-2 border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 backdrop-blur-sm min-w-[100px] shadow-sm dark:shadow-none transition-colors"
  >
    <Icon className={`text-5xl ${color}`} />
    <span className="text-xs font-medium text-center text-neutral-800 dark:text-neutral-200">{name}</span>
  </motion.div>
);

TechIcon.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
};

const TechCategory = ({ title, children }) => (
  <div className="mb-12">
    <h3 className="text-xl font-medium text-neutral-700 dark:text-neutral-300 mb-6 text-center lg:text-left border-l-4 border-purple-500 pl-4 uppercase tracking-wider text-xs">
      {title}
    </h3>
    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
      {children}
    </div>
  </div>
);

TechCategory.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const Technologies = () => {
  return (
    <div id="technologies" className="scroll-mt-24 border-b border-neutral-200 dark:border-neutral-800 pb-24 px-4 sm:px-8">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="my-20 text-5xl text-center text-neutral-900 dark:text-white font-thin tracking-tight"
      >
        Technologies & Specialized Expertise
      </motion.h1>

      <div className="max-w-7xl mx-auto">
        {/* Backend & Frameworks */}
        <TechCategory title="Backend & Frameworks">
          <TechIcon Icon={FaNodeJs} name="Node.js" color="text-green-500" duration={2.5} />
          <TechIcon Icon={SiNestjs} name="NestJS" color="text-red-500" duration={3} />
          <TechIcon Icon={SiExpress} name="Express" color="text-neutral-500" duration={3.5} />
          <TechIcon Icon={SiPython} name="Python" color="text-yellow-500" duration={2} />
          <TechIcon Icon={SiDjango} name="Django" color="text-green-800 dark:text-green-600" duration={2.5} />
          <TechIcon Icon={SiFlask} name="Flask" color="text-neutral-900 dark:text-white" duration={3} />
          <TechIcon Icon={SiFastapi} name="FastAPI" color="text-teal-500" duration={3.5} />
          <TechIcon Icon={SiRuby} name="Ruby" color="text-red-600" duration={4} />
          <TechIcon Icon={SiGo} name="Go" color="text-cyan-500" duration={4.5} />
        </TechCategory>

        {/* Frontend */}
        <TechCategory title="Frontend">
          <TechIcon Icon={RiReactjsLine} name="React" color="text-cyan-400" duration={2.5} />
          <TechIcon Icon={SiNextdotjs} name="Next.js" color="text-neutral-900 dark:text-white" duration={3} />
          <TechIcon Icon={SiJavascript} name="JavaScript" color="text-yellow-400" duration={3.5} />
          <TechIcon Icon={SiTypescript} name="TypeScript" color="text-blue-500" duration={2} />
        </TechCategory>

        {/* AI / ML */}
        <TechCategory title="AI / ML">
          <TechIcon Icon={GiBrain} name="RAG" color="text-purple-500" duration={2.5} />
          <TechIcon Icon={TbHierarchy} name="LangChain" color="text-emerald-600" duration={3} />
          <TechIcon Icon={TbHierarchy} name="LangGraph" color="text-emerald-400" duration={3.5} />
          <TechIcon Icon={SiTensorflow} name="TensorFlow" color="text-orange-500" duration={2} />
          <TechIcon Icon={AiOutlineScan} name="YOLOv8" color="text-yellow-500" duration={2.5} />
          <TechIcon Icon={MdOutlineImageSearch} name="ResNet-50" color="text-blue-400" duration={3} />
          <TechIcon Icon={SiOpencv} name="OpenCV" color="text-green-500" duration={3.5} />
          <TechIcon Icon={FaRobot} name="Ollama" color="text-neutral-600 dark:text-gray-300" duration={4} />
        </TechCategory>

        {/* Databases & Data */}
        <TechCategory title="Databases & Data">
          <TechIcon Icon={SiPostgresql} name="PostgreSQL" color="text-blue-400" duration={2.5} />
          <TechIcon Icon={SiMongodb} name="MongoDB" color="text-green-500" duration={3} />
          <TechIcon Icon={SiRedis} name="Redis" color="text-red-500" duration={3.5} />
          <TechIcon Icon={SiElasticsearch} name="Elasticsearch" color="text-yellow-500" duration={4} />
          <TechIcon Icon={TbDatabaseSearch} name="Qdrant (Vector DB)" color="text-purple-500" duration={4.5} />
          <TechIcon Icon={SiApachecassandra} name="Cassandra" color="text-blue-300" duration={5} />
          <TechIcon Icon={SiMicrosoft} name="Dataverse" color="text-blue-600" duration={5.5} />
        </TechCategory>

        {/* Cloud & DevOps */}
        <TechCategory title="Cloud & DevOps">
          <TechIcon Icon={SiAmazonaws} name="AWS" color="text-orange-400" duration={2.5} />
          <TechIcon Icon={SiMicrosoftazure} name="Azure" color="text-blue-500" duration={3} />
          <TechIcon Icon={SiDocker} name="Docker" color="text-blue-400" duration={3.5} />
          <TechIcon Icon={SiKubernetes} name="Kubernetes" color="text-blue-600" duration={4} />
          <TechIcon Icon={SiGithubactions} name="GitHub Actions" color="text-blue-500" duration={4.5} />
          <TechIcon Icon={SiNginx} name="Nginx" color="text-green-500" duration={5} />
          <TechIcon Icon={SiDigitalocean} name="DigitalOcean" color="text-blue-500" duration={5.5} />
        </TechCategory>

        {/* Other / Tools */}
        <TechCategory title="Other / Tools">
          <TechIcon Icon={SiGraphql} name="GraphQL" color="text-pink-500" duration={2.5} />
          <TechIcon Icon={SiFirebase} name="Firebase" color="text-yellow-500" duration={3} />
          <TechIcon Icon={SiSupabase} name="Supabase" color="text-emerald-500" duration={3.5} />
          <TechIcon Icon={SiElectron} name="Electron.js" color="text-cyan-300" duration={4} />
          <TechIcon Icon={RiReactjsLine} name="React Native" color="text-cyan-400" duration={4.5} />
          <TechIcon Icon={FaJava} name="Java" color="text-red-500" duration={5} />
          <TechIcon Icon={FaPhp} name="PHP" color="text-blue-400" duration={5.5} />
          <TechIcon Icon={SiPowerapps} name="Power Apps" color="text-purple-600" duration={6} />
          <TechIcon Icon={SiPowerautomate} name="Power Automate" color="text-blue-600" duration={6.5} />
          <TechIcon Icon={SiMicrosoft} name="Dynamics 365" color="text-blue-800" duration={7} />
        </TechCategory>
      </div>
    </div>
  );
};

export default Technologies;
