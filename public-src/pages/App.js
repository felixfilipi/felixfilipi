import Home from "./Home";
import Journey from "./Journey";
import Skills from "./Skills";
import Experience from "./Experience";
import Project from "./Project";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence>
      <Router>
        <Routes>
          <Route path="/felixfilipi" element={<Home />} />
          <Route path="journey" element={<Journey />} />
          <Route path="skills" element={<Skills />} />
          <Route path="experience" element={<Experience />} />
          <Route path="project" element={<Project />} />
        </Routes>
      </Router>
    </AnimatePresence>
  );
}

export default App;
