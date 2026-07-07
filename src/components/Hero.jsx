import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import ProfileImage from "../assets/images/Profile.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-r from-slate-950 via-gray-900 to-black text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-400 uppercase tracking-[4px] mb-3">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Pechetti <br />
            <span className="text-blue-500">Sai Vijay</span>
          </h1>

          <div className="mt-6 text-2xl font-semibold text-gray-300 h-16">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "React Developer",
                2000,
                "Angular Developer",
                2000,
                "React Native Developer",
                2000,
                "Node.js Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="mt-6 text-gray-400 text-lg leading-8 max-w-xl">
            Full Stack Software Engineer with experience building scalable
            web and mobile applications using React, Angular, React Native,
            Node.js, Express.js, and MySQL. Passionate about creating
            high-performance, user-friendly applications with clean
            architecture and modern UI.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">

            <a
              href="/resume.pdf"
              download
              className="px-7 py-4 bg-blue-600 rounded-xl font-semibold hover:bg-blue-700 transition flex items-center gap-2"
            >
              <FaDownload />
              Download Resume
            </a>

            <a
              href="#contact"
              className="px-7 py-4 border border-blue-500 rounded-xl hover:bg-blue-500 transition"
            >
              Contact Me
            </a>

          </div>

          {/* Social Icons */}

          <div className="flex gap-6 mt-10">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="text-3xl hover:text-blue-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/vijaypechetti"
              target="_blank"
              rel="noreferrer"
              className="text-3xl hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:saipechetti2002@gmail.com"
              className="text-3xl hover:text-blue-400 transition"
            >
              <FaEnvelope />
            </a>

          </div>

        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >

          <div className="relative">

            {/* Glow */}

            <div className="absolute -inset-5 bg-blue-500 rounded-full blur-3xl opacity-40 animate-pulse"></div>

            {/* Profile */}

            <img
              src={ProfileImage}
              alt="Sai Vijay"
              className="relative w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-blue-500 object-cover shadow-2xl"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
}