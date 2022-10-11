export default {
  name: "contentText",
  type: "object",
  title: "Text section",
  fields: [
    {
      title: "Label",
      name: "heading",
      type: "string",
    },
    {
      title: "Heading",
      name: "column1text",
      type: "string",
    },
    {
      title: "Text",
      name: "column2text",
      type: "array",
      of: [
        {
          type: "block",
          styles: [],
        },
      ],
    },
  ],
};
