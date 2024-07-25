import aboutimg from "../assets/profileone.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";


const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-5 text-center text-4xl text-white text-opacity-90">
        About Me
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-2">
          <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1}}
            className="flex items-center justify-start  mt-3">
            <img src={aboutimg} alt="about" className=" rounded-2xl shadow-lg w-3/4" />
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2">
            <motion.div 
               whileInView={{opacity:1,x:0}}
               initial={{opacity:0,x:100}}
               transition={{duration:1}}
              className=" flex justify-center lg:justify-start text-white mt- ">
                <p className=" my-10 max-w-xl py-16">{ABOUT_TEXT}</p>
            </motion.div>
          </div>
      </div>
      
    </div>
    
  );
};

export default About;
