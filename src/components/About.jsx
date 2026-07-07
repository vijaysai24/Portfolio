import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaDatabase,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";

const highlights = [
  {
    icon: <FaLaptopCode />,
    title: "Frontend Development",
    description:
      "Building responsive web applications using React, Angular and Tailwind CSS.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Development",
    description:
      "Developing cross-platform mobile apps using React Native.",
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    description:
      "Creating secure REST APIs using Node.js, Express.js and JWT Authentication.",
  },
  {
    icon: <FaDatabase />,
    title: "Database",
    description:
      "Designing MySQL databases and optimizing SQL queries.",
  },
];

const stats = [
  {
    number: "2+",
    title: "Years Experience",
  },
  {
    number: "15+",
    title: "Projects",
  },
  {
    number: "10+",
    title: "Technologies",
  },
  {
    number: "100%",
    title: "Commitment",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="text-blue-500 uppercase tracking-[4px]">
            About Me
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Full Stack Software Engineer
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto leading-8 text-lg">
            I'm Pechetti Sai Vijay, a passionate Software Development Engineer
            with professional experience building scalable web and mobile
            applications. I enjoy solving complex problems, creating beautiful
            user interfaces, designing backend APIs, and delivering secure,
            high-performance applications.
          </p>

        </motion.div>

        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-6 mt-20">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity:0,y:30 }}
              whileInView={{ opacity:1,y:0 }}
              transition={{ delay:index*.15 }}
              viewport={{ once:true }}
              className="bg-white/5 backdrop-blur-lg border border-gray-800 rounded-3xl p-8 text-center hover:border-blue-500 duration-300"
            >

              <h1 className="text-5xl font-bold text-blue-500">
                {item.number}
              </h1>

              <p className="mt-3 text-gray-300">
                {item.title}
              </p>

            </motion.div>

          ))}

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-8 mt-20">

          {highlights.map((card,index)=>(

            <motion.div
              key={index}
              initial={{ opacity:0,y:40 }}
              whileInView={{ opacity:1,y:0 }}
              transition={{ delay:index*.2 }}
              viewport={{ once:true }}
              className="bg-gradient-to-br from-gray-900 to-slate-900 rounded-3xl border border-gray-800 p-8 hover:border-blue-500 duration-300 hover:-translate-y-2"
            >

              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-2xl">

                {card.icon}

              </div>

              <h3 className="text-2xl font-semibold mt-6">

                {card.title}

              </h3>

              <p className="text-gray-400 leading-8 mt-4">

                {card.description}

              </p>

            </motion.div>

          ))}

        </div>

        {/* Education */}

        <motion.div
          initial={{ opacity:0,y:40 }}
          whileInView={{ opacity:1,y:0 }}
          viewport={{ once:true }}
          className="mt-24 grid md:grid-cols-2 gap-8"
        >

          {/* Education */}

          <div className="bg-white/5 rounded-3xl border border-gray-800 p-8">

            <div className="flex items-center gap-4">

              <FaGraduationCap
                className="text-blue-500 text-3xl"
              />

              <h2 className="text-3xl font-bold">

                Education

              </h2>

            </div>

            <div className="mt-8">

              <h3 className="text-xl font-semibold">

                B.Tech Computer Science

              </h3>

              <p className="text-blue-400">

                SRKR Engineering College

              </p>

              <p className="text-gray-400">

                2020 - 2024

              </p>

            </div>

            <div className="mt-8">

              <h3 className="text-xl font-semibold">

                Higher Secondary

              </h3>

              <p className="text-blue-400">

                Tirumala Junior College

              </p>

              <p className="text-gray-400">

                2018 - 2020

              </p>

            </div>

          </div>

          {/* Experience */}

          <div className="bg-white/5 rounded-3xl border border-gray-800 p-8">

            <div className="flex items-center gap-4">

              <FaBriefcase
                className="text-blue-500 text-3xl"
              />

              <h2 className="text-3xl font-bold">

                Experience

              </h2>

            </div>

            <div className="mt-8">

              <h3 className="text-xl font-semibold">

                Software Development Engineer

              </h3>

              <p className="text-blue-400">

                SABADO Technologies

              </p>

              <p className="text-gray-400">

                June 2024 - Present

              </p>

            </div>

            <div className="mt-8">

              <h3 className="text-xl font-semibold">

                Software Development Intern

              </h3>

              <p className="text-blue-400">

                Black Bucks Pvt Ltd

              </p>

              <p className="text-gray-400">

                June 2023 - August 2023

              </p>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}