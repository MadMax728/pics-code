import React from "react";
import { storiesOf } from "@storybook/react";
import OnBoardingSkeleton from "./OnBoardingSkeleton";

storiesOf("onBoard", module).add("OnBoardingSkeleton", () => {
  return (
    <OnBoardingSkeleton>
      {() => <div>{"froms will come here"}</div>}
    </OnBoardingSkeleton>
  );
});
