import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import ProgressBar from "./ProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faMapMarkerAlt,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import "./ProjectCarousel.css";

const ProjectCarousel = () => {
  const { translate } = useLanguage();

  const projects = [
    {
      id: 1,
      title: "program_title1",
      content: "program_content1",
      image: "/src/assets/images/project1.jpg",
      progress: 70,
    },
    {
      id: 2,
      title: "program_title2",
      content: "program_content2",
      image: "/src/assets/images/project2.jpg",
      progress: 60,
    },
    {
      id: 3,
      title: "program_title3",
      content: "program_content3",
      image: "/src/assets/images/project3.jpg",
      progress: 45,
    },
  ];

  const renderContent = (content) => {
    const text = translate(content);
    const firstParagraph = text.split("<br><br>")[0];
    return firstParagraph.replace(/<\/?br\/?>/g, "");
  };

  return (
    <div className="project-carousel">
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <h3 className="project-title">{translate(project.title)}</h3>
              <div className="project-meta">
                <div className="meta-item">
                  <FontAwesomeIcon icon={faClock} className="meta-icon" />
                  <span>{translate("time")}</span>
                </div>
                <div className="meta-item">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="meta-icon"
                  />
                  <span>{translate("place")}</span>
                </div>
                <div className="project-likes">
                  <FontAwesomeIcon icon={faHeart} className="heart-icon" />
                  <span>2000</span>
                </div>
              </div>
            </div>

            <div className="project-content">
              <div className="project-image">
                <img
                  src={project.image}
                  alt={translate(project.title)}
                  className="project-img"
                />
              </div>

              <div className="project-description">
                <p className="project-text">{renderContent(project.content)}</p>

                <div className="project-progress">
                  <div className="progress-section">
                    <ProgressBar percentage={project.progress} showPercentage />
                  </div>
                </div>

                <div className="project-actions">
                  <div className="project-links">
                    <a href="#" className="project-link">
                      Plan File
                    </a>
                    <a href="#" className="project-link">
                      Pitch File
                    </a>
                  </div>
                  <button className="btn btn-primary sponsor-btn">
                    {translate("sponser_button")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
