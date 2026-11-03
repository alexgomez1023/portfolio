import { useLocation } from "react-router";
import ScribLink from "./ScribLink.jsx";
import ThemeButton from "./ThemeButton.jsx";
import { LinkedInIcon, GitHubIcon } from "./Icons.jsx";
import { links } from "../data/links.js";

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header className="site-header">
      <ScribLink to="/" className="brand">
        Alex Gomez
      </ScribLink>

      <nav aria-label="Main">
        <ul>
          <li>
            <ScribLink to="/#projects">Projects</ScribLink>
          </li>
          <li>
            <ScribLink to="/resume" aria-current={pathname === "/resume" ? "page" : undefined}>
              Résumé
            </ScribLink>
          </li>
        </ul>
      </nav>

      <div className="header-actions">
        <a className="icon-link" href={links.linkedin} aria-label="LinkedIn">
          <LinkedInIcon />
        </a>
        <a className="icon-link" href={links.github} aria-label="GitHub">
          <GitHubIcon />
        </a>
        <ThemeButton />
      </div>
    </header>
  );
}
