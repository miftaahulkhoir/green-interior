import React from "react";
import { withPrefix } from "gatsby";

const Portfolio = () => {
  return (
    <section className="wt-section" id="portfolio">
      <div className="container">
        <div className="row justify-content-md-center text-center pb-lg-5">
          <div className="col-md-12">
            <h2 className="h1">Portfolio</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
          </div>
        </div>
        <div className="portfolio-menu mt-2 mb-4 pb-3">
          <ul>
            <li className="btn mr-2 btn-outline-dark active" data-filter="*">
              Semua
            </li>
            <li className="btn mr-2 btn-outline-dark" data-filter=".gts">
              Apartemen
            </li>
            <li className="btn mr-2 btn-outline-dark" data-filter=".lap">
              Rumah
            </li>
          </ul>
        </div>
        <div
          className="portfolio-item row"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-delay="100"
        >
          <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
            <a href="portfolio.html">
              <div
                className="hovereffect5 rounded-md overflow-hidden"
                style={{ cursor: "pointer" }}
              >
                <img
                  className="img-fluid img-responsive"
                  src={withPrefix("img/portfolio/kitchen-set-1.jpg")}
                  alt=""
                />
                <div className="overlay">
                  <p className="d-flex align-items-center justify-content-center">
                    <strong>Kitchen Set</strong>
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="item selfie col-lg-3 col-md-4 col-6 col-sm">
            <div className="hovereffect5 rounded-md overflow-hidden">
              <img
                className="img-fluid img-responsive"
                src={withPrefix("img/portfolio/img2.jpg")}
                alt=""
              />
              <div className="overlay">
                <p>
                  <a
                    href="../assets/img/portfolio/img2.jpg"
                    className="fancylight popup-btn info"
                    data-fancybox-group="light"
                  >
                    My Profile
                    <i>view</i>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="item lap col-lg-3 col-md-4 col-6 col-sm">
            <div className="hovereffect5 rounded-md overflow-hidden">
              <img
                className="img-fluid img-responsive"
                src={withPrefix("img/portfolio/img3.jpg")}
                alt=""
              />
              <div className="overlay">
                <p>
                  <a
                    href="../assets/img/portfolio/img3.jpg"
                    className="fancylight popup-btn info"
                    data-fancybox-group="light"
                  >
                    My Profile
                    <i>view</i>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="item selfie col-lg-3 col-md-4 col-6 col-sm">
            <div className="hovereffect5 rounded-md overflow-hidden">
              <img
                className="img-fluid img-responsive"
                src={withPrefix("img/portfolio/img4.jpg")}
                alt=""
              />
              <div className="overlay">
                <p>
                  <a
                    href="../assets/img/portfolio/img4.jpg"
                    className="fancylight popup-btn info"
                    data-fancybox-group="light"
                  >
                    My Profile
                    <i>view</i>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="item lap col-lg-3 col-md-4 col-6 col-sm">
            <div className="hovereffect5 rounded-md overflow-hidden">
              <img
                className="img-fluid img-responsive"
                src={withPrefix("img/portfolio/img5.jpg")}
                alt=""
              />
              <div className="overlay">
                <p>
                  <a
                    href="../assets/img/portfolio/img5.jpg"
                    className="fancylight popup-btn info"
                    data-fancybox-group="light"
                  >
                    My Profile
                    <i>view</i>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
            <div className="hovereffect5 rounded-md overflow-hidden">
              <img
                className="img-fluid img-responsive"
                src={withPrefix("img/portfolio/img6.jpg")}
                alt=""
              />
              <div className="overlay">
                <p>
                  <a
                    href="../assets/img/portfolio/img6.jpg"
                    className="fancylight popup-btn info"
                    data-fancybox-group="light"
                  >
                    My Profile
                    <i>view</i>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
            <div className="hovereffect5 rounded-md overflow-hidden">
              <img
                className="img-fluid img-responsive"
                src={withPrefix("img/portfolio/img7.jpg")}
                alt=""
              />
              <div className="overlay">
                <p>
                  <a
                    href="../assets/img/portfolio/img7.jpg"
                    className="fancylight popup-btn info"
                    data-fancybox-group="light"
                  >
                    My Profile
                    <i>view</i>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="item selfie col-lg-3 col-md-4 col-6 col-sm">
            <div className="hovereffect5 rounded-md overflow-hidden">
              <img
                className="img-fluid img-responsive"
                src={withPrefix("img/portfolio/img8.jpg")}
                alt=""
              />
              <div className="overlay">
                <p>
                  <a
                    href="../assets/img/portfolio/img8.jpg"
                    className="fancylight popup-btn info"
                    data-fancybox-group="light"
                  >
                    My Profile
                    <i>view</i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
