import Home from "./Home";
import Journey from "./Journey";
import Skills from "./Skills";
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
        </Routes>
      </Router>
    </AnimatePresence>
  );
}

export default App;
