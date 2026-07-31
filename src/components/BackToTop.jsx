import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling roughly past the first viewport
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
                    className="fixed bottom-6 right-6 z-50"
                >
                    <Link to="home" smooth duration={600} className="cursor-pointer group">
                        <div className="w-11 h-11 rounded-xl bg-white/90 backdrop-blur-sm border border-zinc-200/90 text-zinc-600 group-hover:text-zinc-900 group-hover:bg-white group-hover:border-zinc-300 flex items-center justify-center transition-all duration-200 shadow-md shadow-zinc-200/60 hover:shadow-lg hover:shadow-zinc-200/80">
                            <FaArrowUp className="text-sm group-hover:-translate-y-0.5 transition-transform duration-200" />
                        </div>
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
    );
}