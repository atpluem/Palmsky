import React from "react";
import Carousel from "react-elastic-carousel";

import styles from "../styles/home.module.scss";

export default function HomeCat() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <div>
      <div className={styles.catName}>Category</div>
      <div className={styles.container}>
        <Carousel breakPoints={breakPoints} itemPadding={[40, 0]}>
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
          <div className={styles.item}>
            <img
              src="https://www.playinone.com/wp-content/uploads/2019/12/%E0%B8%AA%E0%B8%B0%E0%B8%94%E0%B8%B8%E0%B8%94%E0%B8%A3%E0%B8%B1%E0%B8%81%E0%B8%A2%E0%B8%B1%E0%B8%A2%E0%B9%81%E0%B8%9F%E0%B8%99%E0%B9%80%E0%B8%8A%E0%B9%88%E0%B8%B2-11.jpg"
              height="300"
              alt=""
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
