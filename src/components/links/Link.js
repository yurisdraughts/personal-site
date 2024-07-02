import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import PolymorphicLink from "./PolymorphicLink";

const Link = ({ ...props }) => {
  return <PolymorphicLink component={GatsbyLink} {...props} />;
};

export default Link;
