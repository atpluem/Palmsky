import React, { Component } from "react"

export default function Slider() {
  const image = [{
    img: "https://i.pinimg.com/originals/e0/dd/d8/e0ddd8fb32ec4f9907f5b711ae345b9f.jpg",
    imgCharecter: "/Konojo.png",
    name: "KANOJO, OKARISHIMASU",
    author: "Reiji Miyajima",
    Publisher: "Kodansha",
    style: 1,
    index: 0
  },{
    img: "https://images.alphacoders.com/736/thumb-1920-736461.png",
    imgCharecter: "",
    name: "KIMI NO  NAWA",
    author: "Shinkai Makoto",
    Publisher: "CoMix Wave Films",
    style: 2,
    index: 1
  },{
    img: "https://images2.alphacoders.com/110/thumb-1920-1101646.jpg",
    imgCharecter: "https://static.zerochan.net/Yuna.%28Kuma.Kuma.Kuma.Bear%29.full.2989781.png",
    name: "KUMA KUMA KUMA BEAR",
    author: "Nobuta Yuu",
    Publisher: ", filter: 'opacity(30%)'",
    style: 2,
    index: 2
  }
  ]

  return (
    <div>
      <div
        id="myCarousel"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          {image.map((item,key) => (
            <li
              key={key}
              data-target="#myCarousel"
              data-slide-to={key}
              className={item.index === 0 ? "active" : "none" }
            ></li>
          ))}
        </ol>

        <div className="carousel-inner">
          {image.map((item,key) => (
            <div key={key} className={item.index === 0 ? "carousel-item active bg-white" : "carousel-item bg-dark"} >
              <div style={ item.style === 1 ? { backgroundSize: "cover", overflow: "hidden", backgroundAttachment: "center", filter: "opacity(20%)" } : {  backgroundSize: "cover", overflow: "hidden", backgroundAttachment: "center", filter: "opacity(70%)" }}>
                <img src={item.img} style={{ width: "100%" }} />
              </div>
              <div className={ item.style === 1 ? "container font-weight-bold text-dark" : "container font-weight-bold text-ligth"}>
                <div style={{ position: "absolute", top: "10%", left:"15%", width: "400px" }}>
                  <img src={item.imgCharecter} style={{ width: "100%" }} />
                </div>
                <p className="h1">{item.name}</p>
                <p className="h5 mb-3">
                  Author: {item.author} <br />
                  Publisher: {item.Publisher}
                </p>
                <a href="#" className={ item.style === 1 ? "btn btn-lg btn-outline-dark" : "btn btn-lg btn-outline-light" }>
                  Detail
                </a>
              </div>
            </div>            
          ))}

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
            top: 15%;
            bottom: 0;
            left: 25%;
            right: 0;
            padding-bottom: 50px;
          }
        `}
      </style>
    </div>
  );
}
