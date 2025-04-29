import CaseStudy from "./CaseStudy";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { projectList, type FeaturedProjects } from "./Projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const copyOfProjectList = [...projectList];

  const [twoFeaturedProjects, setTwoFeaturedProjects] = useState(
    copyOfProjectList.slice(0, 2)
  );

  const grabRandomArrayItems = (arr: FeaturedProjects) => {
    return arr.sort(() => 0.5 - Math.random()).slice(0, 2);
  };

  useEffect(() => {
    setTwoFeaturedProjects(() => grabRandomArrayItems(copyOfProjectList));
  }, []);

  return (
    <>
      <div className="home page-fade-in">
        <p className="by-line">Hello, I'm Stephanie!😊</p>
        <h1>
          I'm a product designer with a background in engineering and user
          research.
        </h1>
      </div>
      <div>
        <span></span>
      </div>
      <div className="project-previews">
        <h2>Featured Projects ✏️</h2>
        {twoFeaturedProjects.map((proj, idx) => (
          <CaseStudy
            key={idx}
            projectName={proj.projectName}
            projectDetails={proj.projectDetails}
            projectDeckLink={proj.projectDeckLink}
          />
        ))}
      </div>
      <div className="contact-info">
        <h3>
          Contact me at{" "}
          <Link className="mailto" to="mailto:stephjchoi@gmail.com">
            stephjchoi@gmail.com
          </Link>{" "}
          or on{" "}
          <Link to="https://www.linkedin.com/in/stephjchoi/" target="_blank">
            <FontAwesomeIcon className="external-icon" icon={faLinkedin} />
          </Link>
          .
        </h3>
      </div>
    </>
  );
}
