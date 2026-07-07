import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaMobileAlt,
  FaLaptopCode,
} from "react-icons/fa";

const projects = [
  {
    title: "RingPe Wallet",
    category: "Mobile Application",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981d?w=1200&q=80&auto=format&fit=crop",
    description:
      "Developed the complete Wallet module for the RingPe payment application using React Native. Implemented authentication, wallet dashboard, transaction history, balance management, API integration, and secure user flows.",

    technologies: ["React Native", "Node.js", "REST API", "MySQL", "JWT"],

    github: "#",
    demo: "https://play.google.com/store",

    icon: <FaMobileAlt />,
  },

  {
    title: "Restaurant Management System",
    category: "Full Stack Web Application",
    image:
      "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=1200&q=80&auto=format&fit=crop",

    description:
      "Developed a complete restaurant management platform where administrators can manage food items, pricing, categories, menus, and availability. Built frontend with React and backend with Node.js & MySQL.",

    technologies: ["React", "Node.js", "Express", "MySQL", "REST API"],

    github: "#",

    demo: "#",

    icon: <FaLaptopCode />,
  },
];

export default function ProjectList() {
  return (
    <section id="projects" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[5px] text-blue-500">Portfolio</p>

          <h2 className="text-5xl font-bold mt-3">Featured Projects</h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-400 leading-8">
            Some of the applications I've worked on professionally and
            personally, demonstrating frontend, backend, mobile development,
            API integration, authentication, and scalable architecture.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10 mt-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.2,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -10,
              }}
              className="bg-gradient-to-b from-slate-900 to-gray-900 rounded-3xl overflow-hidden border border-gray-800 hover:border-blue-500 transition duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-60 w-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-8">
                <div className="flex items-center gap-3 text-blue-500 text-2xl">
                  {project.icon}

                  <span className="text-sm uppercase tracking-[3px]">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mt-4">{project.title}</h3>

                <p className="text-gray-400 mt-5 leading-7">{project.description}</p>

                <div className="flex flex-wrap gap-3 mt-8">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-600/20 border border-blue-500 px-3 py-2 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-10">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex justify-center items-center gap-2 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 transition"
                  >
                    <FaGithub />

                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex justify-center items-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition"
                  >
                    <FaExternalLinkAlt />

                    Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <h2 className="text-4xl font-bold">Interested in working together?</h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            I'm always interested in building scalable applications, solving
            challenging problems, and collaborating on exciting products.
          </p>

          <a
            href="#contact"
            className="inline-block mt-8 px-8 py-4 bg-blue-600 rounded-xl hover:bg-blue-700 transition font-semibold"
          >
            Let's Connect
          </a>
        </motion.div>
      </div>
    </section>
  );
}
