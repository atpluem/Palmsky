import { useEffect, useState } from 'react'
import Navbar from '../../components/Nav'
import Header from './headerProfile'
import Form from './formData'
import History from './histoey'
import Store from './bookStoreUser'
import Footer from '../../components/Footer'
import { useRouter } from "next/router"


function userPage() {
    const [option, setoption] = useState(0)
    const [token, setToken] = useState("")
    const [url, setUrl] = useState([{}])
    const [user, setUser] = useState([])
    const [load, setStatusLoad] = useState(true)
    const router = useRouter()
    

    useEffect(() => {
        if (localStorage.getItem('id') != '') {
            setToken(localStorage.getItem('id'))
        }
        if(token != "") {
            const requestOptions = {
                method: "GET",
                headers: { "Content-Type": "application/json", "Authorization": "Token " + token }
            }

            fetch("https://shielded-caverns-34585.herokuapp.com/api/account/profile/", requestOptions)
            .then( res => res.json() )
            .then( data => {
                if(true) {
                    setUrl(data)
                    fetch(data[0].url, requestOptions)
                    .then(response => response.json())
                    .then(profile => setUser(profile))
                }
            })
            
        }

        changeOption(parseInt(router.query.option))


    }, [token, router, load])


    const changeOption = (parameter) => {
        if(url !== undefined) {
            setoption(parameter)
        }
    }

    const refresh = () => {
        setStatusLoad(!load)
    }


    return (
        <div style={{ backgroundColor: "#F5F5F5" }}>
            
            <Navbar />
            <Header user={user} state={option} changeOption={changeOption} />

            { option === 0 ? (<Store />) : 
            (option === 1 ? (<History />) : 
            (<Form token={token} url={url[0].url} user={user} refresh={refresh} />))}

            <Footer />

        </div>
    )
}

export default userPage
