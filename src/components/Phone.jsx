import Sketch from "./Sketch.jsx";

// A phone screenshot on peach paper.
// Spread a screenshot from data/screenshots.js onto it so the browser gets
// src + srcSet and picks the right size for the screen.
// Without src it shows a striped placeholder.
//
// <Phone {...screenshots.recipeImport} alt="..." caption="recipe import" rotate={-3} />
export default function Phone({ src, srcSet, alt = "", caption, rotate = 0, tapeX = "50%", tapeR = 3 }) {
  return (
    <Sketch paper="peach" className="phone" caption={caption} rotate={rotate} tapeX={tapeX} tapeR={tapeR}>
      {src ? (
        <img
          src={src}
          srcSet={srcSet}
          // 190px phones on desktop, ~30% of the viewport under 800px
          sizes="(max-width: 800px) 30vw, 190px"
          alt={alt}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="phone-placeholder">screenshot</div>
      )}
    </Sketch>
  );
}
