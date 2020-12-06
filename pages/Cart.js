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
            <div className={styles.radioButton}>
              <label className={styles.customRadio}>
                <input type="radio" name="radio" />
                <span className={styles.radioBtn}>
                  <i className="fas fa-check" id={styles.icon}></i>
                </span>
              </label>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
