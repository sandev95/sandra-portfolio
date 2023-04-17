import React from "react";
import { Box } from "../../atoms/Box/Box";
import { Image } from "../../atoms/Image/Image";
import AvatarImage from "../../../images/avatar.png";

export const Avatar = () => (
  <Box position="absolute" right="50px" top="190px">
    <Image url={AvatarImage} size="l" />
  </Box>
);
