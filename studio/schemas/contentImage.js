export default {
  name: "contentImage",
  type: "object",
  title: "Image section",
  fields: [
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
