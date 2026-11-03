// Small sketches for the "What did I build?" rows on the cert tracker page.

export function DependencyGraphSketch() {
  return (
    <svg viewBox="0 0 200 130" role="img" aria-label="Sketch of one piece of software in the middle, linked to two programs on the left and two documents on the right.">
      <g filter="url(#rough)">
        <rect x="66" y="50" width="68" height="30" rx="5" strokeWidth="2.8" />
        <rect x="8" y="20" width="40" height="22" rx="4" />
        <rect x="8" y="88" width="40" height="22" rx="4" />
        <rect x="152" y="20" width="40" height="22" rx="4" />
        <rect x="152" y="88" width="40" height="22" rx="4" />
        <path d="M66 60 C 58 55, 58 31, 48 31" />
        <path d="M66 70 C 58 75, 58 99, 48 99" />
        <path d="M134 60 C 142 55, 142 31, 152 31" />
        <path d="M134 70 C 142 75, 142 99, 152 99" />
      </g>
      <text x="100" y="71" textAnchor="middle" style={{ fontSize: 16 }}>
        software
      </text>
    </svg>
  );
}

export function DocumentSyncSketch() {
  return (
    <svg viewBox="0 0 200 130" role="img" aria-label="Sketch of documents flowing from Teamcenter into the tracker on a timer.">
      <g filter="url(#rough)">
        <rect x="6" y="48" width="78" height="44" rx="5" />
        <rect x="128" y="48" width="66" height="44" rx="5" />
        <path d="M88 62 H124" markerEnd="url(#arrowhead)" />
        <path d="M88 78 H124" markerEnd="url(#arrowhead)" />
        {/* clock: it runs on its own */}
        <circle cx="106" cy="24" r="12" />
        <path d="M106 24 V16 M106 24 H113" />
      </g>
      <g textAnchor="middle" style={{ fontSize: 15 }}>
        <text x="45" y="75">Teamcenter</text>
        <text x="161" y="75">tracker</text>
      </g>
    </svg>
  );
}

export function AiParsingSketch() {
  return (
    <svg viewBox="0 0 200 130" role="img" aria-label="Sketch of a document going through an AI parser, with results appearing line by line on the page.">
      <g filter="url(#rough)">
        {/* uploaded document */}
        <path d="M14 20 H54 L68 34 V100 H14 Z" />
        <path d="M54 20 V34 H68" />
        <path d="M24 48 H58 M24 60 H58 M24 72 H50 M24 84 H56" />
        <path d="M76 60 H110" markerEnd="url(#arrowhead)" />
        {/* results streaming in */}
        <rect x="116" y="20" width="76" height="80" rx="5" />
        <path d="M126 38 H180 M126 52 H172 M126 66 H162" />
        <path className="dashed" d="M126 80 H146" />
      </g>
      <text x="93" y="50" textAnchor="middle" style={{ fontSize: 15 }}>
        AI
      </text>
    </svg>
  );
}
