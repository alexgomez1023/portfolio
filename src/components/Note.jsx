import { Link } from "react-router";

// A taped sticky note on the board.
// index staggers the "placed on the board" animation.
export default function Note({ to, title, meta, index = 0, rotate = 0, paper, tapeX = "20%", tapeR = 3 }) {
  const style = {
    "--i": index,
    "--r": `${rotate}deg`,
    "--paper": `var(--paper-${paper})`,
    "--tape-x": tapeX,
    "--tape-r": `${tapeR}deg`,
  };

  return (
    <Link className="note" to={to} style={style}>
      <span className="note-title">{title}</span>
      <span className="note-meta">{meta}</span>
    </Link>
  );
}
