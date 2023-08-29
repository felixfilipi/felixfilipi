import mysql_img from "../assets/mysql.png";
import mongo_img from "../assets/mongo.png";
import oracle_img from "../assets/oracle.png";
import hive_img from "../assets/hive.png";
import postgres_img from "../assets/postgres.png";

let images = [oracle_img, postgres_img, mysql_img, mongo_img, hive_img]
let width = [null, null, null, null, null]
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
