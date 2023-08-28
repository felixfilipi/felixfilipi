import { motion } from "framer-motion";
import GaugeChart from "react-gauge-chart";
import mysql_img from "../assets/mysql.png";
import mongo_img from "../assets/mongo.png";
import oracle_img from "../assets/oracle.png";
import hive_img from "../assets/hive.png";
import postgres_img from "../assets/postgres.png";
import Row from "../components/Row";

export default function Databases() {

  const pageVariant = {
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: "-100vw" },
    scale: 1,
  };

  const pageTransition = {
    type: "tween",
    duration: 1,
  };

//  let images = [oracle_img, postgres_img, mysql_img, mongo_img, hive_img]
  let images = [
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4aad9db0-a91e-4789-a991-d259631818ff/d6880u0-04f31515-709b-4f70-9884-1008a4b7714e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRhYWQ5ZGIwLWE5MWUtNDc4OS1hOTkxLWQyNTk2MzE4MThmZlwvZDY4ODB1MC0wNGYzMTUxNS03MDliLTRmNzAtOTg4NC0xMDA4YTRiNzcxNGUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4iTDWIg2wkGpZT3bnYOmChyV9Lkp2WHeiK8TBMP0pj0",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4aad9db0-a91e-4789-a991-d259631818ff/d6880u0-04f31515-709b-4f70-9884-1008a4b7714e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRhYWQ5ZGIwLWE5MWUtNDc4OS1hOTkxLWQyNTk2MzE4MThmZlwvZDY4ODB1MC0wNGYzMTUxNS03MDliLTRmNzAtOTg4NC0xMDA4YTRiNzcxNGUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4iTDWIg2wkGpZT3bnYOmChyV9Lkp2WHeiK8TBMP0pj0",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4aad9db0-a91e-4789-a991-d259631818ff/d6880u0-04f31515-709b-4f70-9884-1008a4b7714e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRhYWQ5ZGIwLWE5MWUtNDc4OS1hOTkxLWQyNTk2MzE4MThmZlwvZDY4ODB1MC0wNGYzMTUxNS03MDliLTRmNzAtOTg4NC0xMDA4YTRiNzcxNGUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4iTDWIg2wkGpZT3bnYOmChyV9Lkp2WHeiK8TBMP0pj0",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4aad9db0-a91e-4789-a991-d259631818ff/d6880u0-04f31515-709b-4f70-9884-1008a4b7714e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRhYWQ5ZGIwLWE5MWUtNDc4OS1hOTkxLWQyNTk2MzE4MThmZlwvZDY4ODB1MC0wNGYzMTUxNS03MDliLTRmNzAtOTg4NC0xMDA4YTRiNzcxNGUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4iTDWIg2wkGpZT3bnYOmChyV9Lkp2WHeiK8TBMP0pj0",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4aad9db0-a91e-4789-a991-d259631818ff/d6880u0-04f31515-709b-4f70-9884-1008a4b7714e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRhYWQ5ZGIwLWE5MWUtNDc4OS1hOTkxLWQyNTk2MzE4MThmZlwvZDY4ODB1MC0wNGYzMTUxNS03MDliLTRmNzAtOTg4NC0xMDA4YTRiNzcxNGUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4iTDWIg2wkGpZT3bnYOmChyV9Lkp2WHeiK8TBMP0pj0",
  ]
  let skillNames = ["Oracle SQL", "PostgreSQL", "MySQL", "Mongo DB", "Hive"]
  let gaugePercentages = [0.95, 0.93, 0.91, 0.88, 0.84]
  let skillDescriptions = [
    "This is the most frequent database that I usually use for my job. Since I'm doing an internship as a data analyst, which uses oracle as its database, this helps me to understand how oracle SQL works in-depth.",
    "This is the most frequent database that I usually use in my projects.Since PostgreSQL most known for its performance and is completely free and open-sourced, this led PostgreSQL to become an absolutely good choice for project development since we don't need to pay for its license.",
    "This is popular open source database that I usually use for small projects. Since MySQL works best for a small project and is completely free and open-sourced, this led MySQL to become an absolutely good choice for project development since we don't need to pay for its license.",
    "This is the most frequent NoSQL database that I usually use for projects that focused on flexibility and speed performance. Since there's no relational constraint and doesn't need to be even tabular, NoSQL would be perfectly fit for several projects that have flexibility in its data.",
    "This is the most frequent data warehouse that I usually use to query and analyze large datasets. Hive is good enough for big data since it's designed to work quickly on petabytes of data. But for some reason (mainly processing speed), this data warehouse has already been deprecated, and I'm going to migrate this to impala or other database technology.",
  ]
  let description = ["oracle", "postgres", "mysql", "mongo", "hive"]
  let gaugeColors = [["#c28a86", "#d62013"], ["#336791", "#FFFFFF"], ["#367ab5", "#b0a32e"], ["#404040", "#27b030"], ["#4c4d30", "#bfc41b"]]

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