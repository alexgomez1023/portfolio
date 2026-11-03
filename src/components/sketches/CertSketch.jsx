export default function CertSketch() {
  return (
    <svg
      viewBox="0 0 420 280"
      role="img"
      aria-label="Sketch of the certification tracker: a search box with an assembly number, and a dependency graph with programs on the left, the software in the middle and its documents on the right."
    >
      <g filter="url(#rough)">
        {/* browser window */}
        <rect x="20" y="20" width="380" height="240" rx="8" />
        <path d="M20 50 H400" />
        <circle cx="38" cy="35" r="4" />
        <circle cx="52" cy="35" r="4" />
        <circle cx="66" cy="35" r="4" />
        {/* search box */}
        <rect x="40" y="66" width="200" height="30" rx="5" />
        <circle cx="224" cy="80" r="7" />
        <path d="M229 85 L235 91" />
        {/* programs, software, documents */}
        <rect x="40" y="116" width="88" height="28" rx="5" />
        <rect x="40" y="162" width="88" height="28" rx="5" />
        <rect x="40" y="208" width="88" height="28" rx="5" />
        <rect x="166" y="158" width="88" height="36" rx="6" strokeWidth="2.8" />
        <rect x="292" y="116" width="92" height="28" rx="5" />
        <rect x="292" y="162" width="92" height="28" rx="5" />
        <rect x="292" y="208" width="92" height="28" rx="5" />
        <path d="M166 170 C 150 162, 146 132, 128 130" />
        <path d="M166 176 L128 176" />
        <path d="M166 182 C 150 190, 146 220, 128 222" />
        <path d="M254 170 C 270 162, 274 132, 292 130" />
        <path d="M254 176 L292 176" />
        <path d="M254 182 C 270 190, 274 220, 292 222" />
      </g>
      <g textAnchor="middle">
        <text x="54" y="88" textAnchor="start" style={{ fontSize: 22 }}>
          ASM-1042
        </text>
        <text x="84" y="136">program</text>
        <text x="84" y="182">program</text>
        <text x="84" y="228">program</text>
        <text x="210" y="183" style={{ fontSize: 21 }}>
          software
        </text>
        <text x="338" y="136">document</text>
        <text x="338" y="182">document</text>
        <text x="338" y="228">document</text>
      </g>
    </svg>
  );
}
