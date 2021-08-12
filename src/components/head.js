import React from "react";
import { withPrefix } from "gatsby";
import { Helmet } from "react-helmet";

const Head = () => (
  <Helmet>
    {console.log('test')}
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href={withPrefix("vendors/font-awesome/css/fontawesome-all.min.css")}
    />
    <link
      rel="stylesheet"
      type="text/css"
      href={withPrefix("vendors/slick-carousel/slick.css")}
    />
    <link
      rel="stylesheet"
      type="text/css"
      href={withPrefix("fonts/themify-icons.css")}
    />
    <link
      rel="stylesheet"
      type="text/css"
      href={withPrefix("vendors/magnific-popup/magnific-popup.css")}
    />
    <link rel="stylesheet" type="text/css" href={withPrefix("css/aos.css")} />
    <link
      rel="stylesheet"
      type="text/css"
      href={withPrefix("css/hovereffects.css")}
    />
    <link href={withPrefix("css/scrolling-nav.css")} rel="stylesheet" />
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href={withPrefix("css/theme.css")} />
    <link
      rel="stylesheet"
      type="text/css"
      href={withPrefix("css/styles.css")}
    />
    <script
      defer
      key="scrolling"
      src={withPrefix("js/scrolling-nav.js")}
    ></script>
    <script defer key="global" src={withPrefix("js/global.js")}></script>
    {/* <script >$('[data-aos]').parent().addClass('hideOverflowOnMobile')/; */}
    {/* <script  async src="https://www.googletagmanager.com/gtag/js?id=G-H285CVWKTW"/>
<script >
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-H285CVWKTW');
  {gtag('event', 'page_view', {'method': 'Google'})}/
 */}
  </Helmet>
);

export default Head;
