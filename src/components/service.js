import React from "react";
import { withPrefix } from "gatsby";

const Service = () => {
  return (
    <section className="wt-section" id="services">
      <div className="container">
        <div className="row justify-content-md-center text-center pb-lg-4 mb-lg-5 mb-4">
          <div className="col-md-8 text-center w-md-50 mx-auto mb-0">
            <h2 className="mb-md-2">Our Services</h2>
            <p className="lead text-muted">
              Green Interior menyediakan jasa design interior dengan pekerja
              yang profesional dan berpengalaman selama 8 tahun. Sesuai budget
              dan kualitas yang anda inginkan, kita wujudkan impian anda.
            </p>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-4 mb-5 mb-lg-0 text-center"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="100"
          >
            <div className="d-block mb-4">
              <img src={withPrefix("img/services/4.svg")} width="85px" alt="" />
            </div>
            <h4 className="h5">Home Interior</h4>
            <p>Design eksterior, interior, furniture (All in 1).</p>
          </div>

          <div
            className="col-lg-4 mb-5 mb-lg-0 text-center"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="200"
          >
            <div className="d-block mb-4">
              <img src={withPrefix("img/services/1.svg")} width="85px" alt="" />
            </div>
            <h4 className="h5">Custom Design</h4>
            <p>
              Design interior dengan tema scandinavian, semi classNameic,
              minimalis dan tema lain yang anda inginkan.
            </p>
          </div>

          <div
            className="col-lg-4 mb-5 mb-lg-0 text-center"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="300"
          >
            <div className="d-block mb-4">
              <img src={withPrefix("img/services/5.svg")} width="85px" alt="" />
            </div>
            <h4 className="h5">Business Interior</h4>
            <p>
              Design interior untuk apartemen, kafe, klinik dan bisnis lainnya.
            </p>
          </div>
        </div>

        <hr className="my-5" />

        <div className="row">
          <div
            className="col-lg-4 mb-5 mb-lg-0 text-center"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="400"
          >
            <div className="d-block mb-4">
              <img src={withPrefix("img/services/3.svg")} width="85px" alt="" />
            </div>
            <h4 className="h5">Security Setup</h4>
            <p>
              Interior keamanan seperti pagar, kunci pintu, brankas, dan
              keamanan lainnya.
            </p>
          </div>

          <div
            className="col-lg-4 mb-5 mb-lg-0 text-center"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="500"
          >
            <div className="d-block mb-4">
              <img src={withPrefix("img/services/6.svg")} width="85px" alt="" />
            </div>
            <h4 className="h5">Custom Paint</h4>
            <p>Design lukisan, walpaper, dan cat tembok.</p>
          </div>

          <div
            className="col-lg-4 mb-5 mb-lg-0 text-center"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="600"
          >
            <div className="d-block mb-4">
              <img src={withPrefix("img/services/2.svg")} width="85px" alt="" />
            </div>
            <h4 className="h5">Home Decor</h4>
            <p>
              Perlengkapan aksesoris seperti lukisan, meja, kursi dan
              perlengkapan lainnya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
