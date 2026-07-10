import { useState } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaLaptopCode ,FaCubes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const menuItems = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Contact",
  ];

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-0 w-full z-50 px-4 sm:px-6 lg:px-8 drop-shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
    >
      {/* High glassmorphic contrast wrapper */}
      <nav className="max-w-6xl mx-auto backdrop-blur-xl bg-zinc-900/60 border border-zinc-800/80 rounded-2xl transition-all duration-300 shadow-lg shadow-black/40">
        <div className="px-6 py-3 flex justify-between items-center">
          
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="p-2 bg-zinc-800/80 border border-zinc-700/40 rounded-xl transition-colors group-hover:border-zinc-500/50">
  <FaCubes  className="text-zinc-100 group-hover:text-white" size={18} />
</div>
            <h1 className="text-lg font-semibold tracking-tight text-white">
              Sai <span className="text-zinc-400 font-normal">Vijay</span>
            </h1>
          </motion.div>

          {/* Desktop Links Container with sharp inner contrast */}
          <div className="hidden md:flex items-center gap-1 bg-zinc-950/60 p-1 rounded-xl border border-zinc-800/60">
            {menuItems.map((item, index) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth
                duration={500}
                offset={-90}
                className="relative px-4 py-1.5 cursor-pointer text-xs text-zinc-400 hover:text-white font-medium transition-colors duration-300 z-10"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {hoveredIndex === index && (
                  <motion.span
                    layoutId="navHoverPill"
                    className="absolute inset-0 bg-zinc-800/80 border border-zinc-700/60 rounded-lg -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {item}
              </Link>
            ))}
          </div>

          {/* Button CTA */}
          <div className="hidden md:block">
            <motion.a
              whileHover={{ y: -1, scale: 1.02, boxShadow: "0 4px 20px rgba(255,255,255,0.1)" }}
              whileTap={{ y: 0 }}
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-100 rounded-xl shadow-md transition-all"
            >
              Resume
            </motion.a>
          </div>

          {/* Mobile Opener Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-zinc-400 hover:text-white transition-colors md:hidden focus:outline-none"
          >
            {open ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown Sheet */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden md:hidden border-t border-zinc-800/60 bg-zinc-900/95 rounded-b-2xl"
            >
              <div className="px-4 py-3 space-y-1">
                {menuItems.map((item) => (
                  <Link
                    key={item}
                    to={item.toLowerCase()}
                    smooth
                    duration={500}
                    offset={-90}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2.5 text-zinc-300 rounded-xl cursor-pointer hover:bg-zinc-800 hover:text-white transition-all text-xs font-medium"
                  >
                    {item}
                  </Link>
                ))}
                
                <div className="pt-2 pb-1 px-4">
                  <a
                    href="/resume.pdf"
                    download
                    className="block text-center bg-white hover:bg-zinc-100 text-zinc-950 text-xs font-semibold py-2.5 rounded-xl transition-all"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.div>
  );
}