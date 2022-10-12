import React from "react";

import ContentCards from ".";

export default {
  title: "Sections/ContentCards",
  component: ContentCards,
};

const Template = (args) => <ContentCards {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: "How will you use yours?",
  cards: [
    {
      heading: "commercial",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      buttonText: "explore commercial",
      buttonUrl: "/#",
      buttonDescription: "go to the products page",
      hoverBgColor: "#C4EBF8",
      image: {
        asset: {
          url: "/assets/Caravan-Orange-R-2.png",
        },
        imageAlt: "blue caravan, by Planet caravan",
      },
    },
    {
      heading: "tourers",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      buttonText: "explore tourers",
      buttonUrl: "/#",
      buttonDescription: "go to the tourers page",
      hoverBgColor: "#B14F25",
      image: {
        asset: {
          url: "/assets/Caravan-Orange-R-1.png",
        },
        imageAlt: " orange caravan, by Planet caravan",
      },
    },
  ],
};
