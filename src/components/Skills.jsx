import { motion } from "framer-motion";
import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaCode,
  FaServer,
  FaTools,
} from "react-icons/fa";
import {
  SiExpress,
  SiMysql,
  SiTailwindcss,
  SiPostman,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend Architecture",
    categoryBadge: "Client Engine",
    icon: <FaCode className="text-blue-500" />,
    description:
      "Developing dynamic client-side engines, reactive state, and modular UI systems.",
    skills: [
      { name: "Angular", icon: <FaAngular className="text-red-500" /> },
      { name: "React JS", icon: <FaReact className="text-sky-400" /> },
      { name: "React Native", icon: <FaReact className="text-sky-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-amber-400" /> },
    ],
  },
  {
    title: "Backend & Systems",
    categoryBadge: "Server Runtime",
    icon: <FaServer className="text-indigo-500" />,
    description:
      "Constructing modular API routes, middleware pipelines, and runtime models.",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-emerald-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-zinc-800" /> },
      { name: "REST APIs", icon: <FaDatabase className="text-indigo-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    ],
  },
  {
    title: "Data & Tooling",
    categoryBadge: "DevOps & Tooling",
    icon: <FaTools className="text-violet-500" />,
    description:
      "Relational storage schemas, version control orchestration, and API testing sandboxes.",
    skills: [
      { name: "Git Engine", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub Enterprise", icon: <FaGithub className="text-zinc-900" /> },
      { name: "Postman API", icon: <SiPostman className="text-orange-600" /> },
      { name: "Data Management", icon: <FaDatabase className="text-slate-600" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-slate-50 text-slate-900 py-12 overflow-hidden"
    >
      {/* Ambient Gradient Soft Aura Spots (Matching Hero) */}
      <div className="absolute top-1/4 -left-20 w-[450px] h-[450px] bg-blue-400/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[450px] h-[450px] bg-indigo-400/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto space-y-3 mb-16"
        >
          <div className="inline-flex gap-2 px-3.5 py-1 bg-white rounded-full shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
            <span className="text-[11px] font-mono text-zinc-600 font-medium tracking-wider uppercase">
              Technical Competencies
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
            Engineered Stack & Architecture
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            A comprehensive suite of modern frameworks, runtime engines, and development tools engineered for scalability.
          </p>
        </motion.div>

        {/* Stack Architecture Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -4 }}
              className="bg-white/90 backdrop-blur-sm border border-zinc-200/90 rounded-[1.8rem] p-6 lg:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-zinc-200/50 hover:border-zinc-300 transition-all duration-300 group"
            >
              <div className="space-y-5">
                {/* Section Header */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-slate-100/80 border border-zinc-200/80 rounded-2xl text-lg group-hover:scale-105 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 bg-zinc-100 text-zinc-600 rounded-md font-semibold">
                      {category.categoryBadge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-zinc-900">
                      {category.title}
                    </h3>
                    <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>

                <hr className="border-zinc-100" />

                {/* Sub-grid Inner Components */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  {category.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 bg-slate-50/80 border border-zinc-200/70 hover:border-zinc-300 hover:bg-white p-2.5 rounded-xl transition-all duration-200 shadow-2xs"
                    >
                      <div className="text-base flex-shrink-0">
                        {skill.icon}
                      </div>
                      <span className="text-xs font-semibold text-zinc-700 truncate">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Directory Environment Overview Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 bg-white/80 backdrop-blur-md border border-zinc-200/90 rounded-2xl p-5 shadow-xs"
        >
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              "Angular",
              "React",
              "React Native",
              "Node.js",
              "Express.js",
              "MySQL",
              "Tailwind CSS",
              "Git",
              "GitHub",
              "REST APIs",
              "JavaScript",
              "TypeScript",
            ].map((tech, index) => (
              <span
                key={index}
                className="bg-slate-50 border border-zinc-200 text-zinc-700 px-3 py-1 rounded-lg text-xs font-mono font-medium tracking-wide transition-all duration-200 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 select-none cursor-default"
              >
                {tech}.env
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}