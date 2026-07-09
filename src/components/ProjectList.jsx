import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaMobileAlt,
  FaLaptopCode,
} from "react-icons/fa";
import RingPeLogo from "../assets/images/RingpeLogo.jpg";

const projects = [
  {
    title: "RingPe Wallet",
    category: "Mobile Architecture",
    image: RingPeLogo,
    description:
      "Engineered the production-ready transactional Wallet ecosystem for the RingPe ecosystem. Constructed end-to-end user workflows, live balance state management, and continuous ledger APIs.",
    technologies: ["React Native", "Node.js", "REST API", "MySQL", "JWT Architecture"],
    github: "#",
    demo: "https://play.google.com/store",
    icon: <FaMobileAlt />,
  },
  {
    title: "Restaurant Management System",
    category: "Full Stack Systems",
    image:
      "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=1200&q=80&auto=format&fit=crop",
    description:
      "Designed an administrative resource enterprise engine mapping storage models for dynamic menus, pricing variants, structural categorization schemas, and validation routing.",
    technologies: ["React", "Node.js", "Express.js", "MySQL Schema", "Data API Engine"],
    github: "#",
    demo: "#",
    icon: <FaLaptopCode />,
  },
];

export default function ProjectList() {
  return (
    <section
      id="projects"
      className="relative bg-zinc-950 text-white py-24 overflow-hidden border-t border-zinc-900"
    >
      {/* Structural Accent Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-zinc-800/5 rounded-full blur-[140px] pointer-events-none" />

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
            Featured Projects
          </h2>
        </motion.div>

        {/* Dynamic Project Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-zinc-900/20 backdrop-blur-md border border-zinc-800/60 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Media Mask Segment */}
                <div className="overflow-hidden relative h-52 bg-zinc-900 border-b border-zinc-800/80">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 group-hover:grayscale-0"
                  />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-zinc-950/80 backdrop-blur-md border border-zinc-800/60 text-zinc-300 px-3 py-1 rounded-lg text-[11px] font-mono tracking-wider uppercase">
                    <span className="text-xs">{project.icon}</span>
                    {project.category}
                  </div>
                </div>

                {/* Content Parameters */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold tracking-tight text-zinc-100 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-zinc-400 text-sm leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Core Stack Injection Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-zinc-900/50 border border-zinc-800/80 text-zinc-400 px-2.5 py-1 rounded-md text-xs font-mono font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Minimal Action Triggers */}
              <div className="p-6 pt-0 flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex justify-center items-center gap-2 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800/80 text-zinc-300 hover:text-white hover:bg-zinc-800/60 text-xs font-medium transition-colors duration-200"
                >
                  <FaGithub className="text-sm" />
                  Source Code
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex justify-center items-center gap-2 py-2.5 rounded-xl bg-zinc-100 text-zinc-950 hover:bg-white text-xs font-semibold transition-colors duration-200"
                >
                  <FaExternalLinkAlt className="text-[10px]" />
                  Launch Platform
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Corporate Footer Call-To-Action Board */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 border border-zinc-800/60 bg-gradient-to-br from-zinc-900/30 to-zinc-950 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100">
              System Engineering Integration
            </h3>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-normal">
              I am focused on designing structural user ecosystems, optimized queries, 
              and robust APIs for scalable runtime performance. Let's synchronize on your technical scope.
            </p>
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-zinc-100 hover:bg-white text-zinc-950 rounded-xl text-sm font-semibold transition-colors duration-200 shadow-sm"
              >
                Establish Connection
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}