import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/shonprofile.jpg";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="pb-4 border-b border-neutral-900 lg:mb-35"
    >
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Shon K Sajan
            </h1>
            <span className="text-xl font-semibold text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text">
              Software Developer
            </span>
            <p className="max-w-screen-xl py-6 my-2 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img className="rounded-2xl" src={profilepic} alt="Shon K Sajan" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
