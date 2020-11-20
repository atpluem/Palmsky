import React, { Component } from "react";
import Link from "next/link";
// Component 
import Nav from "../components/Nav";
import HomeCat from "../components/HomeCat";
// Style
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <div>
      <main>
        <Nav />
        {/* CAROUSEL */}
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

        {/* BODY */}
        <HomeCat />
        
        <div className={styles.set}>
          <div className={styles.content}>
            <div className={styles.container}>
              <div className={styles.item}>
                <img
                  src="https://www.playinone.com/wp-content/uploads/2019/12/%E0%B8%AA%E0%B8%B0%E0%B8%94%E0%B8%B8%E0%B8%94%E0%B8%A3%E0%B8%B1%E0%B8%81%E0%B8%A2%E0%B8%B1%E0%B8%A2%E0%B9%81%E0%B8%9F%E0%B8%99%E0%B9%80%E0%B8%8A%E0%B9%88%E0%B8%B2-11.jpg"
                  height="300"
                  alt=""
                />
              </div>
              <div className={styles.item}>
                <img
                  src="https://www.playinone.com/wp-content/uploads/2019/12/%E0%B8%AA%E0%B8%B0%E0%B8%94%E0%B8%B8%E0%B8%94%E0%B8%A3%E0%B8%B1%E0%B8%81%E0%B8%A2%E0%B8%B1%E0%B8%A2%E0%B9%81%E0%B8%9F%E0%B8%99%E0%B9%80%E0%B8%8A%E0%B9%88%E0%B8%B2-11.jpg"
                  height="300"
                  alt=""
                />
              </div>
              <div className={styles.item}>
                <img
                  src="https://www.playinone.com/wp-content/uploads/2019/12/%E0%B8%AA%E0%B8%B0%E0%B8%94%E0%B8%B8%E0%B8%94%E0%B8%A3%E0%B8%B1%E0%B8%81%E0%B8%A2%E0%B8%B1%E0%B8%A2%E0%B9%81%E0%B8%9F%E0%B8%99%E0%B9%80%E0%B8%8A%E0%B9%88%E0%B8%B2-11.jpg"
                  height="300"
                  alt=""
                />
              </div>
              <div className={styles.item}>
                <img
                  src="https://www.playinone.com/wp-content/uploads/2019/12/%E0%B8%AA%E0%B8%B0%E0%B8%94%E0%B8%B8%E0%B8%94%E0%B8%A3%E0%B8%B1%E0%B8%81%E0%B8%A2%E0%B8%B1%E0%B8%A2%E0%B9%81%E0%B8%9F%E0%B8%99%E0%B9%80%E0%B8%8A%E0%B9%88%E0%B8%B2-11.jpg"
                  height="300"
                  alt=""
                />
              </div>
              <div className={styles.item}>
                <img
                  src="https://www.playinone.com/wp-content/uploads/2019/12/%E0%B8%AA%E0%B8%B0%E0%B8%94%E0%B8%B8%E0%B8%94%E0%B8%A3%E0%B8%B1%E0%B8%81%E0%B8%A2%E0%B8%B1%E0%B8%A2%E0%B9%81%E0%B8%9F%E0%B8%99%E0%B9%80%E0%B8%8A%E0%B9%88%E0%B8%B2-11.jpg"
                  height="300"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </main>

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
