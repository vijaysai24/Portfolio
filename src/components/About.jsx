import Reveal from "./ui/Reveal";
import { about } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-space">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-8">
          <Reveal as="h2" id="about-title" className="text-[2.75rem] font-semibold leading-[0.95] tracking-[-0.035em] sm:text-6xl lg:col-span-4 lg:text-[5.25rem]">
            About
          </Reveal>
          <Reveal
            as="p"
            delay={0.08}
            className="font-display text-[1.6rem] font-medium leading-[1.2] tracking-[-0.02em] sm:text-[2rem] lg:col-span-8 lg:pt-3 lg:text-[2.35rem]"
          >
            {about.statement}
          </Reveal>
        </div>

        <div className="mt-16 grid gap-14 lg:mt-24 lg:grid-cols-12 lg:gap-8">
          <div className="space-y-6 text-[1.0625rem] leading-relaxed text-ink-2 lg:col-span-6 lg:col-start-5">
            {about.paragraphs.map((text, i) => (
              <Reveal as="p" key={i} delay={i * 0.08}>
                {text}
              </Reveal>
            ))}
          </div>

          <div className="lg:col-span-4 lg:col-start-1 lg:row-start-1">
            <Reveal as="h3" className="text-2xl font-semibold tracking-tight">
              How I work
            </Reveal>
            <dl className="mt-6 space-y-6">
              {about.principles.map((item, i) => (
                <Reveal key={item.title} delay={0.06 * i} className="group">
                  <dt className="flex items-center gap-3 font-semibold text-ink">
                    <span
                      aria-hidden="true"
                      className="h-0.5 w-4 rounded-full bg-accent transition-all duration-500 group-hover:w-8"
                    />
                    {item.title}
                  </dt>
                  <dd className="mt-1.5 pl-7 text-[0.975rem] leading-relaxed text-ink-2">{item.text}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>

        <Reveal className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-paper-3/70 lg:mt-24 lg:grid-cols-4">
          {about.facts.map((fact) => (
            <div key={fact.value} className="bg-paper-2 p-5 transition-colors duration-300 hover:bg-surface sm:p-7">
              <p className="font-display text-2xl font-semibold tracking-tight sm:text-[2rem]">{fact.value}</p>
              <p className="mt-2 text-sm leading-snug text-ink-2 sm:text-[0.9375rem]">{fact.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
