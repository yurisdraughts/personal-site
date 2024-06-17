import * as React from "react";
import Container from "../Container";

const Footer = () => {
  return (
    <footer
      className={`fixed bottom-0 left-0 right-0 z-0 h-96 bg-base-2 text-base-00
        dark:bg-base-02 dark:text-base-0`}
    >
      
      <Container className="bg-base-3 dark:bg-base-03"></Container>
    </footer>
  );
};

export default Footer;
