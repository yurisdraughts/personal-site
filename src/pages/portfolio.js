import * as React from "react";
import Layout from "../components/layout/Layout";
import Container from "../components/layout/Container";
import Projects from "../components/portfolio-page/Projects";
import Gradient from "../components/text/Gradient";
import Seo from "../components/Seo";

const PortfolioPage = () => {
  return (
    <Layout>
      <Container className={"py-sm"}>
        <h1 className="h1">
          <Gradient>Портфолио</Gradient>
        </h1>
        <Projects />
      </Container>
    </Layout>
  );
};

export default PortfolioPage;

export const Head = () => <Seo title="Портфолио" />;
