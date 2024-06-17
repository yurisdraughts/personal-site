import * as React from "react";
import Link from "../Link";
import Container from "../Container";
import Toggle from "./ColorSchemeToggle";

const links = Object.entries({
  "": "Главная",
  portfolio: "Портфолио",
});

const Header = () => {
  return (
    <header
      className={`fixed inset-x-0 top-0 z-20 border-b border-b-[--bg-primary]
        bg-[--bg-accent] text-lg text-[--text-secondary]`}
    >
      <Container className="flex h-lg justify-between">
        <nav>
          <ul className="flex h-full items-center gap-4">
            {links.map(([page, text]) => (
              <li key={page}>
                <Link to={`/${page}`}>
                  <span className="place-self-center">{text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Toggle />
      </Container>
    </header>
  );
};

export default Header;
