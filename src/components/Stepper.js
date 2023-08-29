import { useState } from "react";
import { Link } from "react-router-dom";

function Stepper(props) {
  const [active, setActive] = useState(props.pages);
  return (
    <div className="Stepper-container">
      <div className="Stepper-layout">
        <div className="Stepper-layout-flex">
          <div className="Stepper-first-container">
            <Link to={"/journey"}>
              <button
                onClick={() => setActive(1)}
                className={
                  active === 1 ? "Stepper-active-item" : "Stepper-first-item"
                }
              >
                1
              </button>
            </Link>
            <div className="Stepper-first-text">About</div>
          </div>
          <div className="Stepper-first-line" />
          <div className="Stepper-layout-flex-relative">
            <Link to={"/skills"}>
              <button
                onClick={() => setActive(2)}
                className={
                  active === 2 ? "Stepper-active-item" : "Stepper-second-item"
                }
              >
                2
              </button>
            </Link>
            <div className="Stepper-second-text">Skills</div>
          </div>
          <div className="Stepper-second-line" />
          <div className="Stepper-layout-flex-relative">
            <Link to={"/experience"}>
              <button
                className={
                  active === 3 ? "Stepper-active-item" : "Stepper-third-item"
                }
                onClick={() => setActive(3)}
              >
                3
              </button>
            </Link>
            <div className="Stepper-third-text">Experience</div>
          </div>
          <div className="Stepper-third-line" />
          <div className="Stepper-layout-flex-relative">
            <Link to={"/project"}>
              <button
                className={
                  active === 4 ? "Stepper-active-item" : "Stepper-fourth-item"
                }
                onClick={() => setActive(4)}
              >
                4
              </button>
            </Link>
            <div className="Stepper-fourth-text">Project</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stepper;
