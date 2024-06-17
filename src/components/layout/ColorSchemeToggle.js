import * as React from "react";
import { FaMoon, FaSun } from "react-icons/fa6";

const isBrowser = typeof window !== "undefined";

const PolymorphicComponent = ({
  className,
  component: Component,
  ...props
}) => <Component className={className} {...props} />;

const Toggle = () => {
  const [theme, setTheme] = React.useState(
    isBrowser && document.documentElement.classList.contains("dark")
      ? "dark"
      : "light",
  );

  if (isBrowser) {
    window.matchMedia("(prefers-color-scheme: dark)").onchange = (e) => {
      if (e.matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    };
  }

  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    try {
      localStorage.theme = theme;
    } catch (e) {
      console.error(
        "Не удалось сохранить тему в локальное хранилище: ",
        e.message,
      );
    }
  }, [theme]);

  return (
    <button
      type="button"
      className={`group/rotate-icon transition-color my-auto grid h-10
        w-16 place-items-center rounded-md bg-base-3 duration-300
        hover:bg-base-03 hover:text-base-1 focus-visible:bg-base-03
        focus-visible:text-base-1 dark:bg-base-03 hover:dark:bg-base-3
        hover:dark:text-base-01 focus-visible:dark:bg-base-3
        focus-visible:dark:text-base-01`}
      onClick={() => {
        setTheme((val) => (val === "light" ? "dark" : "light"));
      }}
    >
      {
        <PolymorphicComponent
          component={theme === "light" ? FaMoon : FaSun}
          className={`transition-transform duration-500
          group-hover/rotate-icon:-rotate-12
          group-focus-visible/rotate-icon:-rotate-12`}
        />
      }
    </button>
  );
};

export default Toggle;
