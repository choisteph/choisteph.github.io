import { type ProjectQuickProps } from "./Project";
import "../styles/case-study.css";
import { Link } from "react-router-dom";

export default function CaseStudy({
  projectName,
  projectDetails,
  projectDeckLink,
}: ProjectQuickProps) {
  return (
    <div className="case-study">
      <div className="case-study--decorative-box"></div>
      <div className="case-study--details">
        <Link
          className="case-study--title"
          to={projectDeckLink}
          target="_blank"
        >
          {projectName} &#8594;
        </Link>
        <p>{projectDetails}</p>
      </div>
    </div>
  );
}
