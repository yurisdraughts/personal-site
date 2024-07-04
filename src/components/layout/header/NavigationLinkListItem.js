import * as React from "react";
import { Link } from "gatsby";
import clsx from "clsx/lite";

const NavigationLink = ({ className, to, ...props }) => {
  return (
    <li>
      <Link
        to={to}
        className={clsx(
          className,
          `grid h-lg rounded-sm font-semibold transition-colors
          hover:text-[--text-accent] focus:text-[--text-accent]`,
        )}
      >
        <span className="place-self-center" {...props} />
      </Link>
    </li>
  );
};

export default NavigationLink;
