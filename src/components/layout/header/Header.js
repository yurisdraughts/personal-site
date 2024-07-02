import * as React from "react";
import Container from "../Container";
import Toggle from "./ColorSchemeToggle";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header
      className={`fixed inset-x-0 top-0 z-20 border-b border-b-[--bg-primary]
        bg-[--bg-accent] text-lg text-[--text-secondary]`}
    >
      <Container className="flex h-lg justify-between">
        <Navigation />
        <Toggle />
      </Container>
    </header>
  );
};

export default Header;
