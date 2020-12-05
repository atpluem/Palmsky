import React, { useState } from "react"
import Carousel from "react-elastic-carousel"

import styles from "../styles/home.module.scss"

export default function HomeCat() {
  // Break point for responsive
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  // Get book data
  const [books, setBooks] = useState([
    fetch("https://shielded-caverns-34585.herokuapp.com/api/book/")
      .then((res) => res.json())
      .then((data) => setBooks(data)),
  ]);

  return (
    <div>
      <div className={styles.catName}>Recommend</div>
      <div className={styles.container}>
        <Carousel breakPoints={breakPoints} itemPadding={[40, 0]}>
          {books.map((item) => (
            <div className={styles.item}>
              <a href={item.pk} style={{textDecoration:"none"}}>
                <img src={item.cover_Image} height="300" />
                <span className={styles.top}>{item.title}</span><br/>
                <span className={styles.price}>฿{item.price}</span>
              </a>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
