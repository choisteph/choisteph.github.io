import CaseStudy from "./CaseStudy";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { projectList } from "./Projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faAngular,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import FeaturedSkill from "./FeaturedSkill";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";
import { type RouteTransitionProps } from "../App";

export default function Home({
  initial,
  exit,
  animate,
  ...props
}: RouteTransitionProps) {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      exit={exit}
      {...props}
      className="home page-fade-in"
    >
      <p className="tagline">Hello, I'm Stephanie!</p>
      <h1>
        I'm a product designer with a background in engineering and user
        research.
      </h1>
      <div className="home--proficiency-section">
        <div className="home--special-skills-section">
          <FeaturedSkill icon={faAngular} description="Proficient in Angular" />
          <FeaturedSkill icon={faReact} description="Proficient in React" />
          <FeaturedSkill
            icon={faCertificate}
            description="Technical Writing Certified"
          />
        </div>
      </div>
      <div className="home--project-previews">
        {projectList.map((proj, idx) => (
          <CaseStudy
            key={idx}
            projectName={proj.projectName}
            projectDetails={proj.projectDetails}
            projectDeckLink={proj.projectDeckLink}
            projectCompetencies={proj.projectCompetencies}
            projectImg={proj.projectImg}
          />
        ))}
      </div>
      <div className="home--contact-info">
        <h3>
          Contact me at{" "}
          <Link className="home--mailto" to="mailto:stephjchoi@gmail.com">
            stephjchoi@gmail.com
          </Link>{" "}
          or on{" "}
          <Link to="https://www.linkedin.com/in/stephjchoi/" target="_blank">
            <FontAwesomeIcon
              className="home--external-icon"
              icon={faLinkedin}
            />
          </Link>
          .
        </h3>
      </div>
    </motion.div>
  );
}
