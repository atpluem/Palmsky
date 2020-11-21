import React, { Component } from "react";

export default function Slider() {
  return (
    <div>
      <div
        id="myCarousel"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <h1>KANOJO, OKARISHiMASU</h1>
              <p>
                Author: Reiji Miyajima <br />
                Publisher: Kodansha
              </p>
              <a href="#" className="btn btn-lg btn-primary">
                Detail
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <div className="container">
              <h1>KANOJI, OKARISHiMASU</h1>
              <p>
                Author: Reiji Miyajima <br />
                Publisher: Kodansha
              </p>
              <a href="#" className="btn btn-lg btn-primary">
                Detail
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <div className="container">
              <h1>KANOJI, OKARISHiMASU</h1>
              <p>
                Author: Reiji Miyajima <br />
                Publisher: Kodansha
              </p>
              <a href="#" className="btn btn-lg btn-primary">
                Detail
              </a>
            </div>
          </div>
        </div>
        {/* Prev and Next */}
        <a
          href="#myCarousel"
          className="carousel-control-prev"
          role="button"
          data-slide="prev"
        >
          <span className="sr-only"></span>
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </a>
        <a
          href="#myCarousel"
          className="carousel-control-next"
          role="button"
          data-slide="next"
        >
          <span className="sr-only"></span>
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </a>
      </div>

      <style jsx>
        {`
          .carousel-item {
            height: 32em;
            background: #777;
            color: white;
          }
          .container {
            position: absolute;
            bottom: 0;
            left: 10;
            right: 0;
            padding-bottom: 50px;
          }
        `}
      </style>
    </div>
  );
}
