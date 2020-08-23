import React from "react";
import Helmet from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";

const AboutPage = () => {
  return (
    <Layout pageName="about">
      <Helmet>
        <title>About</title>
      </Helmet>
      <Container>
        <h1>About</h1>
        <p>Software Developer & Prototyper</p>
        <p>I am a Software Developer, specialised in web based spatial software development. 
        Living in Munich, Germany. Working at WIGeoGIS, developing web applications 
        with Javascript frameworks, Java and Node. Mad table tennis paddler, 
        tweet useless things and retweet lot of useful stuff, amateur photographer.</p>
      </Container>
    </Layout>
  );
};

export default AboutPage;
