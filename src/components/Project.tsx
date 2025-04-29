import { Link } from "react-router-dom";
import SkillPill from "./SkillPill";
import "../styles/project.css";

export type ProjectQuickProps = {
  projectName: string;
  projectDetails: string;
  projectDeckLink: string;
};

export type Project = ProjectQuickProps & {
  projectCompetencies: string[];
  isPdf?: boolean;
  projectEmoji: string;
};

export default function Project({
  projectName,
  projectDetails,
  projectCompetencies,
  projectDeckLink,
  isPdf,
  projectEmoji,
}: Project) {
  return (
    <div className="project">
      <div className="project-label">
        <span className="project-emoji">{projectEmoji}</span>
        <h2 className="project-name">{projectName}</h2>
      </div>
      <div className="project-competencies">
        {projectCompetencies.map((competency, idx) => (
          <SkillPill key={idx} skillName={competency} />
        ))}
      </div>
      <p>{projectDetails}</p>
      {isPdf ? (
        <a href={projectDeckLink} target="_blank" className="project-link">
          Go To Project Document &#8599;
        </a>
      ) : (
        <Link to={projectDeckLink} target="_blank" className="project-link">
          Go To Project Deck &#8599;
        </Link>
      )}
    </div>
  );
}
