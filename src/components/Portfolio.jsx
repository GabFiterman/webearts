import { Link } from "react-router-dom";
import "../scss/portfolio.scss";
import textData from "../data/text-main.json";
import porfolioData from "../data/portfolio.json";

const _t = textData.Portfolio;

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
              src={`/public/img/portfolio/${project.general.thumbnailName}${project.general.thumbnailExtension}`}
              alt={`Card para o projeto ${project.company.name}`}
              className="Portfolio__gallery--card--image"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Portfolio() {
  return (
    <div className="Portfolio">
      <h1 className="title title-big Portfolio--title">{_t.title}</h1>
      <PortfolioGallery />
    </div>
  );
}
