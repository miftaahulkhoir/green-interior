import React from "react";

import Layout from "../components/layout";
import Head from "../components/head";
import Header from "../components/header";
import Main from "../components/main";
import Service from "../components/service";
import About from "../components/about";
import Portfolio from "../components/portfolio";
import Testimony from "../components/testimony";
import Footer from "../components/footer";
import Whatsapp from "../components/whatsapp";

const IndexPage = () => (
  <Layout>
    <Head />
    <Header />
    <Main>
      <Service />
      <About />
      <Portfolio />
      <Testimony />
    </Main>
    <Footer />
    <Whatsapp />
  </Layout>
);

export default IndexPage;
