import { motion } from "framer-motion";
import GaugeChart from "react-gauge-chart";
import ai_img from "../assets/ai.png";
import embedded_img from "../assets/embedded.png";
import web_img from "../assets/web.png";
import software_img from "../assets/software.png";
import system_img from "../assets/system.png";
import android_img from "../assets/android.png";
import electrical_img from "../assets/electrical.png";

export default function Knowledge() {
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
    ai_img,
    embedded_img,
    web_img,
    software_img,
    system_img,
    android_img,
    electrical_img
  ]
  let skillNames = ["Artificial Intelligent", "Embedded System", "Web Development", "Software Engineering", "System Engineering", "Mobile App Engineering", "Electrical Engineering"]
  let gaugePercentages = [0.96, 0.93, 0.91, 0.9, 0.87, 0.85, 0.84]
  let skillDescriptions = [
    "This skill is considered my specialty. This skill includes machine learning, deep learning, computer vision, natural language processing,data mining, and robotics. Mostly Python is used as the main language to create AI, but sometimes to achieve the best performance with limited resources such as embedded systems, we need to go with C++ instead.",
    "This is the second skill that is considered my passion. Generally, I have experience in Arduino (Atmega328p, Uno, Nano), ESP, and STM nucleo as the microcontroller and raspberry pi as microprocessor, I2C, and UART as serial communication, and MQTT as the interprocess communication protocol in my embedded project.",
    "This skill is important since web development actively growing in Indonesia's industry. Thousand of companies need a website, whether it's for a landing page or even services. That's why mastering this skill is a must.",
    "This is an important skill since software engineering is a compulsory subject for all programmers who take computer science as their formal education in universities. That's why I believe that this skill is mandatory for every programmer around the world.",
    "This skill is important for big companies who need or already have their server. This server should be maintained using various tools such as Ansible, Kubernetes, Docker, and many more.",
    "This is a self-taught skill that I learned from books and the internet. Mostly this skill was gained from my embedded system projects that include electrical engineering concepts such as resistors, transformers, regulators, and many other things."
  ]
  let description = ["ai", "embedded", "web", "software", "system", "mobile", "electrical"]
  let gaugeColors = [["#dfdff7", "#2e2eb8"], ["#a8a8f0", "#2e6ab8"], ["#FDFDFC", "#1084B5"], ["#FFFFFF", "#242526"], ["#d4e7fa", "#2085e3"], ["#bdf2c7", "#016e15"], ["#fff", "#20e326"], ["#53555c", "#1c4ad6"]]

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
      {}
    </motion.div>
  );
}
