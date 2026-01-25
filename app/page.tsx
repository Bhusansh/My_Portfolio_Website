"use client";
import Image from "next/image";
import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

type Service = {
  title: string;
  description: string;
  variant?: "dark" | "light";
};

type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  duration: string;
};

type Project = {
  tag: string;
  title: string;
  subtitle: string;
};

type Skill = {
  name: string;
  description: string;
  level: number;
};

const services: Service[] = [
  {
    title: "Web & App Development",
    description: "Full-stack web applications and mobile-responsive sites using Next.js, React, TypeScript & Tailwind.",
    variant: "dark",
  },
  {
    title: "UI/UX Design",
    description: "Modern, intuitive interfaces with focus on user experience and responsive design patterns.",
    variant: "light",
  },
  {
    title: "Backend Integration",
    description: "Supabase authentication, database management, and API integrations for scalable applications.",
    variant: "light",
  },
];

const experience: ExperienceItem[] = [
  {
    role: "Software Engineering Intern",
    company: "Kusum Electronics",
    location: "Gangtok, Sikkim",
    duration: "June 2025 (1 Month)",
  },
  {
    role: "Founder & Full-Stack Developer",
    company: "Esta Travels",
    location: "Siliguri / Sikkim / Darjeeling",
    duration: "2024 - Present",
  },
  {
    role: "Freelance Web Developer",
    company: "USA Clients",
    location: "Remote",
    duration: "2024 - Present",
  },
  {
    role: "BTech CSE Student (3rd Year)",
    company: "Sikkim Manipal Institute of Technology",
    location: "Sikkim, India",
    duration: "2023 - Present",
  },
];

const projects: Project[] = [
  {
    tag: "Full-Stack",
    title: "Esta Travels Website",
    subtitle: "Complete web application for tours & travel agency operating in Sikkim, Darjeeling & Siliguri.",
  },
  {
    tag: "Portfolio",
    title: "USA Client Websites",
    subtitle: "Custom portfolio websites with modern UI/UX for international clients.",
  },
  {
    tag: "Government Project",
    title: "Labour Management System",
    subtitle: "Practical implementation of app & web development during internship at Kusum Electronics.",
  },
];

const skills: Skill[] = [
  { name: "Next.js", description: "Full-stack React framework with server components", level: 85 },
  { name: "React", description: "Modern UI library with hooks and components", level: 90 },
  { name: "TypeScript", description: "Type-safe JavaScript for scalable applications", level: 80 },
  { name: "Tailwind", description: "Utility-first CSS framework for rapid UI development", level: 88 },
  { name: "Supabase", description: "Backend-as-a-service with PostgreSQL database", level: 82 },
  { name: "DSA", description: "Data structures & algorithms for problem solving", level: 78 },
  { name: "C++", description: "Systems programming and competitive programming", level: 75 },
  { name: "DBMS", description: "Database management systems and SQL queries", level: 80 },
];

export default function HomePage() {
  const [selectedSkill, setSelectedSkill] = useState(skills[0]);

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-10 lg:flex-row lg:py-16">
          {/* Left column */}
          <div className="flex-1">
            <div className="relative flex flex-col gap-6">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Hello! I&apos;am{" "}
                <span className="underline decoration-4 decoration-yellow-400">Bhusan</span>
              </h1>
              <p className="text-lg font-medium text-neutral-700">
                Founder of Esta Travels | BTech CSE 3rd Year | Sikkim Manipal Institute of Technology
              </p>
              <p className="max-w-xl text-sm leading-relaxed text-neutral-600">
                Passionate software engineer specializing in Next.js, React, TypeScript, Tailwind CSS & Supabase. 
                Building scalable web apps and founder of Esta Travels serving Sikkim, Darjeeling & Siliguri regions.
              </p>

              <ul className="mt-2 space-y-1 text-sm text-neutral-700">
                <li>• Next.js 15, React, TypeScript, Tailwind CSS</li>
                <li>• Supabase backend & authentication</li>
                <li className="flex items-center gap-2">
                  <Image 
                    src="/logo_bg.png" 
                    alt="Esta Travels Logo" 
                    width={16} 
                    height={16}
                    className="object-contain"
                  />
                  Founder of Esta Travels - Tours & Travel Agency
                </li>
                <li>• DSA | Problem Solving | Full-Stack Development</li>
                <li>• Currently available for full-time / freelance work</li>
              </ul>

{/* CTA buttons */}
<div className="flex flex-wrap items-center gap-4">
  <a
    href="mailto:bhusansharma303@gmail.com"
    className="rounded-full bg-black px-6 py-3 text-lg font-semibold text-white shadow-xl shadow-black/10 hover:bg-neutral-900 lg:px-6 lg:py-3"
  >
    Get In Touch
  </a>
  <a
    href="/Bhusan_Sharma_CV.pdf"  // ← Add your CV to public/ folder
    download="Bhusan_Sharma_CV.pdf"
    className="flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium hover:bg-neutral-50"
  >
    View CV
  </a>
  <button className="flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium hover:bg-neutral-50">
    View Projects
    <span className="text-sm">▼</span>
  </button>
</div>

            </div>
          </div>

          {/* Right column */}
          <div className="flex-1 space-y-8">
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl shadow-black/10">
              <div className="h-1 w-full bg-gradient-to-r from-black to-gray-500" />
              <div className="flex flex-col items-center gap-4 p-6 sm:flex-row sm:gap-8">
                <div className="relative h-60 w-60 flex-shrink-0 overflow-hidden rounded-3xl bg-neutral-200">
                  <Image
                    src="/bhusan-portrait.jpg"
                    alt="Bhusan - Software Engineer & Esta Travels Founder"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-3 text-sm text-neutral-700">
                  <p>
                    Building modern web applications with clean code architecture. 
                    <strong>Founder of Esta Travels</strong> and experienced in full-stack development 
                    projects across India and USA.
                  </p>
                  <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
                    Currently available for freelance projects.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3 rounded-3xl bg-white p-5 shadow-lg shadow-black/5">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Experience
              </h2>
              <ul className="space-y-3 text-sm">
                {experience.map((item) => (
                  <li
                    key={item.role}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-neutral-100 bg-neutral-50 px-4 py-3 hover:shadow-md transition-all"
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

        {/* Skills Section */}
        <section className="border-t border-neutral-200 bg-gradient-to-br from-white via-neutral-50 to-white">
          <div className="mx-auto max-w-6xl px-4 py-16 space-y-12 lg:py-20">
            <div className="text-center space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
                Technical Skill Stack
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Technologies I Work With
              </h2>
              <p className="max-w-lg mx-auto text-sm text-neutral-600 leading-relaxed">
                Proficient in modern web development stack with hands-on experience 
                building production-ready applications.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {skills.map((skill) => (
                <button
                  key={skill.name}
                  onClick={() => setSelectedSkill(skill)}
                  className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 shadow-sm ${
                    selectedSkill.name === skill.name
                      ? "bg-black text-white shadow-md shadow-black/20 hover:shadow-lg hover:shadow-black/30 transform scale-105"
                      : "border-2 border-neutral-200 text-neutral-700 hover:border-neutral-400 hover:bg-neutral-50 hover:shadow-md hover:scale-105"
                  }`}
                >
                  {skill.name}
                </button>
              ))}
            </div>

            {selectedSkill && (
              <div className="mx-auto max-w-2xl">
                <div className="group relative rounded-3xl border-2 border-neutral-200 bg-white/80 p-8 shadow-xl backdrop-blur-sm hover:shadow-2xl hover:shadow-black/10 transition-all duration-500">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-50 via-blue-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative z-10 space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-black via-neutral-800 to-neutral-900 bg-clip-text text-transparent">
                        {selectedSkill.name}
                      </h3>
                      <div className="h-1 w-20 bg-yellow-400 rounded-full" />
                    </div>
                    <p className="text-lg leading-relaxed text-neutral-700 max-w-lg">
                      {selectedSkill.description}
                    </p>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm font-medium text-neutral-600">
                        <span>Proficiency Level</span>
                        <span>{selectedSkill.level}%</span>
                      </div>
                      <div className="h-3 w-full rounded-2xl bg-neutral-200 overflow-hidden shadow-inner">
                        <div
                          className="h-full bg-gradient-to-r from-black via-neutral-800 to-neutral-900 rounded-2xl shadow-lg transition-all duration-1000 ease-out flex items-center justify-center text-xs font-bold text-white"
                          style={{ width: `${selectedSkill.level}%` }}
                        >
                          {selectedSkill.level > 80 && `${selectedSkill.level}%`}
                        </div>
                      </div>
                    </div>
                    <button className="mt-4 inline-flex items-center gap-2 rounded-full border-2 border-black bg-black px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-neutral-900 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      See Projects →
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Services Section */}
        <section className="border-t border-neutral-200 bg-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 lg:flex-row lg:items-start">
            <div className="flex-1 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
                What I offer
              </p>
              <h2 className="text-2xl font-semibold">Software Engineering Services</h2>
              <p className="max-w-md text-sm text-neutral-600">
                From business websites to complex web applications, delivering scalable solutions 
                with modern tech stack for startups, agencies and enterprises.
              </p>
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
                      service.variant === "dark" ? "text-white" : "text-neutral-800"
                    }`}
                  >
                    Read more →
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Projects + Testimonial */}
        <section className="border-t border-neutral-200 bg-neutral-100" id="projects">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-[2fr,1.3fr]">
            <div className="space-y-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Featured Projects
              </h2>
              <div className="space-y-4">
                {projects.map((item) => (
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
            <div className="flex flex-col justify-between gap-6 rounded-3xl bg-white p-6 shadow-sm shadow-black/5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Availability
              </p>
              <p className="text-sm leading-relaxed text-neutral-800">
                "Ready to join your team or work on exciting freelance projects. 
                Specializing in modern web technologies and scalable applications."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-neutral-200 flex items-center justify-center font-semibold text-sm text-neutral-700">
                  BB
                </div>
                <div>
                  <p className="text-sm font-semibold">Bhusan</p>
                  <p className="text-xs text-neutral-500">
                    Full-Stack Developer | Esta Travels Founder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
