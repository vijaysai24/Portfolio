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
    <footer className="bg-slate-100 border-t border-slate-200 text-slate-900 relative overflow-hidden">
      {/* Structural Backdrop Layer Accent */}
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[200px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Top Section: Directory Configuration */}
      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 md:gap-6">
          
          {/* Column 1: Core System Signature */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 space-y-4"
          >
            <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
              Pechetti <span className="text-zinc-500 font-normal">Sai Vijay</span>
            </h2>
            <p className="text-zinc-600 text-xs leading-relaxed max-w-sm font-normal">
              Systems architecture and full-stack implementation engineering. 
              Focused on constructing highly performant web, mobile, and relational database runtime engines.
            </p>
          </motion.div>

          {/* Column 2: System Routing Mapping */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-3 space-y-4"
          >
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
                  className="inline-block cursor-pointer text-xs font-medium text-zinc-600 hover:text-zinc-900 transition-colors duration-150"
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Column 3: External Access Pipelines */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-4 space-y-4"
          >

            <p className="text-zinc-600 text-xs font-normal">
              Establish secure communication pipelines for operational enterprise opportunities.
            </p>
            
            <div className="flex gap-2.5 pt-1">
              <a
                href="https://github.com/vijaysai24"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 flex items-center justify-center transition-all text-sm shadow-sm"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/vijay-pechetti-01845027b/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 flex items-center justify-center transition-all text-sm shadow-sm"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:saipechetti2002@gmail.com"
                className="w-9 h-9 rounded-lg bg-white border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 flex items-center justify-center transition-all text-sm shadow-sm"
              >
                <FaEnvelope />
              </a>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Section: Ledger */}
      <div className="border-t border-zinc-200 bg-zinc-200/40">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          
          <p className="text-[11px] font-mono tracking-wide text-zinc-500 text-center sm:text-left">
            &copy; {currentYear} Pechetti Sai Vijay. All systems operational. 
            Engineered via React & Tailwind Core.
          </p>

          {/* Return To Origin Vector Link */}
          <Link
            to="home"
            smooth
            duration={600}
            className="cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-lg bg-white border border-zinc-200 text-zinc-600 group-hover:text-zinc-900 group-hover:bg-zinc-50 flex items-center justify-center transition-all shadow-sm">
              <FaArrowUp className="text-xs group-hover:-translate-y-0.5 transition-transform duration-200" />
            </div>
          </Link>

        </div>
      </div>
    </footer>
  );
}