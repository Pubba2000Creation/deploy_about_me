import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 px-4 sm:px-6 lg:px-8">
      <motion.h2 
         whileInView={{opacity:1,y:0}}
         initial={{opacity:0,y:-100}}
         transition={{duration:0.5}}
      className="my-8 sm:my-10 text-center text-3xl sm:text-4xl text-white text-opacity-90">Experience</motion.h2>

      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-10 flex flex-col sm:flex-row">

            <motion.div 
               whileInView={{opacity:1,x:0}}
               initial={{opacity:0,x:-100}}
               transition={{duration:1}}
               className="w-full sm:w-1/4 mb-10 sm:mb-0">
              <p className="text-sm text-neutral-200 text-center">{experience.year}</p>
            </motion.div>

            <motion.div
               whileInView={{opacity:1,x:0}}
               initial={{opacity:0,x:100}}
               transition={{duration:1}}
              className="w-full sm:w-3/4">
              <h6 className="mb-2 font-semibold text-neutral-200">
                {experience.role} - <span>{experience.company}</span>
              </h6>
              <p className="text-neutral-400 mb-4">{experience.description}</p>
              <div className="flex flex-wrap">
                {experience.technologies.map((tech, index) => (
                  <span key={index} className="mr-2 mb-2 rounded bg-neutral-950 px-2 py-1 text-xs sm:text-sm font-normal text-orange-200">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>


          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;