import * as React from "react";

const applyDarkModeClass = /*js*/ `try {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches())
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  } catch (e) {
    console.error(
      "Не удалось извлечь тему из локального хранилища: ",
      e.message,
    );
  }`;

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="dark-mode-script"
      dangerouslySetInnerHTML={{ __html: applyDarkModeClass }}
    ></script>,
    <link key="font-link-1" rel="preconnect" href="https://rsms.me/" />,
    <link
      key="font-link-2"
      rel="stylesheet"
      href="https://rsms.me/inter/inter.css"
    />,
  ]);
};
