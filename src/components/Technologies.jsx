// src/components/Technologies.jsx
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import {
  RiReactjsLine
} from "react-icons/ri";
import {
  SiMongodb,
  SiNestjs,
  SiTypescript,
  SiDocker,
  SiPostgresql,
  SiMysql,
  SiNextdotjs,
  SiElectron,
  SiPython,
  SiOpencv,
  SiTensorflow,
  SiPytorch,
  SiNginx,
  SiGithubactions,
  SiRedis,
  SiAmazonaws,
  SiDigitalocean,
  SiLinux,
  SiJavascript,
  SiGooglegemini,
  SiOpenai,
  SiWeb3Dotjs,
  SiEthereum,
  SiSolidity
} from "react-icons/si";
import {
  FaPhp,
  FaLaravel,
  FaGitAlt,
  FaNodeJs,
  FaRobot
} from "react-icons/fa";
import { TbApi, TbDatabaseSearch, TbHierarchy } from "react-icons/tb";
import { AiOutlineScan } from "react-icons/ai";
import { GiBrain } from "react-icons/gi";

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
    whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.2)" }}
    className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border-2 border-neutral-800 bg-neutral-900/50 backdrop-blur-sm min-w-[100px]"
  >
    <Icon className={`text-5xl ${color}`} />
    <span className="text-xs font-light text-neutral-400">{name}</span>
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
    <h3 className="text-xl font-medium text-neutral-300 mb-6 text-center lg:text-left border-l-4 border-purple-500 pl-4 uppercase tracking-wider text-xs">
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
    <div id="technologies" className="border-b border-neutral-800 pb-24 px-4 sm:px-8">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="my-20 text-4xl text-center text-white font-thin tracking-tight"
      >
        Technologies & Specialized Expertise
      </motion.h1>

      <div className="max-w-7xl mx-auto">
        {/* Core Backend / Infra */}
        <TechCategory title="Core Backend / Infra">
          <TechIcon Icon={SiTypescript} name="TypeScript" color="text-blue-500" duration={2} />
          <TechIcon Icon={FaNodeJs} name="Node.js" color="text-green-500" duration={2.5} />
          <TechIcon Icon={FaLaravel} name="Laravel" color="text-red-600" duration={3} />
          <TechIcon Icon={SiNestjs} name="NestJS" color="text-red-500" duration={3.5} />
          <TechIcon Icon={FaPhp} name="PHP" color="text-blue-400" duration={4} />
          <TechIcon Icon={SiDocker} name="Docker" color="text-blue-400" duration={4.5} />
          <TechIcon Icon={SiLinux} name="Linux" color="text-white" duration={5} />
          <TechIcon Icon={FaGitAlt} name="Git" color="text-orange-500" duration={2.2} />
          <TechIcon Icon={TbApi} name="REST API" color="text-emerald-400" duration={2.8} />
          <TechIcon Icon={SiPostgresql} name="PostgreSQL" color="text-blue-300" duration={3.2} />
          <TechIcon Icon={SiMysql} name="MySQL" color="text-blue-500" duration={3.8} />
          <TechIcon Icon={SiMongodb} name="MongoDB" color="text-green-500" duration={4.2} />
          <TechIcon Icon={SiRedis} name="Redis" color="text-red-500" duration={4.8} />
        </TechCategory>

        {/* AI Agents & LLM Integration */}
        <TechCategory title="AI Agents & LLM Integration">
          <TechIcon Icon={SiGooglegemini} name="Gemini" color="text-blue-400" duration={2} />
          <TechIcon Icon={SiOpenai} name="OpenAI" color="text-emerald-500" duration={2.5} />
          <TechIcon Icon={FaRobot} name="Ollama" color="text-gray-300" duration={3} />
          <TechIcon Icon={TbHierarchy} name="LangChain" color="text-emerald-600" duration={3.5} />
          <TechIcon Icon={TbDatabaseSearch} name="Vector DB" color="text-orange-400" duration={4} />
          <TechIcon Icon={GiBrain} name="RAG / LLM" color="text-purple-400" duration={4.5} />
        </TechCategory>

        {/* AI / ML */}
        <TechCategory title="AI / ML (Production-leaning)">
          <TechIcon Icon={SiPython} name="Python" color="text-yellow-500" duration={2} />
          <TechIcon Icon={SiOpencv} name="OpenCV" color="text-green-400" duration={2.5} />
          <TechIcon Icon={SiTensorflow} name="TensorFlow" color="text-orange-500" duration={3} />
          <TechIcon Icon={SiPytorch} name="PyTorch" color="text-red-500" duration={3.5} />
          <TechIcon Icon={AiOutlineScan} name="YOLO" color="text-yellow-400" duration={4} />
        </TechCategory>

        {/* Frontend / Desktop */}
        <TechCategory title="Frontend / Desktop">
          <TechIcon Icon={RiReactjsLine} name="React" color="text-cyan-400" duration={2.5} />
          <TechIcon Icon={SiNextdotjs} name="Next.js" color="text-white" duration={3} />
          <TechIcon Icon={SiJavascript} name="JavaScript" color="text-yellow-400" duration={3.5} />
          <TechIcon Icon={SiElectron} name="Electron" color="text-cyan-300" duration={4} />
        </TechCategory>

        {/* Web3 & Blockchain */}
        <TechCategory title="Web3 & Blockchain">
          <TechIcon Icon={SiSolidity} name="Solidity" color="text-gray-400" duration={2.5} />
          <TechIcon Icon={SiEthereum} name="Ethereum" color="text-blue-400" duration={3} />
          <TechIcon Icon={SiWeb3Dotjs} name="Web3.js" color="text-orange-500" duration={3.5} />
        </TechCategory>

        {/* DevOps / Cloud */}
        <TechCategory title="DevOps / Cloud">
          <TechIcon Icon={SiGithubactions} name="CI/CD" color="text-blue-500" duration={4} />
          <TechIcon Icon={SiNginx} name="Nginx" color="text-green-500" duration={4.5} />
          <TechIcon Icon={SiAmazonaws} name="AWS" color="text-orange-400" duration={5} />
          <TechIcon Icon={SiDigitalocean} name="DigitalOcean" color="text-blue-500" duration={5.5} />
        </TechCategory>
      </div>
    </div>
  );
};

export default Technologies;
