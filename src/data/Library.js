import numpy_img from "../assets/numpy.png";
import tensorflow_img from "../assets/tensorflow.png";
import sklearn_img from "../assets/sklearn.png";
import opencv_img from "../assets/opencv.png";
import pytorch_img from "../assets/pytorch.png";
import jquery_img from "../assets/jquery.png";
import qt_img from "../assets/qt.png";
import boost_img from "../assets/boost.png";

let images = [
  numpy_img,
  sklearn_img,
  tensorflow_img,
  opencv_img,
  pytorch_img,
  qt_img,
  jquery_img,
  boost_img,
]
let width = [null, null, null, null, null, null, null, null]
let skillNames = ["Numpy", "Scikit-Learn", "TensorFlow", "OpenCV", "PyTorch", "QT", "JQuery", "Boost"]
let gaugePercentages = [0.95, 0.95, 0.92, 0.9, 0.88, 0.88, 0.85, 0.84]
let skillDescriptions = [
  "This is the python-based library that I mostly used for manipulating arrays. This library's very helpful because it is able to manipulate many arrays which would like to be very helpful for us in order to create Machine Learning or Deep Learning models.",
  "This is the python-based library that I generally use to create machine learning models. This library's very helpful since it provides so many features that help us to create predictive models for many different cases.",
  "This is the python-based library that I generally use to create neural network architecture. This neural network would like to get bigger and deeper. That's why this library used for deep learning modeling.",
  "This is the python and CPP-based library that I mostly used for various projects that work with computer vision. This library's very helpful since it provides various functions for graphical manipulation.",
  "This is the python-based library that I generally used to create a deep learning model using a more pythonic way. This framework's very helpful because it provides us with various functions which help us to create a more customizable deep learning architecture.",
  "This is the python and CPP-based library that I mostly use to create desktop applications GUI. This library gives a various function that we need to create a beautiful desktop interface and also help us in embedded system creation.",
  "This is a javascript-based frontend library that I usually use to create rapid web development animations. This library also provides various functions that help us to make frontend development easier.",
  "This is a free peer-reviewed portable C++ source libraries that work well with C++ standard Library. I generally use this library to do various tasks and structures such as linear algebra, multithreading, regular expression and many more.",
]
let description = ["numpy", "sklearn", "tf", "opencv", "pytorch", "qt", "jquery", "boost"]
let gaugeColors = [["#2eb3b8", "#2e2eb8"], ["#2e6ab8", "#b86a2e"], ["#c7b61e", "#c7591e"], ["#164fb8", "#de9918"], ["#de9918", "#de3618"], ["#ceded1", "#24d143"], ["#3b3c3d", "#0f70d1"], ["#8CBCF9", "#405A7B"]]

let JSON = {
  "images":images, 
  "width":width,
  "skillNames":skillNames, 
  "gaugePercentages":gaugePercentages, 
  "skillDescriptions":skillDescriptions, 
  "description":description, 
  "gaugeColors":gaugeColors
}

export default JSON;
