import cpp_img from "../assets/cpp.png";
import python_img from "../assets/python.png";
import js_img from "../assets/JavaScript.png";
import cs_img from "../assets/cs.png";
import java_img from "../assets/java.png";
import kotlin_img from "../assets/kotlin.png";
import r_img from "../assets/R.png";
import ts_img from "../assets/ts.png";
import golang_img from "../assets/golang.png";

let images = [
  python_img,
  cpp_img,
  js_img,
  ts_img,
  java_img,
  golang_img,
  cs_img,
  kotlin_img,
  r_img
]
let width = [null, null, null, null, null, "250", null, null, null]
let skillNames = ["Python", "C++", "JavaScript", "TypeScript", "Java", "Golang", "C#", "Kotlin", "R"]
let gaugePercentages = [0.96, 0.93, 0.9, 0.89, 0.87, 0.85, 0.84, 0.82, 0.8]
let skillDescriptions = [
  "This is the most familiar programming language that I have ever used.Generally, I use this language to create machine learning or deep learning models with the help of several libraries like NumPy, TensorFlow, and PyTorch.",
  "This is a programming language that I generally use as a low-level programming language. In general, I use this language to create software that emphasizes performance in the form of speed, such as embedded systems, robotics, etc.",
  "This is the programming language that I generally use for web development. This development includes both frontend and backend. Usually, this programming language is integrated with several frameworks such as React, etc.",
  "This is the programming language that I generally use as superset of javascript in web development. This development includes both frontend and backend. Usually, this programming language is integrated with several frameworks such as React, express, etc.",
  "This is the programming language that I generally use in development of microservice based architecture. This language best known for its speed performance in microservice application. ",
  "This is the programming language that I generally use for web development and enterprise software. This programming language worked as a backend or server-side application. Usually, this programming language is bundled in the .NET platform.",
  "This is the high-level programming language that I mostly use for mobile development. This language is an official language to create native mobile application development. Mostly I use the android studio as its IDE.",
  "This is the high-level programming language that I generally use for mobile development or enteprises application. This programming language helps me to create complex structured applications since it is an object-oriented language. I rarely used this language unless the stack itself told me to use this language since I don't see any reasonable benefit by using this language instead the other languages.",
  "This is the programming language that I generally use for data analytics and data mining. This language helps me create predictive modeling and mine important data in various built-in packages.",
]
let description = ["python", "cpp", "js", "ts", "java", "golang", "c#", "kotlin", "r"]
let gaugeColors = [["#03eeff", "#cc1002"], ["#03ffd9", "#1c03ff"], ["#e2ff03", "#ff4a03"], ["#FFFFFF", "#2D79C7"], ["#1e11ad", "#ad1111"], ["#ff03cd", "#7d14d9"], ["#54d1ff", "#f07d0a"], ["#00d0ff", "#2d79c7"], ["#5c5b63", "#6354ff"]]

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
