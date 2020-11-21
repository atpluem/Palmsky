import React from 'react'
import Navbar from '../../components/Nav'
import Tags from './tags'

const library = () => {
    const category = ["Cartoon", "Fiction", "Fantacy", "Romance", "Adventure"]

    return (
        <div>
            <Navbar />

            {/* Notice */}
            {/* After Back-End is finish, this jsx will choose map function */}
            <div className="container mt-4 mb-5">
                <div id="slideShow" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#slideShow" data-slide-to="0" className="active" />
                        <li data-target="#slideShow" data-slide-to="1" className="active" />
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100 " src="https://image.freepik.com/free-photo/gray-painted-background_53876-94041.jpg" alt="slide1" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://image.freepik.com/free-photo/gray-painted-background_53876-94041.jpg" alt="slide2" />
                        </div>
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

            {/* Category Drop */}
            <div className="container d-flex flex-row mb-4">
                <p className="h4 mt-2 mr-2 font-weight-bold">LIBRARY </p>
                <div class="dropdown">
                    <button class="btn cat-btn dropdown-toggle" type="button" id="dropD" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        CATEGORY
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropD" style={{ backgroundColor: "#CD2424" }} >
                        <a class="dropdown-item text-white" href="#">option 1</a>
                        <a class="dropdown-item text-white" href="#">option 2</a>
                        <a class="dropdown-item text-white" href="#">option 3</a>
                    </div>
                </div>
            </div>

            {/* Book Category */}
            <div className="container">
                {category.map(name => (<Tags />))}
            </div>

            {/* footer */}
            <div className="bg-dark mt-5 p-2" style={{ height: "40px" }}  >
                <p className="text-light font-weight-lighter text-center mb-0" >@2020-20221 PALMSKY THAILAND</p>
            </div>
        </div>
    )
}

export default library

