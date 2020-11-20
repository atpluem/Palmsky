import React from 'react'
import Navbar from '../Nav'
import Header from '../Header'
import Tags from './tags'

const library = () => {

    const category  = ["Cartoon", "Fiction", "Fantacy", "Romance", "Adventure" ]

    return (
        <div>
            <Header />
            <Navbar />

            {/* Notice */}
            <div>
                w
            </div>


            {/* Book Category */}
            <div className = "container">
                {category.map(name => (<Tags />))}
            </div>

            {/* footer */}
            <div className = "bg-dark mt-5 position-relative" >
                <p className = "text-light text-center font-weight-lighter " >@2020-20221 PALMSKY THAILAND</p>
            </div>
        </div>
    )
}

export default library

