import "../styles/about.css";
import SkillGroup, { type SkillProps } from "./SkillGroup";

type CertificationsData = {
  certName: string;
  certYear: string;
};

type SkillGroupList = SkillProps[];

export default function About() {
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

  return (
    <div className="about page-fade-in">
      <section className="section">
        <h1>Design Philosophy💡</h1>
        <p>
          <i>Good design is easy to understand.</i>
        </p>
        <p>
          I'm passionate about education & documentation, informative &
          accessible design, & the designer-to-developer handoff.
        </p>
      </section>
      <div className="personal-details">
        <p>
          Currently based in the Bay Area in sunny California.☀️ I like to go on
          hikes around the Bay in my free time and enjoy crocheting and
          listening to music.
        </p>
      </div>
      <section className="section">
        <h2>Here are some of my certifications:</h2>
        <div className="skill-section">
          <ul className="skill-list">
            {certs.map((cert, idx) => (
              <li key={idx}>
                {cert.certName} - {cert.certYear}
              </li>
            ))}
          </ul>
          <h2>Competencies:</h2>
          <div className="skill-group">
            {skillList.map((skillGroup, idx) => (
              <SkillGroup
                skillGroupName={skillGroup.skillGroupName}
                skillList={skillGroup.skillList}
                key={idx}
              />
            ))}
          </div>
          <h3>... & Tools:</h3>
          <div className="skill-group">
            {toolList.map((tool, idx) => (
              <SkillGroup skillList={tool.skillList} key={idx} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
