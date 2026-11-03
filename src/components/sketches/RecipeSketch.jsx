export default function RecipeSketch() {
  return (
    <svg
      viewBox="0 0 420 280"
      role="img"
      aria-label="Sketch of how RecipeFlow works. A pasted link goes to the backend and AI parser, which produces a recipe card that is saved to the library. Below, a five-day meal plan grid has some meals picked by hand and the remaining slots filled in red by the generator."
    >
      <g filter="url(#rough)">
        {/* link -> backend -> recipe */}
        <rect x="12" y="36" width="104" height="44" rx="6" />
        <path d="M118 58 L150 58" markerEnd="url(#arrowhead)" />
        <rect x="154" y="30" width="112" height="56" rx="6" />
        <path d="M268 58 L300 58" markerEnd="url(#arrowhead)" />
        <rect x="304" y="22" width="104" height="74" rx="8" />
        <path d="M316 58 H396 M316 70 H384 M316 82 H392" />
        <path d="M356 98 C 356 118, 334 120, 322 136" markerEnd="url(#arrowhead)" />
        {/* week plan */}
        <rect x="30" y="164" width="360" height="92" rx="4" />
        <path d="M102 164 V256 M174 164 V256 M246 164 V256 M318 164 V256" />
        <path d="M30 210 H390" />
        {/* meals I picked */}
        <rect x="39" y="172" width="54" height="30" rx="4" />
        <rect x="111" y="218" width="54" height="30" rx="4" />
        <rect x="255" y="172" width="54" height="30" rx="4" />
        {/* meals the app filled in */}
        <rect className="mark" x="39" y="218" width="54" height="30" rx="4" />
        <rect className="mark" x="183" y="172" width="54" height="30" rx="4" />
        <rect className="mark" x="327" y="218" width="54" height="30" rx="4" />
      </g>
      <g textAnchor="middle">
        <text x="64" y="64">paste a link</text>
        <text x="210" y="54">backend +</text>
        <text x="210" y="74">AI parser</text>
        <text x="356" y="46">recipe</text>
        <text x="226" y="124">saved to my library</text>
        <text x="66" y="158">mon</text>
        <text x="138" y="158">tue</text>
        <text x="210" y="158">wed</text>
        <text x="282" y="158">thu</text>
        <text x="354" y="158">fri</text>
        <text className="mark" x="210" y="275">generate fills the gaps</text>
      </g>
    </svg>
  );
}
