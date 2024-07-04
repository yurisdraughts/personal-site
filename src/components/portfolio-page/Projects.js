import * as React from "react";
import { TbBrandGithub } from "react-icons/tb";
import { graphql, useStaticQuery } from "gatsby";
import * as runtime from "react/jsx-runtime";
import { compileSync, runSync } from "@mdx-js/mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Highlight from "../text/Highlight";
import ExternalLink from "../links/ExternalLink";

const components = {
  strong: Highlight,
  a: ExternalLink,
  p: (props) => <p className="rounded-3xl bg-[--bg-primary] p-sm" {...props} />,
  theme: {
    "gh-link": ({ ...props }) => (
      <ExternalLink icon={TbBrandGithub} {...props} />
    ),
  },
};

const Projects = () => {
  const {
    allMdx: { nodes },
  } = useStaticQuery(graphql`
    query PortfolioProjectsQuery {
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
  `);

  return (
    <div className="mt-6 grid items-start gap-6 lg:grid-cols-2">
      {nodes.map((node) => {
        const { default: Project } = runSync(
          String(compileSync(node.body, { outputFormat: "function-body" })),
          { ...runtime },
        );

        return (
          <div
            key={node.id}
            className="grid justify-items-center rounded-3xl bg-[--bg-accent]
              p-sm lg:!mt-0"
          >
            {node.frontmatter.featuredImage && (
              <GatsbyImage
                image={getImage(
                  node.frontmatter.featuredImage.childImageSharp
                    .gatsbyImageData,
                )}
                alt={node.frontmatter.imageAlt}
                imgClassName="rounded-3xl "
                className="mb-sm"
              />
            )}
            <Project components={components} />
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
