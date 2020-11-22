import React from 'react'

const promoteTag = () => {
    const number = [1, 2, 3, 4]

    return (
        <div>
            <div id="slideShow" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    {number.map(count => (
                        <li data-target="#slideShow" data-slide-to={count-1} className="active"></li>
                    ))}
                </ol>
                <div className="carousel-inner">
                    {number.map(count => (
                        <div className={count === 1 ? "carousel-item active" : "carousel-item"}>
                            <img className="d-block w-100 " src="https://image.freepik.com/free-photo/gray-painted-background_53876-94041.jpg" alt="slide" />
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


