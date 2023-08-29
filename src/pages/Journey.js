import Stepper from "../components/Stepper";
import profile from "../assets/felixfilipi.png";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Journey() {
  const pageVariant = {
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: "-100vw" },
    scale: 1,
  };

  const pageTransition = {
    type: "spring",
    duration: 2,
  };
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariant}
      transition={pageTransition}
    >
      <div className="Journey">
        <div className="Journey-about">About Me</div>
        <div className="Journey-yellow-layout">
          <div className="Journey-dark-layout">
            <div className="Journey-container">
              <img
                src={profile}
                alt="profile"
                width="350"
                className="Journey-image"
              />
            </div>

            <div className="Journey-text-layout">
              <h1 className="Journey-text-name">I'M FELIX FILIPI.</h1>
              <Typewriter
                options={{
                  strings: [
                    "<span class='Typewritter2'>Machine Learning Developer</span>",
                    "<span class='Typewritter2'>Data Scientist</span>",
                    "<span class='Typewritter2'>Embedded System Engineer</span>",
                    "<span class='Typewritter2'>Software Developer</span>",
                  ],
                  autoStart: true,
                  loop: true,
                  cursorClassName: "text-white",
                  pauseFor: 3000,
                }}
              />
              <p className="Journey-text-description">
                I'm a software engineer based in Indonesia, specializing in
                artificial intelligence (AI), focused on creating new things
                that benefit humanity. I am passionate about building new
                software that improves the lives of those around me. I love
                technology and renewable energy. I am devoted to developing
                technologies that help humans open thousand of new
                possibilities.
              </p>

              <Link to={"/felixfilipi"}>
                <button className="Journey-button">Back to Overview</button>
              </Link>
            </div>
          </div>
        </div>
        <Stepper pages={1} />
      </div>
    </motion.div>
  );
}

export default Journey;
