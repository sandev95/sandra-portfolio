import React from "react";
import Typewriter from "typewriter-effect";
import { TitleStyled } from "./Title.styles";

export const Title = () => {
  return (
    <TitleStyled>
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString("Welcome to my page!").start();
        }}
      />
    </TitleStyled>
  );
};
