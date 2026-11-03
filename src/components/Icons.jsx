// My inline SVGs. They're components instead of <img> so they pick up the
// theme color and can use the filters in <SvgDefs />.

// Render once per page (Layout does this). Everything else points at these ids.
export function SvgDefs() {
  return (
    <svg className="svg-defs" aria-hidden="true">
      <defs>
        {/* paper texture */}
        <filter id="paper" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" seed="2" result="noise" />
          <feDiffuseLighting in="noise" lightingColor="#fff" surfaceScale="2">
            <feDistantLight azimuth="45" elevation="60" />
          </feDiffuseLighting>
        </filter>
        {/* small wobble for the icons */}
        <filter id="rough-icon" x="-15%" y="-15%" width="130%" height="130%">
          <feTurbulence type="fractalNoise" baseFrequency="0.16" numOctaves="2" seed="7" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.3" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        {/* bigger wobble for the sketches */}
        <filter id="rough" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="4" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <marker id="arrowhead" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path
            d="M1 1 L9 5 L1 9"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </marker>
      </defs>
    </svg>
  );
}

// shared props for the stroked header icons
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

export function LinkedInIcon() {
  return (
    <svg width="30" height="30" viewBox="80 80 240 240" strokeWidth="16" {...stroke}>
      <path d="M101.233 269.812C101.064 249.243 90.8019 121.708 99.4819 107.424C103.453 100.888 283.598 87.8692 295.568 107.023C307.538 126.176 307.538 291.259 290.547 297.938C265.229 307.89 153.005 300.548 118.644 297.938" />
      <path d="M152 251C154.25 227.679 152 204.362 152 181" />
      <path d="M151 152C151 149.71 152 150.902 152 149" />
      <path d="M192 181C190.478 203.876 191.146 227.015 191.146 250" />
      <path d="M192 200.435C192 190.538 204.438 182.539 211.503 180.778C256.825 169.483 254.094 192.707 252.092 249" />
    </svg>
  );
}

export function GitHubIcon() {
  return (
    <svg width="27" height="27" viewBox="0 0 24 24" strokeWidth="1.9" {...stroke}>
      <g filter="url(#rough-icon)">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </g>
    </svg>
  );
}

export function MoonIcon() {
  return (
    <svg className="icon-moon" width="26" height="26" viewBox="0 0 24 24" strokeWidth="1.9" {...stroke}>
      <g filter="url(#rough-icon)">
        <path d="M19.6 14.9C17.9 18.6 13.7 20.6 9.7 19.4 5.2 18 2.8 13.3 4.2 8.9 5.1 6.2 7.3 4.3 9.9 3.7 8.8 7.2 9.8 11 12.7 13.2 14.9 14.9 17.7 15.3 20.3 14.4" />
      </g>
    </svg>
  );
}

export function SunIcon() {
  return (
    <svg className="icon-sun" width="26" height="26" viewBox="0 0 24 24" strokeWidth="1.9" {...stroke}>
      <g filter="url(#rough-icon)">
        <path d="M12.2 8C14.5 8 16.1 9.8 16 12.1 15.9 14.3 14.2 16 12 16 9.7 16 8 14.2 8.1 11.9 8.2 9.9 9.6 8.3 11.6 8.1" />
        <path d="M12 2.3v2.4M12.3 19.5v2.3M4.7 5l1.7 1.5M17.6 17.6l1.8 1.5M2.2 12.2h2.4M19.5 11.8h2.3M4.9 19.2l1.5-1.7M17.5 6.4l1.7-1.6" />
      </g>
    </svg>
  );
}
