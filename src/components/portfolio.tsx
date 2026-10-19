"use client";

import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  ExternalLink,
  GraduationCap,
  Mail,
  Menu,
  Moon,
  Send,
  Sun,
  X,
} from "lucide-react";
import { profile, skillGroups } from "@/data/profile";
import { projects } from "@/data/projects";

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Education", "education"],
  ["Contact", "contact"],
] as const;

function GitHubMark() {
  return (
    <svg
      aria-hidden="true"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.08c-3.1.68-3.75-1.32-3.75-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.71 2.62 1.22 3.26.93.1-.72.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.5 0-1.21.43-2.2 1.15-2.97-.12-.28-.5-1.41.11-2.94 0 0 .94-.3 3.06 1.14a10.63 10.63 0 0 1 5.57 0c2.13-1.44 3.06-1.14 3.06-1.14.61 1.53.23 2.66.11 2.94.72.77 1.15 1.76 1.15 2.97 0 4.27-2.61 5.21-5.1 5.49.4.35.76 1.02.76 2.06v3.07c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function LinkedInMark() {
  return (
    <svg
      aria-hidden="true"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.45H4.97V9.02h2.96v9.43ZM6.45 7.73a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12 10.72H15.5v-4.59c0-1.09-.02-2.49-1.52-2.49-1.52 0-1.75 1.19-1.75 2.41v4.67H9.27V9.02h2.84v1.29h.04c.4-.74 1.36-1.52 2.8-1.52 3 0 3.56 1.97 3.56 4.53v5.13Z" />
    </svg>
  );
}

function SocialLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`social-links${compact ? " social-links--compact" : ""}`}>
      {profile.github && (
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label="Visit Sahil on GitHub"
        >
          <GitHubMark />
          <span>{compact ? "" : "GitHub"}</span>
        </a>
      )}
      {profile.linkedin && (
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="Visit Sahil on LinkedIn"
        >
          <LinkedInMark />
          <span>{compact ? "" : "LinkedIn"}</span>
        </a>
      )}
    </div>
  );
}

function ProjectArt({ variant }: { variant: string }) {
  return (
    <div className={`project-art project-art--${variant}`} aria-hidden="true">
      <div className="art-window">
        <div className="art-window__top">
          <i />
          <i />
          <i />
          <span>preview</span>
        </div>
        {variant === "video" ? (
          <div className="art-video">
            <div className="art-person art-person--one" />
            <div className="art-person art-person--two" />
            <div className="art-call-controls">
              <b />
              <b />
              <b />
            </div>
          </div>
        ) : variant === "social" ? (
          <div className="art-social">
            <div className="art-avatar" />
            <div className="art-lines">
              <i />
              <i />
            </div>
            <div className="art-post" />
            <div className="art-post art-post--small" />
          </div>
        ) : variant === "trading" ? (
          <div className="art-chart">
            <div className="art-chart__labels">
              <i />
              <i />
              <i />
            </div>
            <svg viewBox="0 0 300 130" role="presentation">
              <path d="M0 105 C28 93 30 102 54 76 S88 88 112 62 S150 75 173 46 S208 59 233 32 S267 43 300 10" />
            </svg>
          </div>
        ) : (
          <div className="art-property">
            <div className="art-property__scene">
              <span />
              <span />
              <span />
            </div>
            <div className="art-property__lines">
              <i />
              <i />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Portfolio({
  resumeAvailable,
}: {
  resumeAvailable: boolean;
}) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [formMessage, setFormMessage] = useState("");
  const [copyrightYear, setCopyrightYear] = useState<number | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(
      () => setCopyrightYear(new Date().getFullYear()),
      0,
    );
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.2, 0.5] },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function resumeNotice() {
    document
      .getElementById("resume-note")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
    document.getElementById("resume-note")?.focus({ preventScroll: true });
  }

  async function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (formStatus === "sending") return;
    setFormStatus("sending");
    setFormMessage("");
    const form = event.currentTarget;
    const values = new FormData(form);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.get("name"),
          email: values.get("email"),
          message: values.get("message"),
          website: values.get("website"),
        }),
      });
      const result: { message?: string } = await response.json();
      if (!response.ok)
        throw new Error(
          result.message || "Your message could not be sent. Please try again.",
        );
      form.reset();
      setFormStatus("success");
      setFormMessage("Thanks for reaching out. Your message has been sent.");
    } catch (error) {
      setFormStatus("error");
      setFormMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <div className="nav-wrap">
          <a className="wordmark" href="#home" aria-label="Sahil, home">
            <span className="wordmark__icon">
              <Code2 size={18} />
            </span>
            <span>
              Sahil<span className="wordmark__dot">.</span>
            </span>
          </a>
          <nav
            className={`main-nav${menuOpen ? " main-nav--open" : ""}`}
            aria-label="Main navigation"
          >
            {navItems.map(([label, id]) => (
              <a
                key={id}
                className={
                  activeSection === id
                    ? "nav-link nav-link--active"
                    : "nav-link"
                }
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <button
              className="icon-button theme-toggle"
              type="button"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              onClick={toggleTheme}
            >
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            {resumeAvailable ? (
              <a
                className="button button--small button--outline nav-resume"
                href="/resume.pdf"
                download="Sahil_Kumar_Gautam_Resume.pdf"
              >
                Resume <ArrowDown size={14} />
              </a>
            ) : (
              <button
                className="button button--small button--outline nav-resume"
                type="button"
                onClick={resumeNotice}
              >
                Resume <ArrowDown size={14} />
              </button>
            )}
            <button
              className="icon-button menu-toggle"
              type="button"
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section id="home" className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" /> Open to internship &amp;
              entry-level roles
            </div>
            <p className="hero-greeting">
              Hi, I&apos;m <span>{profile.name}</span>
            </p>
            <h1>
              {profile.role}
              <span className="hero-period">.</span>
            </h1>
            <p className="hero-description">
              I build responsive web applications, thoughtful REST APIs, and
              full-stack products that make everyday experiences a little
              better.
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href="#projects">
                View my projects <ArrowRight size={16} />
              </a>
              {resumeAvailable ? (
                <a
                  className="button button--outline"
                  href="/resume.pdf"
                  download="Sahil_Kumar_Gautam_Resume.pdf"
                >
                  Download resume <ArrowDown size={15} />
                </a>
              ) : (
                <button
                  className="button button--outline"
                  type="button"
                  onClick={resumeNotice}
                >
                  Download resume <ArrowDown size={15} />
                </button>
              )}
            </div>
            <div className="hero-connect">
              <a href="#contact">
                <Mail size={15} /> Let&apos;s connect <ArrowUpRight size={13} />
              </a>
              <span className="hero-divider" />
              <SocialLinks />
            </div>
          </div>
          <div
            className="hero-visual"
            aria-label="Decorative code editor illustration"
          >
            <div className="visual-glow" />
            <div className="code-card">
              <div className="code-card__bar">
                <div className="window-dots">
                  <i />
                  <i />
                  <i />
                </div>
                <span>developer.tsx</span>
                <span className="code-card__more">···</span>
              </div>
              <div className="code-card__body">
                <div className="code-line">
                  <span className="line-no">01</span>
                  <span>
                    <em>const</em> developer = {"{"}
                  </span>
                </div>
                <div className="code-line code-line--indent">
                  <span className="line-no">02</span>
                  <span>
                    name: <b>&quot;Sahil&quot;</b>,
                  </span>
                </div>
                <div className="code-line code-line--indent">
                  <span className="line-no">03</span>
                  <span>
                    focus: <b>&quot;full-stack&quot;</b>,
                  </span>
                </div>
                <div className="code-line code-line--indent">
                  <span className="line-no">04</span>
                  <span>building: [</span>
                </div>
                <div className="code-line code-line--indent2">
                  <span className="line-no">05</span>
                  <span>
                    <b>&quot;useful products&quot;</b>,
                  </span>
                </div>
                <div className="code-line code-line--indent2">
                  <span className="line-no">06</span>
                  <span>
                    <b>&quot;clean APIs&quot;</b>
                  </span>
                </div>
                <div className="code-line code-line--indent">
                  <span className="line-no">07</span>
                  <span>],</span>
                </div>
                <div className="code-line">
                  <span className="line-no">08</span>
                  <span>{"}"}</span>
                </div>
                <div className="code-cursor" />
              </div>
              <div className="code-card__footer">
                <span>
                  <i /> TypeScript
                </span>
                <span>UTF-8&nbsp; · &nbsp;Spaces: 2</span>
              </div>
            </div>
            <div className="float-chip float-chip--react">
              <span>⚛</span> React
            </div>
            <div className="float-chip float-chip--node">
              <span>⬡</span> Node.js
            </div>
          </div>
          <a className="scroll-cue" href="#about">
            <span>Scroll to explore</span>
            <ArrowDown size={14} />
          </a>
        </section>

        <section id="about" className="section section-wrap">
          <div className="section-heading">
            <p className="section-kicker">01 / A little about me</p>
            <h2>
              Building with <span>curiosity</span>
              <br className="desktop-break" /> and intention.
            </h2>
          </div>
          <div className="about-grid">
            <div className="about-main">
              <p className="about-lead">
                I&apos;m a BCA student and aspiring full-stack developer who
                enjoys turning ideas into useful, well-crafted web experiences.
              </p>
              <p>
                Through hands-on projects, I&apos;ve been learning how frontend
                interfaces, backend services, and databases come together. I
                care about writing maintainable code, solving problems
                thoughtfully, and making applications feel clear and intuitive
                to use.
              </p>
              <p>
                I&apos;m working toward joining a development team as an intern
                or fresher, where I can keep learning and contribute to products
                that matter.
              </p>
              <div className="about-tags">
                <span>
                  <Code2 size={14} /> Full-stack development
                </span>
                <span>
                  <GraduationCap size={15} /> BCA student, 2024–2027
                </span>
              </div>
            </div>
            <div className="about-aside">
              <div className="aside-orbit">
                <div className="orbit-ring orbit-ring--one" />
                <div className="orbit-ring orbit-ring--two" />
                <div className="orbit-core">
                  <Code2 size={28} />
                </div>
                <span className="orbit-node orbit-node--one">&lt;/&gt;</span>
                <span className="orbit-node orbit-node--two">{}</span>
                <span className="orbit-node orbit-node--three">API</span>
              </div>
              <p>
                Curious by nature.
                <br />
                <strong>Always building.</strong>
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="section section-wrap section--muted">
          <div className="section-heading section-heading--row">
            <div>
              <p className="section-kicker">02 / My toolkit</p>
              <h2>
                Tools I work <span>with.</span>
              </h2>
            </div>
            <p className="section-intro">
              A growing toolkit for creating across the stack. Always learning,
              always refining.
            </p>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article
                className={`skill-card${index === 0 ? " skill-card--featured" : ""}`}
                key={group.title}
              >
                <div className="skill-card__top">
                  <span className="skill-card__index">0{index + 1}</span>
                  <h3>{group.title}</h3>
                </div>
                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <span className="skill-pill" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section section-wrap">
          <div className="section-heading section-heading--row">
            <div>
              <p className="section-kicker">03 / Selected work</p>
              <h2>
                Things I&apos;ve <span>built.</span>
              </h2>
            </div>
            <p className="section-intro">
              A few projects that helped me explore full-stack development and
              build practical skills.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <ProjectArt variant={project.visual} />
                <div className="project-card__body">
                  <div className="project-card__heading">
                    <span className="project-number">0{index + 1}</span>
                    <h3>{project.title}</h3>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <ul className="project-features">
                    {project.features.map((feature) => (
                      <li key={feature}>
                        <Check size={13} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="project-stack">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <GitHubMark /> Source code <ExternalLink size={13} />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live demo <ExternalLink size={13} />
                      </a>
                    )}
                    {!project.repoUrl && !project.demoUrl && (
                      <span className="links-pending">Links coming soon</span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section section-wrap section--muted">
          <div className="section-heading">
            <p className="section-kicker">04 / The foundation</p>
            <h2>
              Learning is <span>ongoing.</span>
            </h2>
          </div>
          <article className="education-card mb-2">
            <div className="education-icon">
              <GraduationCap size={21} />
            </div>
            <div className="education-copy">
              <p className="education-label">Education</p>
              <h3>{profile.education}</h3>
              <p className="education-subtitle">
                Building a foundation in computer applications and software
                development.
              </p>
            </div>
            <div className="education-period">
              {profile.educationPeriod}
              <span>In progress</span>
            </div>
          </article>
          <article className="education-card mb-2">
            <div className="education-icon">
              <GraduationCap size={21} />
            </div>
            <div className="education-copy">
              <p className="education-label">Education</p>
              <h3>{profile.education2}</h3>
              <p className="education-subtitle">UP Board, Uttar Pradesh</p>
            </div>
            <div className="education-period">
              {profile.educationPeriod2}
              <span>Compaleted</span>
            </div>
          </article>
          <article className="education-card">
            <div className="education-icon">
              <GraduationCap size={21} />
            </div>
            <div className="education-copy">
              <p className="education-label">Education</p>
              <h3>{profile.education3}</h3>
              <p className="education-subtitle">UP Board, Uttar Pradesh</p>
            </div>
            <div className="education-period">
              {profile.educationPeriod3}
              <span>Compaleted</span>
            </div>
          </article>
        </section>

        <section id="contact" className="section section-wrap contact-section">
          <div className="section-heading">
            <p className="section-kicker">05 / Get in touch</p>
            <h2>
              Let&apos;s make something <span>useful.</span>
            </h2>
            <p className="contact-intro">
              Have an opportunity, project idea, or just want to talk about
              development? I&apos;d be glad to hear from you.
            </p>
          </div>
          <div className="contact-grid">
            <div className="contact-details">
              {profile.email && (
                <div className="contact-detail">
                  <span className="contact-detail__icon">
                    <Mail size={17} />
                  </span>
                  <div>
                    <span className="detail-label">Email</span>
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  </div>
                </div>
              )}
              <div className="contact-detail">
                <span className="contact-detail__icon">
                  <ArrowUpRight size={17} />
                </span>
                <div>
                  <span className="detail-label">Based in</span>
                  <p>{profile.location}</p>
                </div>
              </div>
              {(profile.github || profile.linkedin) && (
                <div className="contact-detail">
                  <span className="contact-detail__icon">
                    <Code2 size={17} />
                  </span>
                  <div>
                    <span className="detail-label">Find me online</span>
                    <div className="contact-socials">
                      <SocialLinks compact />
                    </div>
                  </div>
                </div>
              )}
              <div className="contact-note">
                <span className="status-dot" /> Interested in internships and
                entry-level opportunities
              </div>
            </div>
            <form
              className="contact-form"
              onSubmit={submitContact}
              aria-describedby="contact-status"
            >
              <div className="form-row">
                <label>
                  Name
                  <input
                    autoComplete="name"
                    name="name"
                    required
                    minLength={2}
                    maxLength={80}
                    placeholder="Your name"
                  />
                </label>
                <label>
                  Email
                  <input
                    autoComplete="email"
                    name="email"
                    type="email"
                    required
                    maxLength={254}
                    placeholder="you@example.com"
                  />
                </label>
              </div>
              <label>
                Message
                <textarea
                  name="message"
                  required
                  minLength={10}
                  maxLength={3000}
                  rows={5}
                  placeholder="Tell me a little about what’s on your mind…"
                />
              </label>
              <div className="honeypot" aria-hidden="true">
                <label>
                  Leave this field empty
                  <input name="website" tabIndex={-1} autoComplete="off" />
                </label>
              </div>
              <div className="form-submit">
                <button
                  className="button button--primary"
                  type="submit"
                  disabled={formStatus === "sending"}
                >
                  {formStatus === "sending" ? "Sending…" : "Send message"}
                  <Send size={15} />
                </button>
                <p
                  id="contact-status"
                  className={`form-status form-status--${formStatus}`}
                  role="status"
                  aria-live="polite"
                >
                  {formMessage}
                </p>
              </div>
              <p className="form-footnote">
                Your details are used only to respond to your message.
              </p>
            </form>
          </div>
        </section>

        {!resumeAvailable && (
          <section id="resume" className="resume-note-wrap section-wrap">
            <p id="resume-note" tabIndex={-1} className="resume-note">
              <span className="resume-note__icon">
                <ArrowDownRight size={18} />
              </span>
              <span>
                <strong>Resume PDF not added yet.</strong> Add your file at{" "}
                <code>public/resume.pdf</code> to enable downloads as
                Sahil_Kumar_Gautam_Resume.pdf.
              </span>
            </p>
          </section>
        )}
      </main>

      <footer className="site-footer">
        <div className="footer-inner section-wrap">
          <div>
            <a className="wordmark" href="#home">
              <span className="wordmark__icon">
                <Code2 size={17} />
              </span>
              <span>
                Sahil<span className="wordmark__dot">.</span>
              </span>
            </a>
            <p>Learning, building, and growing one project at a time.</p>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>
          <div className="footer-meta">
            <SocialLinks compact />
            <span>© {copyrightYear ?? ""} Sahil Kumar Gautam</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
