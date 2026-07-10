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
    <footer className="bg-zinc-950 border-t border-zinc-900 text-white relative overflow-hidden">
      {/* Structural Backdrop Layer Accent */}
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[200px] bg-zinc-800/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Top Section: Directory Configuration */}
      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 md:gap-6">
          
          {/* Column 1: Core System Signature (Weight: 5) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 space-y-4"
          >
            <h2 className="text-xl font-semibold tracking-tight text-zinc-100">
              Pechetti <span className="text-zinc-400 font-normal">Sai Vijay</span>
            </h2>
            <p className="text-zinc-500 text-xs leading-relaxed max-w-sm font-normal">
              Systems architecture and full-stack implementation engineering. 
              Focused on constructing highly performant web, mobile, and relational database runtime engines.
            </p>
          </motion.div>

          {/* Column 2: System Routing Mapping (Weight: 3) */}
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
                  className="inline-block cursor-pointer text-xs font-medium text-zinc-400 hover:text-zinc-100 transition-colors duration-150"
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Column 3: Secure External Access Pipelines (Weight: 4) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-4 space-y-4"
          >

            <p className="text-zinc-500 text-xs font-normal">
              Establish secure communication pipelines for operational enterprise opportunities.
            </p>
            
            <div className="flex gap-2.5 pt-1">
              <a
                href="https://github.com/YOUR_GITHUB_USERNAME"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800/80 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 flex items-center justify-center transition-all text-sm"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/vijaypechetti"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800/80 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 flex items-center justify-center transition-all text-sm"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:saipechetti2002@gmail.com"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800/80 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 flex items-center justify-center transition-all text-sm"
              >
                <FaEnvelope />
              </a>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Section: Immutable Data Ledger */}
      <div className="border-t border-zinc-900 bg-zinc-950/40">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          
          <p className="text-[11px] font-mono tracking-wide text-zinc-600 text-center sm:text-left">
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
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800/80 text-zinc-400 group-hover:text-zinc-100 group-hover:bg-zinc-800/50 flex items-center justify-center transition-all">
              <FaArrowUp className="text-xs group-hover:-translate-y-0.5 transition-transform duration-200" />
            </div>
          </Link>

        </div>
      </div>
    </footer>
  );
}