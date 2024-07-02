import * as React from "react";
import { TbExternalLink } from "react-icons/tb";
import PolymorphicLink from "./PolymorphicLink";

const ExternalLink = ({ ...props }) => {
  return (
    <PolymorphicLink
      component={({ children, ...props }) => (
        <a target="_blank" {...props}>
          {children}
          <TbExternalLink size="0.85em" className="ml-0.5 inline-block" />
        </a>
      )}
      {...props}
    />
  );
};

export default ExternalLink;
