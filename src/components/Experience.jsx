import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="pb-4 border-b border-neutral-900"
    >
      <h1 className="my-20 text-4xl text-center">Experience</h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex flex-wrap mb-8 lg:justify-center"
          >
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {experience.role} - <span>{experience.company}</span>
              </h6>
              <p className="mb-4 text-neutral-400"> {experience.description}</p>
              {experience.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="px-2 mt-4 mr-2 rounded bg-neutral-900"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
