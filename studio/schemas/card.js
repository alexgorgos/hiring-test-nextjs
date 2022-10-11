export default {
  title: "Card",
  name: "card",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Heading",
      name: "heading",
      type: "string",
    },
    {
      title: "Text",
      name: "text",
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
      title: "Hover Bg color (HEX)",
      name: "hoverBgColor",
      type: "colorPicker",
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      fields: [
        {
          name: "imageAlt",
          type: "string",
          title: "Alternative text",
        },
      ],
    },
  ],
};
