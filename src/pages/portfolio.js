import * as React from "react";
import { graphql } from "gatsby";
import * as runtime from "react/jsx-runtime";
import { compileSync, runSync } from "@mdx-js/mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout/Layout";
import Container from "../components/Container";
import Highlight from "../components/Highlight";
import Gradient from "../components/Gradient";
import { ExternalLink } from "../components/Link";

const components = {
  strong: Highlight,
  a: ExternalLink,
  p: (props) => <p className="rounded-3xl bg-[--bg-primary] p-sm" {...props} />,
};

const PortfolioPage = ({ data }) => {
  const projects = data.allMdx.nodes.map((node) => {
    const { default: Project } = runSync(
      String(compileSync(node.body, { outputFormat: "function-body" })),
      { ...runtime },
    );

    return (
      <div
        key={node.id}
        className="grid justify-items-center rounded-3xl bg-[--bg-accent] p-sm
          lg:!mt-0"
      >
        {node.frontmatter.featuredImage && (
          <GatsbyImage
            image={getImage(
              node.frontmatter.featuredImage.childImageSharp.gatsbyImageData,
            )}
            alt={node.frontmatter.imageAlt}
            imgClassName="rounded-3xl "
            className="mb-sm"
          />
        )}
        <Project components={components} />
      </div>
    );
  });

  return (
    <Layout>
      <Container className={"py-sm"}>
        <h1 className="h1">
          <Gradient>Портфолио</Gradient>
        </h1>
        <div className="mt-6 grid items-start gap-6 lg:grid-cols-2">
          {projects}
        </div>
      </Container>
    </Layout>
  );
};

export default PortfolioPage;

export const pageQuery = graphql`
  query PortfolioProjects {
    allMdx(
      filter: {
        internal: {
          contentFilePath: { glob: "**/src/content/portfolio-page/*.mdx" }
        }
      }
      sort: { frontmatter: { order: DESC } }
    ) {
      nodes {
        body
        id
        frontmatter {
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 900)
            }
          }
          imageAlt
        }
      }
    }
  }
`;

export const Head = () => <title>Portfolio Page</title>;
