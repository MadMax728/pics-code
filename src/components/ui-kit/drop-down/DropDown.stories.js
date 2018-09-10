import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs/react";
import DropDown from "./DropDown";

storiesOf("Selections", module).add(" DropDown ", () => {
  const options = text("options", [
    "AK - Alaska",
    "AL - Alabama",
    "AR - Arkansas",
    "AS - American Samoa",
    "AZ - Arizona",
    "CA - California",
    "CO - Colorado",
    "CT - Connecticut",
    "DC - District of Columbia",
    "DE - Delaware"
  ]);
  return <DropDown options={options} default={options[1][0]} />;
});
