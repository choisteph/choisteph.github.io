import "../styles/skillpill.css";

type SkillProp = {
  skillName: string;
};

export default function SkillPill({ skillName }: SkillProp) {
  return (
    <div className="skillpill">
      <span>{skillName}</span>
    </div>
  );
}
