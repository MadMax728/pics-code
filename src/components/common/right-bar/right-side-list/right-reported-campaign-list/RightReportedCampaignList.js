import React from "react";
import { RightSidebarStatistics } from "../../../../ui-kit";
import { Translations } from "../../../../../lib/translations";

const statistics = [
  {
    name: Translations.right_side_bar_statistics.all,
    value: "1"
  },
  {
    name: Translations.right_side_bar_statistics.outstanding,
    value: "1"
  },
  {
    name: Translations.right_side_bar_statistics.processed,
    value: "1"
  },
  {
    name: Translations.right_side_bar_statistics.not_processed,
    value: "1"
  }
];

const RightReportedCampaignList = () => {
  return (
    <RightSidebarStatistics
      statistics={statistics}
      header={`Reported Campaign`}
    />
  );
};

export default RightReportedCampaignList;
