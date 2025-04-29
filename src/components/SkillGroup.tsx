import "../styles/skill-group.css";

type Skill = {
  skillName: string;
};

export type SkillProps = {
  skillGroupName?: string;
  skillList: Skill[];
};

export default function SkillGroup({ skillGroupName, skillList }: SkillProps) {
  return (
    <div>
      {skillGroupName && <h4>{skillGroupName}</h4>}
      <ul className="unmarked-list">
        {skillList.map((skill, idx) => (
          <li key={idx}>{skill.skillName}</li>
        ))}
      </ul>
    </div>
  );
}
