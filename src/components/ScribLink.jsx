import { Link } from "react-router";

// A link with my hand-drawn underline that draws itself on hover.
// Pass `to` for pages on this site, `href` for everything else.
export default function ScribLink({ to, href, className = "", children, ...rest }) {
  const classes = `scrib-link ${className}`.trim();
  const scrib = (
    <svg className="scrib" viewBox="0 0 100 8" preserveAspectRatio="none" aria-hidden="true">
      <path d="M1 4.5 C 15 6.5, 30 2, 50 4.8 S 80 6.5, 99 3.5" pathLength="100" />
    </svg>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
        {scrib}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...rest}>
      {children}
      {scrib}
    </a>
  );
}
