import "../styles/projects.css";
import Project, { type Project as ProjectProps } from "./Project";

export type FeaturedProjects = ProjectProps[];

export const projectList: FeaturedProjects = [
  {
    projectName: "personal portfolio",
    projectDetails:
      "redesigning an online portfolio: research and design process",
    projectCompetencies: [
      "ui/ux design",
      "research",
      "web development",
      "react",
    ],
    projectDeckLink: "https://pitch.com/v/portfolio-redesign-dy6ctg",
    projectEmoji: "👩",
  },
  {
    projectName: "async",
    projectDetails: "an exploration on free-form text expression",
    projectCompetencies: ["mobile development", "react native"],
    projectDeckLink: "https://pitch.com/v/async-project-yw2f3e",
    projectEmoji: "📱",
  },
  {
    projectName: "teokn",
    projectDetails: "designing equitable access to transportation data",
    projectCompetencies: ["ui/ux design", "ux research"],
    projectDeckLink: "https://pitch.com/v/teokn-project-e3eyze",
    projectEmoji: "🚌",
  },
  {
    projectName: "covid-19 learning modules",
    projectDetails: "designing dynamic learning experiences",
    projectCompetencies: ["ui/ux design", "web development", "react"],
    projectDeckLink:
      "https://pitch.com/v/covid-learning-modules-project-pjt28k",
    projectEmoji: "😷",
  },
  {
    projectName: "cisco - walkme to shepherdJS migration",
    projectDetails:
      "transitioning from an externally-managed tool to an implemented API",
    projectCompetencies: ["front-end development", "APIs"],
    projectDeckLink: "https://pitch.com/v/walkme-shepherd-project-dv7etf",
    projectEmoji: "🐑",
  },
];

export default function Projects() {
  return (
    <div className="projects page-fade-in">
      <h1>Featured Projects✏️</h1>
      {projectList.map((proj, idx) => (
        <Project
          key={idx}
          projectName={proj.projectName}
          projectCompetencies={proj.projectCompetencies}
          projectDetails={proj.projectDetails}
          projectDeckLink={proj.projectDeckLink}
          isPdf={proj.isPdf}
          projectEmoji={proj.projectEmoji}
        />
      ))}
    </div>
  );
}
