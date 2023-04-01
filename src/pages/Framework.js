import { motion } from "framer-motion";
import GaugeChart from "react-gauge-chart";
import tailwind_img from "../assets/tailwind.png";
import django_img from "../assets/django.png";
import net_img from "../assets/net.png";
import react_img from "../assets/react.png";
import echo_img from "../assets/echo.png";
import express_img from "../assets/express.png";

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
      {/* Tailwind section */}
      <div className="Skill-content-container">
        <img
          src={tailwind_img}
          width="200"
          className="Skill-content-image"
          alt="tailwindcss"
        />
      </div>
      <div className="Skill-content-layout">
        <h1 className="Typewritter2">Tailwind CSS</h1>
        <p className="Skill-content-description">
          This is the web-based CSS framework that I am most familiar with. 
          Generally, I use this language to create a beautiful, rapid frontend page. 
          This framework is great because this framework let us to leave native CSS development, 
          and give better experience in frontend development.
        </p>
      </div>
      <div className="Skill-content-layout">
        <h1 className="Skill-content-gauge-text">Confidence</h1>
        <GaugeChart
          id="tailwind-gauge"
          animate={false}
          needleColor="#464A4F"
          needleBaseColor="white"
          nrOfLevels={40}
          percent={0.95}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#03fcdb", "#038cfc"]}
          className="Skill-gauge"
        />
      </div>

      {/* React section */}
      <div className="Skill-content-container">
        <img
          src={react_img}
          width="200"
          className="Skill-content-image"
          alt="react"
        />
      </div>
      <div className="Skill-content-layout">
        <h1 className="Typewritter2">React</h1>
        <p className="Skill-content-description">
          This is the cross-platform javascript framework that I generally use for
          frontend development (React JS) and either mobile application (React Native). 
          This framework supports a single-page application program for web-based application,
          and cross-platform on android and ios for React Native itself.
        </p>
      </div>

      <div className="Skill-content-layout">
        <h1 className="Skill-content-gauge-text">Confidence</h1>
        <GaugeChart
          id="react-gauge"
          animate={false}
          needleColor="#464A4F"
          needleBaseColor="white"
          nrOfLevels={40}
          percent={0.93}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#FFFFFF", "#61DBFB"]}
          className="Skill-gauge"
        />
      </div>
      
      {/* Express section */}
      <div className="Skill-content-container">
        <img
          src={express_img}
          width="400"
          className="Skill-content-image"
          alt="express"
        />
      </div>
      <div className="Skill-content-layout">
        <h1 className="Typewritter2">Express</h1>
        <p className="Skill-content-description">
          This is the web-based javascript framework that I generally use for
          backend development. This framework incredibly great for backend due to
          its ability to design and build web application quickly, flexible, and easily.
        </p>
      </div>

      <div className="Skill-content-layout">
        <h1 className="Skill-content-gauge-text">Confidence</h1>
        <GaugeChart
          id="express-gauge"
          animate={false}
          needleColor="#464A4F"
          needleBaseColor="white"
          nrOfLevels={40}
          percent={0.90}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#FFFFFF", "#66727B"]}
          className="Skill-gauge"
        />
      </div>
      
      {/* Echo section */}
      <div className="Skill-content-container">
        <img
          src={echo_img}
          width="200"
          className="Skill-content-image"
          alt="echo"
        />
      </div>
      <div className="Skill-content-layout">
        <h1 className="Typewritter2">Echo</h1>
        <p className="Skill-content-description">
          This is the "High performance, extensible, minimalist Go web framework" 
          that I generally use for microservice based architecture development. 
          This framework supports ton of features, including web socket, authentication,
          automatic TLS, and many more.
        </p>
      </div>

      <div className="Skill-content-layout">
        <h1 className="Skill-content-gauge-text">Confidence</h1>
        <GaugeChart
          id="echo-gauge"
          animate={false}
          needleColor="#464A4F"
          needleBaseColor="white"
          nrOfLevels={40}
          percent={0.89}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#818181", "#00AFD1"]}
          className="Skill-gauge"
        />
      </div>

      {/* .NET section */}
      <div className="Skill-content-container">
        <img
          src={net_img}
          width="330"
          className="Skill-content-image"
          alt=".NET"
        />
      </div>
      <div className="Skill-content-layout">
        <h1 className="Typewritter2">.NET</h1>
        <p className="Skill-content-description">
          This is the cross-platform framework that I generally use for
          enterprise software development. This framework is great because it
          backed by Microsoft and has a stable and older community which is 
          great for projects that need to focus on stability and support.
        </p>
      </div>

      <div className="Skill-content-layout">
        <h1 className="Skill-content-gauge-text">Confidence</h1>
        <GaugeChart
          id="net-gauge"
          animate={false}
          needleColor="#464A4F"
          needleBaseColor="white"
          nrOfLevels={40}
          percent={0.87}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#DAF0FB", "#32c7f0"]}
          className="Skill-gauge"
        />
      </div>

      {/* Django section */}
      <div className="Skill-content-container">
        <img
          src={django_img}
          width="330"
          className="Skill-content-image"
          alt="django"
        />
      </div>
      <div className="Skill-content-layout">
        <h1 className="Typewritter2">Django</h1>
        <p className="Skill-content-description">
          This is the web-based backend framework that I generally use 
          to create complex and secured rapid web development. 
          This framework is great because it has an easy syntax and
          clean architecture which is Model-View-Template (MVT).
        </p>
      </div>

      <div className="Skill-content-layout">
        <h1 className="Skill-content-gauge-text">Confidence</h1>
        <GaugeChart
          id="django-gauge"
          animate={false}
          needleColor="#464A4F"
          needleBaseColor="white"
          nrOfLevels={40}
          percent={0.84}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#bdf2c7", "#016e15"]}
          className="Skill-gauge"
        />
      </div>
    </motion.div>
  );
}

export default Framework;
