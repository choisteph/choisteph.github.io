import SkillPill from "./SkillPill";
import "../styles/project.css";

export type ProjectProps = {
  projectName: string;
  projectDetails: string;
  projectDeckLink: string;
  projectCompetencies: string[];
  projectImg?: string;
};

export default function Project({
  projectName,
  projectDetails,
  projectCompetencies,
  projectImg,
}: ProjectProps) {
  return (
    <div className="project">
      <div className="project-label">
        <img className="project-img" src={projectImg} />
        <h2 className="project-name">{projectName}</h2>
      </div>
      <div className="project-competencies">
        {projectCompetencies.map((competency, idx) => (
          <SkillPill key={idx} skillName={competency} />
        ))}
      </div>
      <p>{projectDetails}</p>
    </div>
  );
}
