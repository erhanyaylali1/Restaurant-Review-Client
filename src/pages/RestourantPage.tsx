import { FC, useState } from "react";
import PageHeader from "../components/Restourant/PageHeader";
import data from "./RestourantData";
import Tabs from "../components/Restourant/Tabs";
import FacilityTab from "../components/Restourant/FacilityTab";

const RestourantPage: FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const renderTabs = () => {
    switch (activeTab) {
      case 1:
        return <FacilityTab data={data} />;

      default:
        return <FacilityTab data={data} />;
    }
  };

  return (
    <div>
      <PageHeader data={data} />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div>{renderTabs()}</div>
    </div>
  );
};

export default RestourantPage;
