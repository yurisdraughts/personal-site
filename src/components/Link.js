import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import clsx from "clsx/lite";

const Link = ({ className, ...props }) => {
  return (
    <GatsbyLink
      className={clsx(
        className,
        `inline-block rounded-sm text-blue underline transition-colors
        visited:text-violet hover:text-orange focus:text-orange`,
      )}
      {...props}
    />
  );
};

export default Link;
