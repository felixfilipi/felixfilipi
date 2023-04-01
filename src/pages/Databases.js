import { motion } from "framer-motion";
import GaugeChart from "react-gauge-chart";
import mysql_img from "../assets/mysql.png";
import mongo_img from "../assets/mongo.png";
import oracle_img from "../assets/oracle.png";
import hive_img from "../assets/hive.png";
import postgres_img from "../assets/postgres.png";

function Databases() {
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
      {/* Oracle section */}
      <div className="Skill-content-container">
        <img
          src={oracle_img}
          width="200"
          className="Skill-content-image"
          alt="oracle"
        />
      </div>
      <div className="Skill-content-layout">
        <h1 className="Typewritter2">Oracle SQL</h1>
        <p className="Skill-content-description">
          This is the most frequent database that I usually use for my job.
          Since I'm doing an internship as a data analyst, which uses oracle as
          its database, this helps me to understand how oracle SQL works
          in-depth.
        </p>
      </div>
      <div className="Skill-content-layout">
        <h1 className="Skill-content-gauge-text">Confidence</h1>
        <GaugeChart
          id="oracle-gauge"
          animate={false}
          needleColor="#464A4F"
          needleBaseColor="white"
          nrOfLevels={40}
          percent={0.95}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#c28a86", "#d62013"]}
          className="Skill-gauge"
        />
      </div>

      {/* Postgres section */}
      <div className="Skill-content-container">
        <img
          src={postgres_img}
          width="200"
          className="Skill-content-image"
          alt="postgres"
        />
      </div>
      <div className="Skill-content-layout">
        <h1 className="Typewritter2">PostgreSQL</h1>
        <p className="Skill-content-description">
          This is the most frequent database that I usually use in my projects.
          Since PostgreSQL most known for its performance and is completely free and
          open-sourced, this led PostgreSQL to become an absolutely good choice for
          project development since we don't need to pay for its license.
        </p>
      </div>

      <div className="Skill-content-layout">
        <h1 className="Skill-content-gauge-text">Confidence</h1>
        <GaugeChart
          id="postgres-gauge"
          animate={false}
          needleColor="#464A4F"
          needleBaseColor="white"
          nrOfLevels={40}
          percent={0.93}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#336791", "#FFFFFF"]}
          className="Skill-gauge"
        />
      </div>
      
      {/* MySQL section */}
      <div className="Skill-content-container">
        <img
          src={mysql_img}
          width="200"
          className="Skill-content-image"
          alt="mysql"
        />
      </div>
      <div className="Skill-content-layout">
        <h1 className="Typewritter2">MySQL</h1>
        <p className="Skill-content-description">
          This is popular open source database that I usually use for small projects.
          Since MySQL works best for a small project and is completely free and
          open-sourced, this led MySQL to become an absolutely good choice for
          project development since we don't need to pay for its license.
        </p>
      </div>

      <div className="Skill-content-layout">
        <h1 className="Skill-content-gauge-text">Confidence</h1>
        <GaugeChart
          id="mysql-gauge"
          animate={false}
          needleColor="#464A4F"
          needleBaseColor="white"
          nrOfLevels={40}
          percent={0.91}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#367ab5", "#b0a32e"]}
          className="Skill-gauge"
        />
      </div>

      {/* Mongo section */}
      <div className="Skill-content-container">
        <img
          src={mongo_img}
          width="200"
          className="Skill-content-image"
          alt="mongo"
        />
      </div>
      <div className="Skill-content-layout">
        <h1 className="Typewritter2">Mongo DB</h1>
        <p className="Skill-content-description">
          This is the most frequent NoSQL database that I usually use for
          projects that focused on flexibility and speed performance. Since
          there's no relational constraint and doesn't need to be even tabular,
          NoSQL would be perfectly fit for several projects that have
          flexibility in its data.
        </p>
      </div>

      <div className="Skill-content-layout">
        <h1 className="Skill-content-gauge-text">Confidence</h1>
        <GaugeChart
          id="mongo-gauge"
          animate={false}
          needleColor="#464A4F"
          needleBaseColor="white"
          nrOfLevels={40}
          percent={0.88}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#404040", "#27b030"]}
          className="Skill-gauge"
        />
      </div>

      {/* Hive section */}
      <div className="Skill-content-container">
        <img
          src={hive_img}
          width="200"
          className="Skill-content-image"
          alt="hive"
        />
      </div>
      <div className="Skill-content-layout">
        <h1 className="Typewritter2">Hive</h1>
        <p className="Skill-content-description">
          This is the most frequent data warehouse that I usually use to query
          and analyze large datasets. Hive is good enough for big data since
          it's designed to work quickly on petabytes of data. But for some
          reason (mainly processing speed), this data warehouse has already been
          deprecated, and I'm going to migrate this to impala or other database
          technology.
        </p>
      </div>

      <div className="Skill-content-layout">
        <h1 className="Skill-content-gauge-text">Confidence</h1>
        <GaugeChart
          id="hive-gauge"
          animate={false}
          needleColor="#464A4F"
          needleBaseColor="white"
          nrOfLevels={40}
          percent={0.84}
          arcWidth={0.25}
          style={gaugeStyle}
          colors={["#4c4d30", "#bfc41b"]}
          className="Skill-gauge"
        />
      </div>
    </motion.div>
  );
}

export default Databases;
