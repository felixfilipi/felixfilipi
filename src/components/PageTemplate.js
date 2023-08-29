import { motion } from "framer-motion";
import Row from "../components/Row";

export default function PageTemplate(props) {
  const pageVariant = {
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: "-100vw" },
    scale: 1,
  };

  const pageTransition = {
    type: "tween",
    duration: 1,
  };

  let body = [];
  for (let i = 0; i < props.images.length; i++) {
    body.push(<Row 
      image={props.images[i]}
      width={props.width[i]}
      desc={props.description[i]}
      skillName={props.skillNames[i]}
      skillDesc={props.skillDescriptions[i]}
      confidence={props.gaugePercentages[i]}
      gaugeColor={props.gaugeColors[i]}/>);
  }

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="exit"
      variants={pageVariant}
      transition={pageTransition}
      className="Skill-layout"
    >
      {body}
    </motion.div>
  );
}

