import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, ExternalLink, Sun, Moon, GraduationCap, MapPin, Briefcase, Code2, Server, Database, LayoutTemplate, Gauge, Rocket } from "lucide-react";
import { SiReact, SiPostgresql, SiExpress, SiNodedotjs, SiTypescript, SiJavascript, SiGit, SiHtml5 } from "react-icons/si";
import { CertificatePreview, useCertificateImage } from "@/components/CertificatePreview";
import { Footer } from "@/components/Footer";
import { Portrait } from "@/components/Portrait";
import { ProjectPhoto } from "@/components/ProjectPhoto";
import { socialHandles } from "@/lib/socials";
import { useSectionNav } from "@/lib/useSectionNav";

const GITHUB_URL = "https://github.com/devsteve06";
const LINKEDIN_URL = "https://www.linkedin.com/in/stephen-ogwel-54728027b";

const ThemeToggle = () => {
  // The pre-paint script in index.html has already set the class; mirror it here.
  const [isDark, setIsDark] = useState(
    () => document.documentElement.classList.contains("dark"),
  );

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
    >
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
};

const Nav = () => {
  const sectionNav = useSectionNav();

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 py-6 px-8 flex justify-between items-center backdrop-blur-md bg-background/80 border-b border-border/40"
    >
      <div className="font-mono text-sm font-semibold tracking-tighter">
        <a href="#hero" onClick={sectionNav("hero")} className="hover:text-accent transition-colors">OS.</a>
      </div>
      <div className="flex items-center gap-4 lg:gap-6 text-sm font-medium">
        <a href="#about" onClick={sectionNav("about")} className="hidden sm:inline text-muted-foreground hover:text-foreground transition-colors">About</a>
        <a href="#education" onClick={sectionNav("education")} className="hidden sm:inline text-muted-foreground hover:text-foreground transition-colors">Education</a>
        <a href="#experience" onClick={sectionNav("experience")} className="hidden sm:inline text-muted-foreground hover:text-foreground transition-colors">Experience</a>
        <a href="#skills" onClick={sectionNav("skills")} className="hidden sm:inline text-muted-foreground hover:text-foreground transition-colors">Skills</a>
        <a href="#services" onClick={sectionNav("services")} className="hidden sm:inline text-muted-foreground hover:text-foreground transition-colors">Services</a>
        <a href="#projects" onClick={sectionNav("projects")} className="hidden sm:inline text-muted-foreground hover:text-foreground transition-colors">Projects</a>
        <a href="#contact" onClick={sectionNav("contact")} className="hidden sm:inline text-muted-foreground hover:text-foreground transition-colors">Contact</a>
        <ThemeToggle />
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  const sectionNav = useSectionNav();

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-8 md:px-24 pt-32 pb-16 relative">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="max-w-2xl"
        >
          <h2 className="font-mono text-accent mb-6 tracking-tight">Hi, my name is</h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight mb-4 text-foreground">
            Ogwel Stephen.
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight mb-8 text-muted-foreground">
            I build full-stack experiences.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
            I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently focused on building accessible, human-centered products using modern web technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" onClick={sectionNav("projects")} className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-all duration-300">
              View My Work <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" onClick={sectionNav("contact")} className="inline-flex items-center gap-2 px-6 py-3 border border-foreground/50 text-foreground font-medium rounded-md hover:border-foreground transition-all duration-300">
              Get In Touch
            </a>
          </div>
        </motion.div>

        <Portrait />
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="min-h-[80vh] flex flex-col justify-center px-8 md:px-24 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl"
      >
        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
          <div className="h-px bg-border flex-grow max-w-xs"></div>
        </div>
        <div className="prose prose-lg dark:prose-invert text-muted-foreground leading-relaxed">
          <p>
            Hello! I'm Stephen, a Full-Stack Developer with a passion for creating clean, robust, and highly functional web applications. My journey in web development started with a curiosity about how digital products are built, which quickly turned into a relentless drive to master the craft of software engineering.
          </p>
          <p>
            I thrive in environments where I can build things from the ground up, moving seamlessly between designing data architectures in PostgreSQL to crafting intuitive, responsive user interfaces in React.
          </p>
          <p>
            Whether I'm connecting students to opportunities or building robust e-commerce platforms, my goal remains the same: to write clean, maintainable code that solves real-world problems.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

type Certification = {
  name: string;
  issuer: string;
  /** Base path under `public/`, without extension, e.g. "certifications/ai-ethics". */
  preview: string;
  /** Optional public verification URL; takes priority over the local image. */
  href?: string;
};

const CertificationCard = ({
  certification,
  index,
}: {
  certification: Certification;
  index: number;
}) => {
  const { src, onError } = useCertificateImage(certification.preview);
  const viewHref = certification.href || src;

  const preview = (
    <CertificatePreview
      src={src}
      onError={onError}
      name={certification.name}
      issuer={certification.issuer}
    />
  );

  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card"
    >
      <div className="group/certificate relative aspect-[4/3] overflow-hidden border-b border-border bg-secondary/40">
        {viewHref ? (
          <a
            href={viewHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${certification.name} certificate (opens in a new tab)`}
            className="block h-full w-full"
          >
            {preview}
          </a>
        ) : (
          preview
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h4 className="font-medium text-foreground">{certification.name}</h4>
        <p className="mt-1 text-sm text-muted-foreground">{certification.issuer}</p>

        <div className="mt-4">
          {viewHref ? (
            <a
              href={viewHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
            >
              View certificate
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          ) : (
            <span className="text-sm text-muted-foreground">
              Certificate file coming soon
            </span>
          )}
        </div>
      </div>
    </motion.li>
  );
};

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Mathematics and Computer Science",
      institution: "Technical University of Mombasa",
      location: "Mombasa, Kenya",
      period: "Expected 2027",
      description:
        "Building a strong foundation in mathematics, algorithms, and software engineering, with a focus on database systems, system design, and the full software development life cycle.",
      coursework: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "System Design",
        "Computer Architecture & Organization",
        "Software Development Life Cycle",
      ],
    },
  ];

  const certifications: Certification[] = [
    {
      name: "AI Ethics",
      issuer: "DataCamp",
      preview: "certifications/ai-ethics.png",
    },
    {
      name: "Artificial Intelligence Training",
      issuer: "ICTA Kenya",
      preview: "certifications/icta-ai-training.jpg",
    },
  ];

  return (
    <section id="education" className="min-h-[80vh] flex flex-col justify-center px-8 md:px-24 py-24">
      <div className="max-w-5xl">
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Education</h2>
          <div className="h-px bg-border flex-grow max-w-xs"></div>
        </div>

        <ol
          className={`relative space-y-10 ${
            education.length > 1
              ? "before:absolute before:left-5 before:top-3 before:bottom-3 before:w-px before:bg-border"
              : ""
          }`}
        >
          {education.map((item, i) => (
            <li key={item.degree} className="relative pl-16">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-accent shadow-sm"
              >
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </motion.span>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                className="rounded-lg border border-border bg-card p-6 md:p-8"
              >
                <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span className="font-mono text-xs uppercase tracking-wide text-accent">
                    {item.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    {item.location}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-foreground">
                  {item.degree}
                </h3>
                <p className="mt-1 text-sm font-medium text-muted-foreground">
                  {item.institution}
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-6">
                  <p className="mb-3 font-mono text-xs uppercase tracking-wide text-muted-foreground">
                    Relevant coursework
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {item.coursework.map((course) => (
                      <li
                        key={course}
                        className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
                      >
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </li>
          ))}
        </ol>

        <div className="mt-14">
          <div className="mb-6 flex items-center gap-4">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">Certifications</h3>
            <div className="h-px flex-grow bg-border"></div>
          </div>

          <ul className="grid items-stretch gap-6 sm:grid-cols-2">
            {certifications.map((cert, i) => (
              <CertificationCard key={cert.name} certification={cert} index={i} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const roles = [
    {
      role: "Junior Software Developer",
      company: "JTN Africa",
      period: "October 2026 – Present",
      type: "Full-time",
      current: true,
      description:
        "Building and maintaining production web applications, with a focus on reliable APIs, clean data models, and maintainable front-end features.",
      highlights: [
        "Develop and ship full-stack features using Node.js, Express, and PostgreSQL.",
        "Design REST API endpoints and database schemas that keep request handling fast and predictable.",
        "Review code, track work in Git, and collaborate with the team on delivery.",
      ],
      stack: ["TypeScript", "Node.js", "Express", "PostgreSQL", "Git"],
    },
    {
      role: "Software Developer Intern",
      company: "JTN Africa",
      period: "June 2026 – August 2026",
      type: "Internship",
      current: false,
      description:
        "Joined the engineering team for a three-month internship focused on backend development and API reliability.",
      highlights: [
        "Engineered and debugged RESTful API endpoints, improving request handling and backend response times.",
        "Collaborated with senior developers through Git and code reviews to maintain clean codebase standards.",
      ],
      stack: ["JavaScript", "Node.js", "Express", "REST APIs", "Git"],
    },
  ];

  return (
    <section id="experience" className="min-h-[80vh] flex flex-col justify-center px-8 md:px-24 py-24">
      <div className="max-w-5xl">
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Experience</h2>
          <div className="h-px bg-border flex-grow max-w-xs"></div>
        </div>

        <ol className="relative space-y-10 before:absolute before:left-5 before:top-3 before:bottom-3 before:w-px before:bg-border">
          {roles.map((item, i) => (
            <li key={`${item.role}-${item.period}`} className="relative pl-16">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-accent shadow-sm"
              >
                <Briefcase className="h-5 w-5" aria-hidden="true" />
              </motion.span>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                className="rounded-lg border border-border bg-card p-6 md:p-8"
              >
                <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span className="font-mono text-xs uppercase tracking-wide text-accent">
                    {item.period}
                  </span>
                  <span className="inline-flex items-center rounded-full border border-border bg-background px-2.5 py-0.5 text-xs text-muted-foreground">
                    {item.type}
                  </span>
                  {item.current && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      </span>
                      Current
                    </span>
                  )}
                </div>

                <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-foreground">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm font-medium text-muted-foreground">
                  {item.company}
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                <ul className="mt-4 space-y-2 text-muted-foreground leading-relaxed">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {item.stack.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

const Skills = () => {
  const skills = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express", icon: SiExpress, color: "currentColor" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "HTML/CSS", icon: SiHtml5, color: "#E34F26" },
    { name: "Git", icon: SiGit, color: "#F05032" },
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="skills" className="min-h-[60vh] flex flex-col justify-center px-8 md:px-24 py-24 bg-card">
      <div className="max-w-5xl">
        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Technical Arsenal</h2>
          <div className="h-px bg-border flex-grow max-w-xs"></div>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {skills.map((skill) => (
            <motion.div 
              key={skill.name} 
              variants={item}
              className="flex items-center gap-4 p-4 border border-border rounded-lg bg-background/50 hover:bg-background hover:border-accent transition-colors group"
            >
              <skill.icon className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity" style={{ color: skill.color !== "currentColor" ? skill.color : undefined }} aria-hidden="true" />
              <span className="font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

type ProjectStatus = "live" | "completed" | "in-progress" | "archived";

const PROJECT_STATUS: Record<ProjectStatus, { label: string; dot: string }> = {
  live: { label: "Live", dot: "bg-emerald-500" },
  completed: { label: "Completed", dot: "bg-sky-500" },
  "in-progress": { label: "In Progress", dot: "bg-amber-500" },
  archived: { label: "Archived", dot: "bg-zinc-400" },
};

const Services = () => {
  const sectionNav = useSectionNav();

  const services = [
    {
      title: "Full-Stack Web Development",
      description:
        "Complete web applications, from database schema to polished interface, built with React, Node.js, and PostgreSQL.",
      icon: Code2,
      tags: ["React", "Node.js", "PostgreSQL"],
    },
    {
      title: "Backend & API Development",
      description:
        "Reliable REST APIs with authentication, validation, and clean error handling, designed to grow with your product.",
      icon: Server,
      tags: ["Express", "JWT", "REST"],
    },
    {
      title: "Database Design",
      description:
        "Well-structured schemas, efficient queries, and safe migrations that keep your data consistent as the product scales.",
      icon: Database,
      tags: ["PostgreSQL", "MongoDB", "Supabase"],
    },
    {
      title: "Frontend Development",
      description:
        "Responsive, accessible interfaces in React and Tailwind CSS that feel fast and work across every device.",
      icon: LayoutTemplate,
      tags: ["React", "Tailwind CSS", "TypeScript"],
    },
    {
      title: "Performance & Accessibility",
      description:
        "Practical audits and fixes for WCAG AA contrast, keyboard navigation, and load times so everyone can use your product.",
      icon: Gauge,
      tags: ["WCAG AA", "Core Web Vitals", "SEO"],
    },
    {
      title: "Deployment & Maintenance",
      description:
        "Ship with confidence on Render or Vercel, with CI/CD, environment setup, and ongoing fixes after launch.",
      icon: Rocket,
      tags: ["Render", "Vercel", "CI/CD"],
    },
  ];

  return (
    <section id="services" className="min-h-[80vh] flex flex-col justify-center px-8 md:px-24 py-24">
      <div className="max-w-5xl">
        <div className="flex items-center gap-6 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Services</h2>
          <div className="h-px bg-border flex-grow max-w-xs"></div>
        </div>
        <p className="mb-12 max-w-2xl text-muted-foreground leading-relaxed">
          From the first schema to the final deploy — here is how I can help you
          build and maintain a dependable web product.
        </p>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.li
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
              className="group flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-accent/60"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-md border border-border bg-background text-accent">
                  <service.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-border bg-background px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-start gap-4 rounded-lg border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Have a project in mind? I'm happy to talk it through.
          </p>
          <a
            href="#contact"
            onClick={sectionNav("contact")}
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Start a conversation
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

const ProjectStatusBadge = ({ status }: { status: ProjectStatus }) => {
  const meta = PROJECT_STATUS[status];

  return (
    <span className="absolute left-4 top-4 z-20 inline-flex items-center gap-2 rounded-full border border-border bg-background/90 px-3 py-1 font-mono text-xs uppercase tracking-wide text-foreground shadow-sm backdrop-blur-sm">
      <span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} aria-hidden="true" />
      {meta.label}
    </span>
  );
};

const Projects = () => {
  const projects: Array<{
    title: string;
    description: string;
    tech: string[];
    image: string;
    status: ProjectStatus;
    links: { github: string; live: string };
  }> = [
    {
      title: "StudentConnect",
      description: "A comprehensive attachment and internship platform designed to bridge the gap between students and industry opportunities. Features robust user roles, application tracking, and an intuitive dashboard for both students and employers.",
      tech: ["React", "Node.js", "Express", "PostgreSQL", "TypeScript"],
      image: "projects/studentconnect",
      status: "completed",
      links: { github: "#", live: "https://student-connect-wine.vercel.app/" }
    },
    {
      title: "Kaida",
      description: "A modern e-commerce platform built for scale. Includes a full shopping cart experience, secure checkout integration, product inventory management, and a responsive, performance-optimized storefront.",
      tech: ["React", "Express", "PostgreSQL", "Tailwind CSS"],
      image: "projects/kaida",
      status: "in-progress",
      links: { github: "#", live: "https://kaida-emart.vercel.app/" }
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center px-8 md:px-24 py-24">
      <div className="max-w-5xl">
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
          <div className="h-px bg-border flex-grow max-w-xs"></div>
        </div>

        <div className="space-y-24">
          {projects.map((project, i) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center group`}
            >
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} live`}
                className="w-full md:w-1/2 aspect-video bg-muted rounded-lg overflow-hidden border border-border relative flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <div className="absolute inset-0 bg-accent/5 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <ProjectPhoto
                  baseName={project.image}
                  alt={`${project.title} project screenshot`}
                  title={project.title}
                />
                <ProjectStatusBadge status={project.status} />
              </a>
              
              <div className={`w-full md:w-1/2 flex flex-col ${i % 2 !== 0 ? 'md:items-start md:text-left' : 'md:items-end md:text-right'}`}>
                <p className="font-mono text-accent text-sm mb-2 tracking-tight">Featured Project</p>
                <h3 className="text-2xl font-bold mb-6 text-foreground">{project.title}</h3>
                
                <div className="bg-card p-6 rounded-lg border border-border shadow-sm z-20 mb-6 w-full">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <ul className={`flex flex-wrap gap-4 font-mono text-sm text-muted-foreground mb-8 ${i % 2 !== 0 ? 'justify-start' : 'justify-end'}`}>
                  {project.tech.map(t => <li key={t}>{t}</li>)}
                </ul>
                
                <div className="flex gap-4">
                  <a href={project.links.github} className="text-muted-foreground hover:text-accent transition-colors" aria-label="GitHub Repository">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors" aria-label={`View ${project.title} live`}>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="min-h-[80vh] flex flex-col items-center justify-center px-8 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl"
      >
        <p className="font-mono text-accent mb-4 tracking-tight">What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Get In Touch</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
          I'm currently building at JTN Africa, but always happy to connect. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <a 
          href="mailto:eusteve906@gmail.com" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-all duration-300 mb-16"
        >
          <Mail className="w-5 h-5" /> Say Hello
        </a>
        
        <div className="flex items-center justify-center gap-8">
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
            <Github className="w-6 h-6" />
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {socialHandles.map(({ label, handle, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} — ${handle}`}
                className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
              >
                <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
                <span className="font-mono text-xs">{handle}</span>
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default function Home() {
  // Older links use `/#section` — scroll there and drop the hash from the URL.
  useEffect(() => {
    if (!window.location.hash) return;
    const id = window.location.hash.replace(/^#/, "");
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}`,
    );
    if (!id) return;
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ block: "start" });
    });
  }, []);

  return (
    <div className="bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
