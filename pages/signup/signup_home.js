import Profile from './profile';
import Category from './selectCategory';
export default function singup_home() {

    return <div>
        <div>
            <div className="container" >
                <div className="parent-div d-flex justify-content-center   " style={{ width: "100%", height: "90vh" }}>
                    <div style={{ width: "80%" }}>
                        <div className="row">
                            <div className="col ">
                                Stepper progress bar
                            </div>
                        </div>
                        <div className="row justify-content-center" >
                            <form className="" style={{ width: "400px" }} >
                                <div className="form-group">
                                    <div className=" font-weight-bold" style={{ marginBottom: 10, fontSize: "2.5vh" }} >
                                        Sign Up
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div style={{ fontSize: "1.5vh" }} >
                                        Register new account
                                    </div>
                                    <hr />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" id="email" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" id="password" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" id="confpassword" placeholder="Confirm Password" />
                                    <hr />
                                </div>
                            </form>
                        </div>
                        <Profile />
                        <Category/>

                        <div className="row justify-content-center ">
                            <form className="row" style={{ width: "400px" }}>
                                <div className="col " >
                                    <button type="button" className="btn btn-outline-dark font-weight-bold" style={{ fontSize: 22, width: "100%" }} id="cancelbutton">
                                        Cancel
                                    </button>
                                    <button type="button " className="btn btn-outline-dark font-weight-bold" style={{ fontSize: 22, width: "100%", display: "none" }} id="backbutton">
                                        Back
                                    </button>
                                </div>
                                <div className="col ">
                                    <button type="button" className="btn btn-danger font-weight-bold" style={{ backgroundColor: "#AF0000", fontSize: 22, width: "100%" }} id="next" >
                                        Next
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}