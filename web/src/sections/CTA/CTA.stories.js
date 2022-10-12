import React from "react";

import CTA from ".";

export default {
  title: "Sections/CTA",
  component: CTA,
};

const Template = (args) => <CTA {...args} />;

export const Default = Template.bind({});
Default.args = {
  left: {
    columnBg: "#C4EBF8",
    columnUrl: "/#",
    columnUrlDescription: "Go to commercial page",
    columnHeading: "Keep on",
    columnImage: {
      asset: {
        url: "/assets/Caravan-Orange-R-2.png",
      },
      columnImageAlt: "the blue caravan, by Planet Caravan",
    },
    columnTextColor: "#03110E",
    columnButtonText: "commercial",
    columnArrowDirection: "left",
  },
  right: {
    columnBg: "#B11823",
    columnUrl: "/#",
    columnUrlDescription: "Go to tourers page",
    columnHeading: "exploring",
    columnImage: {
      asset: {
        url: "/assets/Caravan-Red-R-1.png",
      },
      columnImageAlt: "the blue caravan, by Planet Caravan",
    },
    columnTextColor: "#FFFFFF",
    columnButtonText: "tourers",
    columnArrowDirection: "right",
  },
};
