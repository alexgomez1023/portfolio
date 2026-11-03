export default function RecipeSketch() {
  return (
    <svg
      viewBox="0 0 420 280"
      role="img"
      aria-label="Sketch of how Skim works. A video, a reel and a website each have an arrow pointing into one phone that holds a library of saved recipes, with the newest one circled in red."
    >
      <g filter="url(#rough)">
        {/* video */}
        <rect x="16" y="20" width="104" height="60" rx="6" />
        <path d="M58 36 L58 64 L82 50 Z" />
        {/* reel */}
        <rect x="44" y="104" width="54" height="68" rx="7" />
        <path d="M71 152 C 58 142, 60 128, 71 135 C 82 128, 84 142, 71 152 Z" />
        {/* website */}
        <rect x="16" y="196" width="112" height="62" rx="5" />
        <path d="M16 212 H128 M28 226 H112 M28 238 H100 M28 248 H108" />
        {/* everything goes into the phone */}
        <path d="M124 48 C 190 48, 230 72, 278 86" markerEnd="url(#arrowhead)" />
        <path d="M102 138 C 170 138, 220 140, 278 140" markerEnd="url(#arrowhead)" />
        <path d="M132 226 C 190 226, 232 204, 278 194" markerEnd="url(#arrowhead)" />
        {/* phone with the recipe library */}
        <rect x="284" y="14" width="116" height="252" rx="16" strokeWidth="2.6" />
        <path d="M326 26 H358 M326 254 H358" />
        <rect x="296" y="40" width="92" height="40" rx="5" />
        <rect x="302" y="46" width="28" height="28" rx="3" />
        <path d="M336 55 H380 M336 67 H366" />
        <rect x="296" y="88" width="92" height="40" rx="5" />
        <rect x="302" y="94" width="28" height="28" rx="3" />
        <path d="M336 103 H380 M336 115 H366" />
        {/* the one just saved */}
        <rect className="mark" x="296" y="136" width="92" height="40" rx="5" strokeWidth="2.6" />
        <rect x="302" y="142" width="28" height="28" rx="3" />
        <path d="M336 151 H380 M336 163 H366" />
        <rect x="296" y="184" width="92" height="40" rx="5" />
        <rect x="302" y="190" width="28" height="28" rx="3" />
        <path d="M336 199 H380 M336 211 H366" />
      </g>
      <g textAnchor="middle">
        <text x="196" y="50">video</text>
        <text x="186" y="130">reel</text>
        <text x="200" y="232">website</text>
        <text className="mark" x="342" y="246" style={{ fontSize: 17 }}>
          new
        </text>
      </g>
    </svg>
  );
}
