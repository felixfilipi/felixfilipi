import { motion } from "framer-motion";
import GaugeChart from "react-gauge-chart";
import tailwind_img from "../assets/tailwind.png";
import django_img from "../assets/django.png";
import net_img from "../assets/net.png";
import react_img from "../assets/react.png";
import flask_img from "../assets/flask.png";
import laravel_img from "../assets/laravel.png";

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
          This is the python-based library that I mostly used to manipulate
          arrays. This library's very helpful since it can manipulate many
          arrays, which would like to be very helpful for us to create Machine
          Learning or Deep Learning models.
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
          This is the web-based backend framework that I am most familiar with.
          Generally, I use this language to create complex and secured rapid web
          development. This framework is great because it has an easy syntax and
          clean architecture which is Model-View-Template (MVT) which I
          preferred to use for all of my projects.
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
          percent={0.92}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#bdf2c7", "#016e15"]}
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
          This is the cross-platform software framework that I generally use for
          enterprise software development. This framework is great because it
          has a stable and older community which is great for projects that need
          to focus on stability.
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
          percent={0.89}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#404040", "#32c7f0"]}
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
        <h1 className="Typewritter2">React JS</h1>
        <p className="Skill-content-description">
          This is the web-based javascript framework that I generally use for
          complex frontend development. This framework supports a single-page
          application program which is very good since it doesn't need to load
          many pages in it, so it's incredibly faster than other usual programs.
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
          percent={0.89}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#03fcdb", "#038cfc"]}
          className="Skill-gauge"
        />
      </div>

      {/* Flask section */}
      <div className="Skill-content-container">
        <img
          src={flask_img}
          width="350"
          className="Skill-content-image"
          alt="flask"
        />
      </div>
      <div className="Skill-content-layout">
        <h1 className="Typewritter2">Flask</h1>
        <p className="Skill-content-description">
          This is the web-based python backend framework that I generally use to
          create a lightweight codebase program. Since flask is a small and
          lightweight web framework, it encourages us to use this as a rapid
          web-based backend framework for microservices or small projects.
        </p>
      </div>

      <div className="Skill-content-layout">
        <h1 className="Skill-content-gauge-text">Confidence</h1>
        <GaugeChart
          id="flask-gauge"
          animate={false}
          needleColor="#464A4F"
          needleBaseColor="white"
          nrOfLevels={40}
          percent={0.85}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#404040", "#dbd5d5"]}
          className="Skill-gauge"
        />
      </div>

      {/* Laravel section */}
      <div className="Skill-content-container">
        <img
          src={laravel_img}
          width="200"
          className="Skill-content-image"
          alt="laravel"
        />
      </div>
      <div className="Skill-content-layout">
        <h1 className="Typewritter2">Laravel</h1>
        <p className="Skill-content-description">
          This is the web-based PHP backend framework that I usually use for
          several websites that are already or need to be deployed in the LAMP
          or WAMP stack (since most of Indonesia's deployed applications are
          already built in this stack). I'm not a fan of this framework since I
          don't see any advantages of using this framework over other frameworks
          like Django, etc.
        </p>
      </div>

      <div className="Skill-content-layout">
        <h1 className="Skill-content-gauge-text">Confidence</h1>
        <GaugeChart
          id="laravel-gauge"
          animate={false}
          needleColor="#464A4F"
          needleBaseColor="white"
          nrOfLevels={40}
          percent={0.82}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#595454", "#cc1414"]}
          className="Skill-gauge"
        />
      </div>
    </motion.div>
  );
}

export default Framework;
