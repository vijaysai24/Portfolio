import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import ProfileImage from "../assets/images/Profile.png";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-zinc-950 text-white flex items-center overflow-hidden pt-24"
    >
      {/* Background Grid Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_60%,transparent_100%)] opacity-40" />
      
      {/* Dynamic Colored Glow Fields to break the total blackness */}
      <div className="absolute top-12 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-12 right-1/4 w-[500px] h-[500px] bg-zinc-700/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-12 gap-12 items-center relative z-10 py-12">
        
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-7 space-y-6"
        >
          {/* Status Capsule */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-zinc-900/90 border border-zinc-800 rounded-full shadow-inner shadow-white/5">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <p className="text-[11px] text-zinc-300 font-semibold tracking-wider uppercase">Available for select roles</p>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            Pechetti <br />
            <span className="bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500 bg-clip-text text-transparent font-sans font-light">Sai Vijay</span>
          </h1>

          {/* Clean Dynamic Typer */}
          <div className="text-lg md:text-xl font-medium text-blue-400 h-8 flex items-center tracking-wide">
            <TypeAnimation
              sequence={[
                "Full Stack Engineer",
                2500,
                "Frontend Specialist",
                2500,
                "Mobile UI Developer",
                2500,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl font-normal">
            Full Stack Software Engineer specializing in scalable enterprise dashboards and mobile 
            architectures. Experienced in crafting modern high-performance interfaces across 
            React, Angular, and Node.js ecosystems.
          </p>

          {/* Action Blocks */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <motion.a
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ y: 0 }}
              href="/resume.pdf"
              download
              className="px-6 py-3 bg-white hover:bg-zinc-100 text-zinc-950 rounded-xl font-semibold text-sm transition-all flex items-center gap-2 shadow-[0_4px_24px_rgba(255,255,255,0.1)]"
            >
              <FaDownload className="text-xs" />
              Download Resume
            </motion.a>

            <motion.a
              whileHover={{ bg: "rgba(39,39,42,0.5)", borderColor: "rgba(113,113,122,0.5)" }}
              href="#contact"
              className="px-6 py-3 border border-zinc-800 bg-zinc-900/40 rounded-xl text-zinc-200 font-medium text-sm transition-all"
            >
              Contact Me
            </motion.a>
          </div>

          {/* Social Tray */}
          <div className="pt-6 flex items-center gap-3">
            {[
              { href: "https://github.com/", icon: <FaGithub /> },
              { href: "https://linkedin.com/in/vijaypechetti", icon: <FaLinkedin /> },
              { href: "mailto:saipechetti2002@gmail.com", icon: <FaEnvelope /> }
            ].map((social, i) => (
              <motion.a
                key={i}
                whileHover={{ y: -3, scale: 1.05, borderColor: "rgba(255,255,255,0.2)", color: "#fff" }}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 bg-zinc-900/60 border border-zinc-800/80 rounded-xl text-zinc-400 text-lg transition-all shadow-sm"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Image Space */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 flex justify-center md:justify-end"
        >
          <div className="relative group">
            {/* Background lighting flare behind the image */}
            <div className="absolute inset-0 bg-blue-500/20 rounded-[2.5rem] blur-3xl group-hover:bg-blue-500/30 transition-all duration-700" />
            
            {/* Sharp glowing glass outer ring container */}
            <div className="relative p-3 bg-gradient-to-b from-zinc-800/40 to-zinc-900/80 border border-zinc-700/50 rounded-[2.8rem] shadow-[0_24px_60px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all duration-500 group-hover:border-zinc-600/70">
              <img
                src={ProfileImage}
                alt="Sai Vijay"
                className="w-72 h-72 sm:w-80 sm:h-80 object-cover rounded-[2rem] transition-transform duration-700 ease-out group-hover:scale-[1.01]"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}