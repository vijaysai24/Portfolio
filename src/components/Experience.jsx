import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

const experiences = [
  {
    company: "SABADO Technologies",
    role: "Software Development Engineer",
    duration: "June 2024 - Present",
    location: "Bangalore, India",
    isCurrent: true,
    technologies: [
      "Angular",
      "React",
      "React Native",
      "Node.js",
      "Express.js",
      "MySQL",
      "Tailwind CSS",
      "REST APIs",
      "Git",
    ],
    responsibilities: [
      "Designed and developed scalable web applications using Angular and React.",
      "Built cross-platform mobile applications using React Native.",
      "Developed backend REST APIs with Node.js and Express.js.",
      "Designed MySQL database schemas and optimized SQL queries.",
      "Implemented JWT authentication and Role-Based Access Control (RBAC).",
      "Developed the complete Wallet module for the RingPe payment application.",
      "Optimized application performance through lazy loading and API optimization.",
    ],
  },
  {
    company: "Black Bucks Pvt Ltd",
    role: "Software Development Intern",
    duration: "June 2023 - August 2023",
    location: "Bangalore, India",
    isCurrent: false,
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MySQL",
      "REST APIs",
      "Git",
    ],
    responsibilities: [
      "Built a functional Restaurant Management System platform.",
      "Designed responsive frontend layout pages using React.",
      "Created transactional backend API pipelines using Node.js and Express.",
      "Integrated structural MySQL database CRUD engines with strict query execution validations.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-slate-50 text-slate-900 py-12 overflow-hidden"
    >
      {/* Ambient Gradient Soft Aura Spots (Matching Hero/About/Skills) */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[450px] h-[450px] bg-indigo-400/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Section Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3 mb-16 text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-zinc-200 rounded-full shadow-xs">
            <FaBriefcase className="text-blue-500 text-xs" />
            <span className="text-[11px] font-mono text-zinc-600 font-medium tracking-wider uppercase">
              Career Journey
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
            Professional Experience
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Track record of constructing enterprise web dashboards, cross-platform mobile apps, and robust API architectures.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l border-zinc-200/80 ml-4 md:ml-6 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="relative pl-7 md:pl-10 group"
            >
              {/* Illuminated Timeline Node */}
              <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-white border-2 border-zinc-300 group-hover:border-blue-600 transition-colors duration-300 flex items-center justify-center shadow-xs">
                <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${exp.isCurrent ? 'bg-emerald-500 animate-pulse' : 'bg-zinc-400 group-hover:bg-blue-600'}`} />
              </div>

              {/* Glass Card Container */}
              <div className="bg-white/90 backdrop-blur-md border border-zinc-200/90 hover:border-zinc-300 rounded-[1.8rem] p-6 sm:p-8 space-y-6 shadow-sm hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300">

                {/* Meta Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 border-b border-zinc-100 pb-5">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-xl font-bold text-zinc-900">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span className="px-2 py-0.5 text-[10px] font-mono font-semibold bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-md">
                          Active Role
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-zinc-600">
                      {exp.company}
                    </p>
                  </div>

                  {/* Metadata Tags */}
                  <div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-600 md:items-end md:flex-col">
                    <span className="inline-flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-lg border border-zinc-200/80 font-medium shadow-2xs">
                      <FaCalendarAlt className="text-[10px] text-zinc-400" />
                      {exp.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-slate-50/70 px-3 py-1 rounded-lg border border-zinc-200/80 font-medium">
                      <FaMapMarkerAlt className="text-[10px] text-zinc-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Scope Responsibilities Description */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-zinc-400 flex items-center gap-1.5">
                    <FaCheckCircle className="text-blue-500 text-[10px]" /> Key Contributions
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="text-zinc-600 text-xs sm:text-sm leading-relaxed flex items-start gap-2.5">
                        <span className="text-blue-500 select-none mt-1 text-[11px] font-mono">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Framework and Skills Pills Block */}
                <div className="space-y-3 pt-2 border-t border-zinc-100">
                  <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-zinc-400">
                    Engineered Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-slate-50/80 hover:bg-zinc-900 hover:text-white border border-zinc-200/80 text-zinc-700 px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all duration-200 select-none cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}