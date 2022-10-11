import React from "react";

import ArrowIcon from ".";

export default {
  title: "Components/ArrowIcon",
  component: ArrowIcon,
};

const Template = (args) => <ArrowIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  direction: "left",
  color: "#000",
};
