import StarsBackground from "../components/starsBackground";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import portfolioData from "../data/portfolio-dev.json";
import { Container, Row, Col } from "react-bootstrap";
import "../scss/DevProject.scss";
import ReactHtmlParser from "react-html-parser";

function ProjectInfos({ project }) {
  return (
    <div className="px-4">
      <Row>
        <Col xs={6}>
          <h2 className="highlight">Core</h2>
        </Col>
        <Col xs={6}>
          <h2 className="highlight">Status</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <h3>{project.infos.core}</h3>
        </Col>
        <Col xs={6}>
          <h3>{project.infos.status}</h3>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <h2 className="highlight">Atualizado em</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <h3>{project.infos.lastUpdate}</h3>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <h2 className="highlight">Tecnologias</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <ul className="DevProject__techList">
            {project.infos.tech.map((tech, i) => (
              <li key={i}>{tech} | &nbsp;</li>
            ))}
          </ul>
        </Col>
      </Row>
    </div>
  );
}

function MainBanner({ project }) {
  const mainSource = project.mainSource.src
    ? project.mainSource
    : project.coverSource;
  return (
    <Row className="justify-content-center px-4">
      <Col xs={12}>
        {mainSource.type === "video" && mainSource.host === "youtube" ? (
          <YoutubeEmbededVideo src={mainSource.src} />
        ) : undefined}

        {mainSource.type === "video" && mainSource.host === "vimeo" ? (
          <VimeoEmbededVideo src={mainSource.src} />
        ) : undefined}

        {mainSource.type == "image" || mainSource.type == "gif" ? (
          <ImageBanner
            src={mainSource.src}
            host={mainSource.host}
            source={mainSource.source}
          />
        ) : undefined}
      </Col>
    </Row>
  );
}

function ImageBanner({ src, host, source }) {
  const imgSrc = host === "self" ? `/img/portfolio/${src}` : src;
  return (
    <>
      {source ? (
        <a href={source} target="_blank" rel="noreferrer">
          <img className="imageBanner" src={imgSrc} alt="projeto destaque" />
        </a>
      ) : (
        <a href={imgSrc} target="_blank" rel="noreferrer">
          <img className="imageBanner" src={imgSrc} alt="projeto destaque" />
        </a>
      )}
    </>
  );
}
function YoutubeEmbededVideo({ src }) {
  return (
    <iframe
      className="youtube_embeded"
      src={`https://www.youtube.com/embed/${src}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  );
}

function VimeoEmbededVideo({ src }) {
  return (
    <div>
      <iframe
        className="vimeo_embeded"
        src={`https://player.vimeo.com/video/${src}?badge=0&autopause=0&player_id=0&app_id=58479`}
        frameBorder={0}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen=""
      />
    </div>
  );
}

function SecondaryBanners({ project }) {
  return (
    <Row className="justify-content-center mt-2 px-4">
      {project.secondarySources.map((source, index) => (
        <Col xs={12} key={index} className="mt-4">
          {source.type === "video" && source.host === "youtube" ? (
            <YoutubeEmbededVideo src={source.src} />
          ) : undefined}

          {source.type === "video" && source.host === "vimeo" ? (
            <VimeoEmbededVideo src={source.src} />
          ) : undefined}

          {source.type == "image" || source.type == "gif" ? (
            <ImageBanner
              src={source.src}
              host={source.host}
              source={source.source}
            />
          ) : undefined}
        </Col>
      ))}
    </Row>
  );
}

function AboutText({ description }) {
  const [showAboutText, setShowAboutText] = useState(true);

  return (
    <Row className="px-4">
      <Col>
        <p
          onClick={() => setShowAboutText(!showAboutText)}
          className={
            showAboutText
              ? "aboutText__title activeAboutText"
              : "aboutText__title"
          }
        >
          Sobre ...
        </p>
      </Col>
      {showAboutText ? (
        <Row>
          <Col>{ReactHtmlParser(description)}</Col>
        </Row>
      ) : undefined}
    </Row>
  );
}

function Return() {
  const navigate = useNavigate();
  const AstronautGoBack = "/img/astronauts/Astronaut-MontadoAviaoPapel.webp";

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Row className="justify-content-center mt-5">
      <img
        className="return__image"
        src={AstronautGoBack}
        alt="voltar"
        onClick={handleBack}
      />
      {/* <Col xs={12}>
      </Col> */}
    </Row>
  );
}

export default function DevProject() {
  const { id } = useParams();
  const project = portfolioData.find((project) => project.id === parseInt(id));
  const gitHubSrc = "/img/GithubLogo.webp";
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location]);

  return (
    <Container fluid className="DevProject Root">
      <StarsBackground />
      <Row className="my-4 px-4">
        {project.repository !== "" ? (
          <>
            <Col xs={1}>
              <a target="_blank" href={project.repository} rel="noreferrer">
                <img
                  className="github__logo"
                  src={gitHubSrc}
                  alt="Repositório Github"
                />
              </a>
            </Col>
            <Col>
              <h1 className="title title-big highlight text-end">
                {project.projectName}
              </h1>
            </Col>
          </>
        ) : (
          <>
          <Col>
            <h1 className="title title-big highlight text-center">
              {project.projectName}
            </h1>
          </Col>
        </>
        )}
      </Row>
      <ProjectInfos project={project} />
      <AboutText description={project.description} />
      <MainBanner project={project} />
      <SecondaryBanners project={project} />
      <Return />
    </Container>
  );
}
