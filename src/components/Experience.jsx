import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
  {
    company: "SABADO Technologies",
    role: "Software Development Engineer",
    duration: "June 2024 - Present",
    location: "Bangalore, India",
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
      className="relative bg-zinc-950 text-white py-24 overflow-hidden border-t border-zinc-900"
    >
      {/* Structural Ambient Backlighting */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-zinc-800/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-3 mb-20"
        >
          <p className="text-xs text-zinc-500 font-semibold tracking-widest uppercase">
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-100">
            Professional Experience
          </h2>
        </motion.div>

        {/* Unidirectional Clean Timeline Workspace */}
        <div className="relative border-l border-zinc-800/80 ml-4 md:ml-6 space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline Indicator Ring */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-zinc-700 group-hover:border-zinc-400 transition-colors duration-300 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-zinc-800 group-hover:bg-zinc-400 rounded-full transition-colors duration-300" />
              </div>

              {/* Work Segment Container */}
              <div className="space-y-6">
                
                {/* Meta Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-white transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium text-zinc-400">
                      {exp.company}
                    </p>
                  </div>

                  {/* Metadata Chips */}
                  <div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-500 md:text-right md:flex-col md:items-end">
                    <span className="inline-flex items-center gap-1.5 bg-zinc-900/60 px-3 py-1 rounded-md border border-zinc-800/50">
                      <FaCalendarAlt className="text-[10px]" />
                      {exp.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-zinc-900/30 px-3 py-1 rounded-md border border-zinc-800/30">
                      <FaMapMarkerAlt className="text-[10px]" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Scope Responsibilities Description */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold tracking-wider uppercase text-zinc-500">
                    Key Contributions
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="text-zinc-400 text-sm leading-relaxed flex items-start gap-2.5">
                        <span className="text-zinc-600 select-none mt-1 text-[11px] font-mono">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Framework and Skills Pills Block */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold tracking-wider uppercase text-zinc-500">
                    Engineered Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-zinc-900/40 hover:bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-zinc-200 px-3 py-1 rounded-lg text-xs font-medium transition-colors duration-200"
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