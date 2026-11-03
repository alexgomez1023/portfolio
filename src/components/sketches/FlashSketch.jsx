// module names and the file name are placeholders
export default function FlashSketch() {
  return (
    <svg
      viewBox="0 0 420 280"
      role="img"
      aria-label="Sketch of the reprogramming tool: a desktop window with a list of modules, a firmware file, a progress bar at 60 percent and a flash button."
    >
      <g filter="url(#rough)">
        {/* window */}
        <rect x="20" y="20" width="380" height="240" rx="6" />
        <path d="M20 48 H400" />
        {/* module list */}
        <rect x="36" y="64" width="130" height="180" />
        <path d="M36 96 H166 M36 128 H166 M36 160 H166" />
        <rect className="mark" x="40" y="100" width="122" height="24" rx="3" />
        {/* firmware file, progress, flash button */}
        <rect x="190" y="98" width="192" height="28" rx="4" />
        <rect x="190" y="160" width="192" height="20" rx="5" />
        <path className="mark" d="M198 170 H306" strokeWidth="10" />
        <rect x="300" y="212" width="82" height="30" rx="6" />
      </g>
      <g textAnchor="middle">
        <text x="34" y="41" textAnchor="start" style={{ fontSize: 19 }}>
          reprogramming tool
        </text>
        <text x="50" y="87" textAnchor="start">
          module A
        </text>
        <text className="mark" x="50" y="119" textAnchor="start">
          module B
        </text>
        <text x="50" y="151" textAnchor="start">
          module C
        </text>
        <text x="190" y="90" textAnchor="start">
          new firmware
        </text>
        <text x="200" y="119" textAnchor="start">
          update.hex
        </text>
        <text x="286" y="204">60%</text>
        <text x="341" y="233">flash</text>
      </g>
    </svg>
  );
}
