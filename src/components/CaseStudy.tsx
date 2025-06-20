import { type ProjectProps } from "./Project";
import "../styles/case-study.css";
import { Link } from "react-router-dom";
import SkillPill from "./SkillPill";

export default function CaseStudy({
  projectName,
  projectDetails,
  projectSummary,
  projectDeckLink,
  projectCompetencies,
  projectImg,
}: ProjectProps) {
  return (
    <div className="case-study-wrapper">
      <div className="case-study">
        {projectImg && (
          <div className="case-study--projectImgContainer">
            <img className="case-study--projectImg" src={projectImg}></img>
          </div>
        )}
        <div className="case-study--details">
          <h3 className="case-study--title">{projectName}</h3>
          <h4>{projectDetails}</h4>
          <p>{projectSummary}</p>
          <div className="case-study--skill-pills">
            {projectCompetencies.map((skill, idx) => (
              <SkillPill key={idx} skillName={skill} />
            ))}
          </div>
          <div className="case-study--deck-div">
            <Link
              to={projectDeckLink}
              target="_blank"
              className="case-study--project-link"
            >
              Go to Project Deck &#8599;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
