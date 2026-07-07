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
  SiReact,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React JS",
        icon: <FaReact className="text-cyan-400" />,
        level: 95,
      },
      {
        name: "Angular",
        icon: <FaAngular className="text-red-500" />,
        level: 90,
      },
      {
        name: "React Native",
        icon: <SiReact className="text-cyan-400" />,
        level: 90,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-sky-400" />,
        level: 95,
      },
    ],
  },

  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-green-500" />,
        level: 90,
      },
      {
        name: "Express.js",
        icon: <SiExpress className="text-gray-300" />,
        level: 88,
      },
      {
        name: "REST APIs",
        icon: <FaDatabase className="text-blue-400" />,
        level: 95,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
        level: 95,
      },
    ],
  },

  {
    title: "Database & Tools",
    skills: [
      {
        name: "MySQL",
        icon: <SiMysql className="text-blue-500" />,
        level: 88,
      },
      {
        name: "Git",
        icon: <FaGitAlt className="text-orange-500" />,
        level: 90,
      },
      {
        name: "GitHub",
        icon: <FaGithub className="text-white" />,
        level: 92,
      },
      {
        name: "Postman",
        icon: <SiPostman className="text-orange-400" />,
        level: 90,
      },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-black text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="text-blue-500 uppercase tracking-[5px]">
            Technical Skills
          </p>

          <h2 className="text-5xl font-bold mt-3">
            My Technology Stack
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto leading-8">
            I enjoy building scalable full-stack applications using modern
            frontend technologies, secure backend APIs, and optimized databases.
          </p>

        </motion.div>

        {/* Categories */}

        <div className="space-y-12 mt-20">

          {skillCategories.map((category, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 rounded-3xl border border-gray-800 p-8"
            >

              <h3 className="text-3xl font-bold text-blue-500 mb-10">
                {category.title}
              </h3>

              <div className="grid md:grid-cols-2 gap-8">

                {category.skills.map((skill, i) => (

                  <div key={i}>

                    <div className="flex justify-between items-center mb-3">

                      <div className="flex items-center gap-3">

                        <span className="text-3xl">

                          {skill.icon}

                        </span>

                        <span className="text-lg font-medium">

                          {skill.name}

                        </span>

                      </div>

                      <span className="text-blue-400">

                        {skill.level}%

                      </span>

                    </div>

                    <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">

                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-500 to-cyan-400 h-3 rounded-full"
                      />

                    </div>

                  </div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

        {/* Bottom Tech Grid */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-20"
        >

          {[
            "React",
            "Angular",
            "React Native",
            "Node.js",
            "Express.js",
            "MySQL",
            "Tailwind CSS",
            "Git",
            "GitHub",
            "REST API",
            "JavaScript",
            "TypeScript",
          ].map((tech, index) => (

            <motion.div
              key={index}
              whileHover={{
                scale: 1.08,
                y: -5,
              }}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-5 text-center font-semibold hover:border-blue-500 transition"
            >

              {tech}

            </motion.div>

          ))}

        </motion.div>

      </div>
    </section>
  );
}