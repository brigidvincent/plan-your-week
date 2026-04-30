import { motion } from "framer-motion";

function FadeIn({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, delay, ease: [0.16,1,0.3,1] }}
      viewport={{ 
        once: true,
        amount: 1
    }}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;