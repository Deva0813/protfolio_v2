"use client";
import { useEffect, useState } from "react";
import { Sun, Moon, Circle } from "lucide-react";

export function ThemeToggleButton() {
  const [theme, setThemeState] = useState<"dark" | "light" | null>(null);

  useEffect(() => {
    setThemeState(
      (localStorage.getItem("theme") as "dark" | "light") || "dark",
    );
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(next);
    localStorage.setItem("theme", next);
    setThemeState(next);
  }

  if (!theme)
    return (
      <div
        className="cursor-pointer inline-flex h-9.5 w-9.5 items-center justify-center rounded-full border border-(--border-strong) text-(--text) transition-all hover:border-(--accent) hover:bg-(--accent-dim) hover:text-(--accent-strong)"
        aria-hidden
      >
        <Circle size={16} />
      </div>
    );

  return (
    <button
      className=" cursor-pointer inline-flex h-9.5 w-9.5 items-center justify-center rounded-full border border-(--border-strong) text-(--text) transition-all hover:border-(--accent) hover:bg-(--accent-dim) hover:text-(--accent-strong)"
      onClick={toggle}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
