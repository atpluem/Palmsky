import React from "react";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

import styles from "../styles/cart.module.scss";

export default function Cart() {
  return (
    <div>
      <Nav indexPage={1} />
      <div className="container">
        <div className="row">
          {/* SELECT */}
          <div className="col" style={{ height: "20%" }}>
            <div className={styles.inputGroup}>
              <input id="selectAll" name="selectAll" type="checkbox" />
              <label htmlFor="selectAll">Select All</label>
            </div>

            <div className={styles.cardGroup}>
              <div className={styles.card}>
                <input
                  className={styles.check}
                  id="selectItem"
                  name="selectItem"
                  type="checkbox"
                />
                <label htmlFor="selectItem" className={styles.bDetail}></label>
                <div className="row">
                  <div className="col col-md-5">
                    <img
                      src="https://cdn.shortpixel.ai/client/to_avif,q_glossy,ret_img,w_549,h_801/https://animesiam.com/wp-content/uploads/2020/07/Kanojo-Okarishimasu-%E0%B8%AA%E0%B8%B0%E0%B8%94%E0%B8%B8%E0%B8%94%E0%B8%A3%E0%B8%B1%E0%B8%81%E0%B8%A2%E0%B8%B1%E0%B8%A2%E0%B9%81%E0%B8%9F%E0%B8%99%E0%B9%80%E0%B8%8A%E0%B9%88%E0%B8%B2-%E0%B8%8B%E0%B8%B1%E0%B8%9A%E0%B9%84%E0%B8%97%E0%B8%A2.jpg"
                      width="150"
                      alt=""
                      style={{ draggable: "false" }}
                    />
                  </div>
                  <div className="col">
                    <div className={styles.cardDetail}>
                      <div>
                        {" "}
                        <h5>KANOJO, OKARISHIMASU </h5>{" "}
                      </div>
                      <div style={{ color: "#CD2424" }}> Have 3 in stock</div>
                      <div>
                        <b>฿120</b>
                      </div>
                      <div className={styles.count}>
                        <div className="row">
                          <a id={styles.iconbin}>
                            <i className="fas fa-trash"></i>
                          </a>
                          <a id={styles.icon}>
                            <i className="fas fa-minus-square"></i>
                          </a>
                          <span
                            className="col-centered col-5"
                            id={styles.nBook}
                          >
                            <input
                              className="form-control"
                              type="number"
                              min="0"
                              step="1"
                            />
                          </span>
                          <a id={styles.icon}>
                            <i className="fas fa-plus-square"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.card}>
                <input
                  className={styles.check}
                  id="selectItem2"
                  name="selectItem"
                  type="checkbox"
                />
                <label htmlFor="selectItem2" className={styles.bDetail}></label>
                <div className="row">
                  <div className="col col-md-5">
                    <img
                      src="https://shielded-caverns-34585.herokuapp.com/media/image/%E0%B8%AB%E0%B8%AD%E0%B8%87%E0%B9%81%E0%B8%AB%E0%B8%87%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%A5%E0%B8%9A_OOf9CQK.jpg"
                      width="150"
                      alt=""
                      style={{ draggable: "false" }}
                    />
                  </div>
                  <div className="col">
                    <div className={styles.cardDetail}>
                      <div>
                        {" "}
                        <h5>แฮร์รี่ พอตเตอร์ กับห้องแห่งความลับ เล่ม 2 </h5>{" "}
                      </div>
                      <div style={{ color: "#CD2424" }}> Have 8 in stock</div>
                      <div>
                        <b>฿280.25</b>
                      </div>
                      <div className={styles.count}>
                        <div className="row">
                          <a id={styles.iconbin}>
                            <i className="fas fa-trash"></i>
                          </a>
                          <a id={styles.icon}>
                            <i className="fas fa-minus-square"></i>
                          </a>
                          <span
                            className="col-centered col-5"
                            id={styles.nBook}
                          >
                            <input
                              className="form-control"
                              type="number"
                              min="0"
                              step="1"
                            />
                          </span>
                          <a id={styles.icon}>
                            <i className="fas fa-plus-square"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.card}>
                <input
                  className={styles.check}
                  id="selectItem3"
                  name="selectItem"
                  type="checkbox"
                />
                <label htmlFor="selectItem3" className={styles.bDetail}></label>
                <div className="row">
                  <div className="col col-md-5">
                    <img
                      src="https://shielded-caverns-34585.herokuapp.com/media/image/51xksnD26SL._AC_UL600_SR426600__6zmECi6.jpg"
                      width="150"
                      alt=""
                      style={{ draggable: "false" }}
                    />
                  </div>
                  <div className="col">
                    <div className={styles.cardDetail}>
                      <div>
                        {" "}
                        <h5>5 CENTIMETERS PER SECOND </h5>{" "}
                      </div>
                      <div style={{ color: "#CD2424" }}> Have 2 in stock</div>
                      <div>
                        <b>฿161.50</b>
                      </div>
                      <div className={styles.count}>
                        <div className="row">
                          <a id={styles.iconbin}>
                            <i className="fas fa-trash"></i>
                          </a>
                          <a id={styles.icon}>
                            <i className="fas fa-minus-square"></i>
                          </a>
                          <span
                            className="col-centered col-5"
                            id={styles.nBook}
                          >
                            <input
                              className="form-control"
                              type="number"
                              min="0"
                              step="1"
                            />
                          </span>
                          <a id={styles.icon}>
                            <i className="fas fa-plus-square"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SUMMARY */}
          <div className="col">
            <div className={styles.checkout}>
              <div className="card">
                <div className={styles.detail}>
                  <div className="col">
                    <div className="row">
                      <b>ADDRESS</b>
                    </div>

                    <div className="row">
                      Thanon Pracha Uthid, Thung Khru Rsidence Hall KMUTT room
                      2107 Thung Khru, Bankok, TH,10140
                    </div>
                    <hr />
                    <div>
                      <b>USER ID : 11610705010021</b>
                    </div>
                    <div>
                      <b>USER Name : KRITTANAN CHALONG</b>
                    </div>
                    <div className="container" style={{ paddingTop: "20px" }}>
                      <b>Summary</b>
                      <div className="container">
                        <div className="row">
                          <div className="col">Product (2 pieces)</div>
                          <div className="col">฿1300</div>
                        </div>

                        <div className="row">
                          <div className="col">Shopping fee</div>
                          <div className="col">฿40</div>
                        </div>

                        <div className="row">
                          <div className="col">Coupon</div>
                          <div className="col">฿200</div>
                        </div>
                      </div>
                    </div>

                    <div className="row" style={{ paddingTop: "20px" }}>
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Coupon Code"
                        />
                      </div>
                      <div className="col">
                        <button type="button" className="btn btn-outline-dark">
                          ENTER
                        </button>
                      </div>
                    </div>

                    <div className="row" style={{ padding: "20px 0 0 20px" }}>
                      <div className="col">
                        <h3>AMOUNT</h3>
                      </div>
                      <div className="col">
                        <h3>฿1140</h3>
                      </div>
                    </div>

                    <a href="/payment/choosePayment" style={{textDecoration:'none'}}>
                      <button
                        type="button"
                        style={{ margin: "20px 0 20px 0" }}
                        className="btn btn-danger btn-lg btn-block"
                      >
                        <b>CHECK OUT</b>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
