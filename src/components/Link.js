import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import clsx from "clsx/lite";
import PolymorphicComponent from "./PolymorphicComponent";

const Link =
  (type) =>
  ({ className, ...props }) => {
    return (
      <PolymorphicComponent
        component={
          type === "internal"
            ? GatsbyLink
            : ({ children, ...props }) => (
                <a target="_blank" {...props}>
                  {children}
                </a>
              )
        }
        className={clsx(
          className,
          `inline-block rounded-sm text-blue underline transition-colors
          visited:text-violet hover:text-orange focus:text-orange`,
        )}
        {...props}
      />
    );
  };

export default Link("internal");

export const ExternalLink = Link("external");
