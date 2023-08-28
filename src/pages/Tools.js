import { motion } from "framer-motion";
import GaugeChart from "react-gauge-chart";
import git_img from "../assets/git.png";
import ansible_img from "../assets/ansible.png";
import docker_img from "../assets/docker.png";
import kubernetes_img from "../assets/kubernetes.png";
import arc_img from "../assets/arc.png";
import rapid_img from "../assets/rapid.png";

function Framework() {
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
    git_img,
    docker_img,
    rapid_img,
    ansible_img,
    arc_img,
    kubernetes_img,
  ]
  let skillNames = ["Git", "Docker", "Rapid Miner", "Ansible", "ArcGIS", "Kubernetes"]
  let gaugePercentages = [0.92, 0.90, 0.90, 0.86, 0.85, 0.82]
  let skillDescriptions = [
    "This is the DevOps tool used for source code management. Since creating an application need a lot of cost and effort, developers need to learn how to collaborate. For this reason, Git appears with various features that help the developer to collaborate and manage their source code with their teams.",
    "This is a virtualization tool that can deliver software in packages called containers. This process is called containerization. This container is a standardized executable component that allows the developer to solve the 'it works on my machine' problem.",
    "This is a high-level data science tool that can do various tasks such as machine learning, data mining, etc. This application doesn't require code ability. It allows us to simply drag and drop the built-in function provided by this tool.",
    "This is an automation engine that helps us to automate configuration, deployment, orchestration, and other IT processes on the server. Ansible helps us to automate a lot of tasks that are time-consuming, complex, repetitive, and other error issues.",
    "This is a geospatial processing tool to view, edit, create, and analyze geospatial data. This tool helps us to mark places and objects inside a map and return it as a new processed map.",
    "This is a platform that can manage containerized application workload and services. In most cases, we need to combine Docker and Kubernetes. Docker is intended to containerize the application, while Kubernetes will manage it. Kubernetes can manage the workload of a container, which means it can do load balancing and apply high availability on containerized apps."
  ]
  let description = ["git", "docker", "rapid", "ansible", "gis", "k8s"]
  let gaugeColors = [["#f59d93", "#e8321e"], ["#03fcdb", "#038cfc"], ["#665e56", "#e8861e"], ["#dbd5d5", "#cc1414"], ["#25b83d", "#2538b8"], ["#bdf2c7", "#016e15"], ["#fff", "#20e326"], ["#dbd5d5", "#255bb8"]]

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
