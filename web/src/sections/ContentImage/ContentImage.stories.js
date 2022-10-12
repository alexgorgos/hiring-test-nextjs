import React from "react";

import ContentImage from ".";

export default {
  title: "Sections/ContentImage",
  component: ContentImage,
};

const Template = (args) => <ContentImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: {
    asset: {
      url: "/assets/L26204032.png",
    },
    imageAlt: "caravan at the beatch",
  },
};
