import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="text-neutral-100 mt-5 border-b border-neutral-900 pb-4 sm:px-6 lg:px-8">
        <motion.h2 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1}}
        className="my-8 sm:my-10 text-center text-3xl sm:text-4xl text-opacity-90">Projects</motion.h2>
        <div>
            {PROJECTS.map((project,index)=>(
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div 
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:-100}}
                    transition={{duration:1}}
                    className="w-full lg:w-1/4">
                        <img src={project.image} alt={project.title} width={150} height={150} />
                    </motion.div>

                    <motion.div 
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:100}}
                    transition={{duration:1}}
                    className="w-full max-w-xl lg:h-3/4">
                        <h6 className="mb-2 font-semibold">{project.title}</h6>
                        <p className="mb-4 text-neutral-400">{project.description}</p>
                        {project.technologies.map((tech,index)=>(
                            <span key={index} className="mr-2 mb-2 rounded bg-neutral-950 px-2 py-1 text-xs sm:text-sm font-normal text-orange-200">{tech}</span>
                        ))}
                    </motion.div>

                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects