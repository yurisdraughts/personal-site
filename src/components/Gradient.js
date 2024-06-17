import * as React from "react";
import clsx from "clsx/lite";

const Gradient = ({ className, ...props }) => {
  return (
    <span
      className={clsx(
        className,
        `bg-gradient-to-r from-cyan via-red to-yellow bg-clip-text
        text-transparent`,
      )}
      {...props}
    />
  );
};

export default Gradient;
