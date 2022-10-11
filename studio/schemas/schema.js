// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import caravan from "./caravan";
import hero from "./hero";
import card from "./card";
import cta from "./cta";
import contentCards from "./contentCards";
import contentImage from "./contentImage";
import contentText from "./contentText";
import landingPage from "./landingPage";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    caravan,
    hero,
    card,
    cta,
    contentCards,
    contentImage,
    contentText,
    landingPage,
  ]),
});
