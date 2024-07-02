import * as React from "react";
import clsx from "clsx/lite";
import PolymorphicComponent from "../PolymorphicComponent";

const PolymorphicLink = ({ className, component, ...props }) => {
  return (
    <PolymorphicComponent
      component={component}
      className={clsx(
        className,
        `inline-block rounded-sm text-blue underline transition-colors
        visited:text-violet hover:text-orange focus:text-orange`,
      )}
      {...props}
    />
  );
};

export default PolymorphicLink;
