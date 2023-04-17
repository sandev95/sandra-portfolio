import React from "react";
import { Box } from "../../atoms/Box/Box";
import BackgrounImage from "../../../images/background-form.png";
import { Image } from "../../atoms/Image/Image";

export const Background1 = () => {
  return (
    <Box zIndex="1" position="absolute">
      <Image size="fullWidth" url={BackgrounImage} />
    </Box>
  );
};
