import React from "react";

import Button from ".";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args}>{args.children}</Button>;

export const Default = Template.bind({});
Default.args = {
  children: "Button",
  href: "https://evensix.com/",
  description: "Button to Evensix",
};

export const Small = Template.bind({});
Small.args = {
  children: "Button",
  href: "https://evensix.com/",
  description: "Button to Evensix",
  small: true,
};
