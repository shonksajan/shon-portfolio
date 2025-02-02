import { motion } from "framer-motion";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="pb-4 border-b border-neutral-900"
    >
      <h1 className="my-20 text-4xl text-center">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        {/* Left - Image */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center"
          >
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </motion.div>
        </div>
        {/* Right - Text */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <p className="max-w-xl py-6 my-2">{ABOUT_TEXT}</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
