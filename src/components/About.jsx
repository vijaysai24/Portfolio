import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaDatabase,
  FaGraduationCap,
  FaBriefcase,
  FaUserCheck,
} from "react-icons/fa";

const highlights = [
  {
    icon: <FaLaptopCode className="text-blue-500" />,
    title: "Frontend Architecture",
    description:
      "Building enterprise application dashboards using React, Angular, and optimized Tailwind UI tokens.",
  },
  {
    icon: <FaMobileAlt className="text-indigo-500" />,
    title: "Mobile Development",
    description:
      "Developing responsive native layouts and cross-platform fluid features using React Native.",
  },
  {
    icon: <FaServer className="text-violet-500" />,
    title: "Backend Frameworks",
    description:
      "Creating highly secure REST APIs and integration routes using Node.js, Express.js, and JWT.",
  },
  {
    icon: <FaDatabase className="text-emerald-500" />,
    title: "Data & Systems Integration",
    description:
      "Designing functional structured relational schemas with performant execution paths using SQL.",
  },
];

const stats = [
  { number: "2+", title: "Years Experience" },
  { number: "6+", title: "Projects Built" },
  { number: "10+", title: "Core Technologies" },
  { number: "100%", title: "Delivery Focus" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-slate-50 text-slate-900 py-12 overflow-hidden"
    >
      {/* Ambient Gradient Soft Aura Spots (Matching Hero) */}
      <div className="absolute left-1/4 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4 max-w-3xl"
        >
          {/* Status Capsule Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-zinc-200 rounded-full shadow-xs">
            <FaUserCheck className="text-blue-500 text-xs" />
            <span className="text-[11px] font-mono text-zinc-600 font-medium tracking-wider uppercase">
              Profile Summary
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
            Full Stack Software Engineer
          </h2>
          <p className="text-zinc-600 text-base md:text-lg leading-relaxed font-normal">
            I'm Pechetti Sai Vijay, a Software Engineer dedicated to constructing structured, enterprise-grade
            applications. I construct fast web platforms, solid backend APIs, and integration environments
            focused on pristine code patterns and seamless usability.
          </p>
        </motion.div>

        {/* Glass Grid Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
              className="bg-white/90 backdrop-blur-md border border-zinc-200/90 rounded-2xl p-6 shadow-sm shadow-zinc-200/50 hover:border-zinc-300 hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-zinc-900 via-slate-800 to-zinc-600 bg-clip-text text-transparent">
                {item.number}
              </h3>
              <p className="mt-1 text-xs text-zinc-500 font-semibold tracking-wide uppercase font-mono">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Focus Core Framework Capabilities */}
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          {highlights.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
              className="group bg-white/90 backdrop-blur-md border border-zinc-200/90 hover:border-zinc-300 rounded-[1.5rem] p-6 flex gap-5 transition-all duration-300 shadow-xs hover:shadow-md shadow-zinc-200/40"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-slate-50 border border-zinc-200/80 flex items-center justify-center text-xl shadow-2xs group-hover:scale-105 transition-transform duration-300">
                {card.icon}
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-zinc-900">
                  {card.title}
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline Glass Panels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-2 gap-6"
        >
          {/* Timeline Node: Experience */}
          <div className="bg-white/90 backdrop-blur-md border border-zinc-200/90 rounded-[1.8rem] p-6 sm:p-7 space-y-6 shadow-xs">
            <div className="flex items-center gap-3 border-b border-zinc-100 pb-4">
              <div className="p-2.5 bg-blue-50 border border-blue-100 rounded-xl text-blue-600 text-sm shadow-2xs">
                <FaBriefcase />
              </div>
              <div>
                <h3 className="text-base font-bold text-zinc-900">Work Experience</h3>
                <p className="text-[11px] text-zinc-400 font-mono">Engineering Timeline</p>
              </div>
            </div>

            <div className="space-y-6 relative border-l border-zinc-200/80 pl-5 ml-2">
              <div className="relative space-y-1 group">
                <div className="absolute -left-[25px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-600 ring-4 ring-blue-100" />
                <h4 className="text-sm font-bold text-zinc-900">Software Development Engineer</h4>
                <p className="text-xs font-semibold text-zinc-600">SABADO Technologies</p>
                <span className="inline-block px-2 py-0.5 bg-zinc-100 text-zinc-600 rounded text-[10px] font-mono uppercase font-semibold">
                  June 2024 — Present
                </span>
              </div>

              <div className="relative space-y-1 group">
                <div className="absolute -left-[25px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-300 ring-4 ring-zinc-100" />
                <h4 className="text-sm font-bold text-zinc-900">Software Development Intern</h4>
                <p className="text-xs font-semibold text-zinc-600">Black Bucks Pvt Ltd</p>
                <span className="inline-block px-2 py-0.5 bg-zinc-100 text-zinc-500 rounded text-[10px] font-mono uppercase font-medium">
                  June 2023 — Aug 2023
                </span>
              </div>
            </div>
          </div>

          {/* Timeline Node: Education */}
          <div className="bg-white/90 backdrop-blur-md border border-zinc-200/90 rounded-[1.8rem] p-6 sm:p-7 space-y-6 shadow-xs">
            <div className="flex items-center gap-3 border-b border-zinc-100 pb-4">
              <div className="p-2.5 bg-indigo-50 border border-indigo-100 rounded-xl text-indigo-600 text-sm shadow-2xs">
                <FaGraduationCap />
              </div>
              <div>
                <h3 className="text-base font-bold text-zinc-900">Education</h3>
                <p className="text-[11px] text-zinc-400 font-mono">Academic Background</p>
              </div>
            </div>

            <div className="space-y-6 relative border-l border-zinc-200/80 pl-5 ml-2">
              <div className="relative space-y-1 group">
                <div className="absolute -left-[25px] top-1.5 w-2.5 h-2.5 rounded-full bg-indigo-600 ring-4 ring-indigo-100" />
                <h4 className="text-sm font-bold text-zinc-900">B.Tech Computer Science</h4>
                <p className="text-xs font-semibold text-zinc-600">SRKR Engineering College</p>
                <span className="inline-block px-2 py-0.5 bg-zinc-100 text-zinc-600 rounded text-[10px] font-mono uppercase font-semibold">
                  2020 — 2024
                </span>
              </div>

              <div className="relative space-y-1 group">
                <div className="absolute -left-[25px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-300 ring-4 ring-zinc-100" />
                <h4 className="text-sm font-bold text-zinc-900">Higher Secondary Education</h4>
                <p className="text-xs font-semibold text-zinc-600">Tirumala Junior College</p>
                <span className="inline-block px-2 py-0.5 bg-zinc-100 text-zinc-500 rounded text-[10px] font-mono uppercase font-medium">
                  2018 — 2020
                </span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}