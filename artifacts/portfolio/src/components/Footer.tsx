import { Link } from "wouter";
import { ArrowUp, ArrowUpRight, Download, FileText, Github, Linkedin, Mail } from "lucide-react";
import { socialHandles } from "@/lib/socials";
import { useSectionNav } from "@/lib/useSectionNav";

const GITHUB_URL = "https://github.com/devsteve06";
const LINKEDIN_URL = "https://www.linkedin.com/in/stephen-ogwel-54728027b";
const EMAIL = "eusteve906@gmail.com";
const CV_DOWNLOAD_URL = `${import.meta.env.BASE_URL}Ogwel-Stephen-CV.pdf`;

const exploreLinks = [
  { label: "About", id: "about" },
  { label: "Education", id: "education" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const connectLinks = [
  { label: "GitHub", href: GITHUB_URL, icon: Github },
  { label: "LinkedIn", href: LINKEDIN_URL, icon: Linkedin },
  { label: "Email", href: `mailto:${EMAIL}`, icon: Mail },
];

export function Footer() {
  const sectionNav = useSectionNav();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-card/40 px-8 py-16 md:px-24">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center font-mono text-sm font-semibold tracking-tighter text-foreground transition-colors hover:text-accent"
            >
              OS<span className="text-accent">.</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Full-stack developer building clean, accessible, human-centered web
              applications. Currently building at JTN Africa and always open to
              interesting conversations.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/cv"
                className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <FileText className="h-4 w-4" aria-hidden="true" />
                View CV
              </Link>
              <a
                href={CV_DOWNLOAD_URL}
                download="Ogwel-Stephen-CV.pdf"
                className="inline-flex items-center gap-2 rounded-md border border-foreground/50 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download CV
              </a>
            </div>
          </div>

          <nav aria-labelledby="footer-explore">
            <h2
              id="footer-explore"
              className="font-mono text-xs uppercase tracking-wide text-accent"
            >
              Explore
            </h2>
            <ul className="mt-4 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={`#${link.id}`}
                    onClick={sectionNav(link.id)}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/cv"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  CV
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-labelledby="footer-connect">
            <h2
              id="footer-connect"
              className="font-mono text-xs uppercase tracking-wide text-accent"
            >
              Connect
            </h2>
            <ul className="mt-4 space-y-3">
              {connectLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <link.icon className="h-4 w-4" aria-hidden="true" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 font-mono text-xs uppercase tracking-wide text-accent">
              Socials
            </h3>
            <ul className="mt-4 space-y-3">
              {socialHandles.map(({ label, handle, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} — ${handle}`}
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    <span className="font-mono text-[11px]">{handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ogwel Stephen. All rights reserved.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 self-start text-xs font-medium text-muted-foreground transition-colors hover:text-foreground sm:self-auto"
          >
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
