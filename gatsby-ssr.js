import React from "react";
import { withPrefix } from "gatsby-link";

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script key="jquery.min" src={withPrefix("vendors/jquery.min.js")}></script>,
    <script key="jquery.migrate" src={withPrefix("vendors/jquery.migrate.min.js")}></script>,
    <script key="popper" src={withPrefix("vendors/popper.min.js")}></script>,
    <script key="bootstrap" src={withPrefix("vendors/bootstrap/js/bootstrap.min.js")}></script>,
    <script key="easing"
      src={withPrefix("vendors/jquery-easing/jquery.easing.min.js")}
    ></script>,

    <script key="slick" src={withPrefix("vendors/slick-carousel/slick.min.js")}></script>,
    <script key="isotope" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.js"></script>,
    <script
    key="magnific"
      src={withPrefix("vendors/magnific-popup/jquery.magnific-popup.min.js")}
    ></script>,
    <script key="waypoint" src={withPrefix("vendors/counters/waypoint.min.js")}></script>,
    <script key="counterup" src={withPrefix("vendors/counters/counterup.min.js")}></script>,
    <script key="aos" src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>,
    // <script key="scrolling" src={withPrefix("js/scrolling-nav.js")}></script>,
    // <script key="global" src={withPrefix("js/global.js")}></script>,

    <script key="carousel" src={withPrefix("vendors/carousel.js")}></script>,
    <script key="counters" src={withPrefix("vendors/counters.js")}></script>,
  ]);
};

// // export const onRenderBody = ({ setPostBodyComponents }) => {
// //   setPostBodyComponents([
// //     <script
// //       key="/node_modules/jquery/dist/jquery.min.js"
// //       src="/node_modules/jquery/dist/jquery.min.js"
// //       defer
// //     />,
// //     <script
// //       key="/node_modules/popper.js/dist/popper.min"
// //       src="/node_modules/popper.js/dist/popper.min"
// //       defer
// //     />,
// //     <script
// //       key="/node_modules/bootstrap/dist/js/bootstrap.min.js"
// //       src="/node_modules/bootstrap/dist/js/bootstrap.min.js"
// //       defer
// //     />,
// //     <script
// //       key="https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.js"
// //       src="https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.js"
// //       defer
// //     />,
// //     <script
// //       key="/src/assets/js/global.js"
// //       src="/src/assets/js/global.js"
// //       defer
// //     />,

// //     //     import 'jquery/dist/jquery.min.js'
// //     // import 'popper.js/dist/popper.min'
// //     // import 'bootstrap/dist/js/bootstrap.min.js'

// //     // import './src/assets/js/global.js';

// //     // <script
// //     //   key="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
// //     //   src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
// //     //   integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
// //     //   crossOrigin="anonymous"
// //     //   defer
// //     // />,
// //     // <script
// //     //   key="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
// //     //   src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
// //     //   integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
// //     //   crossOrigin="anonymous"
// //     //   defer
// //     // />
// //   ]);
// // };

// import React from "react";
// import { withPrefix } from "gatsby";
// // const jQuery = require("jquery")

// export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
//   setHeadComponents([
//     <script
//       key="/node_modules/popper.js/dist/popper.min"
//       src={"/node_modules/jquery/dist/jquery.min.js"}
//       integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
//       crossOrigin="anonymous"
//       defer
//     ></script>,,
//   ]);
// };
