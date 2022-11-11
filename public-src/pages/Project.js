import { motion } from "framer-motion";
import { AiOutlineGithub, AiOutlineYoutube } from "react-icons/ai";
import Stepper from "../pages/Stepper";
import eyes_img from "../assets/eyes.png";
import hydrovest_img from "../assets/hydrovest.png";
import cluster_img from "../assets/cluster.png";
import rpa_img from "../assets/rpa.png";
import bagikanilmu_img from "../assets/bagikanilmu.jpeg";
import muskot_img from "../assets/muskot.jpeg";
import icstar_img from "../assets/icstar.jpeg";
import porto_img from "../assets/porto.png";
import sklearn_img from "../assets/sklearn.png";
import opencv_img from "../assets/opencv.png";
import tensorflow_img from "../assets/tensorflow.png";
import edm_img from "../assets/edm.png";

function Projects() {
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
    >
      <div className="Project-container">
        <div className="Project-mask">
          <div className="Top-Project-skew-label">My Projects</div>
          <div className="Project-layout">
            {/* e-Eyes section */}
            <div className="Project-content-layout">
              <div className="my-auto">
                <img
                  src={eyes_img}
                  width={350}
                  alt="e-Eyes"
                  className="Project-image"
                />
              </div>
              <div className="Project-about">
                <h1 className="Project-title">e-Eyes</h1>
                <p className="Project-description">
                  This repository aims to build a face recognition attendance
                  system with a temperature scanning feature, and also work as
                  CCTV for our home automation
                </p>
                <div className="Project-source-layout">
                  <a
                    className="Project-source-left"
                    href="https://github.com/felixfilipi/e-Eyes-Attendance-System"
                  >
                    <AiOutlineGithub size={30} className="mx-auto" />
                  </a>
                  <a
                    className="Project-source-right"
                    href="https://www.youtube.com/watch?v=bMadRFkAP9I"
                  >
                    <AiOutlineYoutube size={30} className="mx-auto" />
                  </a>
                </div>
              </div>
            </div>

            {/* hydrovest section */}
            <div className="Project-content-layout">
              <div className="my-auto">
                <img
                  src={hydrovest_img}
                  width={350}
                  alt="hydrovest"
                  className="Project-image"
                />
              </div>
              <div className="Project-about sm:mt-14">
                <h1 className="Project-title">Hydrovest</h1>
                <p className="Project-description">
                  This repository is intended to build fully automated
                  aquaponics monitoring system, using a public server. This
                  monitoring system will work together with AI to detect leaf
                  spot disease and return the classification to the user from
                  the web interface.
                </p>
                <div className="Project-source-layout">
                  <a
                    className="Project-source-left"
                    href="https://github.com/felixfilipi/e-Eyes-Attendance-System"
                  >
                    <AiOutlineGithub size={30} className="mx-auto" />
                  </a>
                  <a
                    className="Project-source-right"
                    href="https://www.youtube.com/watch?v=bMadRFkAP9I"
                  >
                    <AiOutlineYoutube size={30} className="mx-auto" />
                  </a>
                </div>
              </div>
            </div>

            {/* Cluster section */}
            <div className="Project-content-layout">
              <div className="my-auto">
                <img
                  src={cluster_img}
                  width={350}
                  alt="Cluster"
                  className="Project-image"
                />
              </div>
              <div className="Project-about">
                <h1 className="Project-title">Cluster Server</h1>
                <p className="Project-description">
                  This repository aims to build a High Availability Cluster
                  Server with Load Balancer using HAProxy, KeepAlive, and NGINX.
                </p>
                <div className="Project-source-layout">
                  <a
                    className="Project-source-left"
                    href="https://github.com/felixfilipi/e-Eyes-Attendance-System"
                  >
                    <AiOutlineGithub size={30} className="mx-auto" />
                  </a>
                  <a
                    className="Project-source-right"
                    href="https://www.youtube.com/watch?v=bMadRFkAP9I"
                  >
                    <AiOutlineYoutube size={30} className="mx-auto" />
                  </a>
                </div>
              </div>
            </div>

            {/* RPA section */}
            <div className="Project-content-layout">
              <div className="my-auto">
                <img
                  src={rpa_img}
                  width={350}
                  alt="hydrovest"
                  className="Project-image"
                />
              </div>
              <div className="Project-about">
                <h1 className="Project-title">Anime Downloader Bot</h1>
                <p className="Project-description">
                  This repository is intended to build Robotic Process
                  Automation (bot) to download anime from a specific streaming
                  site.
                </p>
                <div className="Project-source-layout">
                  <a
                    className="Project-source-left"
                    href="https://github.com/felixfilipi/BOT-Anime-Downloader-RPA"
                  >
                    <AiOutlineGithub size={30} className="mx-auto" />
                  </a>
                  <a
                    className="Project-source-right"
                    href="https://youtu.be/-xG_XLCj_6Q"
                  >
                    <AiOutlineYoutube size={30} className="mx-auto" />
                  </a>
                </div>
              </div>
            </div>

            {/* bagikanilmu section */}
            <div className="Project-content-layout">
              <div className="my-auto">
                <img
                  src={bagikanilmu_img}
                  width={350}
                  alt="Bagikan Ilmu"
                  className="Project-image"
                />
              </div>
              <div className="Project-about">
                <h1 className="Project-title">Bagikan Ilmu</h1>
                <p className="Project-description">
                  This repository will provide a free online learning platform
                  that you can access online.
                </p>
                <div className="Project-source-layout-2">
                  <a href="https://github.com/felixfilipi/Bagikan-Ilmu">
                    <AiOutlineGithub size={30} className="mx-auto" />
                  </a>
                </div>
              </div>
            </div>

            {/* Easy Data Mining section */}
            <div className="Project-content-layout">
              <div className="my-auto">
                <img
                  src={edm_img}
                  width={350}
                  alt="EasyDataMining"
                  className="Project-image"
                />
              </div>
              <div className="Project-about sm:mt-14">
                <h1 className="Project-title">Easy Data Mining</h1>
                <p className="Project-description">
                  This repository intended to create an easy user-friendly
                  web-based data mining generator.
                </p>
                <div className="Project-source-layout-2">
                  <a href="https://github.com/brian9952/EasyDataMining">
                    <AiOutlineGithub size={30} className="mx-auto" />
                  </a>
                </div>
              </div>
            </div>

            {/* opencv section */}
            <div className="Project-content-layout">
              <div className="my-auto">
                <img
                  src={opencv_img}
                  width={220}
                  alt="Computer Vision Project"
                  className="Project-image"
                />
              </div>
              <div className="Project-about">
                <h1 className="Project-title">
                  Various Computer Vision Projects
                </h1>
                <p className="Project-description">
                  This repository aims to summarized various Computer Vision
                  projects that have been worked on during lecture and free time
                  (side project)
                </p>
                <div className="Project-source-layout-2">
                  <a href="https://github.com/felixfilipi/Computer-Vision">
                    <AiOutlineGithub size={30} className="mx-auto" />
                  </a>
                </div>
              </div>
            </div>

            {/* ml section */}
            <div className="Project-content-layout">
              <div className="my-auto">
                <img
                  src={sklearn_img}
                  width={220}
                  alt="Machine Learning Project"
                  className="Project-image sm:mt-24"
                />
              </div>
              <div className="Project-about sm:mt-24">
                <h1 className="Project-title">
                  Various Machine Learning Projects
                </h1>
                <p className="Project-description">
                  This repository aims to summarized various machine learning
                  projects that have been worked on during lectures
                </p>
                <div className="Project-source-layout-2">
                  <a href="https://github.com/felixfilipi/Machine-Learning">
                    <AiOutlineGithub size={30} className="mx-auto" />
                  </a>
                </div>
              </div>
            </div>

            {/* Neural Net section */}
            <div className="Project-content-layout">
              <div className="my-auto">
                <img
                  src={tensorflow_img}
                  width={220}
                  alt="Neural Network Project"
                  className="Project-image"
                />
              </div>
              <div className="Project-about sm:mt-14">
                <h1 className="Project-title">
                  Various Neural Network Projects
                </h1>
                <p className="Project-description">
                  This repository aims to summarized various ANN projects that
                  have been worked on during lectures
                </p>
                <div className="Project-source-layout-2">
                  <a href="https://github.com/felixfilipi/Artificial-Neural-Network">
                    <AiOutlineGithub size={30} className="mx-auto" />
                  </a>
                </div>
              </div>
            </div>

            {/* ICStar section */}
            <div className="Project-content-layout">
              <div className="my-auto">
                <img
                  src={icstar_img}
                  width={300}
                  alt="ICStar"
                  className="Project-image"
                />
              </div>
              <div className="Project-about sm:mt-32">
                <h1 className="Project-title">ICStar Project</h1>
                <p className="Project-description">
                  Data engineering and modelling for business process (BCA case
                  study) by crawling key business and map it to the nearest BCA
                  KCU with its distance. Later on this data will be predicted
                  using ML algorithms
                </p>
                <div className="Project-source-layout-2">
                  <a href="https://github.com/felixfilipi/ICSTAR-Hackathon">
                    <AiOutlineGithub size={30} className="mx-auto" />
                  </a>
                </div>
              </div>
            </div>

            {/* muskot section */}
            <div className="Project-content-layout">
              <div className="my-auto">
                <img
                  src={muskot_img}
                  width={220}
                  alt="Museum Angkut Mobile Apps"
                  className="Project-image"
                />
              </div>
              <div className="Project-about">
                <h1 className="Project-title">Museum Angkut Mobile Apps</h1>
                <p className="Project-description">
                  This repository will provide assistance as a guide for
                  traveling in the museum angkut
                </p>
                <div className="Project-source-layout-2">
                  <a href="https://github.com/felixfilipi/Museum-Angkut-Mobile-Apps">
                    <AiOutlineGithub size={30} className="mx-auto" />
                  </a>
                </div>
              </div>
            </div>

            {/* portfolio section */}
            <div className="Project-content-layout">
              <div className="my-auto">
                <img
                  src={porto_img}
                  width={350}
                  alt="Portfolio Website"
                  className="Project-image sm:mt-24"
                />
              </div>
              <div className="Project-about sm:mt-60">
                <h1 className="Project-title">Portfolio Website</h1>
                <p className="Project-description">
                  This repository aims to create personal website portfolio from
                  scratch using react js & tailwind css
                </p>
                <div className="Project-source-layout-2">
                  <a href="https://github.com/felixfilipi/felixfilipi">
                    <AiOutlineGithub size={30} className="mx-auto" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Stepper pages={4} />
    </motion.div>
  );
}

export default Projects;
