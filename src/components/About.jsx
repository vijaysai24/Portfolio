import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaDatabase,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";

const highlights = [
  {
    icon: <FaLaptopCode />,
    title: "Frontend Architecture",
    description: "Building enterprise application dashboards using React, Angular, and optimized Tailwind UI tokens.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Development",
    description: "Developing responsive native layouts and cross-platform fluid features using React Native.",
  },
  {
    icon: <FaServer />,
    title: "Backend Frameworks",
    description: "Creating highly secure REST APIs and integration routes using Node.js, Express.js, and JWT.",
  },
  {
    icon: <FaDatabase />,
    title: "Data & Systems Integration",
    description: "Designing functional structured relational schemas with performant execution paths using SQL.",
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
      className="relative bg-zinc-950 text-white py-24 overflow-hidden border-t border-zinc-900"
    >
      {/* Structural accent background lights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-zinc-800/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4 max-w-3xl"
        >
          <p className="text-xs text-zinc-400 font-semibold tracking-widest uppercase">
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-100">
            Full Stack Software Engineer
          </h2>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-normal pt-2">
            I'm Pechetti Sai Vijay, a Software Engineer dedicated to constructing structured, enterprise-grade 
            applications. I construct fast web platforms, solid backend APIs, and integration environments 
            focused on pristine code patterns and seamless usability.
          </p>
        </motion.div>

        {/* High-Contrast Corporate Grid Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-900/30 backdrop-blur-md border border-zinc-800/60 rounded-xl p-6 shadow-sm hover:border-zinc-700/80 transition-colors"
            >
              <h4 className="text-3xl font-bold tracking-tight text-white">
                {item.number}
              </h4>
              <p className="mt-1 text-xs text-zinc-400 font-medium tracking-wide">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Focus Core Framework Capabilities */}
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          {highlights.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-zinc-900/20 hover:bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-6 flex gap-5 transition-all duration-300 shadow-sm"
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-700/40 text-zinc-300 flex items-center justify-center text-lg shadow-inner group-hover:border-zinc-500/40 transition-colors">
                {card.icon}
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-semibold text-zinc-100 group-hover:text-white transition-colors">
                  {card.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Corporate Track: Timeline Grid Panels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-2 gap-6"
        >
          {/* Timeline Node: Experience */}
          <div className="bg-zinc-900/20 border border-zinc-800/60 rounded-2xl p-6 space-y-6 shadow-sm">
            <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
              <div className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-300 text-sm">
                <FaBriefcase />
              </div>
              <h3 className="text-lg font-semibold text-zinc-100">Work History</h3>
            </div>
            
            <div className="space-y-6 relative border-l border-zinc-800 pl-4 ml-2">
              <div className="relative space-y-1">
                <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-zinc-400 border border-zinc-950" />
                <h4 className="text-sm font-semibold text-zinc-100">Software Development Engineer</h4>
                <p className="text-xs font-medium text-zinc-400">SABADO Technologies</p>
                <p className="text-[11px] text-zinc-500 font-mono uppercase">June 2024 — Present</p>
              </div>

              <div className="relative space-y-1">
                <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-zinc-700 border border-zinc-950" />
                <h4 className="text-sm font-semibold text-zinc-100">Software Development Intern</h4>
                <p className="text-xs font-medium text-zinc-400">Black Bucks Pvt Ltd</p>
                <p className="text-[11px] text-zinc-500 font-mono uppercase">June 2023 — Aug 2023</p>
              </div>
            </div>
          </div>

          {/* Timeline Node: Education */}
          <div className="bg-zinc-900/20 border border-zinc-800/60 rounded-2xl p-6 space-y-6 shadow-sm">
            <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
              <div className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-300 text-sm">
                <FaGraduationCap />
              </div>
              <h3 className="text-lg font-semibold text-zinc-100">Education</h3>
            </div>

            <div className="space-y-6 relative border-l border-zinc-800 pl-4 ml-2">
              <div className="relative space-y-1">
                <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-zinc-400 border border-zinc-950" />
                <h4 className="text-sm font-semibold text-zinc-100">B.Tech Computer Science</h4>
                <p className="text-xs font-medium text-zinc-400">SRKR Engineering College</p>
                <p className="text-[11px] text-zinc-500 font-mono uppercase">2020 — 2024</p>
              </div>

              <div className="relative space-y-1">
                <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-zinc-700 border border-zinc-950" />
                <h4 className="text-sm font-semibold text-zinc-100">Higher Secondary Education</h4>
                <p className="text-xs font-medium text-zinc-400">Tirumala Junior College</p>
                <p className="text-[11px] text-zinc-500 font-mono uppercase">2018 — 2020</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}