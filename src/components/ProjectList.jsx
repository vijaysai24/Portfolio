import { FiArrowUpRight, FiCheck, FiGithub } from "react-icons/fi";
import Reveal from "./ui/Reveal";
import SectionHeader from "./ui/SectionHeader";
import { featuredProject, profile, projects } from "../data/portfolio";

export default function ProjectList() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="section-space bg-night text-paper">
      <div className="container-page">
        <SectionHeader id="projects-title" title="Featured projects" dark>
          A payments feature in production, enterprise workflow tools and full stack web apps. RingPe comes first:
          it's live, and I built its wallet on my own.
        </SectionHeader>

        <FeaturedProject project={featuredProject} />

        <ul className="mt-20 grid gap-x-10 gap-y-20 md:grid-cols-2 md:pb-28 lg:mt-28 lg:gap-x-14">
          {projects.map((project, i) => (
            // the right-hand column sits lower for a staggered rhythm
            <li key={project.id} className={i % 2 === 1 ? "md:translate-y-28" : ""}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>

        <Reveal className="mt-20 flex flex-col items-start gap-5 rounded-3xl bg-night-2 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <p className="text-lg text-mist">More of my code lives on GitHub.</p>
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-light shrink-0">
            <FiGithub aria-hidden="true" /> github.com/{profile.githubHandle}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function FeaturedProject({ project }) {
  return (
    <Reveal
      as="article"
      aria-labelledby="ringpe-title"
      className="relative mt-14 overflow-hidden rounded-4xl bg-ringpe text-white lg:mt-20"
    >
      <div className="grid lg:grid-cols-12">
        <div className="relative z-10 p-7 sm:p-10 lg:col-span-7 lg:p-14">
          <p className="flex items-center gap-2.5 text-[15px] font-medium text-white/85">
            <span className="relative flex size-2.5" aria-hidden="true">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#7CF0A9]/60" />
              <span className="relative inline-flex size-2.5 rounded-full bg-[#7CF0A9]" />
            </span>
            {project.label}
          </p>
          <h3
            id="ringpe-title"
            className="mt-4 text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl"
          >
            {project.title}
          </h3>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">{project.summary}</p>

          <h4 className="sr-only">What I built</h4>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-[0.975rem] leading-snug">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-white/15">
                  <FiCheck aria-hidden="true" className="size-3" />
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <ul aria-label="Technologies used" className="mt-8 flex flex-wrap gap-2">
            {project.stack.map((name) => (
              <li key={name} className="chip bg-white/12 text-white">
                {name}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a href={project.storeUrl} target="_blank" rel="noreferrer" className="btn btn-light">
              Find it on Google Play <FiArrowUpRight aria-hidden="true" />
            </a>
            <p className="text-[15px] text-white/75">{project.context}</p>
          </div>
        </div>

        <RingVisual logo={project.logo} />
      </div>
    </Reveal>
  );
}

// "Ring" in RingPe, drawn as rings radiating from the app icon.
function RingVisual({ logo }) {
  return (
    <div aria-hidden="true" className="relative grid min-h-88 place-items-center overflow-hidden lg:col-span-5 lg:min-h-0">
      {[0, 1, 2].map((i) => (
        <span
          key={`static-${i}`}
          className="absolute aspect-square rounded-full border border-white/12"
          style={{ width: `${44 + i * 22}%` }}
        />
      ))}
      {[0, 1, 2].map((i) => (
        <span
          key={`ripple-${i}`}
          className="absolute aspect-square w-[80%] animate-ripple rounded-full border-2 border-white/40"
          style={{ animationDelay: `${i * 1.5}s` }}
        />
      ))}
      <div className="relative grid size-36 -rotate-6 place-items-center rounded-[2.2rem] bg-white shadow-[0_30px_60px_-20px_rgb(10_14_60/0.6)] transition-transform duration-700 ease-out hover:rotate-0 sm:size-44">
        <img src={logo} alt="" width="385" height="376" loading="lazy" className="w-[78%]" />
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  // a gentle drift of the cover toward the pointer
  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", ((e.clientX - rect.left) / rect.width - 0.5).toFixed(3));
    e.currentTarget.style.setProperty("--my", ((e.clientY - rect.top) / rect.height - 0.5).toFixed(3));
  };
  const handlePointerLeave = (e) => {
    e.currentTarget.style.setProperty("--mx", "0");
    e.currentTarget.style.setProperty("--my", "0");
  };
  const { repo, live } = project.links;

  return (
    <Reveal as="article" aria-labelledby={`${project.id}-title`} className="group">
      <div
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className="relative aspect-4/3 overflow-hidden rounded-3xl bg-night-2"
      >
        <div
          className="size-full transition-[scale,translate] duration-700 ease-out group-hover:scale-[1.05]"
          style={{ translate: "calc(var(--mx, 0) * -16px) calc(var(--my, 0) * -16px)" }}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.imageAlt}
              width="1200"
              height="675"
              loading="lazy"
              decoding="async"
              className="size-full object-cover"
            />
          ) : (
            <ProjectCover project={project} />
          )}
        </div>
      </div>

      <div className="mt-7">
        <p className="text-[15px] text-mist">
          {project.category}
          {project.context && <span className="text-accent-bright"> · {project.context}</span>}
        </p>
        <h3
          id={`${project.id}-title`}
          className="mt-2 text-[1.85rem] font-semibold leading-tight tracking-[-0.03em] sm:text-[2.15rem]"
        >
          {project.title}
        </h3>
        <p className="mt-3 text-[1.0625rem] leading-relaxed text-mist">{project.summary}</p>

        <h4 className="sr-only">Key features</h4>
        <ul className="mt-5 space-y-2">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="relative pl-5 text-[0.975rem] leading-snug text-paper/90 before:absolute before:left-0 before:top-[0.6em] before:h-0.5 before:w-2.5 before:rounded-full before:bg-accent-bright"
            >
              {feature}
            </li>
          ))}
        </ul>

        <ul aria-label="Technologies used" className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((name) => (
            <li key={name} className="chip bg-night-3 text-mist">
              {name}
            </li>
          ))}
        </ul>

        {(repo || live) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {live && (
              <a href={live} target="_blank" rel="noreferrer" className="btn btn-light min-h-11 px-5">
                Live demo <FiArrowUpRight aria-hidden="true" />
              </a>
            )}
            {repo && (
              <a href={repo} target="_blank" rel="noreferrer" className="btn btn-ghost-light min-h-11 px-5">
                <FiGithub aria-hidden="true" /> Source code
              </a>
            )}
          </div>
        )}
      </div>
    </Reveal>
  );
}

const coverTones = {
  teal: "bg-[#0e3a3e] text-[#d3ebe7]",
  stone: "bg-[#d8d3c6] text-ink",
  graphite: "bg-[#2c2f38] text-paper",
};

// A typographic cover built from the project's real modules, used until a screenshot is added.
function ProjectCover({ project }) {
  const { tone, words } = project.cover;
  return (
    <div aria-hidden="true" className={`flex size-full flex-col justify-between p-6 sm:p-8 ${coverTones[tone]}`}>
      <p className="text-sm font-medium opacity-70">Core modules</p>
      <ul>
        {words.map((word, i) => (
          <li
            key={word}
            className="font-display text-[clamp(1.9rem,4.2vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.035em] transition-transform duration-700 ease-out group-hover:translate-x-3"
            style={{ opacity: 1 - i * 0.2, transitionDelay: `${i * 45}ms` }}
          >
            {word}
          </li>
        ))}
      </ul>
    </div>
  );
}
