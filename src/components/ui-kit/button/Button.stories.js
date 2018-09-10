import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "./Button";

const COLORS = ["primary", "secondary", "tertiary"];
const SIZES = ["small", "default", "medium", "large"];

const DEFAULT_PROPS = {
  onClick: action("Clicked")
};

// eslint-disable-next-line react/prop-types
const Variation = ({ heading, children }) => (
  <div style={{ marginLeft: "15px" }}>
    <h3 style={{ marginBottom: 0 }}>{heading}</h3>
    {children}
  </div>
);

const renderVariations = (props = {}) => {
  const { iconOnly } = props;

  return SIZES.map(size => (
    <Variation key={size} heading={size}>
      {COLORS.map(color => (
        <div key={color} style={{ marginBottom: "5px" }}>
          <Button
            key={color}
            {...DEFAULT_PROPS}
            color={color}
            size={size}
            //eslint-disable-next-line react/no-children-prop
            children={!iconOnly && color}
            {...props}
          />
        </div>
      ))}
    </Variation>
  ));
};

storiesOf("Button", module)
  .add("with text", () => {
    return renderVariations();
  })
  .add("with icons and text", () => {
    return renderVariations({ icon: "fa fa-file" });
  })
  .add("icons only", () => {
    return renderVariations({ icon: "fa fa-file", iconOnly: true });
  })
  .add("help modal button", () => {
    return renderVariations({ icon: "fa fa-question-circle", iconOnly: true });
  });
