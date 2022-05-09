import { motion } from "framer-motion";
import { useState } from "react";
import Stepper from "./Stepper";
import Language from "./Language";
import Framework from "./Framework";
import Library from "./Library";
import Knowledge from "./Knowledge";
import Databases from "./Databases";
import Tools from "./Tools";
import Others from "./Others";

function Skills() {
  const pageVariant = {
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: "-100vw" },
    scale: 1,
  };

  const pageTransition = {
    type: "spring",
    duration: 2,
  };

  const [active, setActive] = useState(1);
  const [view, setView] = useState("hidden");

  let content;

  if (active === 1) {
    content = <Language />;
  } else if (active === 2) {
    content = <Framework />;
  } else if (active === 3) {
    content = <Library />;
  } else if (active === 4) {
    content = <Knowledge />;
  } else if (active === 5) {
    content = <Databases />;
  } else if (active === 6) {
    content = <Tools />;
  } else if (active === 7) {
    content = <Others />;
  }

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariant}
      transition={pageTransition}
    >
      <div className="Skill">
        <div className="Skill-page-layout">
          <div
            class="Hamburger"
            onClick={() =>
              view === "hidden" ? setView("block") : setView("hidden")
            }
          >
            <div class="Hamburger-child"></div>
            <div class="Hamburger-child"></div>
            <div class="Hamburger-child"></div>
          </div>
          <div
            className={`w-60 h-fit shadow-md bg-yellow-500 px-1 absolute z-30 ${view} sm:hidden`}
            onClick={() => setView("hidden")}
          >
            <ul class="relative">
              <li class="relative">
                <button
                  class="Navbar-content"
                  onClick={() => setActive(1)}
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="dark"
                >
                  Language
                </button>
              </li>
              <li class="relative">
                <button
                  class="Navbar-content"
                  onClick={() => {
                    setActive(2);
                    setView("hidden");
                  }}
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="dark"
                >
                  Framework
                </button>
              </li>
              <li class="relative">
                <button
                  class="Navbar-content"
                  onClick={() => setActive(3)}
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="dark"
                >
                  Library
                </button>
              </li>
              <li class="relative">
                <button
                  class="Navbar-content"
                  onClick={() => setActive(4)}
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="dark"
                >
                  Knowledge
                </button>
              </li>
              <li class="relative">
                <button
                  class="Navbar-content"
                  onClick={() => setActive(5)}
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="dark"
                >
                  Databases
                </button>
              </li>
              <li class="relative">
                <button
                  class="Navbar-content"
                  onClick={() => setActive(6)}
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="dark"
                >
                  Tools
                </button>
              </li>
              <li class="relative">
                <button
                  class="Navbar-content"
                  onClick={() => setActive(7)}
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="dark"
                >
                  Others
                </button>
              </li>
            </ul>
          </div>

          <button
            className={
              active === 1 ? "Skill-page-active" : "Skill-page-inactive"
            }
            onClick={() => setActive(1)}
          >
            Language
          </button>
          <button
            className={
              active === 2 ? "Skill-page-active" : "Skill-page-inactive"
            }
            onClick={() => setActive(2)}
          >
            Framework
          </button>

          <button
            className={
              active === 3 ? "Skill-page-active" : "Skill-page-inactive"
            }
            onClick={() => setActive(3)}
          >
            Library
          </button>

          <button
            className={
              active === 4 ? "Skill-page-active" : "Skill-page-inactive"
            }
            onClick={() => setActive(4)}
          >
            Knowledge
          </button>
          <button
            className={
              active === 5 ? "Skill-page-active" : "Skill-page-inactive"
            }
            onClick={() => setActive(5)}
          >
            Databases
          </button>
          <button
            className={
              active === 6 ? "Skill-page-active" : "Skill-page-inactive"
            }
            onClick={() => setActive(6)}
          >
            Tools
          </button>
          <button
            className={
              active === 7 ? "Skill-page-active" : "Skill-page-inactive"
            }
            onClick={() => setActive(7)}
          >
            Others
          </button>
        </div>

        {content}
      </div>
      <Stepper pages={2} />
    </motion.div>
  );
}

export default Skills;
