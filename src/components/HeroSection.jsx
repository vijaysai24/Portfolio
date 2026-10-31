import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import ScrollLink from "./ui/ScrollLink";
import { EASE_OUT } from "./ui/motion";
import { profile } from "../data/portfolio";

const rise = (delay) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: EASE_OUT, delay },
});

const socials = [
  { label: "GitHub", href: profile.github, icon: FiGithub, external: true },
  { label: "LinkedIn", href: profile.linkedin, icon: FiLinkedin, external: true },
  { label: "Email", href: `mailto:${profile.email}`, icon: FiMail },
];

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section id="home" ref={ref} className="relative pb-24 pt-28 sm:pt-32 lg:pb-32 lg:pt-24">
      <div className="container-page grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <motion.p {...rise(0.1)} className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[15px] text-ink-2">
            <span className="relative flex size-2.5" aria-hidden="true">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-success/50" />
              <span className="relative inline-flex size-2.5 rounded-full bg-success" />
            </span>
            {profile.availability}
            <span aria-hidden="true" className="text-ink-3">·</span>
            {profile.location}
          </motion.p>

          <h1 className="mt-6 text-[2.75rem] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-[4.3rem] xl:text-[4.9rem]">
            <motion.span {...rise(0.18)} className="block">
              Full&nbsp;Stack Developer
            </motion.span>
            <motion.span {...rise(0.26)} className="block text-ink-3">
              React &amp; React&nbsp;Native
            </motion.span>
          </h1>

          <motion.p {...rise(0.36)} className="mt-7 max-w-140 text-lg leading-relaxed text-ink-2 sm:text-xl sm:leading-relaxed">
            I'm <strong className="font-semibold text-ink">{profile.name}</strong>. For {profile.experience} I've
            been building responsive web apps in React, cross-platform mobile apps in React Native, and the Node.js
            and MySQL APIs behind them, including a wallet feature now live on Google Play.
          </motion.p>

          <motion.div {...rise(0.46)} className="mt-9 flex flex-wrap items-center gap-3">
            <ScrollLink to="projects" className="btn btn-primary">
              View projects <FiArrowRight aria-hidden="true" />
            </ScrollLink>
            <a href={profile.resume} download={profile.resumeFileName} className="btn btn-outline">
              Download resume <FiDownload aria-hidden="true" />
            </a>
            <ScrollLink to="contact" className="btn px-3 text-ink hover:text-accent">
              <span className="link-underline">Contact me</span>
            </ScrollLink>
          </motion.div>

          <motion.ul {...rise(0.56)} className="mt-10 flex items-center gap-2" aria-label="Profiles">
            {socials.map(({ label, href, icon: Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  title={label}
                  {...(external && { target: "_blank", rel: "noreferrer" })}
                  className="grid size-11 place-items-center rounded-full text-ink-2 shadow-[inset_0_0_0_1.5px_rgb(17_18_20/0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-paper hover:shadow-none"
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              </li>
            ))}
          </motion.ul>
        </div>

        <div className="pb-16 sm:pb-20 lg:col-span-5 lg:pb-0">
          <HeroVisual portraitY={portraitY} cardY={cardY} />
        </div>
      </div>
    </section>
  );
}

function HeroVisual({ portraitY, cardY }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: EASE_OUT, delay: 0.2 }}
      className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none"
    >
      <Orbits animate={!reduceMotion} />

      <motion.div style={{ y: portraitY }} className="absolute inset-[19%]">
        <div className="size-full overflow-hidden rounded-full bg-night shadow-[0_40px_80px_-30px_rgb(17_18_20/0.55)] ring-10 ring-paper">
          <img
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            width="720"
            height="720"
            fetchPriority="high"
            decoding="async"
            className="size-full scale-[1.045] object-cover"
          />
        </div>
      </motion.div>

      <motion.div style={{ y: cardY }} className="absolute -left-1 top-[72%] w-70 sm:w-78 lg:-left-12">
        <CodeCard />
      </motion.div>
    </motion.div>
  );
}

// The React logo's three orbits, with the portrait as its nucleus.
function Orbits({ animate }) {
  const rx = 248;
  const ry = 92;
  const path = `M ${-rx} 0 a ${rx} ${ry} 0 1 0 ${rx * 2} 0 a ${rx} ${ry} 0 1 0 ${-rx * 2} 0`;

  return (
    <svg viewBox="-260 -260 520 520" fill="none" aria-hidden="true" className="absolute inset-0 size-full text-ink">
      {[0, 60, 120].map((angle, i) => (
        <g key={angle} transform={`rotate(${angle})`}>
          <ellipse rx={rx} ry={ry} stroke="currentColor" strokeOpacity="0.16" strokeWidth="1.5" />
          <circle r="5.5" cx={animate ? 0 : rx} className="fill-accent">
            {animate && (
              <animateMotion dur={`${11 + i * 3}s`} begin={`${-i * 3}s`} repeatCount="indefinite" path={path} />
            )}
          </circle>
        </g>
      ))}
    </svg>
  );
}

const tone = {
  kw: "text-accent-bright",
  key: "text-paper",
  str: "text-[#F2C38B]",
  pn: "text-[#8E929B]",
};

const codeLines = [
  [["kw", "const "], ["key", "developer"], ["pn", " = {"]],
  [["key", "  name"], ["pn", ": "], ["str", '"Sai Vijay"'], ["pn", ","]],
  [["key", "  role"], ["pn", ": "], ["str", '"Full Stack Developer"'], ["pn", ","]],
  [["key", "  experience"], ["pn", ": "], ["str", '"2.5 years"'], ["pn", ","]],
  [["key", "  stack"], ["pn", ": ["], ["str", '"React"'], ["pn", ", "], ["str", '"React Native"'], ["pn", ","]],
  [["pn", "          "], ["str", '"Node.js"'], ["pn", ", "], ["str", '"MySQL"'], ["pn", "],"]],
  [["key", "  shipped"], ["pn", ": "], ["str", '"RingPe Wallet"'], ["pn", ","]],
  [["key", "  openToWork"], ["pn", ": "], ["kw", "true"], ["pn", ","]],
  [["pn", "};"]],
];

function CodeCard() {
  return (
    <figure className="overflow-hidden rounded-2xl bg-night text-paper shadow-[0_30px_60px_-20px_rgb(17_18_20/0.5)]">
      <figcaption className="flex items-center justify-between bg-night-2 px-4 py-2.5 font-mono text-[11px] text-mist">
        <span>profile.js</span>
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-2 rounded-full bg-night-3" />
          <span className="size-2 rounded-full bg-night-3" />
          <span className="size-2 rounded-full bg-night-3" />
        </span>
      </figcaption>
      <pre className="overflow-hidden px-4 py-4 font-mono text-[11.5px] leading-[1.7] sm:text-[12.5px]">
        <code>
          {codeLines.map((tokens, i) => (
            <motion.span
              key={i}
              className="block whitespace-pre"
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + i * 0.08, duration: 0.5, ease: EASE_OUT }}
            >
              {tokens.map(([kind, text], j) => (
                <span key={j} className={tone[kind]}>
                  {text}
                </span>
              ))}
              {i === codeLines.length - 1 && (
                <span aria-hidden="true" className="ml-1 inline-block h-[1.1em] w-[0.55em] translate-y-[0.2em] animate-caret bg-accent-bright" />
              )}
            </motion.span>
          ))}
        </code>
      </pre>
    </figure>
  );
}
