import React from 'react'

function histoey() {
    const today = [{ index: 1, status: "wait"}, { index: 2, status: "finish"}]
    const all = [{ index: 1, status: "wait"}, { index: 2, status: "wait"}, { index: 3, status: "finish"}, { index: 4, status: "finish"}, { index: 5, status: "finish"}, { index: 6, status: "finish"}]


    return (
        <div className="container p-5">
            {/* Today's order history */}
            <div className = "d-flex flex-row mb-3">
                <p className = "pr-2 h5 ">Today</p>
                <hr style={{ width:'100%', borderTop: "1px solid black" }} />
            </div>
            <div className="d-flex flex-column p-3">
                {today.map((itemToday,indexOfItemToday) => (
                    <div key={indexOfItemToday} className="d-flex flex-row mt-2 p-3 pl-5 rounded-lg shadow-sm" style={itemToday.status === "finish" ? {backgroundColor: "#1EA814"} : {backgroundColor : "#F8BA0A"}}>
                        <img style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "50%" }} src="https://f.ptcdn.info/857/059/000/pfejuof7sthpR5etJZx-o.jpg" />
                        <div className="d-flex flex-column align-self-center ml-3" style={{ color: "white" }}>
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
            <div className="d-flex flex-column p-3">
                {all.map((itemAll,indexOfItemAll) => (
                    <div key={indexOfItemAll} className="d-flex flex-row mt-2 p-3 pl-5 rounded-lg shadow-sm" style={itemAll.status === "finish" ? {backgroundColor: "#1EA814"} : {backgroundColor : "#F8BA0A"}}> 
                        <img style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "50%" }} src="https://f.ptcdn.info/857/059/000/pfejuof7sthpR5etJZx-o.jpg" />
                        <div className="d-flex flex-column align-self-center ml-3" style={{ color: "white" }}>
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
