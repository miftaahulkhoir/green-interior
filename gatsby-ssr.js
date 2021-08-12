import React from "react";
import { withPrefix } from "gatsby-link";

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="jquery.min"
      src={withPrefix("vendors/jquery.min.js")}
    ></script>,
    <script
      key="jquery.migrate"
      src={withPrefix("vendors/jquery.migrate.min.js")}
    ></script>,
    <script key="popper" src={withPrefix("vendors/popper.min.js")}></script>,
    <script
      key="bootstrap"
      src={withPrefix("vendors/bootstrap/js/bootstrap.min.js")}
    ></script>,
    <script
      key="easing"
      src={withPrefix("vendors/jquery-easing/jquery.easing.min.js")}
    ></script>,

    <script
      key="slick"
      src={withPrefix("vendors/slick-carousel/slick.min.js")}
    ></script>,
    <script
      key="isotope"
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.js"
    ></script>,
    <script
      key="magnific"
      src={withPrefix("vendors/magnific-popup/jquery.magnific-popup.min.js")}
    ></script>,
    <script
      key="waypoint"
      src={withPrefix("vendors/counters/waypoint.min.js")}
    ></script>,
    <script
      key="counterup"
      src={withPrefix("vendors/counters/counterup.min.js")}
    ></script>,
    <script key="aos" src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>,

    <script key="carousel" src={withPrefix("vendors/carousel.js")}></script>,
    <script key="counters" src={withPrefix("vendors/counters.js")}></script>,
  ]);
};
