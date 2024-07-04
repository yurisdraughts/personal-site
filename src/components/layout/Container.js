import * as React from "react";
import clsx from "clsx/lite";

const Container = ({ className, ...props }) => {
  return (
    <div
      className={clsx(
        className,
        "mx-auto w-11/12 sm:w-5/6 lg:mx-auto xl:w-[theme(screens.lg)]",
      )}
      {...props}
    />
  );
};

export default Container;
