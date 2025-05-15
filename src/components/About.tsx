import "../styles/about.css";
import SkillGroup, { type SkillProps } from "./SkillGroup";
import california from "../assets/california.png";
import california2 from "../assets/california-2.png";
import california3 from "../assets/california-3.png";
import { Slide } from "react-slideshow-image";
import { motion } from "motion/react";
import { type RouteTransitionProps } from "../App";

type CertificationsData = {
  certName: string;
  certYear: string;
};

type SkillGroupList = SkillProps[];

type SlideProps = {
  slideUrl: string;
};

const certs: CertificationsData[] = [
  { certName: "React & TypeScript - The Practical Guide", certYear: "2025" },
  {
    certName: "Learn API Technical Writing: JSON and XML for Writers",
    certYear: "2025",
  },
  { certName: "Introduction to Technical Writing", certYear: "2025" },
  { certName: "Accessibility for Web Design", certYear: "2021" },
  { certName: "Leading with Innovation", certYear: "2021" },
];

const skillList: SkillGroupList = [
  {
    skillGroupName: "UI/UX",
    skillList: [
      { skillName: "UX/UI Design" },
      { skillName: "User Research" },
      { skillName: "Heuristic Evaluation" },
      { skillName: "Prototyping" },
      { skillName: "A/B Testing" },
      { skillName: "QA Testing" },
      { skillName: "Web Accessibility" },
    ],
  },
  {
    skillGroupName: "Frontend Engineering",
    skillList: [
      { skillName: "HTML/CSS/JS" },
      { skillName: "AngularJS" },
      { skillName: "React/Redux" },
    ],
  },
  {
    skillGroupName: "Miscellaneous",
    skillList: [
      { skillName: "XML" },
      { skillName: "Git" },
      { skillName: "Agile" },
    ],
  },
];

const toolList: SkillGroupList = [
  {
    skillList: [
      { skillName: "Figma" },
      { skillName: "Adobe CC" },
      { skillName: "Miro" },
      { skillName: "JIRA" },
      { skillName: "Trello" },
      { skillName: "Google/Microsoft Office" },
    ],
  },
];

const slideImages: SlideProps[] = [
  { slideUrl: california },
  { slideUrl: california2 },
  { slideUrl: california3 },
];

export default function About({
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
      className="about page-fade-in"
    >
      <section className="about--section">
        <p className="tagline">Good design is easy to understand.</p>
        <h1>Design Philosophy</h1>
        <div className="about--design-phil-section">
          <p>
            I'm passionate about education & documentation; informative,
            accessible design; & the designer-to-developer handoff. I believe
            cross-functional collaboration is critical to creating informed,
            engaging, and functional designs.
          </p>
        </div>
      </section>
      <section className="about--section">
        <h2>Here are some of my certifications:</h2>
        <div className="about--skill-section">
          <ul className="about--skill-list">
            {certs.map((cert, idx) => (
              <li key={idx}>
                {cert.certName} - {cert.certYear}
              </li>
            ))}
          </ul>
          <h2>Competencies:</h2>
          <div className="about--skill-group">
            {skillList.map((skillGroup, idx) => (
              <SkillGroup
                skillGroupName={skillGroup.skillGroupName}
                skillList={skillGroup.skillList}
                key={idx}
              />
            ))}
          </div>
          <h3>... & Tools:</h3>
          <div className="about--skill-group">
            {toolList.map((tool, idx) => (
              <SkillGroup skillList={tool.skillList} key={idx} />
            ))}
          </div>
        </div>
      </section>
      <section className="about--personal-details-section">
        <div className="about--personal-details">
          <div className="slide-container">
            <Slide
              duration={4000}
              autoplay={true}
              transitionDuration={800}
              infinite={true}
              arrows={false}
              easing="ease-in"
            >
              {slideImages.map((slideImg, idx) => (
                <div key={idx}>
                  <img
                    className="about--personal-details-photo"
                    src={slideImg.slideUrl}
                  />
                </div>
              ))}
            </Slide>
          </div>

          <div>
            <p>Currently based in the Bay Area in sunny California.☀️</p>
            <p>
              I like to go on hikes around the Bay in my free time and enjoy
              crocheting and listening to music.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
