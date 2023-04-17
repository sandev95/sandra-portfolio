import React, { useState } from "react";
import { Box } from "../../atoms/Box/Box";
import { InfoContainer } from "../../molecules/InfoContainer/InfoContainer";
import { Tabs } from "../../molecules/Tabs/Tabs";
import { tabsInformation } from "../../molecules/Tabs/utils/tabsInformation";

export const Information = () => {
  const [currentTab, setCurrentTab] = useState(tabsInformation[0]);

  return (
    <Box padding="25px 0">
      <Tabs setCurrentTab={setCurrentTab} currentTabIndex={currentTab.index} />
      <InfoContainer>{currentTab.info}</InfoContainer>
    </Box>
  );
};
