import { motion } from "framer-motion";
import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="text-neutral-100 mt-5 border-b border-neutral-900 pb-20 sm:px-6 lg:px-8">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-8 sm:my-10 text-center text-4xl sm:text-4xl text-opacity-70"
      >
        Get In Touch With Me
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="my-4">{CONTACT.address}
        </motion.p>
        <motion.p 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.9 }}
        className="my-4">{CONTACT.phoneNo}
        
        </motion.p>
        <motion.a
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 2 }}
          whileTap={{ scale: 2 }}
          href="mailto:prabashanapubaudu@gmail.com"
          className="border-b inline-block"
        >
          {CONTACT.email}
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;