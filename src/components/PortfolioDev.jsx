import "../scss/portfolioDev.scss";
import portfolioData from "../data/portfolio-dev.json";
import { useNavigate } from "react-router-dom";

function MainBanner({mainSource}) {
  const { type, host, name, description, src, source } = mainSource;
  if(type === 'gif' || type === 'image') {
    const imgSrc = host === 'self' ? `/img/portfolio/${src}` : src
    return (
        <div className="mainBanner__container">
            <img className="mainBanner mainBanner--gif" src={imgSrc} alt={description} />
        </div>
    )
  }
}

function PortfolioGallery(props) {
  const { _t } = props;
  const navigate = useNavigate();

  return (
    <div className="gallery">
      {portfolioData.map((project, index) => (
        <div key={index} className="gallery__item" onClick={() => navigate(`portfolio/dev-projects/${project.id}`)}>
          <h1 className="title text-center gallery__item--title">{project.projectName}</h1>
          <MainBanner mainSource={project.mainSource} />
        </div>
      ))}
    </div>
  );
}

export default function PortfolioDev({ _t }) {
  return (
    <div className="portfolioDev">
      <PortfolioGallery _t={_t} />
    </div>
  );
}
