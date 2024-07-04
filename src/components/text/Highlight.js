import * as React from "react";
import clsx from "clsx/lite";

const Highlight = ({ className, ...props }) => {
  return (
    <span
      className={clsx(
        className,
        `rounded bg-[--bg-accent] box-decoration-clone px-[0.3rem] py-[0.2rem]
        text-sm font-semibold text-[--text-primary]`,
      )}
      {...props}
    />
  );
};

export default Highlight;
