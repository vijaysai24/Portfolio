import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle, FiArrowUpRight, FiCheck, FiCopy, FiSend } from "react-icons/fi";
import Reveal from "./ui/Reveal";
import { PREFILL_EVENT } from "./Services";
import { profile } from "../data/portfolio";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MIN_MESSAGE = 20;
const REQUIRED = ["name", "email", "message"];
const EMPTY_FORM = { name: "", email: "", subject: "", message: "" };

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!values.email.trim()) errors.email = "Please enter your email address.";
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = "That email address doesn't look right.";
  if (!values.message.trim()) errors.message = "Please write a short message.";
  else if (values.message.trim().length < MIN_MESSAGE)
    errors.message = `A little more detail helps: at least ${MIN_MESSAGE} characters.`;
  return errors;
}

const channels = [
  { label: "LinkedIn", value: "in/vijaypechetti", href: profile.linkedin, external: true },
  { label: "GitHub", value: `@${profile.githubHandle}`, href: profile.github, external: true },
  { label: "Phone", value: profile.phone, href: profile.phoneHref },
  { label: "Location", value: profile.location },
];

export default function Contact() {
  const [values, setValues] = useState(EMPTY_FORM);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const fieldRefs = { name: useRef(null), email: useRef(null), message: useRef(null) };
  const errors = validate(values);
  const showError = (field) => (touched[field] ? errors[field] : undefined);

  // "What I do" rows pre-fill the subject before scrolling here.
  useEffect(() => {
    const onPrefill = (e) => setValues((current) => ({ ...current, subject: e.detail.subject }));
    window.addEventListener(PREFILL_EVENT, onPrefill);
    return () => window.removeEventListener(PREFILL_EVENT, onPrefill);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((current) => ({ ...current, [name]: value }));
    setSubmitted(false);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    // don't flag a field the visitor only tabbed through
    if (value.trim()) setTouched((current) => ({ ...current, [name]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    const firstInvalid = REQUIRED.find((field) => errors[field]);
    if (firstInvalid) {
      fieldRefs[firstInvalid].current?.focus();
      return;
    }

    const subject = `Portfolio inquiry${values.subject.trim() ? `: ${values.subject.trim()}` : ""}`;
    const body = `Hi Sai Vijay,\n\n${values.message.trim()}\n\n${values.name.trim()}\n${values.email.trim()}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="section-space bg-paper-2">
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <Reveal
            as="h2"
            id="contact-title"
            className="text-[2.75rem] font-semibold leading-[0.95] tracking-[-0.035em] sm:text-6xl lg:text-[5.25rem]"
          >
            Let's work together
          </Reveal>
          <Reveal as="p" delay={0.08} className="mt-6 max-w-md text-lg leading-relaxed text-ink-2">
            I'm open to full-time roles as a Full Stack, React or React Native developer, and happy to talk about
            projects. Email is the quickest way to reach me.
          </Reveal>

          <Reveal delay={0.12} className="mt-10">
            <EmailCard />
            <dl className="mt-3 divide-y divide-ink/10 rounded-2xl bg-surface px-5">
              {channels.map(({ label, value, href, external }) => (
                <div key={label} className="flex items-center justify-between gap-4 py-4">
                  <dt className="text-[15px] text-ink-3">{label}</dt>
                  <dd className="min-w-0 text-right font-medium">
                    {href ? (
                      <a
                        href={href}
                        {...(external && { target: "_blank", rel: "noreferrer" })}
                        className="group inline-flex items-center gap-1.5 hover:text-accent"
                      >
                        <span className="link-underline truncate">{value}</span>
                        {external && (
                          <FiArrowUpRight
                            aria-hidden="true"
                            className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        )}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
          <form
            onSubmit={handleSubmit}
            noValidate
            aria-labelledby="contact-form-title"
            className="rounded-3xl bg-surface p-6 sm:p-8 lg:p-10"
          >
            <h3 id="contact-form-title" className="text-2xl font-semibold tracking-tight sm:text-[1.75rem]">
              Send a message
            </h3>
            <p className="mt-2 text-[15px] text-ink-2">
              This opens your email app with everything filled in, ready to send.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Name" error={showError("name")}>
                <input
                  ref={fieldRefs.name}
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your name"
                  aria-required="true"
                  aria-invalid={Boolean(showError("name"))}
                  aria-describedby={showError("name") ? "name-error" : undefined}
                  className={inputClass}
                />
              </Field>
              <Field id="email" label="Email" error={showError("email")}>
                <input
                  ref={fieldRefs.email}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="you@company.com"
                  aria-required="true"
                  aria-invalid={Boolean(showError("email"))}
                  aria-describedby={showError("email") ? "email-error" : undefined}
                  className={inputClass}
                />
              </Field>
            </div>

            <div className="mt-5">
              <Field id="subject" label="Subject" optional>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={values.subject}
                  onChange={handleChange}
                  placeholder="A role, a project, or just hello"
                  className={inputClass}
                />
              </Field>
            </div>

            <div className="mt-5">
              <Field
                id="message"
                label="Message"
                error={showError("message")}
                counter={
                  values.message.trim() && values.message.trim().length < MIN_MESSAGE
                    ? `${values.message.trim().length} / ${MIN_MESSAGE}`
                    : null
                }
              >
                <textarea
                  ref={fieldRefs.message}
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Tell me about the role or project"
                  aria-required="true"
                  aria-invalid={Boolean(showError("message"))}
                  aria-describedby={showError("message") ? "message-error" : undefined}
                  className={`${inputClass} resize-y`}
                />
              </Field>
            </div>

            <button type="submit" className="btn btn-primary mt-8 w-full sm:w-auto">
              Send message <FiSend aria-hidden="true" />
            </button>

            <div role="status" aria-live="polite">
              <AnimatePresence>
                {submitted && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-5 flex items-start gap-2.5 rounded-2xl bg-success/10 p-4 text-[15px] leading-snug text-success"
                  >
                    <FiCheck aria-hidden="true" className="mt-0.5 shrink-0" />
                    <span>
                      Your email app should now be open with the message ready to send. If nothing happened, write to
                      me directly at{" "}
                      <a href={`mailto:${profile.email}`} className="font-medium underline">
                        {profile.email}
                      </a>
                      .
                    </span>
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

const inputClass =
  "mt-2 block w-full rounded-xl bg-paper px-4 py-3.5 text-base text-ink ring-1 ring-ink/10 transition-[box-shadow,background-color] duration-200 placeholder:text-ink-3/70 hover:ring-ink/25 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent aria-invalid:bg-danger/[0.03] aria-invalid:ring-2 aria-invalid:ring-danger/70";

function Field({ id, label, optional = false, error, counter, children }) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="text-[15px] font-medium text-ink">
          {label}
        </label>
        {optional && <span className="text-sm text-ink-3">Optional</span>}
        {counter && (
          <span aria-hidden="true" className="text-sm tabular-nums text-ink-3">
            {counter}
          </span>
        )}
      </div>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 flex items-center gap-1.5 text-sm text-danger">
          <FiAlertCircle aria-hidden="true" className="shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

function EmailCard() {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl bg-ink p-5 text-paper sm:p-6">
      <div className="min-w-0">
        <p className="text-sm text-mist">Email</p>
        <a
          href={`mailto:${profile.email}`}
          className="link-underline mt-1 block truncate text-lg font-medium sm:text-xl"
        >
          {profile.email}
        </a>
      </div>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Email address copied" : "Copy email address"}
        title={copied ? "Copied" : "Copy"}
        className="grid size-11 shrink-0 place-items-center rounded-full bg-paper/10 transition-colors duration-200 hover:bg-paper hover:text-ink"
      >
        {copied ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? "Email address copied to clipboard" : ""}
      </span>
    </div>
  );
}
