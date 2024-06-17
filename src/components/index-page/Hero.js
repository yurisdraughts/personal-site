import * as React from "react";
import Container from "../Container";
import Decoration from "./Decoration";
import Gradient from "../Gradient";

const Hero = () => {
  return (
    <section className="relative h-[calc(100dvh-theme(spacing.lg))]">
      <Container
        className="flex h-full flex-col items-center justify-end md:flex-row
          md:justify-start"
      >
        <hgroup className={"z-10 mb-16 text-start *:my-2 md:mb-0"}>
          <p className="h3">Здравствуйте! Меня зовут</p>
          <h1 className="h1">
            <Gradient>Матвеев Юрий</Gradient>,
          </h1>
          <p className="h3">
            и я начинающий <Gradient>фронтенд-разработчик</Gradient>
          </p>
        </hgroup>
        <Decoration
          className={`h-80 w-10/12 bg-[--bg-accent] md:absolute md:right-0
            md:w-1/2`}
          aria-hidden="true"
        />
      </Container>
    </section>
  );
};

export default Hero;
