import React from 'react'

const bookStoreUser = () => {
    const number = [
        { image: "/GameBook.jpg", title: "เกมล่าบัลลังก์ 1.1 : A Game of Thrones" },
        { image: "/Life.jpg", title: "อุ้ยเซี่ยวป้อ เหยียบยอดยุทธจักร เล่ม 5"}, 
        { image: "/5CM.jpg", title: "5 Centimeters Per Second"}, 
        { image: "/Kuma.jpg", title: "คุมะ คุมะ คุมะ แบร์"}, 
        { image: "/3GG.jpg", title: "สามก๊ก ฉบับแปลใหม่ เล่ม 1-2 (บรรจุกล่อง : Book Set)"}
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
