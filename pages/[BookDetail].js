import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

import styles from "../styles/bookd.module.scss"

export default function BookDetail() {
  const [count, setCount] = useState(Number)
  const [book, setBook] = useState([])
  const router = useRouter()
  const url = "https://shielded-caverns-34585.herokuapp.com/api/book"

  useEffect(() => {
    if(router.asPath !== router.route){
      const fetchData = async () => {
        const response = await fetch(`${url}/${router.query.BookDetail}/`)
        const data = await response.json()
        setBook(data)
      };
      fetchData()
    }
  }, [router])

  return (
    <div>
      <Nav />
      <div className="container">
        <div className={styles.topic}>{book.title}</div>
        <div className={styles.detailBox}>
          <div className="row">
            <div className="col">
              <img
                src={book.cover_Image}
                style={{ maxWidth: "375px" }}
                alt=""
              />
            </div>
            <div className="col">
              <div className="row" id={styles.bookDes}>
                <div id={styles.bookDes1}>Author</div>
                <div id={styles.bookDes2}>{book.author}</div>
              </div>
              <div className="row" id={styles.bookDes}>
                <div id={styles.bookDes1}>Publisher</div>
                <div id={styles.bookDes2}>{book.publisher}</div>
              </div>
              <div className="row" id={styles.bookDes}>
                <div id={styles.bookDes1}>Category</div>
                <div id={styles.bookDes2}>{book.tags}</div>
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
                    <i className="fas fa-minus-square"></i>
                  </a>
                  <span className="col-centered col-2" id={styles.nBook}>
                    <input
                      className="form-control"
                      type="number"
                      min="0"
                      step="1"
                      value={count}
                      onChange={(e) => {
                        setCount(parseInt(e.target.value));
                      }}
                    />
                  </span>
                  <a onClick={() => setCount(count + 1)} id={styles.icon}>
                    <i className="fas fa-plus-square"></i>
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
                <div id={styles.bookDes4}>{book.publish_date}</div>
              </div>
              <div className="row" id={styles.bookDesr}>
                <div id={styles.bookDes3}>Book Size</div>
                <div id={styles.bookDes4}>
                  {book.width} x {book.height}
                </div>
              </div>
              <div className="row" id={styles.bookDesr}>
                <div id={styles.bookDes3}>Pages</div>
                <div id={styles.bookDes4}>{book.pages}</div>
              </div>
              <div className="row" id={styles.bookDesr}>
                <div id={styles.bookDes3}>Stock</div>
                <div id={styles.bookDes4}>{book.stock}</div>
              </div>
            </div>
          </div>

          <div className={styles.detail}>
            <span className={styles.detailTop}>Detail</span>
            <div>{book.desription}</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}