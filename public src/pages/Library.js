import { motion } from "framer-motion";
import GaugeChart from "react-gauge-chart";
import numpy_img from "../assets/numpy.png";
import tensorflow_img from "../assets/tensorflow.png";
import sklearn_img from "../assets/sklearn.png";
import opencv_img from "../assets/opencv.png";
import pytorch_img from "../assets/pytorch.png";
import jquery_img from "../assets/jquery.png";
import qt_img from "../assets/qt.png";

function Library() {
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
      {/* Numpy section */}
      <div className="Skill-content-container">
        <img
          src={numpy_img}
          width="330"
          className="Skill-content-image"
          alt="numpy"
        />
      </div>
      <div className="Skill-content-layout">
        <h1 className="Typewritter2">Numpy</h1>
        <p className="Skill-content-description">
          This is the python-based library that I mostly used for manipulating
          arrays. This library's very helpful because it is able to manipulate
          many arrays which would like to be very helpful for us in order to
          create Machine Learning or Deep Learning models.
        </p>
      </div>

      <div className="Skill-content-layout">
        <h1 className="Skill-content-gauge-text">Confidence</h1>
        <GaugeChart
          id="numpy-gauge"
          animate={false}
          needleColor="#464A4F"
          needleBaseColor="white"
          nrOfLevels={40}
          percent={0.95}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#2eb3b8", "#2e2eb8"]}
          className="Skill-gauge"
        />
      </div>

      {/* Scikit-Learn section */}
      <div className="Skill-content-container">
        <img
          src={sklearn_img}
          width="330"
          className="Skill-content-image"
          alt="sklearn"
        />
      </div>
      <div className="Skill-content-layout">
        <h1 className="Typewritter2">Scikit-Learn</h1>
        <p className="Skill-content-description">
          This is the python-based library that I generally use to create
          machine learning models. This library's very helpful since it provides
          so many features that help us to create predictive models for many
          different cases.
        </p>
      </div>

      <div className="Skill-content-layout">
        <h1 className="Skill-content-gauge-text">Confidence</h1>
        <GaugeChart
          id="sklearn-gauge"
          animate={false}
          needleColor="#464A4F"
          needleBaseColor="white"
          nrOfLevels={40}
          percent={0.95}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#2e6ab8", "#b86a2e"]}
          className="Skill-gauge"
        />
      </div>

      {/* Tensorflow section */}
      <div className="Skill-content-container">
        <img
          src={tensorflow_img}
          width="200"
          className="Skill-content-image"
          alt="tensorflow"
        />
      </div>
      <div className="Skill-content-layout">
        <h1 className="Typewritter2">Tensorflow</h1>
        <p className="Skill-content-description">
          This is the python-based library that I generally use to create neural
          network architecture. This neural network would like to get bigger and
          deeper. That's why this library used for deep learning modeling.
        </p>
      </div>

      <div className="Skill-content-layout">
        <h1 className="Skill-content-gauge-text">Confidence</h1>
        <GaugeChart
          id="tf-gauge"
          animate={false}
          needleColor="#464A4F"
          needleBaseColor="white"
          nrOfLevels={40}
          percent={0.92}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#c7b61e", "#c7591e"]}
          className="Skill-gauge"
        />
      </div>

      {/* OpenCV section */}
      <div className="Skill-content-container">
        <img
          src={opencv_img}
          width="200"
          className="Skill-content-image"
          alt="opencv"
        />
      </div>
      <div className="Skill-content-layout">
        <h1 className="Typewritter2">OpenCV</h1>
        <p className="Skill-content-description">
          This is the python and CPP-based library that I mostly used for
          various projects that work with computer vision. This library's very
          helpful since it provides various functions for graphical
          manipulation.
        </p>
      </div>

      <div className="Skill-content-layout">
        <h1 className="Skill-content-gauge-text">Confidence</h1>
        <GaugeChart
          id="opencv-gauge"
          animate={false}
          needleColor="#464A4F"
          needleBaseColor="white"
          nrOfLevels={40}
          percent={0.9}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#164fb8", "#de9918"]}
          className="Skill-gauge"
        />
      </div>

      {/* PyTorch section */}
      <div className="Skill-content-container">
        <img
          src={pytorch_img}
          width="200"
          className="Skill-content-image"
          alt="PyTorch"
        />
      </div>
      <div className="Skill-content-layout">
        <h1 className="Typewritter2">PyTorch</h1>
        <p className="Skill-content-description">
          This is the python-based library that I generally used to create a
          deep learning model using a more pythonic way. This framework's very
          helpful because it provides us with various functions which help us to
          create a more customizable deep learning architecture.
        </p>
      </div>

      <div className="Skill-content-layout">
        <h1 className="Skill-content-gauge-text">Confidence</h1>
        <GaugeChart
          id="pytorch-gauge"
          animate={false}
          needleColor="#464A4F"
          needleBaseColor="white"
          nrOfLevels={40}
          percent={0.87}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#de9918", "#de3618"]}
          className="Skill-gauge"
        />
      </div>

      {/* Jquery section */}
      <div className="Skill-content-container">
        <img
          src={jquery_img}
          width="200"
          className="Skill-content-image"
          alt="Jquery"
        />
      </div>
      <div className="Skill-content-layout">
        <h1 className="Typewritter2">Jquery</h1>
        <p className="Skill-content-description">
          This is a javascript-based frontend library that I usually use to
          create rapid web development animations. This library also provides
          various functions that help us to make frontend development easier.
        </p>
      </div>

      <div className="Skill-content-layout">
        <h1 className="Skill-content-gauge-text">Confidence</h1>
        <GaugeChart
          id="jquery-gauge"
          animate={false}
          needleColor="#464A4F"
          needleBaseColor="white"
          nrOfLevels={40}
          percent={0.86}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#3b3c3d", "#0f70d1"]}
          className="Skill-gauge"
        />
      </div>

      {/* Qt section */}
      <div className="Skill-content-container">
        <img
          src={qt_img}
          width="250"
          className="Skill-content-image"
          alt="Qt"
        />
      </div>
      <div className="Skill-content-layout">
        <h1 className="Typewritter2">Qt</h1>
        <p className="Skill-content-description">
          This is the python and CPP-based library that I mostly use to create
          desktop applications GUI. This library gives a various function that
          we need to create a beautiful desktop interface and also help us in
          embedded system creation.
        </p>
      </div>

      <div className="Skill-content-layout">
        <h1 className="Skill-content-gauge-text">Confidence</h1>
        <GaugeChart
          id="qt-gauge"
          animate={false}
          needleColor="#464A4F"
          needleBaseColor="white"
          nrOfLevels={40}
          percent={0.82}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#ceded1", "#24d143"]}
          className="Skill-gauge"
        />
      </div>
    </motion.div>
  );
}

export default Library;
