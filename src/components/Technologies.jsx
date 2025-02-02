import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { DiDjango } from "react-icons/di";
import { FaPython, FaJava } from "react-icons/fa";
import { SiMysql, SiFastapi } from "react-icons/si";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";

// Floating effect animation
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  const techIcons = [
    { icon: <RiReactjsLine className="text-cyan-400" />, key: "react", duration: 2 },
    { icon: <DiDjango className="text-white" />, key: "django", duration: 2.5 },
    { icon: <FaPython className="text-blue-400" />, key: "python", duration: 3 },
    { icon: <SiMysql className="text-blue-500" />, key: "mysql", duration: 2.2 },
    { icon: <IoLogoJavascript className="text-yellow-500" />, key: "javascript", duration: 2.8 },
    { icon: <SiFastapi className="text-green-500" />, key: "fastapi", duration: 3.2 },
    { icon: <IoLogoFirebase className="text-yellow-400" />, key: "firebase", duration: 2.6 },
    { icon: <FaJava className="text-red-400" />, key: "java", duration: 3.4 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-24 border-b border-neutral-800"
    >
      <h1 className="my-20 text-4xl text-center">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {techIcons.map((tech, index) => (
          <motion.div
            key={tech.key}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="p-4 border-4 rounded-2xl border-neutral-800 text-7xl"
          >
            <motion.div
              variants={iconVariants(tech.duration)}
              initial="initial"
              animate="animate"
            >
              {tech.icon}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Technologies;
