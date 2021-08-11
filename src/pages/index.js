import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
// import Hero from "../components/Hero"
import Head from "../components/head";
// import BannerCovid from "../components/BannerCovid"
// import GreduService from "../components/GreduService"
// import GreduActivity from "../components/GreduActivity"
// import HeroCTA from "../components/HeroCTA"
// import Content from "../components/Content"
// import WhatIsGredu from "../components/WhatIsGredu"
// import WhyGredu from "../components/WhyGredu"
import { withPrefix } from "gatsby-link";

const IndexPage = () => (
  // <Layout>
  // <body>
  <Layout>
    <Head />
    <header id="top">
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-white fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            Light<span>Up</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="ti-menu"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#top">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#team">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#price">
                  Price
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="hero-large hero">
        <div id="demo" className="carousel slide" data-ride="carousel">
          <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" className="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
          </ul>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <StaticImage
                src="../assets/img/intro/banner-bg1.png"
                alt="Los Angeles"
                width="1100"
                height="500"
                className="w-100 h-100"
              />
              <div className="container">
                <div className="carousel-caption">
                  <h2>Green Interior</h2>
                  <p>Ruangan Impian Anda, Kami Bawa ke Realita</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <StaticImage
                src="../assets/img/intro/banner-bg2.png"
                alt="Chicago"
                width="1100"
                height="500"
                className="w-100 h-100"
              />
              <div className="container">
                <div className="carousel-caption">
                  <h2>Segarkan Ruanganmu</h2>
                  <p>Décor with Charming</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <StaticImage
                src="../assets/img/intro/banner-bg3.png"
                alt="New York"
                width="1100"
                height="500"
                className="w-100 h-100"
              />
              <div className="container">
                <div className="carousel-caption">
                  <h2>Ciptakan Ruangan Impianmu</h2>
                  <p>Extra Special Touch</p>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
      </section>
    </header>

    <main role="main" className="mt-lg-5 m-0">
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
              {/* <StaticImage src="../../assets/img/intro/banner-bg1.png" /> */}
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
                <img
                  src={withPrefix("img/services/4.svg")}
                  width="85px"
                  alt=""
                />
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
                <img
                  src={withPrefix("img/services/1.svg")}
                  width="85px"
                  alt=""
                />
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
                <img
                  src={withPrefix("img/services/5.svg")}
                  width="85px"
                  alt=""
                />
              </div>
              <h4 className="h5">Business Interior</h4>
              <p>
                Design interior untuk apartemen, kafe, klinik dan bisnis
                lainnya.
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
                <img
                  src={withPrefix("img/services/3.svg")}
                  width="85px"
                  alt=""
                />
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
                <img
                  src={withPrefix("img/services/6.svg")}
                  width="85px"
                  alt=""
                />
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
                <img
                  src={withPrefix("img/services/2.svg")}
                  width="85px"
                  alt=""
                />
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

      <section className="wt-section">
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
    </main>

    <footer className="bg-dark py-5">
      <div className="container">
        <div className="row">
          <div
            className="col-md-6 text-center text-md-left mb-3 mb-md-0"
            style={{ color: "white" }}
          >
            <small>
              Jl. Gajah Mada, RT.12/RW.05, Wonocoyo Utara,
              <br /> Wonocoyo, Panggul, Kabupaten Trenggalek, <br />
              Jawa Timur 66364, Indonesia
              <div>
                <a
                  style={{ color: "#f1ad50", fontWeight: "bold" }}
                  target="_blank"
                  href="https://www.google.com/maps/place/KVN+Food+%26+Beverage/@-8.2502419,111.4516988,17z/data=!3m1!4b1!4m5!3m4!1s0x2e7941cdbb9272db:0x580bda839a3816bb!8m2!3d-8.2502472!4d111.4538875"
                >
                  More
                </a>
              </div>
            </small>
          </div>
          <div
            className="col-md-6 contact d-flex justify-end"
            // style="display: flex; justify-content: flex-end;"
          >
            <ul
              className="list-inline text-center text-md-right mb-0 d-flex flex-column align-items-start"
              // style="display: flex; flex-direction: column; align-items: flex-start;"
            >
              <li
                className="list-inline-item mx-2"
                data-toggle="tooltip"
                data-placement="top"
              >
                <a
                  className="text-white"
                  target="_blank"
                  href="tel:085217767508"
                >
                  <i className="fa fa-phone mt-md-1 text-primary pr-4"></i>
                  <span>0852 1776 7508</span>
                </a>
              </li>
              <li
                className="list-inline-item mx-2"
                data-toggle="tooltip"
                data-placement="top"
              >
                <a
                  className="text-white"
                  target="_blank"
                  href="https://wa.me/62895610514990?text=halo"
                >
                  <i className="fab fa-whatsapp mt-md-1 text-primary pr-4"></i>
                  <span>0852 1776 7508</span>
                </a>
              </li>
              <li
                className="list-inline-item mx-2"
                data-toggle="tooltip"
                data-placement="top"
              >
                <a
                  className="text-white"
                  target="_blank"
                  href="mailto:miftaahulkhoir@gmail.com"
                >
                  <i className="fa fa-envelope mt-md-1 text-primary pr-4"></i>
                  <span>miftaahulkhoir@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </Layout>
);

export default IndexPage;
