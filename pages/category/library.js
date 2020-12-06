import { useState, useEffect } from 'react'
import Navbar from '../../components/Nav'
import Tags from './tags'
import Promote from './promoteTag'

const library = () => {
    const [book, setbook] = useState([])

    useEffect(() => {
        const fetchdata = async () => {
            const response = await fetch('https://shielded-caverns-34585.herokuapp.com/api/tag/')
            const data = await response.json()
            setbook(data)
        }
        fetchdata()

    }, [])
    

    return (
        <div>
            <Navbar />

            {/* Notice */}
            {/* After Back-End is finish, this jsx will use map function */}
            <div className="container mt-4 mb-5">
                <Promote />
            </div>

            {/* Category Drop */}
            {/* After Back-End is finish, this jsx will use map function */}
            <div className="container d-flex flex-row mb-4">
                <p className="h4 mt-2 mr-2 font-weight-bold">LIBRARY </p>
                <div className="dropdown">
                    <button className="btn cat-btn dropdown-toggle" type="button" id="dropD" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        CATEGORY
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropD" style={{ backgroundColor: "#CD2424" }} >
                        {book.map((option,keys) => (
                            <a className="dropdown-item text-white hover-select" href="#" key={keys}>{option.word}</a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Book Category */}
            <div className="container">
                {book.map((booktags,index) => (
                    <Tags datas={booktags.word} key={index} />
                ))}
            </div>

            {/* footer */}
            <div className="bg-dark mt-5 p-2" style={{ height: "40px" }}  >
                <p className="text-light font-weight-lighter text-center mb-0" >@2020-20221 PALMSKY THAILAND</p>
            </div>
        </div>
    )
}


export default library
