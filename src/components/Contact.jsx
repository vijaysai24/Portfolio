import { useState } from "react";
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Inquiry${formData.projectType ? ` - ${formData.projectType}` : ""}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:saipechetti2002@gmail.com?subject=${subject}&body=${body}`;
    setStatus("Your email app should open with the message ready to send.");
  };

  return (
    <section
      id="contact"
      className="relative bg-slate-50 text-slate-900 py-12 overflow-hidden"
    >
      {/* Ambient Gradient Soft Aura Spots (Matching Skills) */}
      <div className="absolute top-1/4 -left-20 w-[450px] h-[450px] bg-blue-400/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[450px] h-[450px] bg-indigo-400/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header Block — same style as Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto space-y-3 mb-16"
        >
          <div className="inline-flex gap-2 px-3.5 py-1 bg-white rounded-full shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
            <span className="text-[11px] font-mono text-zinc-600 font-medium tracking-wider uppercase">
              Connection Protocols
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
            Initiate Project Scope
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Open a secure channel to discuss architecture, integrations, or full-stack
            engineering requirements.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Side: Contact Nodes */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Email */}
            <div className="group bg-white/90 backdrop-blur-sm border border-zinc-200/90 rounded-[1.4rem] p-5 flex items-center gap-4 shadow-sm hover:shadow-xl hover:shadow-zinc-200/50 hover:border-zinc-300 transition-all duration-300">
              <div className="p-3 bg-slate-100/80 border border-zinc-200/80 rounded-2xl text-lg text-zinc-600 group-hover:text-zinc-900 group-hover:scale-105 transition-all duration-300">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                  Secure Electronic Mail
                </h3>
                <p className="text-sm font-semibold text-zinc-800 mt-0.5">
                  saipechetti2002@gmail.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="group bg-white/90 backdrop-blur-sm border border-zinc-200/90 rounded-[1.4rem] p-5 flex items-center gap-4 shadow-sm hover:shadow-xl hover:shadow-zinc-200/50 hover:border-zinc-300 transition-all duration-300">
              <div className="p-3 bg-slate-100/80 border border-zinc-200/80 rounded-2xl text-lg text-zinc-600 group-hover:text-zinc-900 group-hover:scale-105 transition-all duration-300">
                <FaPhoneAlt />
              </div>
              <div>
                <h3 className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                  Direct Inbound Voice
                </h3>
                <p className="text-sm font-semibold text-zinc-800 mt-0.5">
                  +91 9347549149
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="group bg-white/90 backdrop-blur-sm border border-zinc-200/90 rounded-[1.4rem] p-5 flex items-center gap-4 shadow-sm hover:shadow-xl hover:shadow-zinc-200/50 hover:border-zinc-300 transition-all duration-300">
              <div className="p-3 bg-slate-100/80 border border-zinc-200/80 rounded-2xl text-lg text-zinc-600 group-hover:text-zinc-900 group-hover:scale-105 transition-all duration-300">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                  Operational HQ Base
                </h3>
                <p className="text-sm font-semibold text-zinc-800 mt-0.5">
                  Bangalore, Karnataka, India
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/vijay-pechetti-01845027b/"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl bg-white/90 border border-zinc-200/90 text-zinc-600 hover:text-zinc-900 hover:bg-white hover:border-zinc-300 flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/vijaysai24"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl bg-white/90 border border-zinc-200/90 text-zinc-600 hover:text-zinc-900 hover:bg-white hover:border-zinc-300 flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <FaGithub />
              </a>
            </div>
          </motion.div>

          {/* Right Side: Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -2 }}
            className="lg:col-span-7 bg-white/90 backdrop-blur-sm border border-zinc-200/90 rounded-[1.8rem] p-6 lg:p-8 shadow-sm hover:shadow-xl hover:shadow-zinc-200/50 hover:border-zinc-300 transition-all duration-300"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block mb-2 text-[10px] font-mono text-zinc-500 tracking-wider uppercase font-semibold">
                    Identity / Company
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full bg-slate-50/80 border border-zinc-200/70 hover:border-zinc-300 focus:border-zinc-400 focus:bg-white rounded-xl p-3.5 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:ring-1 focus:ring-zinc-300 transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-[10px] font-mono text-zinc-500 tracking-wider uppercase font-semibold">
                    Routing Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@domain.com"
                    required
                    className="w-full bg-slate-50/80 border border-zinc-200/70 hover:border-zinc-300 focus:border-zinc-400 focus:bg-white rounded-xl p-3.5 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:ring-1 focus:ring-zinc-300 transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-[10px] font-mono text-zinc-500 tracking-wider uppercase font-semibold">
                  Project Classification
                </label>
                <input
                  type="text"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  placeholder="System Integration / Full-Stack Engineering"
                  required
                  className="w-full bg-slate-50/80 border border-zinc-200/70 hover:border-zinc-300 focus:border-zinc-400 focus:bg-white rounded-xl p-3.5 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:ring-1 focus:ring-zinc-300 transition-all duration-200"
                />
              </div>

              <div>
                <label className="block mb-2 text-[10px] font-mono text-zinc-500 tracking-wider uppercase font-semibold">
                  Scope Architecture Details
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Outline the operational requirements and architectural milestones..."
                  required
                  className="w-full bg-slate-50/80 border border-zinc-200/70 hover:border-zinc-300 focus:border-zinc-400 focus:bg-white rounded-xl p-3.5 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:ring-1 focus:ring-zinc-300 transition-all duration-200 resize-none"
                ></textarea>
              </div>

              {status && (
                <p className="text-sm text-emerald-600 font-medium">{status}</p>
              )}

              <button
                type="submit"
                className="w-full bg-zinc-900 hover:bg-zinc-800 text-white transition-all duration-200 rounded-xl py-3.5 font-semibold text-xs uppercase tracking-wider flex justify-center items-center gap-2 shadow-md shadow-zinc-900/10 hover:shadow-lg"
              >
                <FaPaperPlane className="text-[10px]" />
                Transmit Parameters
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}