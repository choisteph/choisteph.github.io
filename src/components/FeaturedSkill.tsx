import {
  FontAwesomeIcon,
  type FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

import { useState } from "react";

import "../styles/featuredskill.css";

type FeaturedSkillProps = {
  description: string;
};

type FAIconProps = FontAwesomeIconProps & FeaturedSkillProps;

export default function FeaturedSkill(props: FAIconProps) {
  const [isHovered, setIsHovered] = useState(false);
  const rotateIcon = () => {
    setIsHovered(true);
  };

  const resetIcon = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="featuredskill"
      onMouseEnter={rotateIcon}
      onMouseLeave={resetIcon}
    >
      <FontAwesomeIcon
        icon={props.icon}
        className={
          isHovered
            ? "featuredskill--icon featuredskill--icon--hovered "
            : "featuredskill--icon"
        }
      />
      <p>{props.description}</p>
    </div>
  );
}
