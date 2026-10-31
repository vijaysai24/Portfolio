import Reveal from "./ui/Reveal";
import SectionHeader from "./ui/SectionHeader";
import { coreConcepts, skillLayers } from "../data/portfolio";

export default function Skills() {
  const { client, backend, database, tools } = skillLayers;

  return (
    <section id="skills" aria-labelledby="skills-title" className="section-space bg-paper-2">
      <div className="container-page">
        <SectionHeader id="skills-title" title="Skills">
          My toolkit, laid out the way a request travels through an app: from the screen, through the API, to the
          database.
        </SectionHeader>

        <div className="mt-14 lg:mt-20 lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,1fr)_minmax(0,3fr)_minmax(0,1fr)_minmax(0,2.6fr)] lg:items-center">
          <div className="grid gap-3 sm:gap-4">
            <Layer layer={client[0]} columns="grid-cols-2 sm:grid-cols-3 lg:grid-cols-2" />
            <Layer layer={client[1]} delay={0.08} />
          </div>
          <Connector label="HTTP · JSON" />
          <Layer layer={backend} delay={0.12} columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-1" />
          <Connector label="SQL" />
          <Layer layer={database} delay={0.18} />
        </div>

        <Layer
          layer={tools}
          inline
          delay={0.1}
          className="mt-3 sm:mt-4 lg:mt-6"
          columns="grid-cols-2 sm:grid-cols-4 lg:min-w-[36rem]"
        />

        <Reveal className="mt-12 lg:mt-16">
          <h3 className="font-sans text-[15px] font-semibold">Concepts I apply every day</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {coreConcepts.map((concept) => (
              <li key={concept} className="chip bg-paper-3/60 px-3.5 py-1.5 text-[0.9375rem] text-ink">
                {concept}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

// `inline` puts the heading and tiles side by side on desktop (used for the Tools row).
function Layer({ layer, columns = "grid-cols-1", inline = false, className = "", delay = 0 }) {
  return (
    <Reveal
      delay={delay}
      className={`rounded-3xl bg-surface p-5 sm:p-6 ${
        inline ? "lg:flex lg:items-center lg:justify-between lg:gap-10" : ""
      } ${className}`}
    >
      <div>
        <h3 className="text-2xl font-semibold tracking-tight">{layer.title}</h3>
        <p className="mt-1 text-[0.9375rem] leading-snug text-ink-2">{layer.summary}</p>
      </div>
      <ul className={`mt-5 grid gap-2 ${inline ? "lg:mt-0" : ""} ${columns}`}>
        {layer.items.map((item) => (
          <SkillTile key={item.name} item={item} />
        ))}
      </ul>
    </Reveal>
  );
}

function SkillTile({ item }) {
  const Icon = item.icon;
  return (
    <li
      style={{ "--brand": item.color }}
      className="group flex min-w-0 items-center gap-2.5 rounded-2xl bg-paper px-3.5 py-3.5 transition-colors duration-300 hover:bg-ink hover:text-paper sm:gap-3 sm:px-4"
    >
      <Icon
        aria-hidden="true"
        className="size-5 shrink-0 text-ink transition-[color,scale] duration-300 group-hover:scale-110 group-hover:text-(--brand)"
      />
      <span className="text-[0.9375rem] font-medium leading-tight">{item.name}</span>
    </li>
  );
}

// A data-flow line between layers: vertical on small screens, horizontal on desktop.
function Connector({ label }) {
  return (
    <div aria-hidden="true" className="flex flex-col items-center justify-center gap-2 py-3 lg:px-3 lg:py-0">
      <div className="relative h-12 w-0.5 overflow-hidden rounded-full bg-ink/15 lg:h-0.5 lg:w-full">
        <span className="absolute inset-x-0 top-0 h-1/4 animate-flow rounded-full bg-accent lg:hidden" />
        <span className="absolute inset-y-0 left-0 hidden w-1/4 animate-flow-x rounded-full bg-accent lg:block" />
      </div>
      <span className="whitespace-nowrap text-xs font-medium text-ink-3">{label}</span>
    </div>
  );
}
