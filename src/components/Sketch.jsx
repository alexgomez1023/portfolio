// A taped piece of paper in the project's color. Every project image goes
// on one of these (sketches, diagrams, screenshots).
//
// <Sketch paper="peach" caption="..." rotate={1} tapeX="68%" tapeR={-3}>
//   <RecipeSketch />
// </Sketch>
//
// small -> less padding, for the little feature sketches
export default function Sketch({ paper, caption, rotate = 0, tapeX = "50%", tapeR = 0, small = false, className = "", children }) {
  const style = {
    "--r": `${rotate}deg`,
    "--paper": `var(--paper-${paper})`,
    "--tape-x": tapeX,
    "--tape-r": `${tapeR}deg`,
  };
  const classes = ["sketch", small && "small", className].filter(Boolean).join(" ");

  return (
    <figure className={classes} style={style}>
      {children}
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

// Light graph paper to draw architecture diagrams on. Goes inside a <Sketch>.
export function GraphPaper({ children }) {
  return <div className="graph-paper">{children}</div>;
}
