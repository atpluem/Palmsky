<<<<<<< HEAD
import React from 'react';
=======
import React from 'react'
>>>>>>> 3fc01c035f21ef513990f889866ff26538bb8d66

const tags = ({ datas }) => {
    
    return (
        <div className = "mt-5 mb-5" >
            <div className = "d-flex flex-row">
                <p className = "pr-2 h5">Category</p>
                <hr style = {{ borderTop: '1px solid black', width: '100%' }} />
            </div>
            <div className = "d-flex flex-row scroll-slide smooth-scroll" >
                {datas.map(count => ( 
                    <div className = "mt-3 mr-3">
                        <div className = "card shadow-sm" style = {{ width: '18rem' }}>
                            <div className="bg-image">
                                <img className = "card-image-top img-fluid zoom " style={{ height: "27rem" }} src = {count.cover_Image} alt = "Card" />
                            </div>
                            <div className = "card-body">
                                <p className = "card-text" style={{ textOverflow: "ellipsis" }}> {count.title} </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default tags