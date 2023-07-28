import React from "react";
import "../scss/IconTech.scss";
import textData from "../data/text-main.json";
import { useState } from "react";

const IconTech = (props) => {
  const { techName } = props;
  const techList = textData.Portfolio.techonologiesList;
  const [showName, setShowName] = useState(false);

  function getIcon(techName) {
    const icon = techList.find((icon) => icon.name === techName);
    return icon ? icon.iconSrc : "Icon-Default.webp";
  }

  function handleMouseEnter() {
    setShowName(true);
  }

  function handleMouseLeave() {
    setShowName(false);
  }

  return (
    <div className="Icon">
      {showName ? <p className="NameTech">{techName}</p> : <div className="NameTechPlaceholder"></div>}
      <img
        className={`IconTech ${props.index % 2 === 0 ? "with-delay" : ""}`}
        src={`/img/tech_icons/${getIcon(techName)}`}
        alt={techName}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

export default IconTech;
