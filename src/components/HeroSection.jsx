import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaBriefcase,
  FaLayerGroup,
  FaCode,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import ProfileImage from "../assets/images/Profile.png";

export default function HeroSection() {
  const quickSkills = [
    "React Js",
    "React Native",
    "Angular",
    "Node.js",
    "TypeScript",
    "MySQL",
  ];

  return (
    <section
      id="home"
      className="relative min-h-[92vh] bg-slate-50 text-slate-900 flex items-center overflow-hidden pt-28 pb-16"
    >
      {/* Ambient Gradient Soft Aura Spots */}
      <div className="absolute top-10 left-1/4 w-[450px] h-[450px] bg-blue-400/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-indigo-400/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-400/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">

        {/* Left Side: Main Presentation Content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-7 space-y-7"
        >
          {/* Status Capsule Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-white border border-zinc-200/90 rounded-full shadow-sm shadow-zinc-200/50">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] text-zinc-700 font-medium tracking-wide uppercase">
              Available for select engineering roles
            </span>
          </div>

          {/* Name & Headline Block */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.08]">
              Pechetti <br />
              <span className="bg-gradient-to-r from-zinc-900 via-slate-800 to-zinc-600 bg-clip-text text-transparent font-sans font-light">
                Sai Vijay
              </span>
            </h1>

            {/* Dynamic Typer Subtitle */}
            <div className="text-lg sm:text-xl font-semibold h-8 flex items-center tracking-wide">
              <span className="text-zinc-500 mr-2 font-normal">Specializing in</span>
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent font-semibold">
                <TypeAnimation
                  sequence={[
                    "Full Stack Architecture",
                    2500,
                    "Frontend Engineering",
                    2500,
                    "Mobile Applications",
                    2500,
                    "REST API Ecosystems",
                    2500,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </div>
          </div>

          {/* Intro Description */}
          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
            Software Engineer constructing high-performance web platforms, enterprise dashboards,
            and cross-platform mobile apps. Driven by clean component architecture,
            optimized APIs, and fluid user experiences.
          </p>

          {/* Quick Skill Tags Pill Bar */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider mr-1 flex items-center gap-1">
              <FaLayerGroup className="text-[10px]" /> Core:
            </span>
            {quickSkills.map((skill, index) => (
              <span
                key={index}
                className="px-2.5 py-1 text-xs font-medium bg-white/90 border border-zinc-200 text-zinc-700 rounded-md shadow-xs"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Action Buttons Block */}
          <div className="pt-3 flex flex-wrap items-center gap-4">
            <motion.a
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ y: 0 }}
              href="/resume.pdf"
              download
              className="px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-white rounded-xl font-semibold text-sm transition-all flex items-center gap-2.5 shadow-md shadow-zinc-900/15"
            >
              <FaDownload className="text-xs" />
              Download Resume
            </motion.a>

            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              href="#contact"
              className="px-6 py-3.5 border border-zinc-200 bg-white hover:bg-zinc-100/80 rounded-xl text-zinc-800 font-medium text-sm transition-all shadow-xs"
            >
              Contact Me
            </motion.a>
          </div>

          {/* Social Tray */}
          <div className="pt-2 flex items-center gap-3">
            {[
              { href: "https://github.com/vijaysai24", icon: <FaGithub />, title: "GitHub" },
              { href: "https://www.linkedin.com/in/vijay-pechetti-01845027b/", icon: <FaLinkedin />, title: "LinkedIn" },
              { href: "mailto:saipechetti2002@gmail.com", icon: <FaEnvelope />, title: "Email" }
            ].map((social, i) => (
              <motion.a
                key={i}
                whileHover={{ y: -3, scale: 1.05 }}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                title={social.title}
                className="p-3 bg-white border border-zinc-200/90 rounded-xl text-zinc-600 hover:text-zinc-900 hover:border-zinc-300 text-lg transition-all shadow-xs"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Enhanced Interactive Image Card Space */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 flex justify-center md:justify-end relative"
        >
          <div className="relative group">
            {/* Soft Ambient Glow Halo behind the profile */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 rounded-[2.5rem] blur-3xl group-hover:scale-105 transition-all duration-700" />

            {/* Glass Profile Frame Container */}
            <div className="relative p-3.5 bg-white/90 border border-zinc-200/90 rounded-[2.8rem] shadow-2xl shadow-zinc-300/60 backdrop-blur-xl transition-all duration-500 group-hover:border-zinc-300">
              <img
                src={ProfileImage}
                alt="Sai Vijay"
                className="w-72 h-72 sm:w-80 sm:h-80 object-cover rounded-[2rem] transition-transform duration-700 ease-out group-hover:scale-[1.01]"
              />
            </div>

            {/* Floating Glass Experience Card 1 (Top Left) */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-6 bg-white/95 border border-zinc-200/90 backdrop-blur-md rounded-2xl p-3.5 shadow-lg shadow-zinc-200/80 flex items-center gap-3 z-20"
            >
              <div className="p-2.5 bg-blue-50 border border-blue-100 rounded-xl text-blue-600">
                <FaBriefcase size={16} />
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-900">2+ Years Exp.</p>
                <p className="text-[10px] text-zinc-500 font-medium">Software Development</p>
              </div>
            </motion.div>

            {/* Floating Glass Tech Card 2 (Bottom Right) */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -right-4 bg-white/95 border border-zinc-200/90 backdrop-blur-md rounded-2xl p-3.5 shadow-lg shadow-zinc-200/80 flex items-center gap-3 z-20"
            >
              <div className="p-2.5 bg-indigo-50 border border-indigo-100 rounded-xl text-indigo-600">
                <FaCode size={16} />
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-900">Full Stack</p>
                <p className="text-[10px] text-zinc-500 font-medium">Web & Mobile Apps</p>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}