import {
  FontAwesomeIcon,
  type FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

import "../styles/featuredskill.css";

type FeaturedSkillProps = {
  description: string;
};

type FAIconProps = FontAwesomeIconProps & FeaturedSkillProps;

export default function FeaturedSkill(props: FAIconProps) {
  return (
    <div className="featuredskill">
      <FontAwesomeIcon icon={props.icon} className="featuredskill--icon" />
      <p>{props.description}</p>
    </div>
  );
}
