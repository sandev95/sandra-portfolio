import React from "react";
import { Image } from "../../atoms/Image/Image";
import WipSignImage from "../../../images/wipSing.png";
import { Flex } from "../../atoms/Flex/Flex";
import { Typography } from "../../atoms/Typograhpy/Typograhpy";
import { Box } from "../../atoms/Box/Box";

export const WipSign = () => (
  <Flex
    fillContainer
    container
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
  >
    <Image url={WipSignImage} size="xl" />
    <Flex container alignItems="center" flexDirection="column">
      <Typography fontSize="large" fontWeight="bolder">
        Mobile version
      </Typography>
      <Typography fontSize="large">-</Typography>
      <Typography fontSize="large" fontWeight="bolder">
        Pokemon cards shop
      </Typography>
    </Flex>
  </Flex>
);
