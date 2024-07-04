import * as React from "react";

const Main = ({ children }) => {
  return (
    <main
      className={`relative z-10 mb-footer min-h-dvh border-b
        border-b-[--bg-accent] bg-base-3 pt-lg text-base-00 dark:bg-base-03
        dark:text-base-0`}
    >
      {children}
    </main>
  );
};

export default Main;
