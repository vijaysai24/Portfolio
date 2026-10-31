import { motion } from "framer-motion";
import { EASE_OUT } from "./motion";

// Fades and lifts its children the first time they scroll into view.
export default function Reveal({ as = "div", delay = 0, y = 24, className, children, ...props }) {
  const Component = motion[as];

  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.8, ease: EASE_OUT, delay }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}
