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
    projectDetails: "Bridging Vision and Product through Rapid Prototyping",
    projectSummary:
      "As part of a multidisciplinary team, I helped transform a loosely defined product vision into a tangible prototype that secured internal funding. I led the design exploration by translating stakeholder goals and user needs into wireframes, user flows, and a mid-fidelity interactive prototype. My contributions helped clarify product scope, enabling the team to move forward with engineering. The design I created was ultimately used as the foundation for a high-fidelity prototype.",
    projectCompetencies: [
      "end-to-end",
      "research & design",
      "rapid prototyping",
      "project scoping",
    ],
    projectDeckLink:
      "https://pitch.com/v/teokn-transportation-open-knowledge-network-6dktyz",
    projectImg: teoknImg,
  },
  {
    projectName: "COVID-19 Mapping",
    projectDetails:
      "Capturing the Evolving Impact of COVID-19 through New Feature Development",
    projectSummary:
      "As a frontend engineer collaborating with a team of epidemiologists, I helped transform their research and data insights into engaging frontend data visualizations and learning experiences. I improved upon the existing dashboard design by leveraging my user experience design background, directly implementing new designs with HTML/CSS/JS. My work reached the eyes of other epidemiologists across Michigan as well as the general public.",
    projectCompetencies: [
      "new feature development",
      "data visualization",
      "frontend development",
      "complex data dashboards",
    ],
    projectDeckLink: "https://pitch.com/v/covid-19-mapping-ukjy96",
    projectImg: covidmappingImg,
  },
  {
    projectName: "SOS - System for Opioid Overdose Surveillance",
    projectDetails:
      "Designing and Implementing Michigan's First Opioid Overdose Data Dashboard",
    projectSummary:
      "As the sole designer and as a frontend engineer working with a multidisciplinary team, I helped define the key functionalities and look-and-feel of a product that was the first of its kind for Michigan. I led the design process from end-to-end, conducting comparison matrix studies, analyzing user interviews, and ideating on optimal data layouts through sketches and wireframes to create both a mid-fidelity design prototype and a high-fidelity prototype with HTML/CSS/JS. Ultimately, my work was used as the foundation for the final product design.",
    projectCompetencies: [
      "end-to-end",
      "research & design",
      "prototyping",
      "frontend development",
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
            projectSummary={proj.projectSummary}
            projectDeckLink={proj.projectDeckLink}
            projectImg={proj.projectImg}
          />
        ))}
      </div>
    </motion.div>
  );
}
