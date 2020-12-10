import { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";

import styles from "../styles/home.module.scss";

export default function HomeCat() {
  // Break point for responsive
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  // Fetch book data
  const [bookRanks, setBookRanks] = useState([])
  const [books, setBooks] = useState([])

  useEffect(() => {

    const fetchdata = async () => {
      const responseRank = await fetch("https://shielded-caverns-34585.herokuapp.com/api/book/rank/")
      const dataRank = await responseRank.json()
      setBookRanks(dataRank)

      const responseBook = await fetch("https://shielded-caverns-34585.herokuapp.com/api/book/")
      const dataBook = await responseBook.json()
      setBooks(dataBook)
    }
    fetchdata()
    
  }, [])

  return (
<<<<<<< HEAD
    <div className="container">
        <div className="p-5">
          <div className="d-flex flex-row ">
            <p className="pr-2 h5">Recommend</p>
            <hr style={{ width:'100%', borderTop: "1px solid black" }} />
          </div>
          <div className={styles.container}>
            <Carousel breakPoints={breakPoints} itemPadding={[40, 0]}>
              {bookRanks.map((item, i) => (
                  <div className={styles.item} key={i}>
                    <a href={item.pk} style={{ textDecoration: "none" }}>
                      <img src={item.cover_Image} height="300" />
                      <span className={styles.top}>{item.title}</span>
                      <br />
                      <span className={styles.price}>฿{item.price}</span>
                    </a>
                  </div>
                ))}
            </Carousel>
          </div>
        </div>

        <div className="p-5">
          <div className="d-flex flex-row mt-2">
            <p className="pr-2 h5">All</p>
            <hr style={{ width:'100%', borderTop: "1px solid black" }} />
          </div>
          <div className={styles.container}>
            <Carousel breakPoints={breakPoints} itemPadding={[40, 0]}>
              {books.map((item, i) => (
                  <div className={styles.item} key={i}>
                    <a href={item.pk} style={{ textDecoration: "none" }}>
                      <img src={item.cover_Image} height="300" />
                      <span className={styles.top}>{item.title}</span>
                      <br />
                      <span className={styles.price}>฿{item.price}</span>
                    </a>
                  </div>

              ))}
            </Carousel>
          </div>
        </div>

=======
    <div>
      <div className={styles.catName}>Rank</div>
      <div className={styles.container}>
        <Carousel breakPoints={breakPoints} itemPadding={[40, 0]}>
          {books.map(function (item, i) {
            return (
              <div className={styles.item} key={i}>
                <a href={item.pk} style={{ textDecoration: "none" }}>
                  <img src={item.cover_Image} height="300" />
                  <span className={styles.top}>{item.title}</span>
                  <br />
                  <span className={styles.price}>฿{item.price}</span>
                </a>
              </div>
            );
          })}
        </Carousel>
      </div>
>>>>>>> eb9adb345dfa42af7400c7dab0da3745c2c9b540
    </div>
  )
}
