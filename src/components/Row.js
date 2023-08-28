export default function Row(props){
    return(
        <div>
            <div className="Skill-content-container">
                <img
                src={props.image}
                width="200"
                className="Skill-content-image"
                alt={props.desc}
                />
            </div>
            <div className="Skill-content-layout">
                <h1 className="Typewritter2">{props.skillName}</h1>
                <p className="Skill-content-description">
                    {prop.skillDesc}
                </p>
            </div>
            <div className="Skill-content-layout">
                <h1 className="Skill-content-gauge-text">Confidence</h1>
                <GaugeChart
                id={props.desc}
                animate={false}
                needleColor="#464A4F"
                needleBaseColor="white"
                nrOfLevels={40}
                percent={props.confidence}
                arcWidth={0.25}
                style={{width: "300px"}}
                colors={props.gaugeColor}
                className="Skill-gauge"
                />
            </div>
        </div>
    )
}