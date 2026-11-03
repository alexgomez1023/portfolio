// A taped photo or screenshot. shape is "square" or "phone" (or nothing).
export default function Snapshot({ src, alt, caption, shape, rotate = 0, tapeX = "50%", tapeR = 3 }) {
  const style = {
    "--r": `${rotate}deg`,
    "--tape-x": tapeX,
    "--tape-r": `${tapeR}deg`,
  };

  return (
    <figure className={`snapshot ${shape ?? ""}`.trim()} style={style}>
      <img src={src} alt={alt} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
