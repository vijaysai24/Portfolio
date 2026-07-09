import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-zinc-950 text-white py-24 overflow-hidden border-t border-zinc-900"
    >
      {/* Structural Minimal Ambient Flare */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-zinc-800/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-3 mb-16"
        >
          <p className="text-xs text-zinc-500 font-semibold tracking-widest uppercase">
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-100">
            Initiate Project Scope
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 mt-12 items-start">
          
          {/* Left Side: Node Informational Parameters */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Email Contact Block */}
            <div className="group bg-zinc-900/10 border border-zinc-800/40 rounded-2xl p-5 flex items-center gap-4 transition-colors duration-200 hover:border-zinc-800">
              <div className="text-zinc-400 group-hover:text-zinc-200 text-lg transition-colors">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-xs font-mono tracking-wider text-zinc-500 uppercase">
                  Secure Electronic Mail
                </h3>
                <p className="text-sm font-medium text-zinc-300 mt-0.5">
                  saipechetti2002@gmail.com
                </p>
              </div>
            </div>

            {/* Phone Contact Block */}
            <div className="group bg-zinc-900/10 border border-zinc-800/40 rounded-2xl p-5 flex items-center gap-4 transition-colors duration-200 hover:border-zinc-800">
              <div className="text-zinc-400 group-hover:text-zinc-200 text-lg transition-colors">
                <FaPhoneAlt />
              </div>
              <div>
                <h3 className="text-xs font-mono tracking-wider text-zinc-500 uppercase">
                  Direct Inbound Voice
                </h3>
                <p className="text-sm font-medium text-zinc-300 mt-0.5">
                  +91 9347549149
                </p>
              </div>
            </div>

            {/* Location Block */}
            <div className="group bg-zinc-900/10 border border-zinc-800/40 rounded-2xl p-5 flex items-center gap-4 transition-colors duration-200 hover:border-zinc-800">
              <div className="text-zinc-400 group-hover:text-zinc-200 text-lg transition-colors">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-xs font-mono tracking-wider text-zinc-500 uppercase">
                  Operational HQ Base
                </h3>
                <p className="text-sm font-medium text-zinc-300 mt-0.5">
                  Bangalore, Karnataka, India
                </p>
              </div>
            </div>

            {/* Social Network Access Matrices */}
            <div className="flex gap-3 pt-4">
              <a
                href="https://linkedin.com/in/vijaypechetti"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 flex items-center justify-center transition-all text-base"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/YOUR_GITHUB_USERNAME"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 flex items-center justify-center transition-all text-base"
              >
                <FaGithub />
              </a>
            </div>
          </motion.div>

          {/* Right Side: Form Configuration Subsystem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 bg-zinc-900/20 backdrop-blur-md border border-zinc-800/60 rounded-2xl p-6 md:p-8"
          >
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block mb-2 text-xs font-mono text-zinc-400 tracking-wide uppercase">
                    Identity / Company
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-zinc-950 border border-zinc-800/80 rounded-xl p-3.5 text-sm text-zinc-200 outline-none placeholder:text-zinc-600 focus:border-zinc-700 transition-colors"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-xs font-mono text-zinc-400 tracking-wide uppercase">
                    Routing Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@domain.com"
                    className="w-full bg-zinc-950 border border-zinc-800/80 rounded-xl p-3.5 text-sm text-zinc-200 outline-none placeholder:text-zinc-600 focus:border-zinc-700 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-xs font-mono text-zinc-400 tracking-wide uppercase">
                  Project Classification
                </label>
                <input
                  type="text"
                  placeholder="System Integration / Full-Stack Engineering"
                  className="w-full bg-zinc-950 border border-zinc-800/80 rounded-xl p-3.5 text-sm text-zinc-200 outline-none placeholder:text-zinc-600 focus:border-zinc-700 transition-colors"
                />
              </div>

              <div>
                <label className="block mb-2 text-xs font-mono text-zinc-400 tracking-wide uppercase">
                  Scope Architecture Details
                </label>
                <textarea
                  rows="5"
                  placeholder="Outline the operational requirements and architectural milestones..."
                  className="w-full bg-zinc-950 border border-zinc-800/80 rounded-xl p-3.5 text-sm text-zinc-200 outline-none placeholder:text-zinc-600 focus:border-zinc-700 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-zinc-100 hover:bg-white text-zinc-950 transition-colors duration-200 rounded-xl py-3.5 font-semibold text-xs uppercase tracking-wider flex justify-center items-center gap-2 shadow-sm"
              >
                <FaPaperPlane className="text-[10px]" />
                Transmit Parameters
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}