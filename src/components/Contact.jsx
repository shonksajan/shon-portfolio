import { motion } from "framer-motion";
import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="pb-20 border-b border-neutral-900"
    >
      <h1 className="my-10 text-4xl text-center">Get in Touch</h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="tracking-tighter text-center"
      >
        <p className="my-4">{CONTACT.phoneNo}</p>
        <motion.a
          href={`mailto:${CONTACT.email}`}
          className="border-b"
          whileHover={{ scale: 1.1, color: "#38bdf8" }}
          transition={{ duration: 0.2 }}
        >
          {CONTACT.email}
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
