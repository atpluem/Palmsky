import React from 'react'
import Navbar from '../../components/Nav'

const headerProfile = () => {

    return (
        <div className="container-fluid pt-5" style={{ border: "1px solid black" }}>
            <div className="d-flex justify-content-center flex-row">
                <div style={{ border: "1px solid black", maxWidth: "400px" }}>
                    <img className="rounded-circle w-50" src="https://i.pinimg.com/originals/df/60/04/df6004a866c5f5a535116a1a85971d8a.jpg"  />
                </div>
                <div className="d-flex flex-column align-self-center">
                    <p className="h2">Krittanan Chalong</p>
                    <span>Krittananchalong@gmail.com</span>
                    <span>Male</span>
                </div>
            </div>

            {/* option of user */}
            <div className="d-flex justify-content-center mt-5">
               <img className="mx-4 mb-3" src="/open-book.png" style={{ width: 35, height: 35}} /> 
               <img className="mx-4 mb-3" src="/list.png" style={{ width: 35, height: 35}} /> 
               <img className="mx-4 mb-3" src="/graphic.png" style={{ width: 30, height: 30}} /> 
            </div>
        </div>
    )
}

export default headerProfile