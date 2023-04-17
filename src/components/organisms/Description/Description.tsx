import React from "react";
import { Typography } from "../../atoms/Typograhpy/Typograhpy";

export const Description = () => {
  return (
    <Typography fontSize="h3">
      My name is{" "}
      <Typography fontSize="large" fontWeight="bolder">
        Sandra Hernández
      </Typography>
      , I'm a Frontend Developer based in Barcelona, Spain.
    </Typography>
  );
};
