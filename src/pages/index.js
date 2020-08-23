import React from "react";
import Helmet from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";

const IndexPage = () => {
  return (
    <Layout pageName="home">
      <Helmet>
        <title>Senthanal Sirpi Manohar</title>
      </Helmet>
      <Container>
        <h1 className="heading">Hello! I'm Senthanal</h1>
        <p>Welcome to my page!</p>
      </Container>
    </Layout>
  );
};

export default IndexPage;
