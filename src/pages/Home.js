import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Landing from "../components/Landing";
import { motion } from "framer-motion";

function Home() {
  const pageVariant = {
    in: { opacity: 1 },
    out: { opacity: 0 },
  };

  const pageTransition = {
    duration: 1,
  };

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariant}
      transition={pageTransition}
    >
      <div className="Home">
        <Sidebar />
        <Landing />
        <Outlet />
      </div>
    </motion.div>
  );
}

export default Home;
