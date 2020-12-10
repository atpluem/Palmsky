import React from 'react'

const bookStoreUser = () => {
    const number = [
        { image: "https://shielded-caverns-34585.herokuapp.com/media/image/9789742894177l_IuKvxhQ.jpg", title: "เกมล่าบัลลังก์ 1.1 : A Game of Thrones"},
        { image: "https://shielded-caverns-34585.herokuapp.com/media/image/9786164927865l.jpg", title: "อุ้ยเซี่ยวป้อ เหยียบยอดยุทธจักร เล่ม 5"}, 
        { image: "https://shielded-caverns-34585.herokuapp.com/media/image/51xksnD26SL._AC_UL600_SR426600__6zmECi6.jpg", title: "5 Centimeters Per Second"}, 
        { image: "https://shielded-caverns-34585.herokuapp.com/media/image/pfejuof7sthpR5etJZx-o.jpg", title: "คุมะ คุมะ คุมะ แบร์"}, 
        { image: "https://shielded-caverns-34585.herokuapp.com/media/image/_734x1024__1.jpg", title: "สามก๊ก ฉบับแปลใหม่ เล่ม 1-2 (บรรจุกล่อง : Book Set)"}
    ]
    
    return (
        <div className="container d-flex flex-wrap justify-content-center mt-5">
            {number.map((item,index) => (
                <div className = "mt-3 mr-3" key={index} style={{ cursor: "pointer" }}>
                    <div className = "card shadow-sm" style = {{ width: '18rem' }}>
                        <div className="bg-image">
                            <img className = "card-image-top img-fluid zoom " style={{ height: "27rem" }} src={item.image} alt = "Card" />
                        </div>
                        <div className = "card-body">
                            <p className = "card-text" style={{ textOverflow: "ellipsis" }}>{item.title}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default bookStoreUser
