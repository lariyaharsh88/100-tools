"use client";

import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const enableDark = stored ? stored === "dark" : prefersDark;

    document.documentElement.classList.toggle("dark", enableDark);
    setIsDark(enableDark);
  }, []);

  const handleToggle = () => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="rounded-full border px-4 py-2 text-sm font-medium shadow-sm transition hover:opacity-90"
      style={{
        backgroundColor: "var(--surface-muted)",
        color: "var(--text)",
        borderColor: "var(--border)",
      }}
      aria-label="Toggle dark mode"
      aria-pressed={isDark}
    >
      {isDark ? "Light" : "Dark"} Mode
    </button>
  );
}
