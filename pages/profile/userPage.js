import { useEffect, useState } from 'react'
import Navbar from '../../components/Nav'
import Header from './headerProfile'
import Form from './formData'
import History from './histoey'
import Store from './bookStoreUser'
import Footer from '../../components/Footer'


function userPage() {
    const [option, setoption] = useState(0)
    const [token, setToken] = useState("")
    const [url, setUrl] = useState([{}])

    useEffect(() => {
        if (localStorage.getItem('id') != '') {
            setToken(localStorage.getItem('id'))
        }
        if(token != "") {
            const requestOptions = {
                method: "GET",
                headers: { "Content-Type": "application/json", "Authorization": "Token " + token }
            }
            const fetchdata = async () => {
                const res = await fetch("https://shielded-caverns-34585.herokuapp.com/api/account/profile/", requestOptions)
                const data = await res.json()
                setUrl(data)
            }
            fetchdata()
        }

    }, [token])


    const changeOption = (parameter) => {
        if(url !== []) {
            setoption(parameter)
        }
    }


    return (
        <div style={{ backgroundColor: "#F5F5F5" }}>
            
            <Navbar />
            <Header state={option} changeOption={changeOption} />

            { option === 0 ? (<Store />) : 
            (option === 1 ? (<History />) : 
            (<Form token={token} url={url[0].url} />))}

            <Footer />

        </div>
    )
}

export default userPage
