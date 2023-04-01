import { motion } from "framer-motion";
import GaugeChart from "react-gauge-chart";
import ai_img from "../assets/ai.png";
import embedded_img from "../assets/embedded.png";
import web_img from "../assets/web.png";
import software_img from "../assets/software.png";
import system_img from "../assets/system.png";
import android_img from "../assets/android.png";
import electrical_img from "../assets/electrical.png";

function Knowledge() {
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
      {/* AI section */}
      <div className="Skill-content-container">
        <img
          src={ai_img}
          width="300"
          className="Skill-content-image"
          alt="AI"
        />
      </div>
      <div className="Skill-content-layout">
        <h1 className="Typewritter2">Artificial Intelligent</h1>
        <p className="Skill-content-description">
          This skill is considered my specialty. This skill includes machine
          learning, deep learning, computer vision, natural language processing,
          data mining, and robotics. Mostly Python is used as the main language
          to create AI, but sometimes to achieve the best performance with
          limited resources such as embedded systems, we need to go with C++
          instead.
        </p>
      </div>

      <div className="Skill-content-layout">
        <h1 className="Skill-content-gauge-text">Confidence</h1>
        <GaugeChart
          id="ai-gauge"
          animate={false}
          needleColor="#464A4F"
          needleBaseColor="white"
          nrOfLevels={40}
          percent={0.96}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#dfdff7", "#2e2eb8"]}
          className="Skill-gauge"
        />
      </div>

      {/* Embedded section */}
      <div className="Skill-content-container">
        <img
          src={embedded_img}
          width="200"
          className="Skill-content-image"
          alt="embedded"
        />
      </div>
      <div className="Skill-content-layout">
        <h1 className="Typewritter2">Embedded System</h1>
        <p className="Skill-content-description">
          This is the second skill that is considered my passion. Generally, I
          have experience in Arduino (Atmega328p, Uno, Nano), ESP, and STM nucleo 
          as the microcontroller and raspberry pi as microprocessor, 
          I2C, and UART as serial communication, and MQTT as the
          interprocess communication protocol in my embedded project.
        </p>
      </div>

      <div className="Skill-content-layout">
        <h1 className="Skill-content-gauge-text">Confidence</h1>
        <GaugeChart
          id="embedded-gauge"
          animate={false}
          needleColor="#464A4F"
          needleBaseColor="white"
          nrOfLevels={40}
          percent={0.93}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#a8a8f0", "#2e6ab8"]}
          className="Skill-gauge"
        />
      </div>

      {/* Web section */}
      <div className="Skill-content-container">
        <img
          src={web_img}
          width="200"
          className="Skill-content-image"
          alt="web"
        />
      </div>
      <div className="Skill-content-layout">
        <h1 className="Typewritter2">Web Development</h1>
        <p className="Skill-content-description">
          This skill is important since web development actively growing in
          Indonesia's industry. Thousand of companies need a website, whether
          it's for a landing page or even services. That's why mastering this
          skill is a must.
        </p>
      </div>

      <div className="Skill-content-layout">
        <h1 className="Skill-content-gauge-text">Confidence</h1>
        <GaugeChart
          id="web-gauge"
          animate={false}
          needleColor="#464A4F"
          needleBaseColor="white"
          nrOfLevels={40}
          percent={0.91}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#FDFDFC", "#1084B5"]}
          className="Skill-gauge"
        />
      </div>

      {/* Software Engineer section */}
      <div className="Skill-content-container">
        <img
          src={software_img}
          width="200"
          className="Skill-content-image"
          alt="software"
        />
      </div>
      <div className="Skill-content-layout">
        <h1 className="Typewritter2">Software Engineering</h1>
        <p className="Skill-content-description">
          This is an important skill since software engineering is a compulsory
          subject for all programmers who take computer science as their formal
          education in universities. That's why I believe that this skill is
          mandatory for every programmer around the world.
        </p>
      </div>

      <div className="Skill-content-layout">
        <h1 className="Skill-content-gauge-text">Confidence</h1>
        <GaugeChart
          id="software-gauge"
          animate={false}
          needleColor="#464A4F"
          needleBaseColor="white"
          nrOfLevels={40}
          percent={0.9}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#FFFFFF", "#242526"]}
          className="Skill-gauge"
        />
      </div>

      {/* System Engineer section */}
      <div className="Skill-content-container">
        <img
          src={system_img}
          width="250"
          className="Skill-content-image"
          alt="system"
        />
      </div>
      <div className="Skill-content-layout">
        <h1 className="Typewritter2">System Engineer</h1>
        <p className="Skill-content-description">
          This skill is important for big companies who need or already have
          their server. This server should be maintained using various tools
          such as Ansible, Kubernetes, Docker, and many more.
        </p>
      </div>

      <div className="Skill-content-layout">
        <h1 className="Skill-content-gauge-text">Confidence</h1>
        <GaugeChart
          id="system-gauge"
          animate={false}
          needleColor="#464A4F"
          needleBaseColor="white"
          nrOfLevels={40}
          percent={0.87}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#d4e7fa", "#2085e3"]}
          className="Skill-gauge"
        />
      </div>

      {/* Android section */}
      <div className="Skill-content-container">
        <img
          src={android_img}
          width="200"
          className="Skill-content-image"
          alt="android"
        />
      </div>
      <div className="Skill-content-layout">
        <h1 className="Typewritter2">Android Development</h1>
        <p className="Skill-content-description">
          This skill is very important since thousand of people already have
          smartphones as a part of their life. That's why developers should have
          this skill. Furthermore, I usually use android as an interface for my
          embedded project. That's why I have this skill although I was
          specializing in AI.
        </p>
      </div>

      <div className="Skill-content-layout">
        <h1 className="Skill-content-gauge-text">Confidence</h1>
        <GaugeChart
          id="android-gauge"
          animate={false}
          needleColor="#464A4F"
          needleBaseColor="white"
          nrOfLevels={40}
          percent={0.85}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#fff", "#20e326"]}
          className="Skill-gauge"
        />
      </div>

      {/* Electrical section */}
      <div className="Skill-content-container">
        <img
          src={electrical_img}
          width="250"
          className="Skill-content-image"
          alt="electrical"
        />
      </div>
      <div className="Skill-content-layout">
        <h1 className="Typewritter2">Electrical Engineering</h1>
        <p className="Skill-content-description">
          This is a self-taught skill that I learned from books and the
          internet. Mostly this skill was gained from my embedded system
          projects that include electrical engineering concepts such as
          resistors, transformers, regulators, and many other things.
        </p>
      </div>

      <div className="Skill-content-layout">
        <h1 className="Skill-content-gauge-text">Confidence</h1>
        <GaugeChart
          id="electrical-gauge"
          animate={false}
          needleColor="#464A4F"
          needleBaseColor="white"
          nrOfLevels={40}
          percent={0.84}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#53555c", "#1c4ad6"]}
          className="Skill-gauge"
        />
      </div>
    </motion.div>
  );
}

export default Knowledge;
