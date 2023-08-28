import { motion } from "framer-motion";
import GaugeChart from "react-gauge-chart";
import html_img from "../assets/html.png";
import css_img from "../assets/css.png";
import linux_img from "../assets/linux.png";

export default function Framework() {
  const pageVariant = {
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: "-100vw" },
    scale: 1,
  };

  const pageTransition = {
    type: "tween",
    duration: 1,
  };

  let images = [
    linux_img,
    html_img,
    css_img
  ]
  let skillNames = ["Linux", "HTML", "CSS"]
  let gaugePercentages = [0.96, 0.92, 0.91]
  let skillDescriptions = [
    "This is the open-sourced Unix-like operating system that is generally used as a software server, web server, database server, and any other type of shared server. Linux systems are rarely infected by malware, which means this OS is very secure. This OS is lightweight and works best for any programming activity.",
    "This is the standard markup language for documents, designed to be displayed in a web browser. This markup language is frequently assisted by CSS and JavaScript to create the Frontend of a web application.",
    "This is a style sheet language that is generally used to describe the presentation of a web page, including color, layout, and fonts. CSS is an independent stylesheet which means that it's independent of HTML and can be used with any XML-based markup language.",
  ]
  let description = ["linux", "html", "css"]
  let gaugeColors = [["#2f4bd6", "#b5371b"], ["#edccc5", "#f24822"], ["#afbcdb", "#1e52c9"]]

  let body = [];
  for (let i = 0; i < images.length; i++) {
    body.push(<Row 
      image={images[i]}
      desc={description[i]}
      skillName={skillNames[i]}
      skillDesc={skillDescriptions[i]}
      confidence={gaugePercentages[i]}
      gaugeColor={gaugeColors[i]}/>);
  }

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariant}
      transition={pageTransition}
      className="Skill-layout"
    >
      {body}
    </motion.div>
  );
}

export default Framework;
