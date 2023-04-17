import React from "react";
import { WipSign } from "../../WipSign/WipSign";
import { EducationInformation } from "../components/EducationInformation/EducationInformation";

export interface ITabsInformation {
  index: number;
  name: string;
  info: JSX.Element;
}

export const tabsInformation = [
  { index: 1, name: "education", info: <EducationInformation /> },
  { index: 2, name: "projects", info: <WipSign /> },
];
