import { motion } from "framer-motion";
import profilepic from "../assets/profiletwo.jpeg";
import { HERO_CONTENT } from "../constants";

//function for adding animation
const container=(delay)=>({
  hidden:{
    x:-100,
    opacity:0
  },
  visibale:{
    x:0,
    opacity:1,
    transition:{duration:0.5,delay:delay},
  },

});



const Hero = () => {
  return <div className="border-b border-neutral-900 pb-4 lg:mb-35">
    <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start ">
                <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visibale"
                    className="pb-12 text-2xl font-extralight tracking-tight lg:mt-16 lg:text-7xl text-white">
                        prabod pubudu
                </motion.h1>
                <motion.span 
                  variants={container(0.5)}
                  initial="hidden"
                  animate="visibale"
                  className="bg-gradient-to-r from-pink-400 via-slate-500 to-purple-600
                        bg-clip-text text-3xl tracking-tight text-transparent font-medium">
                    Full Stack Developer
                </motion.span>
                <motion.p 
                    variants={container(1)}
                    initial="hidden"
                    animate="visibale"
                    className="text-white mt-4 text-base">
                    {HERO_CONTENT}
                </motion.p>
            </div>
        </div>
<div className="w-auto lg:w-1/2 lg:p-8">
  <div className="flex justify-end w-full lg:w-3/4 ml-auto">
            
    <motion.img
      initial={{x:100, opacity:0}}
      animate={{x:0,opacity:1}}
      transition={{duration:1,delay:1.2}}
     src={profilepic} alt="prabod pubudu" className="rounded-2xl "/>
  </div>
</div>


    </div> 
 
  </div>
}

export default Hero