import ScribLink from "./ScribLink.jsx";
import { links } from "../data/links.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <p className="footer-name">Alex Gomez</p>
        <p className="footer-note">Raleigh, North Carolina</p>
      </div>

      <ul className="footer-links">
        <li>
          <ScribLink href={links.email}>Email</ScribLink>
        </li>
        <li>
          <ScribLink to="/resume">Résumé</ScribLink>
        </li>
        <li>
          <ScribLink href={links.linkedin}>LinkedIn</ScribLink>
        </li>
        <li>
          <ScribLink href={links.github}>GitHub</ScribLink>
        </li>
      </ul>
    </footer>
  );
}
