import React from "react";

import ContentText from ".";

export default {
  title: "Sections/ContentText",
  component: ContentText,
};

const Template = (args) => <ContentText {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: "why so popular?",
  column1text:
    "Hand made with unrivaled quality. It’s no surprise we’re the market leaders.",
  column2text: [
    {
      _key: "2c240a01d161",
      _type: "block",
      children: [
        {
          _key: "5a3c683006170",
          _type: "span",
          marks: [],
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus sed tempus molestie sapien. Luctus habitasse tincidunt at gravida imperdiet scelerisque.",
        },
      ],
      markDefs: [],
      style: "normal",
    },
    {
      _key: "6d88fbc38775",
      _type: "block",
      children: [
        {
          _key: "cb2a915e1b620",
          _type: "span",
          marks: [],
          text: "Elementum quis nibh risus suspendisse blandit tortor. Quis est tempus molestie sapien.",
        },
      ],
      markDefs: [],
      style: "normal",
    },
  ],
};
