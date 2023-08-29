import { motion } from "framer-motion";
import Stepper from "../components/Stepper";
import binus_img from "../assets/binus.png";
import bca_img from "../assets/bca.png";
import icstar_img from "../assets/icstar.png";
import indigo_img from "../assets/indigo.png";
import kinetik_img from "../assets/kinetik.png";
import iccsci_img from "../assets/iccsci.png";

function Experience() {
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
      className="p-3"
    >
      <div className="Working-container">
        <div className="Experience-mask">
          <div className="Top-Project-skew-label">Working Experience</div>
          <div className="Experience-layout">
            {/* BCA section */}
            <div className="Experience-content-layout">
              <div className="Experience-item-layout">
                <div className="my-auto">
                  <img
                    src={bca_img}
                    width={350}
                    alt="BCA"
                    className="Experience-image"
                  />
                  <h1 className="Experience-place">Bank Central Asia</h1>
                </div>
                <div className="Experience-about">
                  <h1 className="Experience-title">
                    Data Analyst - Internship
                  </h1>
                  <p className="Experience-time">Feb 2022 - Now</p>
                  <p className="Experience-description">
                    1. Collect and Analyze data from the bank's database to
                    solve given problems.
                    <br />
                    <br />
                    2. Automate data collection and analysis using ETL tools
                    such as SSIS.
                    <br />
                    <br />
                    3. Create reports and charts using SSRS to visualize the
                    data.
                    <br />
                    <br />
                    4. Create a web form using ASP.NET MVC C# to manage the
                    data.
                    <br />
                    <br />
                    5. Deploy reports and charts to the bank's website.
                  </p>
                </div>
              </div>
            </div>

            {/* Binus section */}
            <div className="Experience-content-layout">
              <div className="Experience-item-layout ">
                <div className="my-auto">
                  <img
                    src={binus_img}
                    width={350}
                    alt="BCA"
                    className="Experience-image"
                  />
                  <h1 className="Experience-place -mt-4">Bina Nusantara</h1>
                </div>
                <div className="Experience-about">
                  <h1 className="Experience-title">
                    Research Assitant - Seasonal
                  </h1>
                  <p className="Experience-time">Oct 2020 - Now</p>
                  <p className="Experience-description">
                    1. Configure, maintain, and benchmark High Availability
                    Cluster Server.
                    <br />
                    <br />
                    2. Develop Arduino for hardware implementation and Face
                    recognition system for attendance system.
                    <br />
                    <br />
                    3. Develop dashboard interface using HTML, tailwindCSS,
                    SCSS, and Javascript - Jquery.
                    <br />
                    <br />
                    4. Develop robotic process automation to crawl data through
                    the website.
                    <br />
                    <br />
                    5. Develop machine learning & deep learning model for
                    various projects initiated by lecturers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Honor Section */}
      <div className="Honor-container">
        <div className="Experience-mask">
          <div className="Top-Project-skew-label">Honor & Award</div>
          <div className="Experience-layout">
            {/* ICStar section */}
            <div className="Experience-content-layout">
              <div className="Experience-item-layout">
                <div className="my-auto">
                  <img
                    src={icstar_img}
                    width={350}
                    alt="ICStar"
                    className="Experience-image"
                  />
                  <h1 className="Experience-place mt-8">
                    ICStar Hackathon 2021
                  </h1>
                </div>
                <div className="Experience-about">
                  <h1 className="Experience-title">
                    1st winner of ICStar Hackathon Indonesia-Malaysia 2021
                  </h1>
                  <p className="Experience-time">Oct 2021</p>
                  <p className="Experience-description">
                    Develop automation using RPA which will scrape for
                    information from the business desired by the user (BCA)
                    through a website application called Google Maps. All
                    retrieved data will be mapped to find its nearest bank and
                    find for its distance to predict it as a potential customer
                    using a machine learning algorithm. Each completed or on
                    progress process status will be sent via Telegram to inform
                    the customer about the process of the robot.
                  </p>
                </div>
              </div>
            </div>

            {/* Indigo section */}
            <div className="Experience-content-layout">
              <div className="Experience-item-layout">
                <div className="my-auto">
                  <img
                    src={indigo_img}
                    width={350}
                    alt="Indigo Hackathon"
                    className="Experience-image sm:ml-4"
                  />
                  <h1 className="Experience-place mt-6">Indigo Hackathon</h1>
                </div>
                <div className="Experience-about">
                  <h1 className="Experience-title">
                    Finalist of Indigo Hackathon Festival (IHF) 2021
                  </h1>
                  <p className="Experience-time">Sep 2021</p>
                  <p className="Experience-description">
                    • Top 30 out of 419 teams in Indigo Hackathon Festival held
                    by Indigo Creative Nation under the theme of
                    TransformNation.
                    <br />
                    <br />
                    • Finalist in Health & Home Intelligence category.
                    <br />
                    <br />• Develop a new biometric face recognition-based
                    attendance system with automatic contactless thermal
                    measurement, real-time camera streaming & recording which is
                    managed by web-based data management system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Publication Section */}
      <div className="Publication-container">
        <div className="Experience-mask">
          <div className="Top-Project-skew-label">Publication</div>
          <div className="Experience-layout">
            {/* ICCSCI section */}
            <div className="Experience-content-layout">
              <div className="Experience-item-layout">
                <div className="my-auto">
                  <img
                    src={iccsci_img}
                    width={350}
                    alt="ICCSCI"
                    className="Experience-image"
                  />
                  <h1 className="Experience-place mt-8">
                    6th International International Conference on Computer
                    Science and Computational Intelligence
                  </h1>
                </div>
                <div className="Experience-about">
                  <a href="https://www.sciencedirect.com/science/article/pii/S1877050922022591">
                    <h1 className="Experience-title">
                      Measuring The Percentage of Brain Concentration Levels Using
                      Bi-LSTM Algorithm
                    </h1>
                  </a>
                  <p className="Experience-time">January 2023</p>
                  <p className="Experience-description">
                    We propose a way to measure the percentage of brain concentration 
                    level using deep learning approach for EEG signal generated 
                    by our brain. The EEG signal will be used as training and testing 
                    datasets to automate the measurement of concentration level using 
                    Bidirectional Long Short-Term Memory (BiLSTM) algorithm which is 
                    successfully able to measure the person's concentration level 
                    on a scale of 1 to 100.                  
                  </p>
                </div>
              </div>
            </div>

            {/* Kinetik section */}
            <div className="Experience-content-layout">
              <div className="Experience-item-layout">
                <div className="my-auto">
                  <img
                    src={kinetik_img}
                    width={220}
                    alt="Kinetik"
                    className="Experience-image"
                  />
                  <h1 className="Experience-place mt-6">Kinetik UM</h1>
                </div>
                <div className="Experience-about">
                  <a href="https://kinetik.umm.ac.id/index.php/kinetik/article/view/1162">
                    <h1 className="Experience-title">
                      Design and Implementation LETS (Low Power Cluster Server)
                      for Sustaining UMKM during Pandemic
                    </h1>
                  </a>
                  <p className="Experience-time">Feb 2021</p>
                  <p className="Experience-description">
                    We propose small cluster server called as LETS. LETS is
                    modular, and composed with several Raspberry Pi 4, also
                    consume few energies compared with traditional server.
                    Although Raspberry Pi 4 is small size with few limitations,
                    with lightweight application (ansible, k3s, and nginx) it
                    can provide web server service. LETS provide handling
                    traffic up to 742 simultaneus requests, which sufficient of
                    SME requirement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Stepper pages={3} />
    </motion.div>
  );
}

export default Experience;
