import React from "react";

import Card from ".";

export default {
  title: "Components/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: "heading",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  buttonText: "Button Text",
  buttonUrl: "https://google.com",
  buttonDescription: "link to google",
  hoverBgColor: "#C4EBF8",
  imageUrl: "/assets/Caravan-Orange-R-2.png",
  imageAlt: "A blue caravan",
};
