import { motion } from "framer-motion";
import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import {
  SiExpress,
  SiJavascript,
  SiMysql,
  SiTailwindcss,
  SiPostman,
  SiTypescript,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend Architecture",
    description: "Developing dynamic client-side engines and modular, state-driven interfaces.",
    skills: [
      { name: "Angular", icon: <FaAngular /> },
      { name: "React JS", icon: <FaReact /> },
      { name: "React Native", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Backend & Systems",
    description: "Constructing modular API routes, structural middleware pipelines, and runtime models.",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "REST APIs", icon: <FaDatabase /> },
      { name: "JavaScript / TypeScript", icon: <SiTypescript /> },
    ],
  },
  {
    title: "Data Management & Tools",
    description: "Relational relational storage schemas, code version orchestration, and operational sandboxes.",
    skills: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Git Engine", icon: <FaGitAlt /> },
      { name: "GitHub Enterprise", icon: <FaGithub /> },
      { name: "Postman API Development", icon: <SiPostman /> },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-slate-50 text-slate-900 py-24 overflow-hidden border-t border-slate-200"
    >
      {/* Structural Minimal Backlighting Accent */}
      <div className="absolute top-1/2 left-10 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-3 mb-20"
        >
          <p className="text-xs text-zinc-500 font-semibold tracking-widest uppercase">
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900">
            Engineered Core Stack
          </h2>
        </motion.div>

        {/* Stack Architecture Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-zinc-200 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                {/* Section Branding */}
                <div className="space-y-1.5">
                  <h3 className="text-lg font-semibold text-zinc-900">
                    {category.title}
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed font-normal">
                    {category.description}
                  </p>
                </div>

                <hr className="border-zinc-200" />

                {/* Sub-grid Inner Components */}
                <div className="space-y-2.5 pt-2">
                  {category.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="group flex items-center gap-3 bg-zinc-50 border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-100/80 p-3 rounded-xl transition-all duration-200"
                    >
                      <div className="text-zinc-600 group-hover:text-zinc-900 text-lg transition-colors duration-200">
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium text-zinc-700 group-hover:text-zinc-900 transition-colors duration-200">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Directory Overview Grid */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm"
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
                className="bg-zinc-50 border border-zinc-200 text-zinc-700 px-3 py-1.5 rounded-lg text-xs font-mono font-medium tracking-wide transition-colors duration-150 hover:bg-zinc-100 hover:text-zinc-900 select-none"
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