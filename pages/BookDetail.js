import React, { useState } from "react";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

import styles from "../styles/bookd.module.scss";

export default function BookDetail() {
  const [count, setCount] = useState(Number);

  return (
    <div>
      <Nav />
      <div className="container">
        <div className={styles.topic}>KANOJO, OKARISHIMASU</div>
        <div className={styles.subTopic}>Rent-A-Girlfriend</div>
        <div className={styles.detailBox}>
          <div className="row">
            <div className="col">
              <img
                src="https://www.playinone.com/wp-content/uploads/2019/12/%E0%B8%AA%E0%B8%B0%E0%B8%94%E0%B8%B8%E0%B8%94%E0%B8%A3%E0%B8%B1%E0%B8%81%E0%B8%A2%E0%B8%B1%E0%B8%A2%E0%B9%81%E0%B8%9F%E0%B8%99%E0%B9%80%E0%B8%8A%E0%B9%88%E0%B8%B2-11.jpg"
                style={{ maxWidth: "375px" }}
                alt=""
              />
            </div>
            <div className="col">
              <div className="row" id={styles.bookDes}>
                <div id={styles.bookDes1}>Author</div>
                <div id={styles.bookDes2}>Reiji Miyajima</div>
              </div>
              <div className="row" id={styles.bookDes}>
                <div id={styles.bookDes1}>Publisher</div>
                <div id={styles.bookDes2}>Kodansha</div>
              </div>
              <div className="row" id={styles.bookDes}>
                <div id={styles.bookDes1}>Category</div>
                <div id={styles.bookDes2}>Romance, Drama</div>
              </div>

              <form action="">
                <div className="row justify-content-center">
                  <a
                    onClick={() => {
                      count > 0
                        ? setCount(count - 1)
                        : console.log("Can't Decrease");
                    }}
                    id={styles.icon}
                  >
                    <i class="fas fa-minus-square"></i>
                  </a>
                  <span className="col-centered col-2" id={styles.nBook}>
                    <input
                      className="form-control"
                      type="number"
                      min="0"
                      step="1"
                      value={count}
                      onChange={e => {
                        setCount(parseInt(e.target.value))
                      }}
                    />
                  </span>
                  <a onClick={() => setCount(count + 1)} id={styles.icon}>
                    <i class="fas fa-plus-square"></i>
                  </a>
                </div>

                <button
                  type="button"
                  className="btn btn-danger btn-lg btn-block"
                >
                  Add to Cart
                </button>
                <br />
              </form>

              <div className="row" id={styles.bookDesr}>
                <div id={styles.bookDes3}>Date</div>
                <div id={styles.bookDes4}>12 August 2017</div>
              </div>
              <div className="row" id={styles.bookDesr}>
                <div id={styles.bookDes3}>Book Size</div>
                <div id={styles.bookDes4}>23.4 x 15.3</div>
              </div>
              <div className="row" id={styles.bookDesr}>
                <div id={styles.bookDes3}>Pages</div>
                <div id={styles.bookDes4}>123</div>
              </div>
              <div className="row" id={styles.bookDesr}>
                <div id={styles.bookDes3}>Store</div>
                <div id={styles.bookDes4}>3</div>
              </div>
            </div>
          </div>

          <div className={styles.detail}>
            <span className={styles.detailTop}>Detail</span>
            <div className="">
                หนังสือ Made To Stick คนเขียนมีแนวทางให้เราลอง เป็นหลักการ 6
                อย่าง เป็นคุณสมบัติของไอเดียที่จะทำให้มันปัง ได้แก่ Simple,
                Unexpected, Concrete, Credible, Emotional และ Stories
                ได้ตัวย่อเป็นความสำเร็จ เป็น SUCCES Simple คือง่าย
                ทำยังไงให้เข้าใจง่าย ไม่ต้องเยอะ เอาแค่ที่สำคัญ น้ำไม่ต้อง
                เอาแต่เนื้อ ไม่ต้องเล่ายาว สรุปมาให้หน่อย Unexpected
                คือไม่คาดคิด ไม่เคยเห็นมาก่อน ไม่คิดว่าแบบนี้ก็ทำได้
                เซอร์ไพรส์ทำให้คนสนใจ ความไม่เหมือนใครทำให้คนยิ่งอยากรู้
                อยากรู้ว่ามันจะจบยังไง Concrete คือจับต้องได้ เคลียร์ ทำได้จริง
                ทำได้ง่าย ทำได้ไว Credible คือเชื่อถือได้ มีรายละเอียด
                มีข้อมูลอ้างอิง ทดสอบมาแล้ว Emotional คืออารมณ์ อย่าให้คนต้องคิด
                ให้เค้ารู้สึกเอาเอง ให้มันสื่อถึงตัวเค้า หรือคนที่เค้าสนใจ
                Stories คือเรื่องราว ที่มันท้าทาย ที่มันมีพัฒนาการ
                ที่มันสร้างสรรค์ ลองใช้หลักการทั้ง 6 นี้
                น่าจะช่วยให้ไอเดียเราปังและฮิตติดอยู่ในใจคนได้
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
