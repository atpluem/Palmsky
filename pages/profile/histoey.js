import React from 'react'

function histoey() {
    const today = [1,2]
    const all = [1,2,3,4,5]


    return (
        <div className="container">
            {/* Today's order history */}
            <div className = "d-flex flex-row mb-3">
                <p className = "pr-2 h5 ">Today</p>
                <hr style={{ width:'100%', borderTop: "1px solid black" }} />
            </div>
            <div className="d-flex flex-column">
                {today.map((itemToday,indexOfItemToday) => (
                    <div className="d-flex flex-row mt-2 p-3 pl-5" style={{ border: "1px solid black", borderRadius: "15px" }}> 
                        <img style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "50%" }} src="https://f.ptcdn.info/857/059/000/pfejuof7sthpR5etJZx-o.jpg" />
                        <div className="d-flex flex-column align-self-center ml-3">
                            <span className="h4">Kuma Kuma Kuma Bear เล่มที่2</span>
                            <span>20/02/2020</span>
                            <span>Dealing Complete</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* All order history  */}
            <div className = "d-flex flex-row mt-5 mb-3">
                <p className = "pr-2 h5 ">All</p>
                <hr style={{ width:'100%', borderTop: "1px solid black" }} />
            </div>
            <div className="d-flex flex-column">
                {all.map((itemAll,indexOfItemAll) => (
                    <div className="d-flex flex-row mt-2 p-3 pl-5" style={{ border: "1px solid black", borderRadius: "15px" }}> 
                        <img style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "50%" }} src="https://f.ptcdn.info/857/059/000/pfejuof7sthpR5etJZx-o.jpg" />
                        <div className="d-flex flex-column align-self-center ml-3">
                            <span className="h4">Kuma Kuma Kuma Bear เล่มที่2</span>
                            <span>20/02/2020</span>
                            <span>Dealing Complete</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default histoey
