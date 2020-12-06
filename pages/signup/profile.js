import React from 'react'

const profile = () => {
    return (
        <div className="row justify-content-center" >
            <form className="" style={{ width: "400px" }} id="first">
                <div className="form-group">
                    <div className=" font-weight-bold" style={{ marginBottom: 10, fontSize: "2.5vh" }} >
                        Your Profile
                    </div>
                </div>
                <div className="form-group">
                    <div style={{ fontSize: "1.5vh" }} >
                        Create your account
                    </div>
                    <hr />
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" id="name" placeholder="Name" />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" id="lastname" placeholder="Last name" />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <input type="number" className="form-control" id="phoneNo" placeholder="Mobile Phone Number" />
                </div>
                <div className="form-group">
                    <div style={{ fontSize: "1.5vh" }} >
                        Date of birth
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <button className="btn dropdown-toggle" type="button" id="day" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ opacity: "70%", borderColor: "#ccc", width: "100%" }}>
                                Day
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item">1</a>
                                <a className="dropdown-item">2</a>
                                <a className="dropdown-item">3</a>
                            </div>
                        </div>
                        <div className="col">
                            <button className="btn dropdown-toggle" type="button" id="month" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ opacity: "70%", borderColor: "#ccc", width: "100%" }}>
                                Month
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item">1</a>
                                <a className="dropdown-item">2</a>
                                <a className="dropdown-item">3</a>
                            </div>
                        </div>
                        <div className="col">
                            <button className="btn dropdown-toggle" type="button" id="year" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ opacity: "70%", borderColor: "#ccc", width: "100%" }}>
                                Year
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item">1</a>
                                <a className="dropdown-item">2</a>
                                <a className="dropdown-item">3</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div style={{ fontSize: "1.5vh" }} >
                        Gender
                    </div>
                </div>
                <div className="form-group">
                    <div className="dropdown">
                        <button className="btn dropdown-toggle" type="button" id="gender" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ opacity: "70%", borderColor: "#ccc", width: "50%" }}>
                            Gender
                    </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item">Male</a>
                            <a className="dropdown-item">Female</a>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="font-weight-bold" style={{ fontSize: "1.5vh" }} >
                        Address
                    </div>
                </div>
                <div className="form-group">
                    <textarea className="form-control" id="address" placeholder="Building, road and more" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col" >
                            <div style={{ fontSize: "1.5vh", paddingBottom: 15 }} >
                                Province
                            </div>
                            <input type="text" className="form-control" id="province" placeholder="Province" />
                        </div>
                        <div className="col">
                            <div style={{ fontSize: "1.5vh", paddingBottom: 15 }} >
                                District
                            </div>
                            <input type="text" className="form-control" id="district" placeholder="District" />
                        </div>
                        <div className="w-100"></div>
                        <div className="col">
                            <div style={{ fontSize: "1.5vh", paddingBottom: 15, paddingTop: 15 }} >
                                Zipcode
                            </div>
                            <input type="number" className="form-control" id="zipcode" placeholder="Zipcode" />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-1">
                            <input type="checkbox" id="notify" name="notify" value="1" style={{ width: "15px", height: "15px", marginRight: "10px", cursor: "pointer" }} />
                        </div>
                        <div className="col">
                            <label htmlFor="notify" style={{ fontSize: 14, cursor: "pointer" }}>
                                I want to be notified about the news. Privileges and promotion from PALMSKY
                            </label>
                        </div>
                    </div>
                    <hr/>
                </div>
            </form>
        </div>

    )
}

export default profile