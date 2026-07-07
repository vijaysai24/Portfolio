import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[5px] text-blue-500">
            Contact
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Let's Build Something Amazing
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            Whether you're hiring, collaborating, or just want to connect,
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mt-20">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            <div className="bg-white/5 border border-gray-800 rounded-2xl p-6 flex items-center gap-5 hover:border-blue-500 transition">

              <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center">
                <FaEnvelope />
              </div>

              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-400">
                  saipechetti2002@gmail.com
                </p>
              </div>

            </div>

            <div className="bg-white/5 border border-gray-800 rounded-2xl p-6 flex items-center gap-5 hover:border-blue-500 transition">

              <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center">
                <FaPhoneAlt />
              </div>

              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-gray-400">
                  +91 9347549149
                </p>
              </div>

            </div>

            <div className="bg-white/5 border border-gray-800 rounded-2xl p-6 flex items-center gap-5 hover:border-blue-500 transition">

              <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3 className="font-semibold text-lg">Location</h3>
                <p className="text-gray-400">
                  Bangalore, Karnataka, India
                </p>
              </div>

            </div>

            <div className="flex gap-5 mt-8">

              <a
                href="https://linkedin.com/in/vijaypechetti"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition text-xl"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/YOUR_GITHUB_USERNAME"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition text-xl"
              >
                <FaGithub />
              </a>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-gray-800 rounded-3xl p-8"
          >

            <form className="space-y-6">

              <div>

                <label className="block mb-2 text-gray-300">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl p-4 outline-none focus:border-blue-500"
                />

              </div>

              <div>

                <label className="block mb-2 text-gray-300">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl p-4 outline-none focus:border-blue-500"
                />

              </div>

              <div>

                <label className="block mb-2 text-gray-300">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Project / Job Opportunity"
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl p-4 outline-none focus:border-blue-500"
                />

              </div>

              <div>

                <label className="block mb-2 text-gray-300">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl p-4 outline-none focus:border-blue-500 resize-none"
                ></textarea>

              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 transition rounded-xl py-4 font-semibold flex justify-center items-center gap-3"
              >
                <FaPaperPlane />
                Send Message
              </button>

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
}