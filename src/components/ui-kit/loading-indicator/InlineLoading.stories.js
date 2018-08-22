import React from "react";
import { storiesOf } from "@storybook/react";
import InlineLoading from "./InlineLoading";

storiesOf("Loading Indicators", module).add("LeftSidebarNav", () => {
  return <InlineLoading message={"loading..."} />;
});
