import "../scss/portfolio.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import porfolioData from "../data/portfolio.json";

export function PortfolioGallery() {
  const [clickedCardId, setClickedCardId] = useState(null);
  const navigate = useNavigate();

  const handleClick = (projectId) => {
    if (clickedCardId === projectId) {
      navigate(`/portfolio/${projectId}`)
    } else {
      setClickedCardId(projectId);
    }
  };

  return (
    <ul className="Portfolio__gallery px-md-4 mx-lg-4" id="portfolio__gallery">
      {porfolioData.map((project) => (
          <li key={project.id} className={`Portfolio__gallery--item  ${clickedCardId === project.id ? 'noBlur' : ''}`} onClick={() => handleClick(project.id)}>
            <img
              src={`/public/img/portfolio/${project.company.slug}/${project.general.thumbnailName}${project.general.thumbnailExtension}`}
              alt={`Card para o projeto ${project.company.name}`}
              className={`Portfolio__gallery--card--image`}
            />
          </li>
      ))}
    </ul>
  );
}

function PortfolioHighlight({ projectNames }) {
  const [clickedCardId, setClickedCardId] = useState(null);
  const navigate = useNavigate();

  const handleClick = (projectId) => {
    if (clickedCardId === projectId) {
      navigate(`/portfolio/${projectId}`);
    } else {
      setClickedCardId(projectId);
    }
  };

  return (
    <div className="Portfolio__highlight">
      {porfolioData
        .filter((project) => projectNames.includes(project.company.name))
        .map((project, index) => (
          <div
            key={project.id}
            className={`Portfolio__highlight--card ${
              index === 0 ? "card1" : "card2"
            } ${clickedCardId === project.id ? "noBlur" : ""}`}
            onClick={() => handleClick(project.id)}
          >
              <div className="Portfolio__highlight--thumbnail--container">
                <img
                  className="Portfolio__highlight--thumbnail"
                  src={`/public/img/portfolio/${project.company.slug}/${project.general.thumbnailName}${project.general.thumbnailExtension}`}
                  alt={`Card para o projeto ${project.company.name}`}
                />
              </div>
          </div>
        ))}
    </div>
  );
}

export default function Portfolio({ _t }) {
  const highlihtProjects = ["Trust Cleaning", "Dry Clean"];
  const astronautTouchMeSrc =
    "/public/img/astronauts/Astronaut_Genial+Switch-Aceso.png";
  const badgeTouchMeSrc = "/public/img/astronauts/Balao_Dialogo.png";

  return (
    <div className="Portfolio mx-4">
      <div className="d-flex align-items-end justify-content-between">
        <h1 className="title title-big Portfolio--title mx-2">{_t.title}</h1>
        <div className="d-flex align-items">
          {/* <img
            className="Portfolio--image--badge"
            alt="Astronauta clique-me"
            src={badgeTouchMeSrc}
          /> */}
          <img
            className="Portfolio--image--astronaut"
            alt="Astronauta clique-me"
            src={astronautTouchMeSrc}
          />
        </div>
      </div>
      <PortfolioHighlight projectNames={highlihtProjects} />
      <PortfolioGallery />
    </div>
  );
}
