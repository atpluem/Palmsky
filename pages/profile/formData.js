import { useState } from 'react'

const formData = () => {
    const [statusData, setStatusData] = useState(true)
    const [statusAddress, setStatusAddrees] = useState(true)

    const changeStatus = (field) => {
        if(field === "data") {
            setStatusData(!statusData)
        }
        if(field === "address") {
            setStatusAddrees(!statusAddress)
        }
    }

    const address = {
        name: "นายกฤตนัน ฉลอง",
        address: "126 ถนนประชาอุทิศ เเขวงบางมด",
        district: "เขตทุ่งครุ",
        province: "จังหวัดกรุงเทพมหานคร",
        zip: "10140"
    }


    return (
        <div className="container-fluid mt-5" style={{ width: "40%" }}>
            {/* User's data */}
            <div className="row">
                {statusData ? ( 
                    <div className="col-mr-auto">
                        <img className="mr-2" src="/pencil.png" style={{ width: "25px", height: "25px" }} onClick={() => changeStatus("data")} />
                    </div>
                ) : (<div style={{ display: "none" }}></div>)}
                <div className="col">
                    <div className="d-flex flex-column">
                        <span className="h4 my-auto">My Profile</span>
                        <span className="text-muted h6">Profile management</span>
                        <hr style={{ borderTop: "1px solid black", width: "100%" }} />
                    </div>

                    {/* User's data form */}
                    {statusData ? (
                        <div className="container mb-5 ml-3 text-muted">
                            <div className="row">
                                <span className="font-weight-bold" style={{ width: "100px" }}>NAME</span>
                                <span>Krittanan Chalong</span>
                            </div>
                            <div className="row">
                                <span className="font-weight-bold" style={{ width: "100px" }}>EMAIL</span>
                                <span>Krittananchalong@gmail.com</span>
                            </div>
                            <div className="row">
                                <span className="font-weight-bold" style={{ width: "100px" }}>PHONE</span>
                                <span>0612178257</span>
                            </div>
                            <div className="row">
                                <span className="font-weight-bold" style={{ width: "100px" }}>DATE</span>
                                <span>25/02/2543</span>
                            </div>
                            <div className="row">
                                <span className="font-weight-bold" style={{ width: "100px" }}>GENDER</span>
                                <span>Male</span>
                            </div>
                        </div>
                    ) : (
                        <form className="p-3 mb-5">
                            <div className="form-row">
                                <div className="col mb-3 ">
                                    <input type="text" className="form-control" placeholder="Krittanan" />
                                </div>
                                <div className="col mb-3 ">
                                    <input type="text" className="form-control" placeholder="Chalong" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col mb-3">
                                    <input type="text" className="form-control" placeholder="Krittananchalong@gmail.com" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col mb-3">
                                    <input type="text" className="form-control" placeholder="0612178257" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-3 mb-3">
                                    <select className="custom-select mr-sm-2">
                                        <option value="01">01</option>
                                    </select>
                                </div>
                                <div className="col-md-5 mb-3">
                                    <select className="custom-select mr-sm-2">
                                        <option value="01">01</option>
                                    </select>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <select className="custom-select mr-sm-2">
                                        <option value="01">01</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-4 mb-3">
                                    <select className="custom-select mr-sm-2">
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                            </div>
                            <div className="d-flex flex-row-reverse">
                                <button className="btn btn-primary mt-3 p-2" type="submit" style={{ backgroundColor: "#CD2424", width: "50%", border: "none" }} >Confirm</button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
            
            
            {/* User's address */}
            <div className="row">
                {statusAddress ? (
                    <div className="col-mr-auto">
                        <img src="/pencil.png" style={{ width: "25px", height: "25px" }} onClick={() => changeStatus("address")} />
                    </div>
                ) : (<div style={{ display: "none" }}></div>)}
                <div className="col">
                    <div className="d-flex flex-row">
                        <span className="mr-2" style={{ fontWeight: "bold" }}>Address</span>
                        <hr style={{ borderTop: "1px solid black", width: "100%" }} />
                    </div>
                    
                    {/* User's address form */}
                    {statusAddress ? (
                        <div className="container d-flex flex-column mb-5">
                            <div className="d-flex flex-column text-muted mt-3">
                                <span> {address.name} </span>
                                <span> {address.address} </span>
                                <span> {address.district} </span>
                                <span> {address.province} </span>
                                <span> {address.zip} </span>
                            </div>
                        </div>
                    ) : (
                        <form className="p-3 mb-5" style={{ border: ("1px solid black") }} >
                            <div className="form-row">
                                <input className="form-control" type="text" value={address.name} placeholder="Name" />
                            </div>
                            <div className="form-row">
                                <input className="form-control" type="text" value={address.address} placeholder="Address" />
                            </div>
                            <div className="form-row">
                                <input className="form-control" type="text" value={address.district} placeholder="District" />
                            </div>
                            <div className="form-row">
                                <input className="form-control" type="text" value={address.province} placeholder="Province" />
                            </div>
                            <div className="form-row">
                                <input className="form-control" type="text" value={address.zip} placeholder="Zip Code" />
                            </div>
                            <div className="d-flex flex-row-reverse">
                                <button className="btn btn-primary mt-3 p-2" type="submit" style={{ backgroundColor: "#CD2424", width: "50%", border: "none" }} >Confirm</button>
                            </div>
                        </form>
                    )}
                </div>
            </div>


            {/* Change password */}
            <div>
                <div className="d-flex flex-row">
                    <span className="mr-2" style={{ fontWeight: "bold" }}>ChangePassword</span>
                    <hr style={{ borderTop: "1px solid black", width: "100%" }} />
                </div>
                <form className="p-3">
                    <div className="form-row">
                        <input className="form-control mb-2" type="password" placeholder="Your Password" />
                    </div>
                    <div className="form-row">
                        <input className="form-control mb-2" type="password" placeholder="New Password" />
                    </div>
                    <div className="form-row">
                        <input className="form-control mb-2" type="password" placeholder="confirm Password" />
                    </div>
                    <div className="d-flex flex-row-reverse">
                        <button className="btn btn-primary mt-3 p-2" type="submit" style={{ backgroundColor: "#CD2424", width: "30%", border: "none" }} >Confirm</button>
                    </div>
                </form>
            </div>


        </div>
    )
}

export default formData