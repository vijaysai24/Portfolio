import { useState } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Contact",
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <FaLaptopCode
            className="text-blue-500"
            size={32}
          />

          <h1 className="text-2xl font-bold text-white">
            Sai <span className="text-blue-500">Vijay</span>
          </h1>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">

          {menuItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth
              duration={500}
              offset={-70}
              className="cursor-pointer text-gray-300 hover:text-blue-400 transition duration-300 font-medium"
            >
              {item}
            </Link>
          ))}

        </div>

        {/* Resume Button */}
        <div className="hidden md:block">

          <a
            href="/resume.pdf"
            download
            className="px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition font-semibold"
          >
            Resume
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
        >
          {open ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}

      {open && (

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/90 backdrop-blur-lg"
        >

          {menuItems.map((item) => (

            <Link
              key={item}
              to={item.toLowerCase()}
              smooth
              duration={500}
              offset={-70}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 text-white border-b border-gray-800 cursor-pointer hover:bg-blue-600 transition"
            >
              {item}
            </Link>

          ))}

          <a
            href="/resume.pdf"
            download
            className="block text-center bg-blue-600 py-4 font-semibold hover:bg-blue-700"
          >
            Download Resume
          </a>

        </motion.div>

      )}
    </motion.nav>
  );
}