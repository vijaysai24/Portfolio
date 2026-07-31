import { useState } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaCubes } from "react-icons/fa";
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
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-0 w-full z-50 px-4 sm:px-6 lg:px-8"
    >
      <nav className="max-w-6xl mx-auto backdrop-blur-xl bg-white/85 border border-zinc-200/90 rounded-2xl shadow-md shadow-zinc-200/50 transition-all duration-300">
        <div className="px-5 sm:px-6 py-3 flex justify-between items-center">

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="p-2 bg-zinc-900 border border-zinc-800 rounded-xl group-hover:bg-zinc-800 transition-colors duration-200">
              <FaCubes className="text-white" size={16} />
            </div>
            <h1 className="text-base sm:text-lg font-semibold tracking-tight text-zinc-900">
              Sai <span className="text-zinc-500 font-medium">Vijay</span>
            </h1>
          </motion.div>

          {/* Desktop Nav Pills */}
          <div className="hidden md:flex items-center gap-0.5 bg-slate-100/80 p-1 rounded-xl border border-zinc-200/80">
            {menuItems.map((item, index) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth
                duration={500}
                offset={-90}
                className="relative px-3.5 py-1.5 cursor-pointer text-xs text-zinc-600 hover:text-zinc-900 font-medium transition-colors duration-200 z-10"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {hoveredIndex === index && (
                  <motion.span
                    layoutId="navHoverPill"
                    className="absolute inset-0 bg-white border border-zinc-200/90 rounded-lg -z-10 shadow-sm"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {item}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <motion.a
              whileHover={{ y: -1, scale: 1.02 }}
              whileTap={{ y: 0, scale: 0.98 }}
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-zinc-900 hover:bg-zinc-800 rounded-xl shadow-md shadow-zinc-900/10 transition-all duration-200"
            >
              Resume
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-xl text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/80 transition-all duration-200 md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {open ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>

        {/* Mobile Sheet */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="overflow-hidden md:hidden border-t border-zinc-200/80 bg-white/95 rounded-b-2xl"
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
                    className="block px-4 py-2.5 text-xs font-medium text-zinc-700 rounded-xl cursor-pointer hover:bg-slate-100 hover:text-zinc-900 transition-all duration-200"
                  >
                    {item}
                  </Link>
                ))}

                <div className="pt-2 pb-1 px-2">
                  <a
                    href="/resume.pdf"
                    download
                    className="block text-center bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold uppercase tracking-wider py-2.5 rounded-xl transition-all duration-200 shadow-sm"
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