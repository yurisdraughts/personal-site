import * as React from "react";
import clsx from "clsx";

const getFaces = () =>
  Array.from({ length: 6 }).map((_, i) => (
    <div
      key={i}
      className={clsx(
        i === 0 && "-translate-y-6 rotate-x-90",
        i === 1 && "translate-y-6 -rotate-x-90",
        i === 2 && "translate-x-6 -rotate-y-90",
        i === 3 && "translate-z-6 rotate-y-0",
        i === 4 && "-translate-x-6 rotate-y-90",
        i === 5 && "-translate-z-6 rotate-y-180",
        "box-shadow size-12 duration-300 hover:transition-[box-shadow]",
      )}
    ></div>
  ));

const cubes = Array.from({ length: 6 }).map((_, i) => (
  <div
    key={i}
    className={clsx(
      i === 0 && [
        "-translate-y-14 rotate-x-[70deg] hover:text-cyan dark:hover:text-orange",
      ],
      i === 1 && [
        `scale-3d-[0.4] -translate-x-14 translate-z-14 rotate-y-[40deg]
        hover:text-blue dark:hover:text-red`,
      ],
      i === 2 && [
        "translate-x-14 scale3d-[0.8] hover:text-violet dark:hover:text-yellow",
      ],
      i === 3 && "rotate-y-[30deg] hover:text-green",
      i === 4 &&
        `peer/nested-boxes translate-y-20 rotate-y-[40deg] scale3d-[1.2]
        hover:text-magenta`,
      i === 5 &&
        `animate-rotate3d translate-x-5 translate-y-28 -translate-z-5
        rotate-y-[-70deg] scale3d-[0.2] peer-hover/nested-boxes:text-magenta`,
      "left-1/2 top-1/2 text-[--text-secondary]",
    )}
  >
    {getFaces()}
  </div>
));

const Decoration = ({ className, ...props }) => {
  return (
    <div
      className={clsx(
        className,
        `rounded-t-4xl grid place-content-center
        md:rounded-l-[theme(spacing.52)] md:rounded-tr-none`,
      )}
      {...props}
    >
      <div
        className="size-52 animate-rotate3d perspective-[4000px]
          transform-style-3d [&_*]:absolute [&_*]:transform-style-3d"
      >
        {cubes}
      </div>
    </div>
  );
};

export default Decoration;
