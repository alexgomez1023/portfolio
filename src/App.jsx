import { Routes, Route } from "react-router";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Resume from "./pages/Resume.jsx";
import CertTracker from "./pages/CertTracker.jsx";
import ReprogrammingTool from "./pages/ReprogrammingTool.jsx";
import Skim from "./pages/Skim.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="resume" element={<Resume />} />
        <Route path="projects/cert-tracker" element={<CertTracker />} />
        <Route path="projects/reprogramming-tool" element={<ReprogrammingTool />} />
        <Route path="projects/skim" element={<Skim />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
