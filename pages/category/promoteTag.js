import React from 'react'

const promoteTag = () => {
    const number = [1, 2, 3, 4]

    return (
        <div>
            <div id="slideShow" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    {number.map((count, index) => (
                        <li data-target="#slideShow" data-slide-to={count-1} className="active" key={index}></li>
                    ))}
                </ol>
                <div className="carousel-inner shadow-sm" style={{ border: '1px solid #ededed' }}>
                    {number.map((count, index) => (
                        <div className={count === 1 ? "carousel-item active" : "carousel-item"} key={index}>
                            <img className="d-block w-100 " src='/promotion1.png' alt="slide" />
                        </div>
                    ))}
                </div>
                <a className="carousel-control-prev" href="#slideShow" role="button" data-slide="prev" >
                    <span className="carousel-control-prev-icon" aria-hidden="true" ></span>
                    <span className="sr-only" >Previous</span>
                </a>
                <a className="carousel-control-next" href="#slideShow" role="button" data-slide="next" >
                    <span className="carousel-control-next-icon" aria-hidden="true" ></span>
                    <span className="sr-only" >Next</span>
                </a>
            </div>
        </div>
    )
}

export default promoteTag


