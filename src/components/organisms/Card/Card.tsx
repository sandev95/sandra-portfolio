import React, { FC } from "react";
import { StyledCard } from "./Card.styles";
import { Image } from "../../atoms/Image/Image";
import ReactIcon from "../../../images/icon-react.png";
import { Typography } from "../../atoms/Typograhpy/Typograhpy";
import PlatziIcon from "../../../images/platzi-icon.jpeg";

interface ICard {
  course: {
    title: string;
    subtitle: string;
    icon: string;
    certification: string;
  };
}

export const Card: FC<ICard> = ({ course }) => {
  return (
    <StyledCard
      color={course.title.includes("React") ? "#0a7ea4" : "#faa11ac4"}
    >
      <div className="color-card" />
      <div className="info-card">
        <Image id="card-logo" size="xs" url={course.icon} />
        <Typography fontWeight="bolder">{course.title}</Typography>
        <Typography>{course.subtitle}</Typography>
        <div className="certificate-icon">
          <a
            href={course.certification}
            target="_blank"
            title={course.subtitle}
          >
            <Image size="xxs" hoverAnimation url={PlatziIcon} />
          </a>
        </div>
      </div>
    </StyledCard>
  );
};
