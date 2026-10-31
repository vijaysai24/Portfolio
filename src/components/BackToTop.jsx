import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import ScrollLink from "./ui/ScrollLink";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-5 right-5 z-40 sm:bottom-8 sm:right-8"
        >
          <ScrollLink
            to="home"
            aria-label="Back to top"
            title="Back to top"
            className="group grid size-12 place-items-center rounded-full bg-ink text-paper shadow-[0_14px_30px_-12px_rgb(17_18_20/0.6)] ring-1 ring-paper/15 transition-colors duration-300 hover:bg-accent"
          >
            <FiArrowUp size={18} aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-y-0.5" />
          </ScrollLink>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
