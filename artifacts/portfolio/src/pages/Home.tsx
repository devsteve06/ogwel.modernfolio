import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, ExternalLink } from "lucide-react";
import { SiReact, SiPostgresql, SiExpress, SiNodedotjs, SiTypescript, SiJavascript, SiGit, SiHtml5, SiCss3 } from "react-icons/si";

const Nav = () => {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 py-6 px-8 flex justify-between items-center backdrop-blur-md bg-background/80 border-b border-border/40"
    >
      <div className="font-mono text-sm font-semibold tracking-tighter">
        <a href="#hero" className="hover:text-accent transition-colors">OS.</a>
      </div>
      <div className="flex gap-6 text-sm font-medium">
        <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
        <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">Skills</a>
        <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a>
        <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-8 md:px-24 pt-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="max-w-4xl"
      >
        <h2 className="font-mono text-accent mb-6 tracking-tight">Hi, my name is</h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 text-foreground">
          Ogwel Stephen.
        </h1>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-muted-foreground">
          I build full-stack experiences.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
          I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently focused on building accessible, human-centered products using modern web technologies.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-all duration-300">
            View My Work <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-md hover:border-foreground transition-all duration-300">
            Get In Touch
          </a>
        </div>
      </motion.div>
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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
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
              <skill.icon className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity" style={{ color: skill.color !== "currentColor" ? skill.color : undefined }} />
              <span className="font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "StudentConnect",
      description: "A comprehensive attachment and internship platform designed to bridge the gap between students and industry opportunities. Features robust user roles, application tracking, and an intuitive dashboard for both students and employers.",
      tech: ["React", "Node.js", "Express", "PostgreSQL", "TypeScript"],
      links: { github: "#", live: "#" }
    },
    {
      title: "Kaida",
      description: "A modern e-commerce platform built for scale. Includes a full shopping cart experience, secure checkout integration, product inventory management, and a responsive, performance-optimized storefront.",
      tech: ["React", "Express", "PostgreSQL", "Tailwind CSS"],
      links: { github: "#", live: "#" }
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
              <div className="w-full md:w-1/2 aspect-video bg-muted rounded-lg overflow-hidden border border-border relative flex items-center justify-center">
                <div className="absolute inset-0 bg-accent/5 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                {/* Minimal placeholder for project image */}
                <div className="text-muted-foreground/30 font-mono text-xl">{project.title.toLowerCase()}.web</div>
              </div>
              
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
                  <a href={project.links.live} className="text-muted-foreground hover:text-accent transition-colors" aria-label="Live Demo">
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
          I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <a 
          href="mailto:hello@example.com" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-all duration-300 mb-16"
        >
          <Mail className="w-5 h-5" /> Say Hello
        </a>
        
        <div className="flex items-center justify-center gap-8">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-8 text-center border-t border-border mt-auto">
      <p className="font-mono text-xs text-muted-foreground">
        Designed & Built by Ogwel Stephen
      </p>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
