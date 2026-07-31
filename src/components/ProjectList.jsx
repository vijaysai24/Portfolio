import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaMobileAlt,
  FaLaptopCode,
  FaFolderOpen,
  FaLayerGroup,
  FaEnvelope,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import RingPeLogo from "../assets/images/RingpeLogo.jpg";

const projects = [
  {
    title: "M-Live Track (MLive)",
    category: "Enterprise Tracking Engine",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop",
    description:
      "Architected a comprehensive enterprise tracking & workflow platform featuring Master Data management, reservation pipelines, and process flows for Inward Goods & GRN (Goods Receive Note).",
    technologies: [
      "Angular",
      "Tailwind CSS",
      "Node.js",
      "REST APIs",
      "RBAC",
      "MySQL",
    ],
    github: "https://github.com/vijaysai24",
    demo: "#",
    icon: <FaLayerGroup />,
    badge: "Enterprise Core",
  },
  {
    title: "RingPe Wallet Module",
    category: "Mobile Payment Architecture",
    image: RingPeLogo,
    description:
      "Independently developed the complete production-ready Wallet ecosystem for the RingPe payment platform (Live on Play Store). Engineered real-time balance state management, tokenized payment flows, and JWT session handling.",
    technologies: [
      "React Native",
      "JavaScript",
      "RESTful APIs",
      "Node.js",
      "JWT Auth",
    ],
    github: "https://github.com/vijaysai24",
    demo: "https://play.google.com/store",
    icon: <FaMobileAlt />,
    badge: "Live on Play Store",
  },
  {
    title: "Restaurant Management System",
    category: "Full-Stack Data Management",
    image:
      "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=1200&q=80&auto=format&fit=crop",
    description:
      "Constructed an end-to-end administration platform for managing dynamic menu hierarchies, pricing variants, category schemas, and CRUD transaction pipelines with backend validation.",
    technologies: [
      "React JS",
      "Node.js",
      "Express.js",
      "MySQL",
      "RESTful APIs",
    ],
    github: "https://github.com/vijaysai24",
    demo: "#",
    icon: <FaLaptopCode />,
    badge: "Full-Stack System",
  },
];

export default function ProjectList() {
  return (
    <section
      id="projects"
      className="relative bg-slate-50 text-slate-900 py-12 overflow-hidden"
    >
      {/* Ambient Soft Glow Background Spots */}
      <div className="absolute top-1/3 -left-20 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3 mb-16 text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-zinc-200 rounded-full shadow-xs">
            <FaFolderOpen className="text-blue-500 text-xs" />
            <span className="text-[11px] font-mono text-zinc-600 font-medium tracking-wider uppercase">
              Selected Portfolio Work
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
            Featured Projects
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Scalable web dashboards, production mobile platforms, and enterprise system architectures built for high performance.
          </p>
        </motion.div>

        {/* Dynamic Project Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="group bg-white/90 backdrop-blur-md border border-zinc-200/90 hover:border-zinc-300 rounded-[1.8rem] overflow-hidden shadow-sm hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Media Mask Segment */}
                <div className="overflow-hidden relative h-52 bg-slate-100 border-b border-zinc-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />

                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-md border border-zinc-200/80 text-zinc-800 px-3 py-1 rounded-xl text-[11px] font-mono font-medium shadow-xs">
                    <span className="text-blue-500 text-xs">{project.icon}</span>
                    {project.category}
                  </div>

                  {/* Highlight Badge */}
                  {project.badge && (
                    <div className="absolute top-4 right-4 bg-zinc-900/90 backdrop-blur-md text-white px-2.5 py-0.5 rounded-lg text-[10px] font-mono font-medium">
                      {project.badge}
                    </div>
                  )}
                </div>

                {/* Content Parameters */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold tracking-tight text-zinc-900">
                    {project.title}
                  </h3>

                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Core Stack Injection Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-slate-50 border border-zinc-200/80 text-zinc-700 px-2.5 py-1 rounded-lg text-xs font-mono font-medium hover:bg-zinc-100 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Triggers */}
              {/* <div className="p-6 pt-0 flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex justify-center items-center gap-2 py-2.5 rounded-xl bg-slate-100 border border-zinc-200 text-zinc-800 hover:bg-zinc-200/80 text-xs font-medium font-mono transition-colors duration-200"
                >
                  <FaGithub className="text-sm text-zinc-700" />
                  Code
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex justify-center items-center gap-2 py-2.5 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 text-xs font-medium font-mono transition-colors duration-200 shadow-xs"
                >
                  <FaExternalLinkAlt className="text-[10px]" />
                  Launch
                </a>
              </div> */}
            </motion.div>
          ))}
        </div>

        {/* System Engineering Call-To-Action Board */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 border border-zinc-200/90 bg-white/90 backdrop-blur-md rounded-[1.8rem] p-8 md:p-12 text-center relative overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="max-w-2xl mx-auto space-y-5 relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
              System Engineering & Collaboration
            </h3>
            <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
              Focused on constructing enterprise user ecosystems, modular frontend architecture, role-based access control, and robust API integrations. Let's build something scalable together.
            </p>

            {/* Direct Contact Bar */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-zinc-700">
              <a
                href="mailto:saipechetti2002@gmail.com"
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-slate-50 border border-zinc-200/80 rounded-xl hover:bg-slate-100 transition-colors"
              >
                <FaEnvelope className="text-blue-500" /> saipechetti2002@gmail.com
              </a>
              <a
                href="tel:9347549149"
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-slate-50 border border-zinc-200/80 rounded-xl hover:bg-slate-100 transition-colors"
              >
                <FaPhoneAlt className="text-emerald-500" /> +91 9347549149
              </a>
              <a
                href="https://linkedin.com/in/vijaypechetti"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-slate-50 border border-zinc-200/80 rounded-xl hover:bg-slate-100 transition-colors"
              >
                <FaLinkedin className="text-blue-600" /> LinkedIn
              </a>
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-white rounded-xl text-xs font-mono font-medium transition-colors duration-200 shadow-md shadow-zinc-900/10"
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