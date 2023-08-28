import { motion } from "framer-motion";
import GaugeChart from "react-gauge-chart";
import tailwind_img from "../assets/tailwind.png";
import django_img from "../assets/django.png";
import net_img from "../assets/net.png";
import react_img from "../assets/react.png";
import echo_img from "../assets/echo.png";
import express_img from "../assets/express.png";

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
    tailwind_img,
    react_img,
    express_img,
    echo_img,
    django_img
  ]
  let skillNames = ["Tailwind CSS", "React", "Express", "Echo", ".NET", "Django"]
  let gaugePercentages = [0.95, 0.93, 0.90, 0.89, 0.87, 0.84]
  let skillDescriptions = [
    "This is the web-based CSS framework that I am most familiar with. Generally, I use this language to create a beautiful, rapid frontend page. This framework is great because this framework let us to leave native CSS development,and give better experience in frontend development.",
    "This is the cross-platform javascript framework that I generally use for frontend development (React JS) and either mobile application (React Native). This framework supports a single-page application program for web-based application, and cross-platform on android and ios for React Native itself.",
    "This is the web-based javascript framework that I generally use for backend development. This framework incredibly great for backend due to its ability to design and build web application quickly, flexible, and easily.",
    "This is the 'High performance, extensible, minimalist Go web framework' that I generally use for microservice based architecture development. This framework supports ton of features, including web socket, authentication, automatic TLS, and many more.",
    "This is the cross-platform framework that I generally use for enterprise software development. This framework is great because it backed by Microsoft and has a stable and older community which is great for projects that need to focus on stability and support.",
    "This is the web-based backend framework that I generally use to create complex and secured rapid web development. This framework is great because it has an easy syntax and clean architecture which is Model-View-Template (MVT)."
  ]
  let description = ["tailwind", "react", "express", "echo", "net", "django"]
  let gaugeColors = [["#03fcdb", "#038cfc"], ["#FFFFFF", "#61DBFB"], ["#FFFFFF", "#66727B"], ["#818181", "#00AFD1"], ["#DAF0FB", "#32c7f0"], ["#bdf2c7", "#016e15"]]

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