import { useState } from "react";
import { MoonIcon, SunIcon } from "./Icons.jsx";

const root = document.documentElement;

export default function ThemeButton() {
  // the inline script in index.html already picked the starting theme
  const [theme, setTheme] = useState(root.dataset.theme);
  const dark = theme === "dark";

  const toggle = () => {
    const next = dark ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
    setTheme(next);
  };

  // I show the icon for the theme you'd switch to
  return (
    <button
      className="theme-btn"
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {dark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
