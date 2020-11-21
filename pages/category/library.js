import React from 'react'
import Navbar from '../../components/Nav'
import Header from '../../components/Header'
import Tags from './tags'

const library = () => {
    const category = ["Cartoon", "Fiction", "Fantacy", "Romance", "Adventure"]

    return (
        <div>
            <Header />
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
                            <img className="d-block w-100" src="https://image.freepik.com/free-photo/gray-painted-background_53876-94041.jpg" alt="slide1" />
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
            <div className="container d-flex flex-row" style={{ zIndex: 2 }}>
                <p className="h4 mt-1 mr-2 font-weight-bold">LIBRARY </p>
                <div className = "dropdown" >
                    <button className = "btn btn-secondary dropdown-toggle" data-toggle = "dropdown" id="dropD" aria-haspopup = "true" aria-expanded = "false" >Category</button>
                        <div className = "dropdown-menu" aria-labelledby="dropD">
                            <a className = "dropdown-item"> Option 1</a>
                            <a className = "dropdown-item"> Option 2</a>
                            <a className = "dropdown-item"> Option 3</a>
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

