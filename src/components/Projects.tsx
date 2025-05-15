import "../styles/projects.css";
import { type ProjectProps } from "./Project";
import teoknImg from "../assets/teokn.png";
import covidmappingImg from "../assets/covidmapping.png";
import sosImg from "../assets/sosdash.png";
import CaseStudy from "./CaseStudy";
import { motion } from "motion/react";
import { type RouteTransitionProps } from "../App";

export type FeaturedProjects = ProjectProps[];

export const projectList: FeaturedProjects = [
  {
    projectName: "TEOKN - Transportation Open Knowledge Network",
    projectDetails: "Designing equitable access to transportation data.",
    projectCompetencies: [
      "figma",
      "end-to-end ",
      "ui/ux design",
      "public policy",
    ],
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
  {
    projectName: "SOS - System for Opioid Overdose Surveillance",
    projectDetails:
      "Designing Michigan's first opioid overdose data dashboard.",
    projectCompetencies: [
      "adobe xd",
      "end-to-end",
      "design + R&D",
      "healthcare policy",
    ],
    projectDeckLink:
      "https://pitch.com/v/sos-system-for-opioid-overdose-surveillance-3zwf25",
    projectImg: sosImg,
  },
];

export default function Projects({
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
      className="projects page-fade-in"
    >
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
    </motion.div>
  );
}
