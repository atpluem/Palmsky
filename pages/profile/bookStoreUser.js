import React from 'react'

const bookStoreUser = () => {
    const number = [1,2,3,4,5]
    
    return (
        <div className="container d-flex flex-wrap justify-content-center">
            {number.map((item,index) => (
                <div className = "mt-3 mr-3" key={index} style={{ cursor: "pointer" }}>
                    <div className = "card shadow-sm" style = {{ width: '18rem' }}>
                        <div className="bg-image">
                            <img className = "card-image-top img-fluid zoom " style={{ height: "27rem" }} src ="https://f.ptcdn.info/857/059/000/pfejuof7sthpR5etJZx-o.jpg" alt = "Card" />
                        </div>
                        <div className = "card-body">
                            <p className = "card-text" style={{ textOverflow: "ellipsis" }}> Kuma Kuma Kuma Bear เล่มที่2 </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default bookStoreUser
