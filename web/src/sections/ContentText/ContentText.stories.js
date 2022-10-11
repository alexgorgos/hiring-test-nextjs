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
  column1Text:
    "Hand made with unrivaled quality. It’s no surprise we’re the market leaders.",
  column2Text:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus sed tempus molestie sapien. Luctus habitasse tincidunt at gravida imperdiet scelerisque. Elementum quis nibh risus suspendisse blandit tortor. Quis est tempus molestie sapien.",
};
