import React, { Dispatch, FC, SetStateAction } from "react";
import { Flex } from "../../atoms/Flex/Flex";
import { TabContainer } from "./tabs.styles";
import { ITabsInformation, tabsInformation } from "./utils/tabsInformation";

interface ITabs {
  setCurrentTab: Dispatch<SetStateAction<ITabsInformation>>;
  currentTabIndex: number;
}

export const Tabs: FC<ITabs> = ({ setCurrentTab, currentTabIndex }) => {
  return (
    <Flex container gap="10px">
      {tabsInformation.map((tab) => (
        <TabContainer
          isSelected={currentTabIndex === tab.index}
          onClick={() => setCurrentTab(tab)}
        >
          {tab.name}
        </TabContainer>
      ))}
    </Flex>
  );
};
