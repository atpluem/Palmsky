import React from "react";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

import styles from "../styles/cart.module.scss";

export default function Cart() {
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className={styles.container}>
              <div className={styles.inputGroup}>
                <input id="selectAll" name="selectAll" type="checkbox" />
                <label htmlFor="selectAll">Select All</label>
              </div>

              <div className="card">
                <div className="row">
                  <div className="col">
                    <img
                      src="https://cdn.shortpixel.ai/client/to_avif,q_glossy,ret_img,w_549,h_801/https://animesiam.com/wp-content/uploads/2020/07/Kanojo-Okarishimasu-%E0%B8%AA%E0%B8%B0%E0%B8%94%E0%B8%B8%E0%B8%94%E0%B8%A3%E0%B8%B1%E0%B8%81%E0%B8%A2%E0%B8%B1%E0%B8%A2%E0%B9%81%E0%B8%9F%E0%B8%99%E0%B9%80%E0%B8%8A%E0%B9%88%E0%B8%B2-%E0%B8%8B%E0%B8%B1%E0%B8%9A%E0%B9%84%E0%B8%97%E0%B8%A2.jpg"
                      width="200"
                      alt=""
                    />
                  </div>
                  <div className="col">sada</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
