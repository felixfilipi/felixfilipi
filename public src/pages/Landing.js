import { Link } from "react-router-dom";
import image from "../assets/pp.jpeg";
import Typewriter from "typewriter-effect";

function Landing(props) {
  return (
    <div className="Landing">
      <div className="Landing-mask">
        <div className="Landing-container">
          <div className="Landing-container-image">
            <div className="Landing-container-layout">
              <div className="Landing-container-text">
                <button className="Landing-text-1">
                  Discover my amazing journey!
                </button>
                <p className="Landing-text-2">
                  <Typewriter
                    options={{
                      strings: [
                        "All about <span class='Typewritter '>Programming</span> & me",
                        "All about <span class='Typewritter '>Electrical Engineering</span> & me",
                        "All about <span class='Typewritter '>Artificial Intelligent</span> & me",
                        "All about <span class='Typewritter'>Astronomy</span> & me",
                        "All about <span class='Typewritter'>Chess</span> & me",
                        "All about <span class='Typewritter'>Books</span> & me",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </p>

                <Link to="/journey">
                  <button className="Landing-button">To My Journey</button>
                </Link>
              </div>
              <img
                src={image}
                width={"300"}
                className="Landing-image"
                alt="Landing"
              />
            </div>
          </div>
        </div>
        <h1 className="Top-skill">Top Skill</h1>
        <div className="Top-skill-layout">
          <div className="Top-skill-container">
            <h1 className="Top-skill-header">Python</h1>
            <hr />
            <p className="Top-skill-body">
              This is the programming language that I am most familiar with.
              Generally, I use this language to create machine learning or deep
              learning models with the help of several libraries like NumPy,
              TensorFlow, and PyTorch.
            </p>
          </div>

          <div className="Top-skill-container">
            <h1 className="Top-skill-header">C++</h1>
            <hr />
            <p className="Top-skill-body">
              This is a programming language that I generally use as a low-level
              programming language. In general, I use this language to create
              software that emphasizes performance in the form of speed in it,
              such as embedded systems, and others.
            </p>
          </div>

          <div className="Top-skill-container">
            <h1 className="Top-skill-header">Javascript</h1>
            <hr />
            <p className="Top-skill-body">
              This is the programming language that I generally use for web
              development. This development includes both frontend and backend.
              Usually, this programming language is integrated with several
              frameworks such as React and others..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
