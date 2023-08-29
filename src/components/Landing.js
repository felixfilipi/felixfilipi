import { Link } from "react-router-dom";
import image from "../assets/pp.jpeg";
import eyes_img from "../assets/eyes.png";
import hydrovest_img from "../assets/hydrovest.png";
import cluster_img from "../assets/cluster.png";
import Typewriter from "typewriter-effect";

function Landing() {
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
                  <button className="Landing-button">Start Our Journey</button>
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

        <div className="Top-Project-container">
          <div className="Top-Project-skew-label">Featured Projects</div>
          <div className="Top-skill-layout">
            {/* e-Eyes section */}
            <a
              className="Top-Project-content-layout"
              href="https://github.com/felixfilipi/e-Eyes-Attendance-System"
            >
              <div className="my-auto">
                <img
                  src={eyes_img}
                  width={350}
                  alt="e-Eyes"
                  className="Top-Project-image"
                />
              </div>
              <div className="Top-Project-about-2">
                <h1 className="Top-Project-title">e-Eyes</h1>
                <p className="Top-Project-description">
                  This repository aims to build a face recognition attendance
                  system with a temperature scanning feature, and also work as
                  CCTV for our home automation
                </p>
              </div>
            </a>

            {/* hydrovest section */}
            <a
              className="Top-Project-content-layout"
              href="https://github.com/felixfilipi/Hydrovest-Monitoring-System"
            >
              <div className="my-auto">
                <img
                  src={hydrovest_img}
                  width={350}
                  alt="hydrovest"
                  className="Top-Project-image"
                />
              </div>
              <div className="Top-Project-about-2">
                <h1 className="Top-Project-title">Hydrovest</h1>
                <p className="Top-Project-description">
                  This repository is intended to build fully automated
                  aquaponics monitoring system, using a public server. This
                  monitoring system will work together with AI to detect leaf
                  spot disease and return the classification to the user from
                  the web interface.
                </p>
              </div>
            </a>

            {/* Cluster section */}
            <a
              className="Top-Project-content-layout"
              href="https://github.com/felixfilipi/Active-Active-High-Availability-Cluster-Server"
            >
              <div className="my-auto">
                <img
                  src={cluster_img}
                  width={350}
                  alt="Cluster"
                  className="Top-Project-image"
                />
              </div>
              <div className="Top-Project-about-2">
                <h1 className="Top-Project-title">Cluster Server</h1>
                <p className="Top-Project-description">
                  This repository aims to build a High Availability Cluster
                  Server with Load Balancer using HAProxy, KeepAlive, and NGINX.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
