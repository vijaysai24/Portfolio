import { FiArrowUp, FiArrowUpRight, FiDownload } from "react-icons/fi";
import ScrollLink from "./ui/ScrollLink";
import { navItems, profile } from "../data/portfolio";

const elsewhere = [
  { label: "GitHub", href: profile.github, icon: FiArrowUpRight, external: true },
  { label: "LinkedIn", href: profile.linkedin, icon: FiArrowUpRight, external: true },
  { label: "Resume (PDF)", href: profile.resume, icon: FiDownload, download: profile.resumeFileName },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="overflow-hidden bg-night text-paper">
      <div className="container-page grid gap-12 pt-20 lg:grid-cols-12 lg:gap-8 lg:pt-28">
        <div className="lg:col-span-5">
          <p className="font-display text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
            Have a role or project in mind?
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="group mt-6 inline-flex items-center gap-2 text-lg text-accent-bright"
          >
            <span className="link-underline">{profile.email}</span>
            <FiArrowUpRight
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        <nav aria-labelledby="footer-sections" className="lg:col-span-3 lg:col-start-7">
          <h2 id="footer-sections" className="font-sans text-sm font-medium text-mist">
            Sections
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
            {navItems.map((item) => (
              <li key={item.id}>
                <ScrollLink to={item.id} className="link-underline text-paper/90 hover:text-paper">
                  {item.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="font-sans text-sm font-medium text-mist">Elsewhere</h2>
          <ul className="mt-4 space-y-2.5">
            {elsewhere.map(({ label, href, icon: Icon, external, download }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external && { target: "_blank", rel: "noreferrer" })}
                  {...(download && { download })}
                  className="group inline-flex items-center gap-1.5 text-paper/90 hover:text-paper"
                >
                  <span className="link-underline">{label}</span>
                  <Icon aria-hidden="true" className="size-4 text-mist transition-colors group-hover:text-paper" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* name at full width as the page's closing mark */}
      <p
        aria-hidden="true"
        className="mt-12 select-none whitespace-nowrap text-center font-display text-[25vw] font-semibold leading-[1.05] tracking-[-0.055em] text-night-3 lg:mt-16"
      >
        {profile.shortName}
      </p>

      <div className="container-page flex flex-col gap-3 py-7 text-sm text-mist sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {profile.name}. Built with React, Tailwind CSS and Framer Motion.
        </p>
        <ScrollLink to="home" className="group inline-flex items-center gap-1.5 hover:text-paper">
          <span className="link-underline">Back to top</span>
          <FiArrowUp aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-y-0.5" />
        </ScrollLink>
      </div>
    </footer>
  );
}
