import React, { FC } from "react";
import { InfoContainerWrapper } from "./InfoContainer.styles";

interface IInfoContainer {
  children: JSX.Element;
}

export const InfoContainer: FC<IInfoContainer> = ({ children }) => {
  return <InfoContainerWrapper>{children}</InfoContainerWrapper>;
};
