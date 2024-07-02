import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({ title }) => {
  const {
    site: {
      siteMetadata: { title: defaultTitle },
    },
  } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return <title>{title ? ` ${title} [${defaultTitle}]` : defaultTitle}</title>;
};

export default Seo;
