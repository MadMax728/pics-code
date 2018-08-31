import React from "react";
import { storiesOf } from "@storybook/react";
import Search, { DefaultSearcComponent } from "./Search";
import * as images from "../../constants/images";

const campaign = [
  {
    user: {
      name: "Santosh Shinde",
      image: `${images.campaign1}`
    },
    title: "Title of campaigns",
    category: "01.01.2000 in Category",
    image: `${images.campaign1}`,
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    msg_count: 12,
    like_count: 12,
    id: 1
  },
  {
    user: {
      name: "Santosh Shinde",
      image: `${images.campaign2}`
    },
    title: "Title of campaigns",
    category: "01.01.2000 in Category",
    image: `${images.campaign2}`,
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    msg_count: 12,
    like_count: 12,
    id: 2
  },
  {
    user: {
      name: "Santosh Shinde",
      image: `${images.campaign3}`
    },
    title: "Title of campaigns",
    category: "01.01.2000 in Category",
    image: `${images.campaign3}`,
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    msg_count: 12,
    like_count: 12,
    id: 3
  }
];

storiesOf("Search", module)
  .add("Default Search", () => <DefaultSearcComponent />)
  .add("Search Render Porps", () => {
    return (
      <Search
        dataSource={campaign}
        key={["title", "des"]}
        inputField={<DefaultSearcComponent />}
        // onChange = {}
      >
        {() => <DefaultSearcComponent />}
      </Search>
    );
  });
