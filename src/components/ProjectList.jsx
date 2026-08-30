import { useRef } from "react";
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
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import RingPeLogo from "../assets/images/RingpeLogo.jpg";
import movies from "../assets/images/movies.jpg";

const projects = [
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
    title: "Movie Recommendation System",
    category: "Entertainment Discovery Platform",
    image: movies,
    description:
      "Developed a dynamic movie and series discovery platform that aggregates movies and TV shows across multiple OTT platforms, upcoming releases, and theatrical releases using movie database APIs. Users can discover personalized movie and series recommendations based on context, explore detailed information, rate and review titles, create watchlists, mark favorites, and maintain a personalized profile including memorable movie dialogues.",
    technologies: [
      "React JS",
      "Node.js",
      "REST APIs",
      "The Movie Database APIs",
      "Recommendation Engine",
      "MySQL",
    ],
    github: "https://github.com/vijaysai24",
    demo: "#",
    icon: <FaLaptopCode />,
    badge: "Dynamic Content Platform",
  },
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
    title: "School Digitalization Application",
    category: "Education Management Ecosystem",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80&auto=format&fit=crop",
    description:
      "Built a comprehensive school digitalization platform that brings academic and administrative processes into a unified digital ecosystem. Teachers can assign classwork and homework, communicate with students and parents, track academic activities, while principals and management can publish announcements, monitor school operations, and manage role-based workflows across the institution.",
    technologies: [
      "React JS",
      "Node.js",
      "REST APIs",
      "MySQL",
      "RBAC",
      "Tailwind CSS",
    ],
    github: "https://github.com/vijaysai24",
    demo: "#",
    icon: <FaLayerGroup />,
    badge: "Education Ecosystem",
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
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollContainerRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

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
          className="space-y-3 mb-10 text-center max-w-2xl mx-auto"
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

        {/* Scroll Action Buttons */}
        <div className="flex justify-between items-end mb-4 px-1">
          <span className="text-xs font-mono text-zinc-500 hidden sm:inline-block">
            ← Scroll horizontally to explore →
          </span>
          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="p-3 bg-white hover:bg-zinc-900 hover:text-white border border-zinc-200 text-zinc-700 rounded-full shadow-xs transition-all duration-200 cursor-pointer active:scale-95"
            >
              <FaChevronLeft className="text-xs" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="p-3 bg-white hover:bg-zinc-900 hover:text-white border border-zinc-200 text-zinc-700 rounded-full shadow-xs transition-all duration-200 cursor-pointer active:scale-95"
            >
              <FaChevronRight className="text-xs" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Shell */}
        <div className="relative group/carousel">
          {/* Subtle Side Gradients for Visual Affordance */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

          {/* Smooth Horizontal Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-8 pt-2 scroll-smooth snap-x snap-mandatory scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none]"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group snap-start shrink-0 w-[85vw] sm:w-[360px] md:w-[380px] bg-white/90 backdrop-blur-md border border-zinc-200/90 hover:border-zinc-300 rounded-[1.8rem] overflow-hidden shadow-sm hover:shadow-xl hover:shadow-zinc-200/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Header with Zoom Effect */}
                  <div className="overflow-hidden relative h-52 bg-slate-100 border-b border-zinc-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />

                    {/* Category Pill Tag */}
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md border border-zinc-200/80 text-zinc-800 px-3 py-1 rounded-xl text-[11px] font-mono font-medium shadow-xs">
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

                  {/* Text Details */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold tracking-tight text-zinc-900">
                      {project.title}
                    </h3>

                    {/* Expandable Description Wrapper */}
                    <div className="relative">
                      <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed max-h-20 group-hover:max-h-96 line-clamp-3 group-hover:line-clamp-none transition-all duration-500 ease-in-out">
                        {project.description}
                      </p>
                      <span className="block text-[11px] font-mono text-blue-500 mt-1 font-medium group-hover:hidden">
                        To read full description ↓
                      </span>
                    </div>

                    {/* Technology Badges */}
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
              </motion.div>
            ))}
          </div>
        </div>

        {/* System Engineering Call-To-Action Board */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 border border-zinc-200/90 bg-white/90 backdrop-blur-md rounded-[1.8rem] p-8 md:p-12 text-center relative overflow-hidden shadow-sm hover:shadow-md transition-shadow"
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