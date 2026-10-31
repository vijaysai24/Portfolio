import { FiArrowUpRight } from "react-icons/fi";
import Reveal from "./ui/Reveal";
import ScrollLink from "./ui/ScrollLink";
import SectionHeader from "./ui/SectionHeader";
import { services } from "../data/portfolio";

export const PREFILL_EVENT = "contact:prefill";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="section-space">
      <div className="container-page">
        <SectionHeader id="services-title" title="What I do">
          Four ways I can help a team ship. Choose one to start a conversation and the contact form fills in the
          subject for you.
        </SectionHeader>

        <ul className="mt-14 border-t border-ink/15 lg:mt-20">
          {services.map((service) => (
            <ServiceRow key={service.title} service={service} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function ServiceRow({ service }) {
  const prefillContact = () =>
    window.dispatchEvent(new CustomEvent(PREFILL_EVENT, { detail: { subject: service.title } }));

  return (
    <Reveal as="li" className="border-b border-ink/15">
      <ScrollLink
        to="contact"
        onClick={prefillContact}
        className="group relative grid gap-3 overflow-hidden py-8 sm:py-10 lg:grid-cols-12 lg:items-center lg:gap-8 lg:py-12"
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 origin-bottom scale-y-0 rounded-2xl bg-ink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100 group-focus-visible:scale-y-100"
        />
        <h3 className="relative text-[2rem] font-semibold leading-[1.02] tracking-[-0.035em] transition-colors duration-300 group-hover:text-paper group-focus-visible:text-paper sm:text-[2.6rem] lg:col-span-5 lg:pl-6 lg:text-[3rem]">
          {service.title}
        </h3>
        <div className="relative lg:col-span-6">
          <p className="max-w-xl text-[1.0625rem] leading-relaxed text-ink-2 transition-colors duration-300 group-hover:text-mist group-focus-visible:text-mist">
            {service.text}
          </p>
          <p className="mt-3 text-sm font-medium text-ink-3 transition-colors duration-300 group-hover:text-accent-bright group-focus-visible:text-accent-bright">
            {service.stack.join("  ·  ")}
          </p>
        </div>
        <span className="relative hidden justify-end lg:col-span-1 lg:flex lg:pr-6">
          <FiArrowUpRight
            aria-hidden="true"
            className="size-9 text-ink-3 transition-[color,rotate] duration-500 group-hover:rotate-45 group-hover:text-paper group-focus-visible:text-paper"
          />
        </span>
        <span className="sr-only">: start a conversation about this</span>
      </ScrollLink>
    </Reveal>
  );
}
