import { motion } from "framer-motion";
import GaugeChart from "react-gauge-chart";
import html_img from "../assets/html.png";
import css_img from "../assets/css.png";
import linux_img from "../assets/linux.png";

function Framework() {
  const gaugeStyle = {
    width: "300px",
  };

  const pageVariant = {
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: "-100vw" },
    scale: 1,
  };

  const pageTransition = {
    type: "tween",
    duration: 1,
  };

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariant}
      transition={pageTransition}
      className="Skill-layout"
    >
      {/* Linux section */}
      <div className="Skill-content-container">
        <img
          src={linux_img}
          width="200"
          className="Skill-content-image"
          alt="Linux"
        />
      </div>
      <div className="Skill-content-layout">
        <h1 className="Typewritter2">Linux</h1>
        <p className="Skill-content-description">
          This is the open-sourced Unix-like operating system that is generally
          used as a software server, web server, database server, and any other
          type of shared server. Linux systems are rarely infected by malware,
          which means this OS is very secure. This OS is lightweight and works
          best for any programming activity.
        </p>
      </div>
      <div className="Skill-content-layout">
        <h1 className="Skill-content-gauge-text">Confidence</h1>
        <GaugeChart
          id="linux-gauge"
          animate={false}
          needleColor="#464A4F"
          needleBaseColor="white"
          nrOfLevels={40}
          percent={0.96}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#2f4bd6", "#b5371b"]}
          className="Skill-gauge"
        />
      </div>

      {/* HTML section */}
      <div className="Skill-content-container">
        <img
          src={html_img}
          width="200"
          className="Skill-content-image"
          alt="HTML"
        />
      </div>
      <div className="Skill-content-layout">
        <h1 className="Typewritter2">HTML</h1>
        <p className="Skill-content-description">
          This is the standard markup language for documents, designed to be
          displayed in a web browser. This markup language is frequently
          assisted by CSS and JavaScript to create the Frontend of a web
          application.
        </p>
      </div>

      <div className="Skill-content-layout">
        <h1 className="Skill-content-gauge-text">Confidence</h1>
        <GaugeChart
          id="html-gauge"
          animate={false}
          needleColor="#464A4F"
          needleBaseColor="white"
          nrOfLevels={40}
          percent={0.92}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#edccc5", "#f24822"]}
          className="Skill-gauge"
        />
      </div>

      {/* CSS section */}
      <div className="Skill-content-container">
        <img
          src={css_img}
          width="200"
          className="Skill-content-image"
          alt="CSS"
        />
      </div>
      <div className="Skill-content-layout">
        <h1 className="Typewritter2">CSS</h1>
        <p className="Skill-content-description">
          This is a style sheet language that is generally used to describe the
          presentation of a web page, including color, layout, and fonts. CSS is
          an independent stylesheet which means that it's independent of HTML
          and can be used with any XML-based markup language.
        </p>
      </div>

      <div className="Skill-content-layout">
        <h1 className="Skill-content-gauge-text">Confidence</h1>
        <GaugeChart
          id="css-gauge"
          animate={false}
          needleColor="#464A4F"
          needleBaseColor="white"
          nrOfLevels={40}
          percent={0.91}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#afbcdb", "#1e52c9"]}
          className="Skill-gauge"
        />
      </div>
    </motion.div>
  );
}

export default Framework;
