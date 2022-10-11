import React from "react";

import HoverCircle from ".";

export default {
  title: "Components/HoverCircle",
  component: HoverCircle,
};

const Template = (args) => <HoverCircle {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "Name",
  price: 100000,
  isVisible: true,
};
