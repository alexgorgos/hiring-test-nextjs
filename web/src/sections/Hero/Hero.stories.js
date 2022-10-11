import React from "react";

import Hero from ".";

export default {
  title: "Sections/Hero",
  component: Hero,
};

const Template = (args) => <Hero {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: "50's americana",
  paragraph:
    "Paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus sed tempus molestie sapien. ",
  buttonText: "create your own",
  buttonUrl: "/#",
  buttonDescription: "create your own caravan",
  caravansList: [
    {
      name: "Planet 23",
      price: 25932,
      imageUrl: "/assets/Caravan-Red-R.png",
      imageAlt: "Planet 23 Red Caravand - by Planet Caravan",
    },
    {
      name: "Planet 24",
      price: 50000,
      imageUrl: "/assets/Caravan-White-R.png",
      imageAlt: "Planet 24 Red Caravand - by Planet Caravan",
    },
  ],
};
