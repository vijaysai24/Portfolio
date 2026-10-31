import { FiArrowDown } from "react-icons/fi";
import Reveal from "./ui/Reveal";
import ScrollLink from "./ui/ScrollLink";
import SectionHeader from "./ui/SectionHeader";
import { education, experience, featuredProject, profile } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="section-space">
      <div className="container-page">
        <SectionHeader id="experience-title" title="Experience">
          {profile.experience} building production software for web and mobile, from a full stack internship to
          my current role at {profile.currentCompany}.
        </SectionHeader>

        <ol className="mt-16 space-y-20 lg:mt-24 lg:space-y-32">
          {experience.map((job) => (
            <Role key={job.company} job={job} />
          ))}
        </ol>

        <Reveal className="mt-20 grid gap-6 rounded-3xl bg-paper-2 p-6 sm:p-8 lg:mt-32 lg:grid-cols-12 lg:gap-8 lg:p-10">
          <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:col-span-4">Education</h3>
          <ul className="divide-y divide-ink/10 lg:col-span-8">
            {education.map((item) => (
              <li
                key={item.school}
                className="flex flex-col gap-1 py-5 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <div>
                  <p className="text-lg font-semibold">{item.degree}</p>
                  <p className="mt-0.5 text-ink-2">{item.school}</p>
                </div>
                <p className="shrink-0 text-[15px] tabular-nums text-ink-3">{item.period}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function Role({ job }) {
  return (
    <li className="grid gap-8 lg:grid-cols-12 lg:gap-8">
      <Reveal className="lg:col-span-4">
        <div className="lg:sticky lg:top-28">
          <p className="text-[15px] tabular-nums text-ink-3">{job.period}</p>
          <p className="mt-2 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {job.company}
          </p>
          <p className="mt-1 text-ink-2">{job.location}</p>
          {job.current && (
            <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-success/10 px-3 py-1 text-sm font-medium text-success">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-success" />
              Current role
            </p>
          )}
        </div>
      </Reveal>

      <div className="lg:col-span-8">
        <Reveal as="h3" className="text-[1.75rem] font-semibold leading-tight tracking-tight sm:text-[2.25rem]">
          {job.role}
        </Reveal>
        <Reveal as="p" delay={0.05} className="mt-3 max-w-2xl text-lg leading-relaxed text-ink-2">
          {job.summary}
        </Reveal>

        {job.highlight && (
          <Reveal delay={0.1} className="mt-8 flex flex-col gap-5 rounded-3xl bg-ringpe p-6 text-white sm:flex-row sm:p-7">
            <img
              src={featuredProject.logo}
              alt=""
              width="64"
              height="64"
              loading="lazy"
              className="size-14 shrink-0 rounded-2xl bg-white object-contain p-1.5 sm:size-16"
            />
            <div>
              <p className="text-sm font-medium text-white/75">Key contribution</p>
              <p className="mt-1.5 text-lg leading-snug">{job.highlight}</p>
              <ScrollLink
                to="projects"
                className="mt-4 inline-flex items-center gap-1.5 text-[15px] font-medium text-white"
              >
                <span className="link-underline">See the project</span>
                <FiArrowDown aria-hidden="true" />
              </ScrollLink>
            </div>
          </Reveal>
        )}

        <div className={`mt-10 grid gap-x-10 gap-y-9 ${job.groups.length > 1 ? "sm:grid-cols-2" : ""}`}>
          {job.groups.map((group, i) => (
            <Reveal key={group.title} delay={(i % 2) * 0.08}>
              <h4 className="font-sans text-[15px] font-semibold text-ink">{group.title}</h4>
              <ul className="mt-3 space-y-3">
                {group.points.map((point) => (
                  <li
                    key={point}
                    className="relative pl-5 text-[0.975rem] leading-relaxed text-ink-2 before:absolute before:left-0 before:top-[0.8em] before:h-0.5 before:w-2.5 before:rounded-full before:bg-accent"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal as="ul" aria-label="Technologies used" className="mt-9 flex flex-wrap gap-2">
          {job.stack.map((name) => (
            <li key={name} className="chip">
              {name}
            </li>
          ))}
        </Reveal>
      </div>
    </li>
  );
}
