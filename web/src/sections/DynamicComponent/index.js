import React from "react";
import ContentCards from "../ContentCards";
import ContentImage from "../ContentImage";
import ContentText from "../ContentText";

const DynamicComponent = (item) => {
  if (typeof Components[item._type] !== "undefined") {
    return React.createElement(Components[item._type], {
      key: item._key,
      ...item,
    });
  }
};

DynamicComponent.displayName = "DynamicComponent";

const Components = {
  contentCards: ContentCards,
  contentImage: ContentImage,
  contentText: ContentText,
};

export default DynamicComponent;
