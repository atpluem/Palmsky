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
            <div>
                w
            </div>

            {/* Category Drop */}
            <div className="container d-flex flex-row">
                <p className="h4 mt-1 mr-2 font-weight-bold">LIBRARY </p>
                <div className="dropdown">
                    <button className = "btn btn-secondary dropdown-toggle" id = "dropMenu" type="button" aria-haspopup = "true" aria-expanded = "false">Category</button>
                    <div className = "dropdown-menu" aria-labelledby="dropMenu">
                        <a className = "dropdown-item" href ="#" >Selector 1</a>
                    </div>
                </div>
            </div>

            {/* Book Category */}
            <div className="container">
                {category.map(name => (<Tags />))}
            </div>

            {/* footer */}
            <div className="bg-dark mt-5 position-relative" >
                <p className="text-light text-center font-weight-lighter " >@2020-20221 PALMSKY THAILAND</p>
            </div>
        </div>
    )
}

export default library

