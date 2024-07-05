import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Container from "../layout/Container";
import Gradient from "../text/Gradient";
import Highlight from "../text/Highlight";
import IconGradient, { EnableGradientIcons } from "../text/IconGradient";
import Link from "../links/Link";
import ExternalLink from "../links/ExternalLink";
import AboutMe from "../../content/about-me.mdx";

const About = () => {
  return (
    <section className="group/about flow-root">
      <Container
        className={`relative mb-lg grid justify-items-center gap-sm rounded-3xl
          bg-[--bg-accent] pb-sm text-[--text-primary] *:w-10/12
          *:bg-[--bg-primary] *:p-sm md:grid-cols-[13fr_15fr] md:rounded-t-4xl
          md:border md:border-[--bg-primary] md:pr-sm md:pt-sm md:*:w-full`}
      >
        <div
          className="grid items-start justify-center rounded-b-4xl
            md:rounded-r-4xl md:rounded-bl-none md:pl-0"
        >
          <StaticImage
            src="../../images/about-me.jpg"
            alt="Моя фотография на фоне леса"
            width={430}
            height={430}
            className="rounded-2xl sm:rounded-3xl md:!sticky
              md:top-[calc(theme(spacing.lg)+theme(spacing.sm))]"
          />
        </div>
        <AboutMe
          components={{
            h2: ({ children, ...props }) => (
              <h2 className="h2" {...props}>
                <Gradient>{children}</Gradient>
              </h2>
            ),
            p: (props) => <p className="p" {...props} />,
            ul: (props) => <ul className="list" {...props} />,
            a: ({ href, ...props }) => <Link to={href} {...props} />,
            strong: Highlight,
            theme: {
              icon: ({ icon: Icon, ...props }) => (
                <span className="whitespace-nowrap">
                  <Icon className="inline-block" /> <Highlight {...props} />
                </span>
              ),
              "gradient-icon": ({ icon: Icon, ...props }) => (
                <span className="whitespace-nowrap">
                  <IconGradient variant="stroke">
                    <Icon className="inline-block" />
                  </IconGradient>{" "}
                  <Highlight {...props} />
                </span>
              ),
              link: ExternalLink,
            },
            wrapper: ({ components, ...rest }) => (
              <div className="rounded-4xl">
                <EnableGradientIcons />
                <React.Fragment {...rest} />
              </div>
            ),
          }}
        />
      </Container>
    </section>
  );
};

export default About;
