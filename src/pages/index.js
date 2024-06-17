import * as React from "react";
import Layout from "../components/layout/Layout";
import Hero from "../components/index-page/Hero";
import About from "../components/index-page/About";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
