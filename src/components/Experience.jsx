import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

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
      "GitHub",
    ],
    responsibilities: [
      "Designed and developed scalable web applications using Angular and React.",
      "Built cross-platform mobile applications using React Native.",
      "Developed backend REST APIs with Node.js and Express.js.",
      "Designed MySQL database schemas and optimized SQL queries.",
      "Integrated frontend applications with backend APIs.",
      "Implemented JWT authentication and Role-Based Access Control (RBAC).",
      "Developed the complete Wallet module for the RingPe payment application.",
      "Optimized application performance through lazy loading and API optimization.",
      "Collaborated with designers and backend engineers in Agile development.",
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
      "Built a Restaurant Management System.",
      "Designed responsive frontend pages using React.",
      "Created backend APIs using Node.js and Express.",
      "Integrated MySQL database.",
      "Implemented CRUD operations.",
      "Added validation and error handling.",
      "Worked with REST API integration.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-blue-500 uppercase tracking-[4px]">
            Career Journey
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Professional Experience
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            Building scalable applications, developing secure backend APIs,
            creating mobile apps, and delivering high-quality software
            solutions.
          </p>
        </motion.div>

        <div className="relative">

          {/* Timeline Line */}

          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-1 bg-blue-600 transform md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-20 ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              }`}
            >
              {/* Timeline Dot */}

              <div className="absolute left-5 md:left-1/2 w-6 h-6 rounded-full bg-blue-500 border-4 border-slate-950 transform md:-translate-x-1/2 z-10"></div>

              {/* Card */}

              <div
                className={`ml-16 md:ml-0 md:w-[46%] bg-white/5 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 hover:border-blue-500 transition duration-300`}
              >
                {/* Role */}

                <div className="flex items-center gap-3 mb-4">

                  <FaBriefcase className="text-blue-500 text-2xl" />

                  <div>
                    <h3 className="text-2xl font-bold">
                      {exp.role}
                    </h3>

                    <p className="text-blue-400 font-semibold">
                      {exp.company}
                    </p>
                  </div>

                </div>

                {/* Date */}

                <div className="flex items-center gap-3 text-gray-400 mb-6">

                  <FaCalendarAlt />

                  {exp.duration}

                </div>

                <p className="text-gray-500 mb-8">
                  {exp.location}
                </p>

                {/* Responsibilities */}

                <div>

                  <h4 className="font-semibold text-xl mb-4">
                    Responsibilities
                  </h4>

                  <ul className="space-y-3">

                    {exp.responsibilities.map((item, i) => (

                      <li
                        key={i}
                        className="text-gray-300 flex gap-3"
                      >
                        <span className="text-blue-500 mt-1">▹</span>

                        {item}

                      </li>

                    ))}

                  </ul>

                </div>

                {/* Skills */}

                <div className="mt-8">

                  <h4 className="font-semibold text-xl mb-4">
                    Technologies
                  </h4>

                  <div className="flex flex-wrap gap-3">

                    {exp.technologies.map((tech, i) => (

                      <span
                        key={i}
                        className="bg-blue-600/20 border border-blue-500 px-4 py-2 rounded-full text-sm hover:bg-blue-600 transition"
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