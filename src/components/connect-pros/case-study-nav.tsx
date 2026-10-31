"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Moon, Sun } from "lucide-react";
import { sections } from "@/data/connect-pros";

export default function CaseStudyNav() {
  const [active, setActive] = useState<string>(sections[0][0]);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  // Pick up the theme that the home page may already have set.
  useEffect(() => {
    const current = document.documentElement.dataset.theme;
    setTheme(current === "light" ? "light" : "dark");
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-15% 0px -75% 0px", threshold: [0, 0.2, 0.5] },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    setTheme(next);
  }

  return (
    <nav className="cs-toc" aria-label="Case study sections">
      <Link className="cs-back" href="/#projects">
        <ArrowLeft size={14} /> Portfolio
      </Link>
      <ol className="cs-toc__list">
        {sections.map(([id, label], i) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={active === id ? "cs-toc__link cs-toc__link--on" : "cs-toc__link"}
              aria-current={active === id ? "true" : undefined}
            >
              <span>{String(i + 1).padStart(2, "0")}</span>
              {label}
            </a>
          </li>
        ))}
      </ol>
      <button
        type="button"
        className="icon-button cs-theme"
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        onClick={toggleTheme}
      >
        {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
      </button>
    </nav>
  );
}
