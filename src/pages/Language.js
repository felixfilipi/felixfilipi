import { motion } from "framer-motion";
import GaugeChart from "react-gauge-chart";
import cpp_img from "../assets/cpp.png";
import python_img from "../assets/python.png";
import js_img from "../assets/JavaScript.png";
import cs_img from "../assets/cs.png";
import java_img from "../assets/java.png";
import kotlin_img from "../assets/kotlin.png";
import r_img from "../assets/R.png";
import ts_img from "../assets/ts.png";
import golang_img from "../assets/golang.png";

function Language() {
  const gaugeStyle = {
    width: "300px",
  };

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
      exit="exit"
      variants={pageVariant}
      transition={pageTransition}
      className="Skill-layout"
    >
      <div className="Skill-content-container">
        <img
          src={python_img}
          width="200"
          className="Skill-content-image"
          alt="python"
        />
      </div>
      <div className="Skill-content-layout">
        <h1 className="Typewritter2">Python</h1>
        <p className="Skill-content-description">
          This is the most familiar programming language that I have ever used.
          Generally, I use this language to create machine learning or deep
          learning models with the help of several libraries like NumPy,
          TensorFlow, and PyTorch.
        </p>
      </div>

      <div className="Skill-content-layout">
        <h1 className="Skill-content-gauge-text">Confidence</h1>
        <GaugeChart
          id="python-gauge"
          animate={false}
          needleColor="#464A4F"
          needleBaseColor="white"
          nrOfLevels={40}
          percent={0.96}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#03eeff", "#cc1002"]}
          className="Skill-gauge"
        />
      </div>

      {/* CPP Section */}

      <div className="Skill-content-container">
        <img
          src={cpp_img}
          width="200"
          className="Skill-content-image"
          alt="cpp"
        />
      </div>
      <div className="Skill-content-layout">
        <h1 className="Typewritter2">C++</h1>
        <p className="Skill-content-description">
          This is a programming language that I generally use as a low-level
          programming language. In general, I use this language to create
          software that emphasizes performance in the form of speed, such as
          embedded systems, robotics, etc.
        </p>
      </div>

      <div className="Skill-content-layout">
        <h1 className="Skill-content-gauge-text">Confidence</h1>
        <GaugeChart
          id="cpp-gauge"
          animate={false}
          needleColor="#464A4F"
          needleBaseColor="white"
          nrOfLevels={40}
          percent={0.93}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#03ffd9", "#1c03ff"]}
          className="Skill-gauge"
        />
      </div>
 
      {/* Javascript Section */}

      <div className="Skill-content-container">
        <img
          src={js_img}
          width="200"
          className="Skill-content-image"
          alt="javascript"
        />
      </div>
      <div className="Skill-content-layout">
        <h1 className="Typewritter2">Javascript</h1>
        <p className="Skill-content-description">
          This is the programming language that I generally use for web
          development. This development includes both frontend and backend.
          Usually, this programming language is integrated with several
          frameworks such as React, etc.
        </p>
      </div>

      <div className="Skill-content-layout">
        <h1 className="Skill-content-gauge-text">Confidence</h1>
        <GaugeChart
          id="javascript-gauge"
          animate={false}
          needleColor="#464A4F"
          needleBaseColor="white"
          nrOfLevels={40}
          percent={0.90}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#e2ff03", "#ff4a03"]}
          className="Skill-gauge"
        />
      </div>

      {/* Typescript Section */}

      <div className="Skill-content-container">
        <img
          src={ts_img}
          width="200"
          className="Skill-content-image"
          alt="typescript"
        />
      </div>
      <div className="Skill-content-layout">
        <h1 className="Typewritter2">TypeScript</h1>
        <p className="Skill-content-description">
          This is the programming language that I generally use as superset
          of javascript in web development. This development includes both 
          frontend and backend. Usually, this programming language is integrated 
          with several frameworks such as React, express, etc.
        </p>
      </div>

      <div className="Skill-content-layout">
        <h1 className="Skill-content-gauge-text">Confidence</h1>
        <GaugeChart
          id="typescript-gauge"
          animate={false}
          needleColor="#464A4F"
          needleBaseColor="white"
          nrOfLevels={40}
          percent={0.89}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#FFFFFF", "#2D79C7"]}
          className="Skill-gauge"
        />
      </div>

      {/* Golang Section */}

      <div className="Skill-content-container">
        <img
          src={golang_img}
          width="200"
          className="Skill-content-image"
          alt="golang"
        />
      </div>
      <div className="Skill-content-layout">
        <h1 className="Typewritter2">Golang</h1>
        <p className="Skill-content-description">
          This is the programming language that I generally use in development of 
          microservice based architecture. This language best known for its speed 
          performance in microservice application. 
        </p>
      </div>

      <div className="Skill-content-layout">
        <h1 className="Skill-content-gauge-text">Confidence</h1>
        <GaugeChart
          id="golang-gauge"
          animate={false}
          needleColor="#464A4F"
          needleBaseColor="white"
          nrOfLevels={40}
          percent={0.87}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#00d0ff", "#2d79c7"]}
          className="Skill-gauge"
        />
      </div>
      
      {/* C# Section */}

      <div className="Skill-content-container">
        <img
          src={cs_img}
          width="200"
          className="Skill-content-image"
          alt="C#"
        />
      </div>
      <div className="Skill-content-layout">
        <h1 className="Typewritter2">C#</h1>
        <p className="Skill-content-description">
          This is the programming language that I generally use for web
          development and enterprise software. This programming language worked
          as a backend or server-side application. Usually, this programming
          language is bundled in the .NET platform.
        </p>
      </div>

      <div className="Skill-content-layout">
        <h1 className="Skill-content-gauge-text">Confidence</h1>
        <GaugeChart
          id="cs-gauge"
          animate={false}
          needleColor="#464A4F"
          needleBaseColor="white"
          nrOfLevels={40}
          percent={0.85}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#ff03cd", "#7d14d9"]}
          className="Skill-gauge"
        />
      </div>

      {/* Kotlin Section */}

      <div className="Skill-content-container">
        <img
          src={kotlin_img}
          width="200"
          className="Skill-content-image"
          alt="Kotlin"
        />
      </div>
      <div className="Skill-content-layout">
        <h1 className="Typewritter2">Kotlin</h1>
        <p className="Skill-content-description">
          This is the high-level programming language that I mostly use for
          mobile development. This language is an official language to create
          native mobile application development. Mostly I use the android studio
          as its IDE.
        </p>
      </div>

      <div className="Skill-content-layout">
        <h1 className="Skill-content-gauge-text">Confidence</h1>
        <GaugeChart
          id="kotlin-gauge"
          animate={false}
          needleColor="#464A4F"
          needleBaseColor="white"
          nrOfLevels={40}
          percent={0.84}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#54d1ff", "#f07d0a"]}
          className="Skill-gauge"
        />
      </div>
      
      {/* Java Section */}

      <div className="Skill-content-container">
        <img
          src={java_img}
          width="200"
          className="Skill-content-image"
          alt="Java"
        />
      </div>
      <div className="Skill-content-layout">
        <h1 className="Typewritter2">Java</h1>
        <p className="Skill-content-description">
          This is the high-level programming language that I generally use for
          mobile development or enteprises application. This programming language
          helps me to create complex structured applications since it is an
          object-oriented language. I rarely used this language unless the stack itself
          told me to use this language since I don't see any reasonable benefit by
          using this language instead the other languages.
        </p>
      </div>

      <div className="Skill-content-layout">
        <h1 className="Skill-content-gauge-text">Confidence</h1>
        <GaugeChart
          id="java-gauge"
          animate={false}
          needleColor="#464A4F"
          needleBaseColor="white"
          nrOfLevels={40}
          percent={0.82}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#1e11ad", "#ad1111"]}
          className="Skill-gauge"
        />
      </div>

      {/* R Section */}

      <div className="Skill-content-container">
        <img
          src={r_img}
          width="200"
          className="Skill-content-image"
          alt="R language"
        />
      </div>
      <div className="Skill-content-layout">
        <h1 className="Typewritter2">R</h1>
        <p className="Skill-content-description">
          This is the programming language that I generally use for data
          analytics and data mining. This language helps me create predictive
          modeling and mine important data in various built-in packages.
        </p>
      </div>

      <div className="Skill-content-layout">
        <h1 className="Skill-content-gauge-text">Confidence</h1>
        <GaugeChart
          id="R-gauge"
          animate={false}
          needleColor="#464A4F"
          needleBaseColor="white"
          nrOfLevels={40}
          percent={0.80}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#5c5b63", "#6354ff"]}
          className="Skill-gauge"
        />
      </div>
    </motion.div>
  );
}

export default Language;
