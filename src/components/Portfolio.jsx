import { Link } from "react-router-dom";
import porfolioData from "../data/portfolio.json";
import "../scss/portfolio.scss";

function PortfolioGallery() {
  return (
    <ul className="Portfolio__gallery">
      {porfolioData.map((project) => (
        <li key={project.id} className="Portfolio__gallery--item">
          <Link
            to={`/portfolio/${project.id}`}
            className="Portfolio__gallery--card"
          >
            <img
              src={`/public/img/portfolio/${project.company.slug}/${project.general.thumbnailName}${project.general.thumbnailExtension}`}
              alt={`Card para o projeto ${project.company.name}`}
              className="Portfolio__gallery--card--image"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
function PortfolioHighlight({ projectNames }) {
  return (
    <div className="Portfolio__highlight">
      {porfolioData
        .filter((project) => projectNames.includes(project.company.name))
        .map((project, index) => (
          <div
            key={project.id}
            className={`Portfolio__highlight--card ${
              index === 0 ? "card1" : "card2"
            }`}
          >
            <div className="Portfolio__highlight--card--heading">
              <img
                className="Portfolio__highlight--heading--logo"
                src={`/public/img/portfolio/${project.company.slug}/${project.company.logoFile}`}
                alt={`Logo da empresa ${project.company.name}`}
              />
              <h3 className="title Portfolio__highlight--heading--title">
                {project.company.name}
              </h3>
            </div>
            <img
              className="Portfolio__highlight--thumbnail"
              src={`/public/img/portfolio/${project.company.slug}/${project.general.thumbnailName}${project.general.thumbnailExtension}`}
              alt={`Card para o projeto ${project.company.name}`}
            />
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
    <div className="Portfolio">
      <div className="d-flex align-items-center justify-content-between">
        <h1 className="title title-big Portfolio--title">{_t.title}</h1>
        <div className="d-flex align-items-center">
          <img
            className="Portfolio--image--badge"
            alt="Astronauta clique-me"
            src={badgeTouchMeSrc}
          />
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
