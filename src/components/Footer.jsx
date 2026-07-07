import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";
import { Link } from "react-scroll";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 text-white">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* About */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >

            <h2 className="text-3xl font-bold">
              Pechetti{" "}
              <span className="text-blue-500">
                Sai Vijay
              </span>
            </h2>

            <p className="text-gray-400 mt-6 leading-8">
              Full Stack Software Engineer specializing in
              React, Angular, React Native, Node.js,
              Express.js and MySQL.

              Passionate about building scalable
              web and mobile applications with
              beautiful user experiences.
            </p>

          </motion.div>

          {/* Quick Links */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: .2 }}
            viewport={{ once: true }}
          >

            <h3 className="text-2xl font-semibold mb-6">
              Quick Links
            </h3>

            <div className="space-y-4">

              {[
                "Home",
                "About",
                "Skills",
                "Experience",
                "Projects",
                "Contact",
              ].map((item) => (

                <Link
                  key={item}
                  to={item.toLowerCase()}
                  smooth
                  duration={500}
                  offset={-70}
                  className="block cursor-pointer text-gray-400 hover:text-blue-500 transition"
                >
                  {item}
                </Link>

              ))}

            </div>

          </motion.div>

          {/* Social */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: .4 }}
            viewport={{ once: true }}
          >

            <h3 className="text-2xl font-semibold mb-6">
              Connect
            </h3>

            <p className="text-gray-400">
              Let's connect and build amazing products together.
            </p>

            <div className="flex gap-5 mt-8">

              <a
                href="https://github.com/YOUR_GITHUB_USERNAME"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-gray-900 hover:bg-blue-600 transition flex items-center justify-center text-xl"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/vijaypechetti"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-gray-900 hover:bg-blue-600 transition flex items-center justify-center text-xl"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:saipechetti2002@gmail.com"
                className="w-14 h-14 rounded-full bg-gray-900 hover:bg-blue-600 transition flex items-center justify-center text-xl"
              >
                <FaEnvelope />
              </a>

            </div>

          </motion.div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-gray-400 flex items-center gap-2">

            © {currentYear} Pechetti Sai Vijay

            <FaHeart className="text-red-500" />

            Built with React, Tailwind CSS & Framer Motion.

          </p>

          {/* Scroll To Top */}

          <Link
            to="home"
            smooth
            duration={600}
            className="cursor-pointer"
          >

            <motion.div
              whileHover={{
                y: -5,
                scale: 1.1,
              }}
              className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center"
            >

              <FaArrowUp />

            </motion.div>

          </Link>

        </div>

      </div>

    </footer>
  );
}