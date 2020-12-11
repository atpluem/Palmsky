import React from 'react'

function histoey() {
    const today = [
        { image: "https://shielded-caverns-34585.herokuapp.com/media/image/Kanojo-Okarishimasu-%E0%B8%AA%E0%B8%B0%E0%B8%94%E0%B8%94%E0%B8%A3%E0%B8%81%E0%B8%A2%E0%B8%A2%E0%B9%81%E0%B8%9F%E0%B8%99%E0%B9%80%E0%B8%8A%E0%B8%B2-%E0%B8%8B%E0%B8%9A%E0%B9%84%E0%B8%97%E0%B8%A2.jpg", title: "สะดุดรักยัยแฟนเช่า เล่ม 01", date: "20/02/2020", index: 1, status: "wait"}, 
        { image: "https://shielded-caverns-34585.herokuapp.com/media/image/9789742894177l_IuKvxhQ.jpg", title: "เกมล่าบัลลังก์ 1.1 : A Game of Thrones", date: "20/02/2020", index: 2, status: "finish"}
    ]

    const all = [
        { image: "https://shielded-caverns-34585.herokuapp.com/media/image/Hp_ps_thai_a3sUxsm.jpg", title: "แฮร์รี่ พอตเตอร์ กับศิลาอาถรรพ์ เล่ม 1", date: "15/02/2020", index: 1, status: "wait"}, 
        { image: "https://shielded-caverns-34585.herokuapp.com/media/image/9786161837402l.jpg", title: "โตขึ้นมาเป็นความสุข", date: "15/02/2020",index: 2, status: "wait"}, 
        { image: "https://shielded-caverns-34585.herokuapp.com/media/image/9786164927865l.jpg", title: "อุ้ยเซี่ยวป้อ เหยียบยอดยุทธจักร เล่ม 5", date: "15/02/2020",index: 3, status: "finish"}, 
        { image: "https://shielded-caverns-34585.herokuapp.com/media/image/51xksnD26SL._AC_UL600_SR426600__6zmECi6.jpg", title: "5 Centimeters Per Second", date: "01/02/2020",index: 4, status: "finish"}, 
        { image: "https://shielded-caverns-34585.herokuapp.com/media/image/pfejuof7sthpR5etJZx-o.jpg", title: "คุมะ คุมะ คุมะ แบร์", date: "01/02/2020",index: 5, status: "finish"}, 
        { image: "https://shielded-caverns-34585.herokuapp.com/media/image/_734x1024__1.jpg", title: "สามก๊ก ฉบับแปลใหม่ เล่ม 1-2 (บรรจุกล่อง : Book Set)", date: "10/01/2020",index: 6, status: "finish"}
    ]


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
                        <img style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "50%" }} src={itemToday.image} />
                        <div className="d-flex flex-column align-self-center ml-3" style={{ color: "white" }}>
                            <span className="h4">{itemToday.title}</span>
                            <span>{itemToday.date}</span>
                            <span>{itemToday.status === "finish" ? "Dealing Complete" : "In Transit"}</span>
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
                        <img style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "50%" }} src={itemAll.image} />
                        <div className="d-flex flex-column align-self-center ml-3" style={{ color: "white" }}>
                            <span className="h4">{itemAll.title}</span>
                            <span>{itemAll.date}</span>
                            <span>{itemAll.status === "finish" ? "Dealing Complete" : "In Transit"}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default histoey
