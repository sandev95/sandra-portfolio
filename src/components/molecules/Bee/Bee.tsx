import React from "react";
import { Box } from "../../atoms/Box/Box";
import { Image } from "../../atoms/Image/Image";
import BeeImage from "../../../images/bee.png";

export const Bee = () => (
  <Box position="absolute">
    <Image url={BeeImage} />
  </Box>
);
