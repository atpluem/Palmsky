import { useEffect, useState} from 'react'

const tags = ({ datas }) => {
    const [tagBook, setTag] = useState([])
    
    useEffect(() => {
        const fetchdata = async() => {
            const response = await fetch('https://shielded-caverns-34585.herokuapp.com/api/book/tag/?q=' + datas)
            const data = await response.json()
            setTag(data)
        }
        fetchdata()

    }, [datas])

    return (
        <div className = "mt-5 mb-5" >
            <div className = "d-flex flex-row">
                <p className = "pr-2 h5 ">{datas}</p>
                <hr style={{ width:'100%', borderTop: "1px solid black" }} />
            </div>
            <div id="bookContainer" className = "d-flex flex-row scroll-slide smooth-scroll" >
                {tagBook.map((item,key) => (
                    <div className = "mt-3 mr-3" key={key} style={{ cursor: "pointer" }}>
                        <div className = "card shadow-sm" style = {{ width: '18rem' }}>
                            <div className="bg-image">
                                <img className = "card-image-top img-fluid zoom " style={{ height: "27rem" }} src = {item.cover_Image} alt = "Card" />
                            </div>
                            <div className = "card-body">
                                <p className = "card-text" style={{ textOverflow: "ellipsis" }}> {item.title} </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>        
        </div>
    )

}

export default tags