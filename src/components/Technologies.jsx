// src/components/Technologies.jsx
import { motion } from "framer-motion";
import { DiJsBadge, DiMongodb, DiNodejs } from "react-icons/di";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";
import { SiNestjs } from "react-icons/si";


// Function for animating the technologies icons
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [12, -12],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
});



const Technologies = () => {
    return (
      <div className="border-b border-neutral-800 pb-24">
        
        <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-4xl text-center text-white">Technologies</motion.h1>
        <motion.div
           whileInView={{opacity:1,x:0}}
           initial={{opacity:0,x:-100}}
           transition={{duration:1.5}}
          className="flex flex-wrap items-center justify-center gap-6">
          {/**adding icons of technologies */}
          <motion.div 
              variants={iconVariants(1.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
          </motion.div>


          <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiMongodb  className="text-7xl text-green-600"/>

          </motion.div>


          <motion.div
              variants={iconVariants(6)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaPhp  className="text-7xl text-blue-600 "/>

          </motion.div>

          <motion.div
              variants={iconVariants(2)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiNodejs  className="text-7xl text-green-500 "/>

          </motion.div>
          
          <motion.div
              variants={iconVariants(7)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-700 p-4">
            <DiJsBadge  className="text-7xl text-yellow-500"/>

          </motion.div>

          <motion.div 
              variants={iconVariants(4.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaLaravel  className="text-7xl text-red-700"/>

          </motion.div>


          <motion.div
              variants={iconVariants(8.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiNestjs   className="text-7xl text-red-600"/>

          </motion.div>



        </motion.div>
      </div>

    );
  };
  
  export default Technologies;
  