export default {
  name: "hero",
  type: "object",
  title: "Hero",
  fields: [
    {
      title: "Heading",
      name: "heading",
      type: "string",
    },
    {
      title: "Paragraph",
      name: "paragraph",
      type: "string",
    },
    {
      title: "Button text",
      name: "buttonText",
      type: "string",
    },
    {
      title: "Button URL",
      name: "buttonUrl",
      type: "url",
    },
    {
      title: "Button description",
      name: "buttonDescription",
      type: "string",
    },
    {
      title: "Featured products",
      name: "featuredProducts",
      type: "array",
      of: [{ type: "reference", to: [{ type: "caravan" }] }],
      validation: (Rule) => Rule.unique(),
    },
  ],
};
