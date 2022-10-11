export default {
  name: "caravan",
  type: "document",
  title: "Caravans",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Price",
      name: "price",
      type: "number",
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
