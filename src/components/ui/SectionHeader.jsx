import Reveal from "./Reveal";

// Large section title on the left, supporting copy on the right (stacked on mobile).
export default function SectionHeader({ id, title, children, dark = false, className = "" }) {
  return (
    <div className={`grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-8 ${className}`}>
      <Reveal as="h2" id={id} className="text-[2.75rem] font-semibold leading-[0.95] tracking-[-0.035em] sm:text-6xl lg:col-span-6 lg:text-[5.25rem]">
        {title}
      </Reveal>
      {children && (
        <Reveal
          delay={0.08}
          className={`max-w-xl text-lg leading-relaxed lg:col-span-5 lg:col-start-8 lg:pb-2 ${
            dark ? "text-mist" : "text-ink-2"
          }`}
        >
          {children}
        </Reveal>
      )}
    </div>
  );
}
