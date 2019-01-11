import React from "react";
import { storiesOf } from "@storybook/react";
import InlinePageLoading from "./InlinePageLoading";

storiesOf("Loading Indicators", module).add("LeftSidebarNav", () => {
  return <InlinePageLoading message={""} />;
});
