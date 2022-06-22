import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Text from "../shared/Text";
import { getScreenSize } from "../../features/GeneralSlice";

type Props = {
  activeTab: number;
  setActiveTab: (value: number) => void;
};

const RestourantTabs: FC<Props> = ({ activeTab, setActiveTab }) => {
  const { t } = useTranslation();
  const screenSize = useSelector(getScreenSize);
  const styles: IDynamicStyles = calculateDynamicStyles(screenSize);

  return (
    <Container justifyContent={styles.tabsContainerPosition}>
      <TabsContainer marginTop={styles.tabsContainerMarginTop}>
        <Tab
          isActive={activeTab === 1}
          onClick={() => setActiveTab(1)}
          width={styles.tabContainerWidth}
        >
          <Text
            text={t<string>("restourant_page.tab_1")}
            color={activeTab === 1 ? "#fff" : "#FF40404"}
            fontSize={styles.tabFontSize}
          />
        </Tab>
        <Tab
          isActive={activeTab === 2}
          onClick={() => setActiveTab(2)}
          width={styles.tabContainerWidth}
        >
          <Text
            text={t<string>("restourant_page.tab_2")}
            color={activeTab === 2 ? "#fff" : "#FF40404"}
            fontSize={styles.tabFontSize}
          />
        </Tab>
        <Tab
          isActive={activeTab === 3}
          onClick={() => setActiveTab(3)}
          width={styles.tabContainerWidth}
        >
          <Text
            text={t<string>("restourant_page.tab_3")}
            color={activeTab === 3 ? "#fff" : "#FF40404"}
            fontSize={styles.tabFontSize}
          />
        </Tab>
      </TabsContainer>
    </Container>
  );
};

export default RestourantTabs;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props: ContainerProps) => props.justifyContent};
  padding-left: ${(props: ContainerProps) =>
    props.justifyContent === "flex-start" ? "5%" : "0px"};
`;

const TabsContainer = styled.div`
  width: max-content;
  display: flex;
  flex-direction: row !important;
  align-items: center;
  border-radius: 25px;
  border: 2px solid #ff4040;
  margin-top: ${(props: TabsContainerProps) => props.marginTop || "0px"};
`;

const Tab = styled.div`
  padding: 10px 0;
  width: ${(props: TabProps) => props.width || "auto"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props: TabProps) => (props.isActive ? "white" : "#ff4040")};
  border-radius: 25px;
  background-color: ${(props: TabProps) =>
    props.isActive ? "#ff4040" : "white"};
  cursor: pointer;

  &:hover {
    font-weight: ${(props: TabProps) => (props.isActive ? 400 : 600)};
  }
`;

const calculateDynamicStyles = (screenSize: number): IDynamicStyles => {
  const styles = {
    tabsContainerPosition: "center",
    tabFontSize: "15px",
    tabsContainerMarginTop: "35px",
    tabContainerWidth: "100px",
  };
  if (screenSize < 500) {
    styles.tabsContainerPosition = "center";
    styles.tabFontSize = "15px";
    styles.tabsContainerMarginTop = "35px";
    styles.tabContainerWidth = "100px";
  } else if (screenSize < 850) {
    styles.tabsContainerPosition = "center";
    styles.tabFontSize = "20px";
    styles.tabsContainerMarginTop = "50px";
    styles.tabContainerWidth = "125px";
  } else if (screenSize < 1450) {
    styles.tabsContainerPosition = "flex-start";
    styles.tabFontSize = "22px";
    styles.tabsContainerMarginTop = "56px";
    styles.tabContainerWidth = "150px";
  }
  return styles;
};

type IDynamicStyles = {
  tabsContainerPosition: string;
  tabsContainerMarginTop: string;
  tabFontSize: string;
  tabContainerWidth: string;
};

type ContainerProps = {
  justifyContent: string;
};

type TabsContainerProps = {
  marginTop: string;
};

type TabProps = {
  isActive: boolean;
  width: string;
};
