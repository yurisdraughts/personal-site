import * as React from "react";
import { TbExternalLink } from "react-icons/tb";
import PolymorphicLink from "./PolymorphicLink";
import PolymorphicComponent from "../PolymorphicComponent";

const ExternalLink = ({ icon: Icon, ...props }) => {
  return (
    <PolymorphicLink
      component={({ children, ...props }) => (
        <a target="_blank" {...props}>
          {children}
          <PolymorphicComponent component={Icon || TbExternalLink} size="0.85em" className="ml-0.5 inline-block" />
          {/* <TbExternalLink size="0.85em" className="ml-0.5 inline-block" /> */}
        </a>
      )}
      {...props}
    />
  );
};

export default ExternalLink;
