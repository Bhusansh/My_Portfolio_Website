// app/page.tsx
import Image from "next/image";

type Service = {
  title: string;
  description: string;
  variant?: "dark" | "light";
};

const services: Service[] = [
  {
    title: "UI / UX Creative Design",
    description: "Human‑centered digital products with delightful micro‑interactions.",
    variant: "dark",
  },
  {
    title: "Visual Graphic Design",
    description: "Brand visuals, layouts, and marketing graphics for modern teams.",
    variant: "light",
  },
  {
    title: "Strategy & Digital Marketing",
    description: "Product strategy, funnels, and campaigns that actually convert.",
    variant: "light",
  },
];

type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  duration: string;
};

const experience: ExperienceItem[] = [
  {
    role: "Micro‑interactions Awards Team",
    company: "Fleava Agency",
    location: "Singapore / Remote",
    duration: "2 Years",
  },
  {
    role: "Senior UI Designer",
    company: "Behance",
    location: "Bengaluru",
    duration: "1 Year",
  },
  {
    role: "Product Designer",
    company: "Startup Studio",
    location: "India",
    duration: "1.5 Years",
  },
  {
    role: "Webflow Team Manager",
    company: "Google Partner Studio",
    location: "Remote",
    duration: "2 Years",
  },
];

type CaseStudy = {
  tag: string;
  title: string;
  subtitle: string;
};

const caseStudies: CaseStudy[] = [
  {
    tag: "Web Design",
    title: "Innovative designer for digital age",
    subtitle: "Web design for fintech payment solutions.",
  },
  {
    tag: "Web Design",
    title: "Minimal agency website",
    subtitle: "Clean aesthetic for startup business.",
  },
  {
    tag: "Web Design",
    title: "SaaS web and app design",
    subtitle: "Product‑led growth landing pages.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Top wrapper */}
      <section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-10 lg:flex-row lg:py-16">
        {/* Left column */}
        <div className="flex-1">
          {/* Logo + top nav */}
          <header className="mb-10 flex items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-black px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                it&apos;s me
              </span>
            </div>
            <nav className="hidden items-center gap-6 text-sm text-neutral-600 md:flex">
              <button className="border-b border-black pb-1 font-medium">
                My Projects
              </button>
              <button className="hover:text-black">About Me</button>
              <button className="hover:text-black">Contact</button>
            </nav>
          </header>

          {/* Hero heading */}
          <div className="relative flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 text-sm text-neutral-500">
              <span className="text-xl">👋</span>
              <span>Hello!</span>
            </div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Hello! <span className="text-neutral-400">I&apos;m</span>{" "}
              <span className="underline decoration-4 decoration-yellow-400">
                Madhu
              </span>
            </h1>
            <p className="text-lg font-medium text-neutral-700">
              Product Designer
            </p>
            <p className="max-w-xl text-sm leading-relaxed text-neutral-600">
              Madhu is a UX leader, design thinker, and product designer focused
              on elegant problem‑solving, user testing, and authentic brand
              experiences.
            </p>

            {/* Bullet list */}
            <ul className="mt-2 space-y-1 text-sm text-neutral-700">
              <li>• Product must be authentic</li>
              <li>• Solve pain points elegantly</li>
              <li>• User testing, feedback, and validation</li>
            </ul>

            {/* CTA buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button className="rounded-full bg-black px-7 py-3 text-sm font-medium text-white shadow-lg shadow-black/10">
                Let&apos;s Talk
              </button>
              <button className="flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium">
                Download CV
                <span className="text-xs text-neutral-400">▼</span>
              </button>
            </div>
          </div>

          {/* Category tabs */}
          <div className="mt-10 flex flex-wrap gap-3 border-y border-neutral-200 py-4 text-xs font-medium uppercase tracking-[0.18em] text-neutral-600">
            <button className="rounded-full bg-black px-4 py-2 text-white">
              Web Design
            </button>
            <button className="rounded-full border border-neutral-300 px-4 py-2">
              App Design
            </button>
            <button className="rounded-full border border-neutral-300 px-4 py-2">
              Development
            </button>
            <button className="rounded-full border border-neutral-300 px-4 py-2">
              Webflow
            </button>
            <button className="rounded-full border border-neutral-300 px-4 py-2">
              Branding
            </button>
          </div>
        </div>

        {/* Right column: hero image + experience cards */}
        <div className="flex-1 space-y-8">
          {/* Portrait card */}
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl shadow-black/10">
            {/* Colorful fake gradient bar */}
            <div className="h-1 w-full bg-gradient-to-r from-pink-500 via-yellow-400 to-sky-400" />
            <div className="flex flex-col items-center gap-4 p-6 sm:flex-row sm:gap-8">
              <div className="relative h-60 w-60 flex-shrink-0 overflow-hidden rounded-3xl bg-neutral-200">
                {/* Replace `/portrait.jpg` with your image in /public */}
                <Image
                  src="/portrait.jpeg"
                  alt="Madhu portrait"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-3 text-sm text-neutral-700">
                <p>
                  Designing intuitive products with personality, combining
                  strong visual language with measurable business outcomes.
                </p>
                <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
                  Currently available for freelance projects.
                </p>
              </div>
            </div>
          </div>

          {/* Experience list */}
          <div className="space-y-3 rounded-3xl bg-white p-5 shadow-lg shadow-black/5">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Experience
            </h2>
            <ul className="space-y-3 text-sm">
              {experience.map((item) => (
                <li
                  key={item.role}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-neutral-100 bg-neutral-50 px-4 py-3"
                >
                  <div>
                    <p className="font-medium">{item.role}</p>
                    <p className="text-xs text-neutral-500">
                      {item.company} • {item.location}
                    </p>
                  </div>
                  <p className="text-xs font-semibold text-neutral-600">
                    {item.duration}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What I'm offering */}
      <section className="border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 lg:flex-row lg:items-start">
          <div className="flex-1 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
              My services
            </p>
            <h2 className="text-2xl font-semibold">What I&apos;m offering</h2>
            <p className="max-w-md text-sm text-neutral-600">
              From high‑fidelity product flows to visual identities, each
              engagement is tailored to elevate digital experiences for startups
              and established teams.
            </p>
            <button className="rounded-full border border-neutral-300 px-5 py-2 text-xs font-medium uppercase tracking-[0.18em]">
              All services
            </button>
          </div>

          <div className="grid flex-1 gap-4 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className={`flex flex-col justify-between rounded-3xl border px-5 py-6 text-sm ${
                  service.variant === "dark"
                    ? "border-black bg-black text-white"
                    : "border-neutral-200 bg-neutral-50 text-neutral-800"
                }`}
              >
                <div className="space-y-2">
                  <h3 className="text-base font-semibold">{service.title}</h3>
                  <p className="text-xs opacity-80">{service.description}</p>
                </div>
                <button
                  className={`mt-6 inline-flex items-center text-xs font-medium ${
                    service.variant === "dark"
                      ? "text-white"
                      : "text-neutral-800"
                  }`}
                >
                  Read more →
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies + testimonial */}
      <section className="border-t border-neutral-200 bg-neutral-100">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-[2fr,1.3fr]">
          {/* Case studies */}
          <div className="space-y-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Case study
            </h2>
            <div className="space-y-4">
              {caseStudies.map((item) => (
                <article
                  key={item.title}
                  className="flex flex-col gap-2 rounded-3xl bg-white p-5 shadow-sm shadow-black/5"
                >
                  <span className="inline-flex w-max rounded-full bg-neutral-900 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                    {item.tag}
                  </span>
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="text-xs text-neutral-600">{item.subtitle}</p>
                  <button className="mt-2 w-max text-xs font-medium text-neutral-900 underline underline-offset-4">
                    See details
                  </button>
                </article>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="flex flex-col justify-between gap-6 rounded-3xl bg-white p-6 shadow-sm shadow-black/5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Client feedback
            </p>
            <p className="text-sm leading-relaxed text-neutral-800">
              “I just wanted to share a quick note and let you know that you did
              a really good job. The product looks fantastic and the process
              felt effortless.”
            </p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-neutral-200" />
              <div>
                <p className="text-sm font-semibold">Rohan Sing</p>
                <p className="text-xs text-neutral-500">
                  Product Manager, Fintech Co.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-neutral-500 md:flex-row">
          <div className="flex gap-4">
            <span>Facebook</span>
            <span>YouTube</span>
            <span>Twitter</span>
          </div>
          <p>© {new Date().getFullYear()} Madhu. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
