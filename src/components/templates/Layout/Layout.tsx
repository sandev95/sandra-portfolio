import React from "react";
import GlobalStyle from "../../../styles/globalStyles";
import { Flex } from "../../atoms/Flex/Flex";
import { Bee } from "../../molecules/Bee/Bee";
import { Avatar } from "../../molecules/Avatar/Avatar";
import { SocialBar } from "../../molecules/SocialBar/SocialBar";
import { Background1 } from "../../molecules/Background1/Background1";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex id="Layout" container>
      <Bee />
      <Avatar />
      <SocialBar />
      {children}
      <GlobalStyle />
    </Flex>
  );
};
