import "../styles/projects.css";
import { type ProjectProps } from "./Project";
import teoknImg from "../assets/teokn.png";
import covidmappingImg from "../assets/covidmapping.png";
import CaseStudy from "./CaseStudy";

export type FeaturedProjects = ProjectProps[];

export const projectList: FeaturedProjects = [
  {
    projectName: "TEOKN - Transportation Open Knowledge Network",
    projectDetails: "Designing equitable access to transportation data.",
    projectCompetencies: ["figma", "ui/ux design", "public policy"],
    projectDeckLink:
      "https://pitch.com/v/teokn-transportation-open-knowledge-network-6dktyz",
    projectImg: teoknImg,
  },
  {
    projectName: "COVID-19 Mapping",
    projectDetails: "Designing a dashboard for COVID-19 spatial data.",
    projectCompetencies: [
      "html/css/js",
      "iterative development",
      "epidemiology",
    ],
    projectDeckLink: "https://pitch.com/v/covid-19-mapping-ukjy96",
    projectImg: covidmappingImg,
  },
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
