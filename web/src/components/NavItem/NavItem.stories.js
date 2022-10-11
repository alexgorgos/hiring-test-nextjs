import React from "react";

import NavItem from ".";

export default {
  title: "Components/NavItem",
  component: NavItem,
};

const Template = (args) => <NavItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  itemName: "nav item",
  itemUrl: "https://evensix.com/",
  active: false,
};
