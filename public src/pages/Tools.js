import { motion } from "framer-motion";
import GaugeChart from "react-gauge-chart";
import git_img from "../assets/git.png";
import ansible_img from "../assets/ansible.png";
import docker_img from "../assets/docker.png";
import kubernetes_img from "../assets/kubernetes.png";
import arc_img from "../assets/arc.png";
import rapid_img from "../assets/rapid.png";

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
      {/* Git section */}
      <div className="Skill-content-container">
        <img
          src={git_img}
          width="200"
          className="Skill-content-image"
          alt="git"
        />
      </div>
      <div className="Skill-content-layout">
        <h1 className="Typewritter2">Git</h1>
        <p className="Skill-content-description">
          This is the DevOps tool used for source code management. Since
          creating an application need a lot of cost and effort, developers need
          to learn how to collaborate. For this reason, Git appears with various
          features that help the developer to collaborate and manage their
          source code with their teams.
        </p>
      </div>
      <div className="Skill-content-layout">
        <h1 className="Skill-content-gauge-text">Confidence</h1>
        <GaugeChart
          id="git-gauge"
          animate={false}
          needleColor="#464A4F"
          needleBaseColor="white"
          nrOfLevels={40}
          percent={0.92}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#f59d93", "#e8321e"]}
          className="Skill-gauge"
        />
      </div>

      {/* rapid miner section */}
      <div className="Skill-content-container">
        <img
          src={rapid_img}
          width="200"
          className="Skill-content-image"
          alt="rapid miner"
        />
      </div>
      <div className="Skill-content-layout">
        <h1 className="Typewritter2">Rapid Miner</h1>
        <p className="Skill-content-description">
          This is a high-level data science tool that can do various tasks such
          as machine learning, data mining, etc. This application doesn't
          require code ability. It allows us to simply drag and drop the
          built-in function provided by this tool.{" "}
        </p>
      </div>

      <div className="Skill-content-layout">
        <h1 className="Skill-content-gauge-text">Confidence</h1>
        <GaugeChart
          id="rapid-gauge"
          animate={false}
          needleColor="#464A4F"
          needleBaseColor="white"
          nrOfLevels={40}
          percent={0.9}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#665e56", "#e8861e"]}
          className="Skill-gauge"
        />
      </div>

      {/* ArcGIS section */}
      <div className="Skill-content-container">
        <img
          src={arc_img}
          width="200"
          className="Skill-content-image"
          alt="ArcGIS"
        />
      </div>
      <div className="Skill-content-layout">
        <h1 className="Typewritter2">ArcGIS</h1>
        <p className="Skill-content-description">
          This is a geospatial processing tool to view, edit, create, and
          analyze geospatial data. This tool helps us to mark places and objects
          inside a map and return it as a new processed map.
        </p>
      </div>

      <div className="Skill-content-layout">
        <h1 className="Skill-content-gauge-text">Confidence</h1>
        <GaugeChart
          id="arc-gauge"
          animate={false}
          needleColor="#464A4F"
          needleBaseColor="white"
          nrOfLevels={40}
          percent={0.9}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#25b83d", "#2538b8"]}
          className="Skill-gauge"
        />
      </div>

      {/* Docker section */}
      <div className="Skill-content-container">
        <img
          src={docker_img}
          width="330"
          className="Skill-content-image"
          alt="docker"
        />
      </div>
      <div className="Skill-content-layout">
        <h1 className="Typewritter2">Docker</h1>
        <p className="Skill-content-description">
          This is a virtualization tool that can deliver software in packages
          called containers. This process is called containerization. This
          container is a standardized executable component that allows the
          developer to solve the "it works on my machine" problem.
        </p>
      </div>

      <div className="Skill-content-layout">
        <h1 className="Skill-content-gauge-text">Confidence</h1>
        <GaugeChart
          id="docker-gauge"
          animate={false}
          needleColor="#464A4F"
          needleBaseColor="white"
          nrOfLevels={40}
          percent={0.86}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#03fcdb", "#038cfc"]}
          className="Skill-gauge"
        />
      </div>

      {/* Kubernetes section */}
      <div className="Skill-content-container">
        <img
          src={kubernetes_img}
          width="330"
          className="Skill-content-image"
          alt="kubernetes"
        />
      </div>
      <div className="Skill-content-layout">
        <h1 className="Typewritter2">Kubernetes</h1>
        <p className="Skill-content-description">
          This is a platform that can manage containerized application workload
          and services. In most cases, we need to combine Docker and Kubernetes.
          Docker is intended to containerize the application, while Kubernetes
          will manage it. Kubernetes can manage the workload of a container,
          which means it can do load balancing and apply high availability on
          containerized apps.
        </p>
      </div>

      <div className="Skill-content-layout">
        <h1 className="Skill-content-gauge-text">Confidence</h1>
        <GaugeChart
          id="kubernetes-gauge"
          animate={false}
          needleColor="#464A4F"
          needleBaseColor="white"
          nrOfLevels={40}
          percent={0.85}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#dbd5d5", "#255bb8"]}
          className="Skill-gauge"
        />
      </div>

      {/* Ansible section */}
      <div className="Skill-content-container">
        <img
          src={ansible_img}
          width="200"
          className="Skill-content-image"
          alt="ansible"
        />
      </div>
      <div className="Skill-content-layout">
        <h1 className="Typewritter2">Ansible</h1>
        <p className="Skill-content-description">
          This is an automation engine that helps us to automate configuration,
          deployment, orchestration, and other IT processes on the server.
          Ansible helps us to automate a lot of tasks that are time-consuming,
          complex, repetitive, and other error issues.
        </p>
      </div>

      <div className="Skill-content-layout">
        <h1 className="Skill-content-gauge-text">Confidence</h1>
        <GaugeChart
          id="ansible-gauge"
          animate={false}
          needleColor="#464A4F"
          needleBaseColor="white"
          nrOfLevels={40}
          percent={0.82}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#dbd5d5", "#cc1414"]}
          className="Skill-gauge"
        />
      </div>
    </motion.div>
  );
}

export default Framework;
