import { useEffect, useState} from 'react'
import { useRouter } from 'next/router'

const tags = ({ datas }) => {
    const [tagBook, setTag] = useState([])
    const router = useRouter()
    
    useEffect(() => {
        const fetchdata = async() => {
            const response = await fetch('https://shielded-caverns-34585.herokuapp.com/api/book/tag/?q=' + datas)
            const data = await response.json()
            setTag(data)
        }
        fetchdata()

    }, [datas])

    const Goto = (key) => {
        router.push({
            pathname: "/" + key
        })
    }

    return (
        <div className = "mt-5 mb-5" >
            <div className = "d-flex flex-row">
                <p className = "pr-2 h5 ">{datas}</p>
                <hr style={{ width:'100%', borderTop: "1px solid black" }} />
            </div>
            <div id="bookContainer" className = "d-flex flex-row scroll-slide smooth-scroll" >
                {tagBook.map((item,key) => (
                    <div className = "mt-3 mr-3" key={key} style={{ cursor: "pointer" }} onClick={() => {Goto(item.pk)}}>
                        <div className = "card shadow-sm" style = {{ width: '18rem' }}>
                            <div className="bg-image">
                                <img className = "card-image-top img-fluid zoom " style={{ height: "27rem" }} src = {item.cover_Image} alt = "Card" alt="https://image.freepik.com/free-photo/dark-grey-black-slate-texture-with-high-resolution-background-natural-black-stone-wall_38607-306.jpg"/>
                            </div>
                            <div className = "card-body" style={{ textAlign: "center" }}>
                                <p className = "card-text" style={{ textOverflow: "ellipsis" }}> {item.title} </p>
                                <span className = "card-text font-weight-bold" >฿{item.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>        
        </div>
    )

}

export default tags