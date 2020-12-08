import { useEffect, useState } from 'react'
import Navbar from '../../components/Nav'
import Header from './headerProfile'
import Form from './formData'
import History from './histoey'
import Store from './bookStoreUser'
import Footer from '../../components/Footer'


function userPage() {
    const [option, setoption] = useState(0)


    const changeOption = (parameter) => {
        setoption(parameter)
    }


    return (
        <div style={{ backgroundColor: "#F5F5F5" }}>
            
            <Navbar />
            <Header state={option} changeOption={changeOption} />

            { option === 0 ? (<Store />) : 
            (option === 1 ? (<History />) : 
            (<Form />))}

            <Footer />

        </div>
    )
}

export default userPage
