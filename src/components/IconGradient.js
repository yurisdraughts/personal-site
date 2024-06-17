import * as React from "react";
import clsx from "clsx/lite";

export const EnableGradientIcons = () => (
  <svg className="absolute size-0">
    <defs>
      <linearGradient id="icon-gradient" x2="100%" y2="100%">
        <stop offset="0%" className="[stop-color:theme(colors.cyan)]" />
        <stop offset="50%" className="[stop-color:theme(colors.red)]" />
        <stop offset="100%" className="[stop-color:theme(colors.yellow)]" />
      </linearGradient>
    </defs>
  </svg>
);

const IconGradient = ({ variant, ...props }) => {
  const variants = variant.split(" ");

  return (
    <span
      className={clsx(
        variants.includes("stroke") && "*:[stroke:url(#icon-gradient)]",
        variants.includes("fill") && "*:[fill:url(#icon-gradient)]",
      )}
      {...props}
    />
  );
};
export default IconGradient;
