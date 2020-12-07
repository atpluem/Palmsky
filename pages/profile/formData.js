import React from 'react'

const formData = () => {


    return (
        <div className="container-fluid mt-5" style={{ width: "40%" }}>
            {/* User's data */}
            <div>
                <div className="d-flex flex-column">
                    <span className="h5 my-auto">My Profile</span>
                    <span className="text-muted">Profile management</span>
                    <hr style={{ borderTop: "1px solid black", width: "100%" }} />
                </div>
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
            </div>
            
            
            {/* User's address */}
            <div>
                <div className="d-flex flex-row">
                    <span className="mr-2" style={{ fontWeight: "bold" }}>Address</span>
                    <hr style={{ borderTop: "1px solid black", width: "100%" }} />
                </div>
                <form className="p-3 mb-5" >
                    <div className="form-row">
                        <textarea className="form-control" type="txet" style={{ height: "150px" }} />
                    </div>
                </form>
            </div>


            {/* Change password */}
            <div>
                <div className="d-flex flex-row">
                    <span className="mr-2" style={{ fontWeight: "bold" }}>ChangePassword</span>
                    <hr style={{ borderTop: "1px solid black", width: "100%" }} />
                </div>
                <form className="p-3">
                    <div className="form-row">
                        <input className="form-control mb-2" type="text" placeholder="Your Password" />
                    </div>
                    <div className="form-row">
                        <input className="form-control mb-2" type="text" placeholder="New Password" />
                    </div>
                    <div className="form-row">
                        <input className="form-control mb-2" type="text" placeholder="confirm Password" />
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