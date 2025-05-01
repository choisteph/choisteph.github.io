import "../styles/projects.css";
import Project, { type Project as ProjectProps } from "./Project";
import teoknImg from "../assets/teokn.png";
import covidmappingImg from "../assets/covidmapping.png";
import CaseStudy from "./CaseStudy";

export type FeaturedProjects = ProjectProps[];

export const projectList: FeaturedProjects = [
  // {
  //   projectName: "personal portfolio",
  //   projectDetails:
  //     "redesigning an online portfolio: research and design process",
  //   projectCompetencies: [
  //     "ui/ux design",
  //     "research",
  //     "web development",
  //     "react",
  //   ],
  //   projectDeckLink: "https://pitch.com/v/portfolio-redesign-dy6ctg",
  //   projectEmoji: "👩",
  // },
  // {
  //   projectName: "async",
  //   projectDetails: "an exploration on free-form text expression",
  //   projectCompetencies: ["mobile development", "react native"],
  //   projectDeckLink: "https://pitch.com/v/async-project-yw2f3e",
  //   projectEmoji: "📱",
  // },
  {
    projectName: "TEOKN - Transportation Open Knowledge Network",
    projectDetails: "Designing equitable access to transportation data.",
    projectCompetencies: ["figma", "ui/ux design", "public policy"],
    projectDeckLink: "https://pitch.com/v/teokn-project-e3eyze",
    projectEmoji: "🚌",
    projectImg: teoknImg,
  },
  // {
  //   projectName: "covid-19 learning modules",
  //   projectDetails: "designing dynamic learning experiences",
  //   projectCompetencies: ["ui/ux design", "web development", "react"],
  //   projectDeckLink:
  //     "https://pitch.com/v/covid-learning-modules-project-pjt28k",
  //   projectEmoji: "😷",
  // },
  {
    projectName: "COVID-19 Mapping",
    projectDetails: "Designing a dashboard for COVID-19 spatial data.",
    projectCompetencies: ["html/css/js", "ui/ux design", "epidemiology"],
    projectDeckLink: "https://pitch.com/v/covid-19-mapping-ukjy96",
    projectEmoji: "😷",
    projectImg: covidmappingImg,
  },
  // {
  //   projectName: "cisco - walkme to shepherdJS migration",
  //   projectDetails:
  //     "transitioning from an externally-managed tool to an implemented API",
  //   projectCompetencies: ["front-end development", "APIs"],
  //   projectDeckLink: "https://pitch.com/v/walkme-shepherd-project-dv7etf",
  //   projectEmoji: "🐑",
  // },
];

export default function Projects() {
  return (
    <div className="projects page-fade-in">
      <p className="tagline">A curated selection of work.</p>
      <h1>Featured Projects</h1>
      <div className="projects--project-container">
        {projectList.map((proj, idx) => (
          <CaseStudy
            key={idx}
            projectName={proj.projectName}
            projectCompetencies={proj.projectCompetencies}
            projectDetails={proj.projectDetails}
            projectDeckLink={proj.projectDeckLink}
            projectImg={proj.projectImg}
          />
        ))}
      </div>
    </div>
  );
}
