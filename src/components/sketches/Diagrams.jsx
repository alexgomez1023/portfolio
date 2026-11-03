// Architecture diagrams for "How does it work?". Each one goes inside
// <GraphPaper> so it reads like a drawing on graph paper.

export function CertDiagram() {
  return (
    <svg
      viewBox="0 0 420 220"
      role="img"
      aria-label="Architecture: the React app talks to a FastAPI backend, which streams results back and stores data in MySQL. A LangChain parser feeds its results into FastAPI. Teamcenter documents go through a C# SOA script, which syncs them with FastAPI."
    >
      <g filter="url(#rough)">
        {/* top row: React <-> FastAPI -> MySQL */}
        <rect x="20" y="30" width="100" height="44" rx="6" />
        <rect x="160" y="30" width="100" height="44" rx="6" />
        <rect x="300" y="30" width="100" height="44" rx="6" />
        <path d="M122 44 H156" markerEnd="url(#arrowhead)" />
        <path className="dashed" d="M158 60 H124" markerEnd="url(#arrowhead)" />
        <path d="M262 52 H296" markerEnd="url(#arrowhead)" />
        {/* bottom row: LangChain -> FastAPI, and Teamcenter -> C# SOA script -> FastAPI */}
        <rect x="20" y="152" width="110" height="44" rx="6" />
        <rect x="160" y="146" width="100" height="56" rx="6" />
        <rect x="300" y="152" width="100" height="44" rx="6" />
        <path d="M80 150 C 100 116, 160 112, 184 78" markerEnd="url(#arrowhead)" />
        <path d="M210 144 V78" markerEnd="url(#arrowhead)" />
        <path d="M298 174 H264" markerEnd="url(#arrowhead)" />
      </g>
      <g textAnchor="middle">
        <text x="70" y="58">React</text>
        <text x="210" y="58">FastAPI</text>
        <text x="350" y="58">MySQL</text>
        <text x="75" y="180">LangChain</text>
        <text x="210" y="170">C# SOA</text>
        <text x="210" y="192">script</text>
        <text x="350" y="180">Teamcenter</text>
        <text x="140" y="20" style={{ fontSize: 15 }}>
          streams back
        </text>
        <text x="218" y="116" textAnchor="start" style={{ fontSize: 15 }}>
          sync
        </text>
      </g>
    </svg>
  );
}

export function FlashDiagram() {
  return (
    <svg
      viewBox="0 0 420 250"
      role="img"
      aria-label="Architecture: the C# desktop tool sends firmware over the CAN bus to several embedded modules."
    >
      <g filter="url(#rough)">
        <rect x="20" y="20" width="120" height="56" rx="6" />
        <path d="M80 78 V134" markerEnd="url(#arrowhead)" />
        {/* CAN bus */}
        <path d="M20 140 H400 M20 152 H400" />
        <path d="M205 152 V188 M295 152 V188 M375 152 V188" />
        <rect x="170" y="190" width="70" height="40" rx="4" />
        <rect x="260" y="190" width="70" height="40" rx="4" />
        <rect x="340" y="190" width="70" height="40" rx="4" />
      </g>
      <g textAnchor="middle">
        <text x="80" y="54">C# tool</text>
        <text x="90" y="112" textAnchor="start" style={{ fontSize: 15 }}>
          firmware
        </text>
        <text x="320" y="130">CAN bus</text>
        <text x="205" y="216">A</text>
        <text x="295" y="216">B</text>
        <text x="375" y="216">C</text>
        <text x="156" y="216" textAnchor="end">
          modules
        </text>
      </g>
    </svg>
  );
}

export function RecipeDiagram() {
  return (
    <svg
      viewBox="0 0 420 230"
      role="img"
      aria-label="Architecture: a pasted link goes to the FastAPI backend and AI parser, which saves the recipe to the MySQL database. The meal plan pulls recipes from the database, and the meal plan builds the shopping list."
    >
      <g filter="url(#rough)">
        {/* top row: link -> FastAPI + AI parser -> MySQL DB */}
        <rect x="12" y="30" width="84" height="44" rx="6" />
        <rect x="136" y="24" width="140" height="56" rx="6" />
        <rect x="316" y="24" width="92" height="56" rx="6" />
        <path d="M98 52 H132" markerEnd="url(#arrowhead)" />
        <path d="M278 52 H312" markerEnd="url(#arrowhead)" />
        {/* bottom row: MySQL DB -> meal plan -> shopping list */}
        <rect x="96" y="150" width="110" height="56" rx="6" />
        <rect x="260" y="150" width="140" height="56" rx="6" />
        <path d="M350 82 C 330 120, 200 108, 158 146" markerEnd="url(#arrowhead)" />
        <path d="M208 178 H256" markerEnd="url(#arrowhead)" />
      </g>
      <g textAnchor="middle">
        <text x="54" y="58">link</text>
        <text x="206" y="48">FastAPI +</text>
        <text x="206" y="70">AI parser</text>
        <text x="362" y="48">MySQL</text>
        <text x="362" y="70">DB</text>
        <text x="151" y="184">meal plan</text>
        <text x="330" y="184">shopping list</text>
      </g>
    </svg>
  );
}
