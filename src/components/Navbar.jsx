import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import ScrollLink from "./ui/ScrollLink";
import { EASE_OUT } from "./ui/motion";
import { navItems, profile } from "../data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();

  // Solid bar once the page moves; tuck it away while reading downwards.
  useMotionValueEvent(scrollY, "change", (y) => {
    const delta = y - (scrollY.getPrevious() ?? 0);
    setScrolled(y > 16);
    if (y < 600) setHidden(false);
    else if (delta > 6) setHidden(true);
    else if (delta < -6) setHidden(false);
  });

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const desktop = window.matchMedia("(min-width: 768px)");
    const onResize = (e) => e.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ scaleX: scrollYProgress }}
        className="fixed inset-x-0 top-0 z-60 h-0.5 origin-left bg-accent"
      />

      <motion.header
        initial={{ y: "-100%" }}
        animate={{ y: hidden && !open ? "-100%" : "0%" }}
        transition={{ duration: 0.5, ease: EASE_OUT }}
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
          solid ? "bg-paper/90 shadow-[0_1px_0_rgb(17_18_20/0.08)] backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <nav aria-label="Main" className="container-page flex h-16 items-center justify-between lg:h-18">
          <ScrollLink
            to="home"
            onClick={() => setOpen(false)}
            className="group flex items-center gap-2.5"
            aria-label={`${profile.shortName}, back to top`}
          >
            <span className="grid size-9 place-items-center rounded-[10px] bg-ink font-display text-[15px] font-bold tracking-tight text-paper transition-transform duration-500 ease-out group-hover:-rotate-6">
              SV
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">{profile.shortName}</span>
          </ScrollLink>

          <ul className="hidden items-center md:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <ScrollLink
                  to={item.id}
                  spy
                  activeClass="is-active"
                  className="group relative inline-flex px-3 py-2 text-[15px] text-ink-2 transition-colors hover:text-ink lg:px-3.5 [&.is-active]:text-ink"
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0.5 left-1/2 size-1 -translate-x-1/2 scale-0 rounded-full bg-accent transition-transform duration-300 group-[.is-active]:scale-100"
                  />
                </ScrollLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center">
            <a
              href={profile.resume}
              download={profile.resumeFileName}
              className="btn btn-primary hidden min-h-10 px-4 text-sm md:inline-flex"
            >
              Resume <FiDownload aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="-mr-2 grid size-11 place-items-center rounded-full text-ink transition-colors hover:bg-paper-2 md:hidden"
            >
              {open ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>{open && <MobileMenu onClose={() => setOpen(false)} />}</AnimatePresence>
    </>
  );
}

function MobileMenu({ onClose }) {
  return (
    <motion.div
      id="mobile-menu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      className="fixed inset-0 z-40 flex flex-col bg-paper pt-16 md:hidden"
    >
      <nav aria-label="Mobile" className="container-page flex flex-1 flex-col justify-between overflow-y-auto pb-10 pt-6">
        <ul>
          {navItems.map((item, i) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.04 + i * 0.05, duration: 0.6, ease: EASE_OUT }}
            >
              <ScrollLink
                to={item.id}
                onClick={onClose}
                className="block py-1.5 font-display text-[2.5rem] font-semibold leading-tight tracking-[-0.03em] text-ink active:text-accent"
              >
                {item.label}
              </ScrollLink>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="space-y-6 pt-10"
        >
          <a href={profile.resume} download={profile.resumeFileName} className="btn btn-primary w-full">
            Download resume <FiDownload aria-hidden="true" />
          </a>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-ink-2">
            <a href={`mailto:${profile.email}`} className="link-underline">Email</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link-underline">LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="link-underline">GitHub</a>
          </div>
        </motion.div>
      </nav>
    </motion.div>
  );
}
