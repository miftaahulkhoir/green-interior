import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Banner = () => (
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
);

export default Banner;
