"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, Moon, Sun } from "lucide-react";
import { sections } from "@/data/sahil-zoom";

export default function SahilZoomCaseStudyNav() {
  const [active, setActive] = useState<string>(sections[0][0]);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    setTheme(
      document.documentElement.dataset.theme === "light" ? "light" : "dark",
    );
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
      .forEach((item) => observer.observe(item));
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
        {sections.map(([id, label], index) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={
                active === id ? "cs-toc__link cs-toc__link--on" : "cs-toc__link"
              }
              aria-current={active === id ? "true" : undefined}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
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
