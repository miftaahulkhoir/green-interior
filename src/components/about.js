import React from "react";
import { withPrefix } from "gatsby";

const About = () => {
  return (
    <section className="wt-section bg-light" id="about">
      <div className="container">
        <div className="row justify-content-md-center text-center pb-lg-4 mb-lg-5 mb-4">
          <div className="col-md-8 text-center w-md-50 mx-auto mb-0">
            <h2 className="mb-md-2">Why Us</h2>
            <p className="lead text-muted"></p>
          </div>
          <div className="row mt-5">
            <div
              className="col-lg-3 mb-5 mb-lg-0 text-center"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-delay="100"
            >
              <div className="d-block mb-4">
                <img
                  src={withPrefix("img/services/4.svg")}
                  width="85px"
                  alt=""
                />
              </div>
              <h4 className="h5">Garansi 5 Tahun</h4>
            </div>

            <div
              className="col-lg-3 mb-5 mb-lg-0 text-center"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-delay="200"
            >
              <div className="d-block mb-4">
                <img
                  src={withPrefix("img/services/1.svg")}
                  width="85px"
                  alt=""
                />
              </div>
              <h4 className="h5">Kualitas Bahan Terbaik</h4>
            </div>

            <div
              className="col-lg-3 mb-5 mb-lg-0 text-center"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-delay="300"
            >
              <div className="d-block mb-4">
                <img
                  src={withPrefix("img/services/5.svg")}
                  width="85px"
                  alt=""
                />
              </div>
              <h4 className="h5">Design Custom Sesuai Keinginan</h4>
            </div>
            <div
              className="col-lg-3 mb-5 mb-lg-0 text-center"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-delay="300"
            >
              <div className="d-block mb-4">
                <img
                  src={withPrefix("img/services/5.svg")}
                  width="85px"
                  alt=""
                />
              </div>
              <h4 className="h5">Paket Murah</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
