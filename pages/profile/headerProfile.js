import React from 'react'

const headerProfile = ({ state, changeOption }) => {

    return (
        <div className="container-fluid pt-5 shadow-sm" style={{ backgroundColor: "white" }}>
            <div className="d-flex justify-content-center flex-row">
                <div>
                    <img style={{ width: "200px", height:"200px", borderRadius: "50%", objectFit: "cover", border: "1px solid gray"}} src="https://i.pinimg.com/originals/df/60/04/df6004a866c5f5a535116a1a85971d8a.jpg"  />
                </div>
                <div className="d-flex flex-column align-self-center ml-4">
                    <p className="h2">Krittanan Chalong</p>
                    <span>Krittananchalong@gmail.com</span>
                    <span>Male</span>
                </div>
            </div>

            {/* option of user */}
            <div id="myDiv" className="d-flex justify-content-center mt-5">
               <img className={(state === 0 ? "actived" : "optionUser") + " mx-4 mb-3"} src="/open-book.png" style={{ width: 35, height: 35, cursor: "pointer"}} onClick={() => changeOption(0)} /> 
               <img className={(state === 1 ? "actived" : "optionUser") + " mx-4 mb-3"} src="/history.png" style={{ width: 35, height: 35, cursor: "pointer"}} onClick={() => changeOption(1)} /> 
               <img className={(state === 2 ? "actived" : "optionUser") + " mx-4 mb-3"} src="/graphic.png" style={{ width: 30, height: 30, cursor: "pointer"}} onClick={() => changeOption(2)} /> 
            </div>
        </div>
    )
}

export default headerProfile