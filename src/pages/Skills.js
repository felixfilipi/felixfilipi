import { motion } from "framer-motion";
import { useState } from "react";
import Stepper from "../components/Stepper";
import Knowledge from "../data/Knowledge";
import PageTemplate from "../components/PageTemplate";
import Framework from "../data/Framework";
import Library from "../data/Library";
import Databases from "../data/Databases";
import Tools from "../data/Tools";
import Others from "../data/Others";
import Language from "../data/Language";

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
  let data;

  if (active === 1) {
    data = Language;
    content = 
      <PageTemplate 
      images={data.images}
      width={data.width}
      skillNames={data.skillNames} 
      gaugePercentages={data.gaugePercentages} 
      skillDescriptions={data.skillDescriptions} 
      description={data.description} 
      gaugeColors={data.gaugeColors} 
    />;
  }else if (active === 2) {
    data = Framework;
    content = 
      <PageTemplate 
      images={data.images} 
      width={data.width}
      skillNames={data.skillNames} 
      gaugePercentages={data.gaugePercentages} 
      skillDescriptions={data.skillDescriptions} 
      description={data.description} 
      gaugeColors={data.gaugeColors} 
    />;
  } else if (active === 3) {
    data = Library;
    content = 
      <PageTemplate 
      images={data.images} 
      width={data.width}
      skillNames={data.skillNames} 
      gaugePercentages={data.gaugePercentages} 
      skillDescriptions={data.skillDescriptions} 
      description={data.description} 
      gaugeColors={data.gaugeColors} 
    />;
  } else if (active === 4) {
    data = Knowledge;
    content = 
      <PageTemplate 
      images={data.images} 
      width={data.width}
      skillNames={data.skillNames} 
      gaugePercentages={data.gaugePercentages} 
      skillDescriptions={data.skillDescriptions} 
      description={data.description} 
      gaugeColors={data.gaugeColors} 
    />;
  } else if (active === 5) {
    data = Databases;
    content = 
      <PageTemplate 
      images={data.images} 
      width={data.width}
      skillNames={data.skillNames} 
      gaugePercentages={data.gaugePercentages} 
      skillDescriptions={data.skillDescriptions} 
      description={data.description} 
      gaugeColors={data.gaugeColors} 
    />;
  } else if (active === 6) {
    data = Tools;
    content = 
      <PageTemplate 
      images={data.images} 
      width={data.width}
      skillNames={data.skillNames} 
      gaugePercentages={data.gaugePercentages} 
      skillDescriptions={data.skillDescriptions} 
      description={data.description} 
      gaugeColors={data.gaugeColors} 
    />;
  } else if (active === 7) {
    data = Others;
    content = 
      <PageTemplate 
      images={data.images} 
      width={data.width}
      skillNames={data.skillNames} 
      gaugePercentages={data.gaugePercentages} 
      skillDescriptions={data.skillDescriptions} 
      description={data.description} 
      gaugeColors={data.gaugeColors} 
    />;
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
