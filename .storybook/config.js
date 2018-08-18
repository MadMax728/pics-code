import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { setDefaults, withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs/react";
import { action } from "@storybook/addon-actions";
import { Button } from "../src/components/ui-kit";

const req = require.context("../src/components", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

setDefaults({
  source: true
});
// addon-info needs to be the first decorator or it gives info on previous decorator and not the component
addDecorator((story, context) => withInfo('common info')(story)(context));
addDecorator(withKnobs);
configure(loadStories, module);
