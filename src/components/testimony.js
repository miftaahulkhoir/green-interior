import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Testimony = () => {
  return (
    <section className="wt-section" id="feedback">
      <div className="container">
        <div className="row justify-content-md-center text-center pb-lg-4 mb-lg-5 mb-4">
          <div className="col-md-8 text-center w-md-50 mx-auto mb-0 ">
            <h2 className="mb-md-2">Testimonials</h2>
            <p>
              Maxi creative technology company providing key digital services
              for everyone.
            </p>
          </div>
        </div>

        <div className="row">
          <div
            className="col-lg-6 mb-7 mb-lg-0 px-lg-5"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-delay="200"
          >
            <blockquote className="wt-blockquote-v2 rounded mb-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </blockquote>
            <div className="media wt-font-size-90">
              <StaticImage
                className="d-flex align-self-center rounded-circle wt-blockquote-v2__image wt-box-shadow-lg mx-3 mt-2"
                src="../assets/img/ava/img2.jpg"
                alt="Image description"
              />
              <div className="media-body align-self-center">
                <strong className="d-block">Kristen Morres</strong>
                <span className="wt-font-size-75 text-dark">XL Director</span>
              </div>
            </div>
          </div>

          <div
            className="col-lg-6 px-lg-5"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-delay="400"
          >
            <blockquote className="wt-blockquote-v2 rounded mb-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </blockquote>
            <div className="media wt-font-size-90">
              <StaticImage
                className="d-flex align-self-center rounded-circle wt-blockquote-v2__image wt-box-shadow-lg mx-3 mt-2"
                src="../assets/img/ava/img3.jpg"
                alt="Image description"
              />
              <div className="media-body align-self-center">
                <strong className="d-block">James Vintel</strong>
                <span className="wt-font-size-75 text-dark">VNT Manager</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
