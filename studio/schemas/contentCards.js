export default {
  name: "contentCards",
  type: "object",
  title: "Cards section",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "cards",
      type: "array",
      title: "Cards",
      of: [
        {
          type: "reference",
          to: [{ type: "card" }],
        },
      ],
      validation: (Rule) => Rule.min(2).max(2),
    },
  ],
};
