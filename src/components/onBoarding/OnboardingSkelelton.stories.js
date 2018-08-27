import React from "react";
import { storiesOf } from "@storybook/react";
import OnboardingSkelton from "./OnboardingSkeleton";

storiesOf("onBoard", module).add("onBoardSkelton", () => {
  return (
    <OnboardingSkelton>
      {() => <div>{"froms will come here"}</div>}
    </OnboardingSkelton>
  );
});
