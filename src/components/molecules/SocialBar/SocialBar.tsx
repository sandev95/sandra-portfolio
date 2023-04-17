import React from "react";
import { Box } from "../../atoms/Box/Box";
import { Flex } from "../../atoms/Flex/Flex";
import { Image } from "../../atoms/Image/Image";
import { SocialList } from "./utils/SocialList";

export const SocialBar = () => (
  <Box position="absolute" right="0" padding="24px 24px 0 0 ">
    <Flex container gap="20px">
      {SocialList.map((social) => (
        <a
          key={social.href}
          href={social.href}
          target={social.isBlank ? "_blank" : ""}
        >
          <Image hoverAnimation url={social.url} size="xs" />
        </a>
      ))}
    </Flex>
  </Box>
);
