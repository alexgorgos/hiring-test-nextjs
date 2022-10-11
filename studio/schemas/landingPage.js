export default {
  name: "landingPage",
  type: "document",
  title: "Landing page",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "hero",
      title: "Hero",
      type: "hero",
    },
    {
      name: "contentBuilder",
      type: "array",
      title: "Content builder",
      of: [
        { type: "contentCards" },
        { type: "contentImage" },
        { type: "contentText" },
      ],
    },
    {
      name: "leftCTA",
      title: "Left CTA",
      type: "cta",
    },
    {
      name: "rightCTA",
      title: "Right CTA",
      type: "cta",
    },
  ],
};
