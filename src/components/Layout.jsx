import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { SvgDefs } from "./Icons.jsx";
import { Analytics } from "@vercel/analytics/react";

export default function Layout() {
  const { pathname, hash } = useLocation();

  // React Router doesn't scroll for you. Jump to #section links,
  // otherwise start each new page at the top.
  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1));
    if (target) {
      target.scrollIntoView();
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash]);

  return (
    <>
      {/* the paper texture, wobble filters and arrowhead every page uses */}
      <SvgDefs />
      <Header />
      <Outlet />
      <Footer />
      <Analytics />
    </>
  );
}
