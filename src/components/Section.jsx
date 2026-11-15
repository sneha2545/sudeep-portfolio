import { motion, useReducedMotion } from "framer-motion";

export function FadeIn({ children, className = "", delay = 0, ...props }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: reduceMotion ? 0 : 0.65, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className={`section-heading${light ? " section-heading--light" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
