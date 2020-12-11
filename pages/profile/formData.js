import { useState} from 'react'

const formData = ({ token, url, user, refresh }) => {
    const [statusData, setStatusData] = useState(true)
    const [statusAddress, setStatusAddrees] = useState(true)
    const month = ["January", "February", "March", "April", "May", "June" ,"July", "August", "September", "October", "November", "December"]
    let count = []


    const changeStatus = (field) => {
        if(field === "data") {
            setStatusData(!statusData)
        }
        if(field === "address") {
            setStatusAddrees(!statusAddress)
        }
    }

    const updateData = (type) => {
        let birth = ""
        let format = {}

        refresh()

        if( $("#day").val() != "" && $("#month").val() != "" && $("#year").val() != "" ) {
            birth = $("#year").val() + "-" + $("#month").val() + "-" + $("#day").val()
        }
        else {
            birth = user.dateOfBirth
        }
        
        if(type === "data") {
            format = {
                firstName: $("#firstName").val(),
                lastName: $("#lastName").val(),
                email: $("#email").val(),
                phone: $("#phone").val(),
                dateOfBirth : birth,
                gender: $("#gender").val()
            }
            setStatusData(!statusData)
            fetchdata("PATCH" , format)
        }
        if (type === "address") {
            format = {
                addressName: $("#name").val(),
                street: $("#street").val(),
                subDistrict: $("#subDistrict").val(),
                district: $("#district").val(),
                province: $("#province").val(),
                zipcode: $("#zip").val()
            }
            setStatusAddrees(!statusAddress)
            fetchdata("PATCH" , format)
        }
        if (type === "password") {
            let login = {
                username: user.email,
                password: $("#oldPassword").val()
            }

            
            format = {
                password: $("#newPassword").val()
            }

            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(login)
            }

            fetch(`https://shielded-caverns-34585.herokuapp.com/api/login/`, requestOptions)
            .then(res => {
                if(res.ok) {
                    $("#message").hide()
                    fetchdata("PATCH", format)
                    document.getElementById("newPassword").value=""
                    document.getElementById("oldPassword").value=""
                    document.getElementById("confirmPassword").value=""
                }
                else {
                    $("#message").show()
                }
            })
        }        
    }
    
    const fetchdata = (method, dataUpdate) => {
        const requestOptions = {
            method: method,
            headers: { "Content-Type": "application/json", "Authorization": "Token " + token },
            body: JSON.stringify(dataUpdate)
        }
    
        fetch(url, requestOptions)
    }


    const loop = (start, end) => {
        count = new Array()
        for(let i=start; i<=end; i++){
            let num = i.toString(10)
            if(num.length === 1) {
                count.push("0" + num)
            }
            else {
                count.push(num)
            }
        }
    }


    const check = () => {
        if( $("#oldPassword").val() != "" && $("#newPassword").val() != "" && $("#confirmPassword").val() != "" && $("#newPassword").val() === $("#confirmPassword").val()) {
            $("#submitNewPassword").prop("disabled", false)
        }
        else {
            $("#submitNewPassword").prop("disabled", true)
        }
        
        if( $("#newPassword").val() === $("#confirmPassword").val() ) {
            $("#message").hide()
        }
        else {
            $("#message").show()
        }
    }


    if(url !== undefined) {
        
        return (
            <div className="container-fluid mt-5" style={{ width: "40%" }}>
            {/* User's data */}
            <div className="row">
                {statusData ? ( 
                    <div className="col-mr-auto">
                        <img className="mr-2" src="/pencil.png" style={{ width: "25px", height: "25px", cursor: "pointer" }} onClick={() => changeStatus("data")} />
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
                                <span>{user.firstName} {user.lastName}</span>
                            </div>
                            <div className="row">
                                <span className="font-weight-bold" style={{ width: "100px" }}>EMAIL</span>
                                <span>{user.email}</span>
                            </div>
                            <div className="row">
                                <span className="font-weight-bold" style={{ width: "100px" }}>PHONE</span>
                                <span>{user.phone}</span>
                            </div>
                            <div className="row">
                                <span className="font-weight-bold" style={{ width: "100px" }}>DATE</span>
                                <span>{user.dateOfBirth}</span>
                            </div>
                            <div className="row">
                                <span className="font-weight-bold" style={{ width: "100px" }}>GENDER</span>
                                <span>{user.gender}</span>
                            </div>
                        </div>
                    ) : (
                        <form className="p-3 mb-5">
                            <div className="form-row">
                                <div className="col mb-3 ">
                                    <input type="text" id="firstName" className="form-control" placeholder="First Name" defaultValue={user.firstName} />
                                </div>
                                <div className="col mb-3 ">
                                    <input type="text" id="lastName" className="form-control" placeholder="Last Name" defaultValue={user.lastName} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col mb-3">
                                    <input type="text" id="email" className="form-control" placeholder="Email" defaultValue={user.email} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col mb-3">
                                    <input type="text" id="phone" className="form-control" placeholder="Phone" defaultValue={user.phone} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-3 mb-3">
                                    <select id="day" className="custom-select mr-sm-2">
                                        {loop(1,31)}                                   
                                        {count.map((item,index) => (
                                            <option value={item} key={index} >{item}</option>
                                            ))}
                                    </select>
                                </div>
                                <div className="col-md-5 mb-3">
                                    <select id="month" className="custom-select mr-sm-2">
                                        {loop(1,12)}
                                        {month.map((item, index) => (
                                            <option value={(index+1).toString(10).length === 1 ? "0" + (index+1).toString(10) : (index+1).toString(10)} key={index} >{item} </option>
                                            ))}
                                    </select>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <select id="year" className="custom-select mr-sm-2">
                                        {loop(1990, 2020)}
                                        {count.map((item, index) => (
                                            <option value={item} key={index} >{item}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-4 mb-3">
                                    <select id="gender" className="custom-select mr-sm-2" defaultValue={user.gender}>
                                        <option value="">-</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                            </div>
                            <div className="d-flex flex-row-reverse">
                                <button className="btn btn-primary mt-3 p-2" type="button" style={{ backgroundColor: "#CD2424", width: "50%", border: "none" }} onClick={() => updateData("data")} >Confirm</button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
            
            
            {/* User's address */}
            <div className="row">
                {statusAddress ? (
                    <div className="col-mr-auto">
                        <img src="/pencil.png" style={{ width: "25px", height: "25px", cursor: "pointer" }} onClick={() => changeStatus("address")} />
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
                                <span> {user.addressName} </span>
                                <span> {user.street} {user.subDistrict} </span>
                                <span> {user.district} </span>
                                <span> {user.province} </span>
                                <span> {user.zipcode} </span>
                            </div>
                        </div>
                    ) : (
                        <form className="p-4 mb-5">
                            <div className="form-row mb-2">
                                <input id="name" className="form-control" type="text" placeholder="Address" defaultValue={user.addressName} />
                            </div>
                            <div className="form-row mb-2">
                                <input id="street" className="form-control" type="text" placeholder="Street" defaultValue={user.street} />
                            </div>
                            <div className="form-row mb-2">
                                <input id="subDistrict" className="form-control" type="text" placeholder="Sub-District" defaultValue={user.subDistrict} />
                            </div>
                            <div className="form-row mb-2">
                                <input id="district" className="form-control" type="text" placeholder="District" defaultValue={user.district} />
                            </div>
                            <div className="form-row mb-2">
                                <input id="province" className="form-control" type="text" placeholder="Province" defaultValue={user.province} />
                            </div>
                            <div className="form-row mb-2">
                                <input id="zip" className="form-control" type="text" placeholder="Zip Code" defaultValue={user.zipcode} />
                            </div>
                            <div className="d-flex flex-row-reverse">
                                <button className="btn btn-primary mt-3 p-2" type="button" style={{ backgroundColor: "#CD2424", width: "50%", border: "none" }} onClick={() => updateData("address")} >Confirm</button>
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
                        <input id="oldPassword" className="form-control mb-2" type="password" placeholder="Your Password" onChange={check} />
                    </div>
                    <div className="form-row">
                        <input id="newPassword" className="form-control mb-2" type="password" placeholder="New Password" onChange={check} />
                    </div>
                    <div className="form-row">
                        <input id="confirmPassword" className="form-control mb-2" type="password" placeholder="confirm Password" onChange={check} />
                    </div>
                    <div className="form-row">
                        <span id="message" className="text-danger" style={{ display: "none" }}><small>Please check your password!</small></span>
                    </div>
                    <div className="d-flex flex-row-reverse">
                        <button id="submitNewPassword" className="btn btn-primary mt-3 p-2" type="button" style={{ backgroundColor: "#CD2424", width: "30%", border: "none" }} onClick={() => updateData("password")} >Confirm</button>
                    </div>
                </form>
            </div>


        </div>
        )
    } 
    
    else {
        return (
            <div>
                No Data
            </div>
        )
    }
}

export default formData