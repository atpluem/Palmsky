import { useEffect, useState } from 'react'
import Navbar from '../../components/Nav'
import Header from './headerProfile'
import Form from './formData'
import History from './histoey'
import Store from './bookStoreUser'


function userPage() {
    const [option, setoption] = useState(0)
    
    useEffect(() => {
        if(option === 0) {
            console.log("Form")
        }
    }, [option])

    return (
        <div style={{ backgroundColor: "#F5F5F5" }}>
            
            <Navbar />
            <Header/>
            <Form />
            <Store />
            <History />

        </div>
    )
}

export default userPage
