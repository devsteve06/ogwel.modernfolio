import { useEffect, type ReactNode } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Award,
  Briefcase,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Footer } from "@/components/Footer";

const GITHUB_URL = "https://github.com/devsteve06";
const LINKEDIN_URL = "https://www.linkedin.com/in/stephen-ogwel-54728027b";
const PORTFOLIO_URL = "https://ogwel-modernfolio.vercel.app";
const EMAIL = "eusteve906@gmail.com";
const CV_DOWNLOAD_URL = `${import.meta.env.BASE_URL}Ogwel-Stephen-CV.pdf`;

const summary =
  "Detail-oriented Backend Developer with hands-on experience developing full-stack web applications, designing relational databases, and building REST APIs using Node.js, Express.js, and PostgreSQL. Strong understanding of software engineering principles, API security, database design, Git workflows, and backend best practices. Committed to delivering reliable, scalable solutions while continuously expanding expertise in cloud technologies, testing, and system design.";

const skillGroups = [
  {
    label: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "SQL", "Java"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "RESTful APIs"],
  },
  {
    label: "Authentication",
    items: ["JWT", "bcrypt"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MongoDB", "Supabase"],
  },
  {
    label: "Testing",
    items: ["Jest"],
  },
  {
    label: "Version control",
    items: ["Git", "GitHub"],
  },
  {
    label: "Deployment",
    items: ["Render"],
  },
  {
    label: "Core concepts",
    items: [
      "Clean Architecture",
      "Database Design",
      "Performance Optimization",
      "Error Handling",
      "API Security",
      "CI/CD",
      "System Design",
    ],
  },
];

const education = {
  degree: "Bachelor of Science in Mathematics and Computer Science",
  institution: "Technical University of Mombasa",
  location: "Mombasa, Kenya",
  period: "Expected 2027",
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "System Design",
    "Computer Architecture & Organization",
    "Software Development Life Cycle",
  ],
};

const certifications = [
  {
    name: "AI Ethics",
    issuer: "DataCamp",
    file: "certifications/ai-ethics.png",
  },
  {
    name: "Artificial Intelligence Training",
    issuer: "ICTA Kenya",
    file: "certifications/icta-ai-training.jpg",
  },
];

const projects = [
  {
    name: "Kaida",
    subtitle: "E-Commerce Platform",
    stack: ["Node.js", "Express", "Supabase", "Stripe API"],
    live: "https://kaida-emart.vercel.app/",
    highlights: [
      "Architected a dual-repository e-commerce system with custom cart logic and Stripe payment integration.",
      "Designed optimized database models to efficiently handle high-volume product catalogs and user order histories.",
    ],
  },
  {
    name: "StudentConnect",
    subtitle: "Internship & Attachment Portal",
    stack: ["TypeScript", "React", "Node.js", "REST APIs"],
    live: "https://student-connect-wine.vercel.app/",
    highlights: [
      "Architected a recruitment portal connecting students with prospective employers for attachments and internships.",
      "Built role-based authentication and application tracking workflows using TypeScript for enhanced code reliability.",
    ],
  },
  {
    name: "DevLog",
    subtitle: "Developer Content Platform",
    stack: ["TypeScript", "Node.js", "Express", "MongoDB"],
    highlights: [
      "Developed a developer-focused publishing platform supporting technical article creation and engagement.",
      "Implemented RESTful APIs and clean architecture principles to ensure seamless data delivery and maintainability.",
    ],
  },
];

const interests = [
  {
    label: "Technical",
    items: ["Artificial Intelligence", "Performance Optimization"],
  },
  {
    label: "Professional",
    items: ["Mentoring & knowledge sharing", "Hackathons"],
  },
  {
    label: "Personal",
    items: ["Chess", "Reading technology books"],
  },
];

const strengths = [
  "Attention to Detail",
  "Adaptability",
  "Communication",
  "Continuous Learning",
];

const experience = [
  {
    title: "Junior Software Developer",
    company: "JTN Africa",
    period: "October 2026 – Present",
    type: "Full-time",
    highlights: [
      "Build and maintain production web applications with Node.js, Express, and PostgreSQL.",
      "Design REST API endpoints and database schemas that keep request handling fast and predictable.",
      "Review code, track work in Git, and collaborate with the team on delivery.",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "JTN Africa",
    period: "June 2026 – August 2026",
    type: "Internship",
    highlights: [
      "Engineered and debugged RESTful API endpoints, improving request handling and backend response times.",
      "Collaborated with senior developers through Git and code reviews to maintain clean codebase standards.",
    ],
  },
];

function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-lg border border-border bg-card p-6">
      <h2 className="mb-4 font-mono text-xs uppercase tracking-wide text-accent">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function CV() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "CV — Ogwel Stephen";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3 px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to portfolio
          </Link>
          <a
            href={CV_DOWNLOAD_URL}
            download="Ogwel-Stephen-CV.pdf"
            className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download PDF
          </a>
        </div>
      </header>

      <section className="border-b border-border bg-card/40">
        <div className="mx-auto max-w-4xl px-6 py-14 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-mono text-sm text-accent">Curriculum Vitae</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Ogwel Stephen
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Backend Developer / Full Stack Developer
            </p>
            <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">
              {summary}
            </p>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <li className="inline-flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
                Nairobi, Kenya
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4 text-accent" aria-hidden="true" />
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={PORTFOLIO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <ExternalLink className="h-4 w-4 text-accent" aria-hidden="true" />
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Linkedin className="h-4 w-4 text-accent" aria-hidden="true" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="h-4 w-4 text-accent" aria-hidden="true" />
                  GitHub
                </a>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={CV_DOWNLOAD_URL}
                download="Ogwel-Stephen-CV.pdf"
                className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download CV
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-md border border-foreground/50 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email me
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <main className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <Card title="Technical Skills">
              <dl className="space-y-3">
                {skillGroups.map((group) => (
                  <div
                    key={group.label}
                    className="border-b border-border/60 pb-3 last:border-0 last:pb-0"
                  >
                    <dt className="text-xs font-medium text-foreground">
                      {group.label}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {group.items.join(" · ")}
                    </dd>
                  </div>
                ))}
              </dl>
            </Card>

            <Card title="Education">
              <div className="flex gap-3">
                <GraduationCap
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-sm font-semibold leading-snug text-foreground">
                    {education.degree}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {education.institution}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {education.location} · {education.period}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    <span className="font-medium text-foreground">
                      Coursework:
                    </span>{" "}
                    {education.coursework.join(", ")}
                  </p>
                </div>
              </div>
            </Card>

            <Card title="Certifications">
              <ul className="space-y-4">
                {certifications.map((certification) => (
                  <li key={certification.name}>
                    <div className="flex gap-3">
                      <Award
                        className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {certification.name}
                        </p>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {certification.issuer}
                        </p>
                        <a
                          href={`${import.meta.env.BASE_URL}${certification.file}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
                        >
                          View certificate
                          <ExternalLink
                            className="h-3 w-3"
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>

            <Card title="Interests">
              <dl className="space-y-3">
                {interests.map((interest) => (
                  <div key={interest.label}>
                    <dt className="text-xs font-medium text-foreground">
                      {interest.label}
                    </dt>
                    <dd className="mt-0.5 text-sm text-muted-foreground">
                      {interest.items.join(" · ")}
                    </dd>
                  </div>
                ))}
              </dl>
            </Card>
          </aside>

          <div className="space-y-10">
            <section>
              <div className="mb-5 flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-accent" aria-hidden="true" />
                <h2 className="font-mono text-xs uppercase tracking-wide text-accent">
                  Experience
                </h2>
              </div>

              <div className="space-y-4">
                {experience.map((role) => (
                  <div
                    key={`${role.title}-${role.period}`}
                    className="rounded-lg border border-border bg-card p-6"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-semibold text-foreground">
                        {role.title}
                      </h3>
                      <p className="font-mono text-xs text-muted-foreground">
                        {role.period}
                      </p>
                    </div>
                    <p className="mt-1 text-sm font-medium text-accent">
                      {role.company} · {role.type}
                    </p>
                    <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                      {role.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-2">
                          <span
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                            aria-hidden="true"
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="mb-5 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-accent" aria-hidden="true" />
                <h2 className="font-mono text-xs uppercase tracking-wide text-accent">
                  Key Projects
                </h2>
              </div>

              <div className="space-y-5">
                {projects.map((project) => (
                  <article
                    key={project.name}
                    className="rounded-lg border border-border bg-card p-6"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {project.name}
                        </h3>
                        <p className="mt-0.5 text-sm text-muted-foreground">
                          {project.subtitle}
                        </p>
                      </div>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
                        >
                          Live site
                          <ExternalLink
                            className="h-3 w-3"
                            aria-hidden="true"
                          />
                        </a>
                      )}
                    </div>

                    <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-2">
                          <span
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                            aria-hidden="true"
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((technology) => (
                        <li
                          key={technology}
                          className="rounded-full border border-border bg-background px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground"
                        >
                          {technology}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <Card title="Core Competencies">
              <ul className="flex flex-wrap gap-2">
                {strengths.map((strength) => (
                  <li
                    key={strength}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
                  >
                    {strength}
                  </li>
                ))}
              </ul>
            </Card>

            <div className="rounded-lg border border-border bg-card/60 p-6">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Prefer a printable copy? Download the PDF version of this CV,
                including contact details and the full project history.
              </p>
              <a
                href={CV_DOWNLOAD_URL}
                download="Ogwel-Stephen-CV.pdf"
                className="mt-4 inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download CV (PDF)
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
