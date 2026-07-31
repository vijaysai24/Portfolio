import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";
import { Link } from "react-scroll";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-50 text-slate-900 overflow-hidden border-t border-zinc-200/80">
      {/* Ambient Gradient Soft Aura Spots (Matching Skills / Contact) */}
      <div className="absolute top-0 -left-20 w-[400px] h-[300px] bg-blue-400/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-[400px] h-[300px] bg-indigo-400/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-8">

          {/* Column 1: Signature */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-5 space-y-4"
          >
            <div className="inline-flex gap-2 px-3 py-1 bg-white rounded-full shadow-xs mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              <span className="text-[10px] font-mono text-zinc-600 font-medium tracking-wider uppercase">
                System Identity
              </span>
            </div>

            <h2 className="text-xl font-bold tracking-tight text-zinc-900">
              Pechetti <span className="text-zinc-500 font-medium">Sai Vijay</span>
            </h2>
            <p className="text-zinc-600 text-xs leading-relaxed max-w-sm">
              Systems architecture and full-stack implementation engineering.
              Focused on constructing highly performant web, mobile, and relational
              database runtime engines.
            </p>
          </motion.div>

          {/* Column 2: Navigation Map */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-3 space-y-4"
          >
            <h3 className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-semibold">
              Directory Routes
            </h3>
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
              {[
                "Home",
                "About",
                "Skills",
                "Experience",
                "Projects",
                "Contact",
              ].map((item) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  smooth
                  duration={500}
                  offset={-70}
                  className="inline-block cursor-pointer text-xs font-medium text-zinc-600 hover:text-zinc-900 transition-colors duration-200"
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Column 3: External Pipelines */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-4 space-y-4"
          >
            <h3 className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-semibold">
              Access Pipelines
            </h3>
            <p className="text-zinc-600 text-xs leading-relaxed max-w-xs">
              Establish secure communication channels for operational enterprise
              opportunities.
            </p>

            <div className="flex gap-2.5 pt-1">
              <a
                href="https://github.com/vijaysai24"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/90 border border-zinc-200/90 text-zinc-600 hover:text-zinc-900 hover:bg-white hover:border-zinc-300 flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/vijay-pechetti-01845027b/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/90 border border-zinc-200/90 text-zinc-600 hover:text-zinc-900 hover:bg-white hover:border-zinc-300 flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:saipechetti2002@gmail.com"
                className="w-10 h-10 rounded-xl bg-white/90 border border-zinc-200/90 text-zinc-600 hover:text-zinc-900 hover:bg-white hover:border-zinc-300 flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <FaEnvelope />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Ledger Bar */}
      <div className="border-t border-zinc-200/80 bg-white/60 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[11px] font-mono tracking-wide text-zinc-500 text-center sm:text-left">
            &copy; {currentYear} Pechetti Sai Vijay. All systems operational.
            Engineered via React & Tailwind Core.
          </p>
        </div>
      </div>
    </footer>
  );
}