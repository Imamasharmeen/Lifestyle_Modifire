"use client";

import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      className="relative w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-black transition-colors"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <FaSun
        className={`absolute h-6 w-6 text-black-500 transition-all duration-300  ${
          theme === "dark" ? "opacity-0 scale-0" : "opacity-100 scale-100"
        }`}
      />
      <FaMoon
        className={`absolute h-6 w-6 text-black-300 transition-all duration-300 ${
          theme === "dark" ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      />
    </button>
  );
}