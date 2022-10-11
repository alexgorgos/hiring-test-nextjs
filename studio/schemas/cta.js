export default {
  name: "cta",
  type: "object",
  title: "CTA",
  fields: [
    {
      title: "Heading",
      name: "columnHeading",
      type: "string",
    },
    {
      title: "URL",
      name: "columnUrl",
      type: "url",
    },
    {
      title: "URL description",
      name: "columnUrlDescription",
      type: "string",
    },
    {
      title: "Background color",
      name: "columnBg",
      type: "colorPicker",
    },
    {
      title: "Text color",
      name: "columnTextColor",
      type: "colorPicker",
    },
    {
      title: "Image",
      name: "columnImage",
      type: "image",
      fields: [
        {
          name: "imageAlt",
          type: "string",
          title: "Alternative text",
        },
      ],
    },
    {
      title: "CTA text",
      name: "columnButtonText",
      type: "string",
    },
    {
      title: "CTA arrow direction",
      name: "columnArrowDirection",
      type: "string",
      options: {
        list: [
          { title: "left", value: "left" },
          { title: "right", value: "right" },
        ],
      },
    },
  ],
};
