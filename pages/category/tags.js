import React from 'react'

const tags = () => {
    const number = [1,2,3,4]

    return (
        <div className = "mt-5">
            <div className = "d-flex flex-row">
                <p className = "pr-2 h5">Category</p>
                <hr style = {{ borderTop: '1px solid black', width: '100%' }} />
            </div>
            <div className = "d-flex flex-row" style = {{ overflow: "auto", msOverflowStyle: "none"  }} >
                {number.map(count => ( 
                    <div className = "mt-3 mr-4">
                        <div className = "card shadow-sm" style = {{ width: '18rem' }}>
                            <img className = "card-image-top img-fluid" src = "https://img.freepik.com/free-photo/abstract-surface-textures-white-concrete-stone-wall_74190-8184.jpg?size=626&ext=jpg" alt = "Card" />
                            <div className = "card-body">
                                <p className = "card-text"> Velit Lorem tempor fugiat esse labore mollit magna Lorem est. </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default tags