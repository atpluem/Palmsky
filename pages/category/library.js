import { useState } from 'react'
import Navbar from '../../components/Nav'
import Tags from './tags'
import Promote from './promoteTag'

const library = () => {
    const [book, setbook] = useState([
        fetch('https://shielded-caverns-34585.herokuapp.com/api/book/')
        .then(res => res.json())
        .then(data => setbook(data) )
    ])


    return (
        <div>
            <Navbar />

            {/* Notice */}
            {/* After Back-End is finish, this jsx will choose map function */}
            <div className="container mt-4 mb-5">
                <Promote />
            </div>

            {/* Category Drop */}
            {/* After Back-End is finish, this jsx will choose map function */}
            <div className="container d-flex flex-row mb-4">
                <p className="h4 mt-2 mr-2 font-weight-bold">LIBRARY </p>
                <div class="dropdown">
                    <button class="btn cat-btn dropdown-toggle" type="button" id="dropD" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        CATEGORY
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropD" style={{ backgroundColor: "#CD2424" }} >
                        <a class="dropdown-item text-white hover-select" href="#">option 1</a>
                        <a class="dropdown-item text-white hover-select" href="#">option 3</a>
                        <a class="dropdown-item text-white hover-select" href="#">option 2</a>
                    </div>
                </div>
            </div>

            {/* Book Category */}
            <div className="container">
                <Tags datas={book} />
                {/*category.map(name => (<Tags />))*/}
            </div>

            {/* footer */}
            <div className="bg-dark mt-5 p-2" style={{ height: "40px" }}  >
                <p className="text-light font-weight-lighter text-center mb-0" >@2020-20221 PALMSKY THAILAND</p>
            </div>
        </div>
    )
}


export default library
