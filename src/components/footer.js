import React from "react";

const Footer = () => {
  return (
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
                  rel="noopener noreferrer"
                >
                  More
                </a>
              </div>
            </small>
          </div>
          <div className="col-md-6 contact d-flex justify-content-end">
            <ul className="list-inline text-center text-md-right mb-0 d-flex flex-column align-items-start">
              <li
                className="list-inline-item mx-2"
                data-toggle="tooltip"
                data-placement="top"
              >
                <a
                  className="text-white"
                  target="_blank"
                  href="tel:085217767508"
                  rel="noopener noreferrer"
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
                  rel="noopener noreferrer"
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
                  rel="noopener noreferrer"
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
  );
};

export default Footer;
